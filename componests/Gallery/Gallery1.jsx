import { useMemo, useState } from "react";
import Container from "../common/layout/Container";
import Xection from "../common/layout/Xection";
import { BodyText, HeroTitle } from "../ui/Typography";
import { AchievementBadge } from "../achievement-badge";
import {
  GALLERY_CATEGORY_DEFAULTS,
  GALLERY_HERO_DEFAULTS,
  GALLERY_ITEM_DEFAULTS,
} from "../../src/content/fallback/galleryContent";
import { isRenderableGalleryItem } from "../../src/content/validators";
import { useSanityContent } from "../../src/hooks/useSanityContent";

const ALL_CATEGORIES = "ALL";

const uniqueCategories = (values) => {
  const seen = new Set();

  return values.reduce((categories, value) => {
    if (typeof value !== "string") return categories;

    const category = value.trim();
    const key = category.toLocaleLowerCase();
    if (!category || key === ALL_CATEGORIES.toLocaleLowerCase() || seen.has(key)) {
      return categories;
    }

    seen.add(key);
    categories.push(category);
    return categories;
  }, []);
};

export function Gallery1() {
  const { value: hero } = useSanityContent(
    "galleryPage.hero",
    GALLERY_HERO_DEFAULTS,
  );
  const {
    value: configuredCategories,
    hasSanityContent: hasSanityCategories,
  } = useSanityContent(
    "galleryPage.categories",
    GALLERY_CATEGORY_DEFAULTS,
  );
  const { value: galleryItems, hasSanityContent: hasSanityItems } =
    useSanityContent("galleryPage.items", GALLERY_ITEM_DEFAULTS, {
      collection: true,
      matchBy: ["id"],
      fallbackByIndex: false,
      isValidItem: isRenderableGalleryItem,
    });

  const categories = useMemo(() => {
    const categorySource =
      !hasSanityCategories && hasSanityItems
        ? galleryItems.map((item) => item.category)
        : configuredCategories;
    const itemCategories = galleryItems.map((item) => item.category);

    return [
      ALL_CATEGORIES,
      ...uniqueCategories([...categorySource, ...itemCategories]),
    ];
  }, [configuredCategories, galleryItems, hasSanityCategories, hasSanityItems]);

  const [activeTab, setActiveTab] = useState(ALL_CATEGORIES);
  const resolvedActiveTab = categories.includes(activeTab)
    ? activeTab
    : ALL_CATEGORIES;

  const filteredItems =
    resolvedActiveTab === ALL_CATEGORIES
      ? galleryItems
      : galleryItems.filter((item) => item.category === resolvedActiveTab);

  return (
    <div>
      <div className="relative overflow-hidden lg:min-h-screen lg:flex ">
        {/* Vertical Lines */}
        <div
          className="
              absolute inset-0
              bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px)]
              bg-[size:85px_85px]
            "
        />

        {/* Horizontal Lines */}
        <div
          className="
              absolute inset-0
              bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]
              bg-[size:85px_85px]
            "
        />
        <Container size="default" padding="default">
          <Xection spacing="tight">
            <div className="relative lg:h-screen mx-auto flex flex-col items-center text-center py-24">
              {/* Badge */}
              <div className="mb-8 flex justify-center">
                <AchievementBadge text={hero.badge} />
              </div>

              {/* Heading */}
              <HeroTitle className="!text-center">
                {hero.title1}
                <br />
                {hero.title2}
              </HeroTitle>

              {/* Description */}
              <BodyText className="mt-3 max-w-[800px] mx-auto !text-center text-gray-600">
                {hero.description}
              </BodyText>

              {/* Categories */}
              <div className="absolute bottom-[1vh] sm:bottom-[10vh] lg:bottom-[12vh] left-1/2 -translate-x-1/2 w-full flex justify-center px-2 sm:px-4">
                <div className="flex w-full max-w-xs sm:max-w-4xl items-center gap-2 overflow-x-auto rounded-2xl border border-gray-100 bg-white p-1 sm:p-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                  {categories.map((tab) => (
                    <button
                      key={tab}
                      onClick={(e) => {
                        setActiveTab(tab);
                        e.currentTarget.scrollIntoView({
                          behavior: "smooth",
                          inline: "center",
                          block: "nearest",
                        });
                      }}
                      className={`whitespace-nowrap rounded-xl px-4 py-3 text-sm sm:px-6 sm:py-3 sm:text-sm font-medium transition-all duration-300
                        ${resolvedActiveTab === tab
                          ? "bg-[#003B73] text-white shadow-md"
                          : "text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Xection>
        </Container>
      </div>
      <Xection spacing="none" id="gallery-grid" className="mt-14 sm:mt-8 md:mt-10 lg:mt-0 xl:mt-0">
        <Container size="default" padding="default">
          {/* Gallery Grid */}
          <div className=" grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl bg-gray-100 shadow-sm transition-all duration-500  hover:shadow-xl"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.alt || item.category}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Category Label */}
                <div className="absolute bottom-5 left-5 translate-y-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#003B73] shadow-lg">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Xection>
    </div>
  );
}
