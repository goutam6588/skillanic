# Skillanic website + Sanity CMS

This Vite/React site treats its existing hardcoded content as the permanent
fallback layer. Published Sanity content is an optional override:

1. A valid Sanity field wins.
2. A missing, blank, `null`, or empty field keeps the existing value.
3. A non-empty Sanity collection replaces the default collection, while
   matching records still inherit any missing fields from their defaults.
4. Missing environment variables, empty queries, unpublished documents, and
   request failures render the existing site immediately.

## Frontend setup

Copy `.env.example` to `.env.local` and fill in the public project details:

```env
VITE_SANITY_PROJECT_ID=your-project-id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2025-02-19
```

No private token belongs in the frontend. Configure the deployed website and
local development origins in the Sanity project's CORS settings. If the
variables are omitted, the CMS client is disabled and the website behaves as
it did before the integration.

```bash
npm install
npm run dev
```

## Sanity Studio

The Studio lives in `sanity-studio/`. It contains singletons for site settings
and page content, plus collections for courses, trainers, FAQs, and a grouped
**Testimonials & stories** area. That area has separate collections for video
testimonials, alumni testimonials, and placement success stories, each with
only the fields relevant to that content type. No blog schema is included
because the current site has no blog route or article UI.

The **Gallery page** singleton controls its hero copy, category filters,
gallery images, image alt text, and CTA. If it is missing or has no usable
published images, the existing hardcoded gallery remains visible. If images
are added without a category list, the website derives the filters from those
images; the **ALL** filter is always added automatically.

The **Careers page** singleton controls the hero, job-section headings, values,
CTA, and SEO. Published documents in **Job openings** replace the hardcoded job
cards and also generate the page's `JobPosting` structured data. Missing or
invalid page fields are merged with the existing website copy, while an empty
or unusable job collection keeps the current hardcoded openings. The existing
application modal and Web3Forms submission flow are unchanged.

```bash
copy sanity-studio\.env.example sanity-studio\.env
npm run studio:install
npm run studio:dev
```

Set `SANITY_STUDIO_PROJECT_ID` in `sanity-studio/.env`. Use the existing
numeric website course ID in a course's **Website course ID** field to get
field-level fallback for that course. Only published documents are queried by
the website.

## Verification

```bash
npm run test:content
npm run build
npm run lint
```

The content tests cover complete fallback, partial objects, blank fields,
empty collections, boolean/number values, and course record merging.


