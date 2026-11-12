import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes, singletonTypes } from "./schemaTypes";

const singletonItem = (S, type, title) =>
  S.listItem()
    .title(title)
    .id(type)
    .child(S.document().schemaType(type).documentId(type));

export default defineConfig({
  name: "skillanic",
  title: "Skillanic Content Studio",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // singletonItem(S, "siteSettings", "Site settings"),
            singletonItem(S, "homePage", "Home page"),
            singletonItem(S, "coursesPage", "Courses page"),
            singletonItem(S, "aboutPage", "About page"),
            singletonItem(S, "teamPage", "Team page"),
            singletonItem(S, "testimonialsPage", "Testimonials page"),
            singletonItem(S, "contactPage", "Contact page"),
            singletonItem(S, "galleryPage", "Gallery page"),
            singletonItem(S, "careersPage", "Careers page"),
            S.divider(),
            S.divider(),
            S.divider(),
            S.divider(),
            S.divider(),
            S.divider(),
            S.documentTypeListItem("course").title("Courses"),
            S.documentTypeListItem("jobOpening").title("Job openings"),
            S.documentTypeListItem("trainer").title("Mentors"),
            S.listItem()
              .title("Testimonials & stories")
              .child(
                S.list()
                  .title("Testimonials & stories")
                  .items([
                    S.documentTypeListItem("videoTestimonial").title(
                      "Video testimonials",
                    ),
                    S.documentTypeListItem("alumniTestimonial").title(
                      "Alumni testimonials",
                    ),
                    S.documentTypeListItem("placementSuccessStory").title(
                      "Placement success stories",
                    ),
                  ]),
              ),
            S.documentTypeListItem("faq").title("FAQs"),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(
        ({ schemaType }) =>
          !singletonTypes.has(schemaType) && schemaType !== "testimonial",
      ),
  },
  document: {
    actions: (actions, { schemaType }) =>
      singletonTypes.has(schemaType)
        ? actions.filter(({ action }) => action !== "duplicate")
        : actions,
  },
});
