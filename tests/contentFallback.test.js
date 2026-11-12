import test from "node:test";
import assert from "node:assert/strict";
import {
  hasContent,
  mergeCollectionWithFallback,
  mergeWithFallback,
} from "../src/content/fallback/mergeContent.js";
import {
  isRenderableCareerJob,
  isRenderableGalleryItem,
  isRenderableStructuredCareerJob,
} from "../src/content/validators.js";

test("empty CMS values are not considered usable content", () => {
  assert.equal(hasContent(null), false);
  assert.equal(hasContent(undefined), false);
  assert.equal(hasContent("   "), false);
  assert.equal(hasContent([]), false);
  assert.equal(hasContent({ title: " " }), false);
  assert.equal(hasContent(0), true);
  assert.equal(hasContent(false), true);
});

test("partial Sanity objects preserve field-level defaults", () => {
  const defaults = {
    title: "Default title",
    description: "Default description",
    enabled: true,
    image: "default.jpg",
  };

  assert.deepEqual(
    mergeWithFallback(defaults, {
      title: "Sanity title",
      description: " ",
      enabled: false,
      image: null,
    }),
    {
      title: "Sanity title",
      description: "Default description",
      enabled: false,
      image: "default.jpg",
    },
  );
});

test("empty arrays retain the complete default section", () => {
  const defaults = [{ title: "One" }, { title: "Two" }];
  assert.strictEqual(mergeWithFallback(defaults, []), defaults);
  assert.strictEqual(mergeCollectionWithFallback(defaults, null), defaults);
});

test("nested array items receive field-level fallback by position", () => {
  const defaults = [
    { title: "Default one", description: "Description one" },
    { title: "Default two", description: "Description two" },
  ];

  assert.deepEqual(mergeWithFallback(defaults, [{ title: "CMS one" }]), [
    { title: "CMS one", description: "Description one" },
  ]);
});

test("CMS collections replace defaults but matching records keep missing fields", () => {
  const defaults = [
    { id: 1, title: "Default course", description: "Default description" },
    { id: 2, title: "Second course", description: "Second description" },
  ];

  assert.deepEqual(
    mergeCollectionWithFallback(
      defaults,
      [{ id: 1, title: "Sanity course", description: "" }],
      { matchBy: ["id"], fallbackByIndex: false },
    ),
    [{ id: 1, title: "Sanity course", description: "Default description" }],
  );
});

test("an unusable CMS collection falls back to the complete default collection", () => {
  const defaults = [{ id: 1, title: "Default course" }];
  const resolved = mergeCollectionWithFallback(
    defaults,
    [{ id: 99, title: "" }],
    {
      matchBy: ["id"],
      fallbackByIndex: false,
      isValidItem: (item) => Boolean(item?.title?.trim()),
    },
  );

  assert.strictEqual(resolved, defaults);
});

test("gallery content only replaces defaults when an item can render", () => {
  const defaults = [
    { id: 1, category: "Events", img: "default-event.jpg" },
  ];

  const invalidResult = mergeCollectionWithFallback(
    defaults,
    [{ id: "cms-1", category: "Events", img: "" }],
    {
      matchBy: ["id"],
      fallbackByIndex: false,
      isValidItem: isRenderableGalleryItem,
    },
  );
  assert.strictEqual(invalidResult, defaults);

  assert.deepEqual(
    mergeCollectionWithFallback(
      defaults,
      [
        {
          id: "cms-2",
          category: "Workshops",
          img: "sanity-workshop.jpg",
          alt: "Students taking part in a workshop",
        },
      ],
      {
        matchBy: ["id"],
        fallbackByIndex: false,
        isValidItem: isRenderableGalleryItem,
      },
    ),
    [
      {
        id: "cms-2",
        category: "Workshops",
        img: "sanity-workshop.jpg",
        alt: "Students taking part in a workshop",
      },
    ],
  );
});

test("career jobs fall back unless a CMS job can render and produce job SEO", () => {
  const defaults = [
    {
      id: "default-job",
      title: "Default role",
      company: "Skillanic",
      description: "Default description",
    },
  ];
  const invalidResult = mergeCollectionWithFallback(
    defaults,
    [{ id: "cms-job", title: "Incomplete CMS role" }],
    {
      matchBy: ["id"],
      fallbackByIndex: false,
      isValidItem: isRenderableCareerJob,
    },
  );

  assert.strictEqual(invalidResult, defaults);

  const validJob = {
    id: "cms-job",
    title: "React trainer",
    company: "Skillanic Technologies",
    description: "Teach production React skills.",
    datePosted: "2026-08-26",
    validThrough: "2026-09-30",
    employmentType: "FULL_TIME",
    slug: "react-trainer",
  };

  assert.equal(isRenderableCareerJob(validJob), true);
  assert.equal(isRenderableStructuredCareerJob(validJob), true);
  assert.deepEqual(
    mergeCollectionWithFallback(defaults, [validJob], {
      matchBy: ["id"],
      fallbackByIndex: false,
      isValidItem: isRenderableCareerJob,
    }),
    [validJob],
  );
});
