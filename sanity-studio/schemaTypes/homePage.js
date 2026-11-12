import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField, longTextField, textField } from "./shared";

const metricFields = [textField("value", "Value"), textField("label", "Label")];

export const homePage = defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        textField("badge", "Badge"),
        textField("heading", "Heading"),
        longTextField("description", "Description"),
        defineField({ name: "buttons", title: "Buttons", type: "object", fields: [textField("primary", "Primary text"), textField("secondary", "Secondary text")] }),
        // defineField({
        //   name: "stats",
        //   title: "Statistics",
        //   type: "object",
        //   fields: [
        //     textField("studentsPlaced", "Students placed"),
        //     defineField({ name: "hiringSupport", title: "Hiring support", type: "object", fields: metricFields }),
        //     defineField({ name: "rating", title: "Rating", type: "object", fields: metricFields }),
        //   ],
        // }),
        // defineField({
        //   name: "floatingCards",
        //   title: "Floating cards",
        //   type: "object",
        //   fields: [
        //     defineField({ name: "courses", title: "Courses", type: "object", fields: metricFields }),
        //     defineField({ name: "placement", title: "Placement", type: "object", fields: metricFields }),
        //   ],
        // }),
        imageField("image", "Hero image"),
        textField("imageAlt", "Hero image alt text"),
      ],
    }),
    defineField({
      name: "trustedCompanies",
      title: "Trusted companies",
      type: "object",
      fields: [
        textField("title", "Heading"),
        defineField({
          name: "logos",
          title: "Company logos",
          type: "array",
          of: [defineArrayMember({ type: "object", fields: [defineField({ name: "legacyId", title: "Fallback ID", type: "number" }), textField("name", "Company name"), imageField("logo", "Logo")] })],
        }),
      ],
    }),
    defineField({
      name: "corporateTraining",
      title: "Corporate training",
      type: "object",
      fields: [
        textField("title", "Title"),
        longTextField("description1", "Description 1"),
        longTextField("description2", "Description 2"),
        textField("buttonText", "Button text"),
        // textField("buttonUrl", "Button URL"),
        imageField("image", "Image", {
          description: "Recommended size: 896 × 1200 px (3:4 ratio, minimum 448 × 600 px)",
        }),
        textField("imageAlt", "Image alt text"),
      ],
    }),

    // defineField({ name: "statistics", title: "Statistics", type: "array", of: [defineArrayMember({ type: "object", fields: [textField("metric", "Metric"), textField("label", "Label")] })] }),

    // defineField({ name: "coursesSection", title: "Courses section", type: "object", fields: [textField("title", "Title"), longTextField("subtitle", "Subtitle")] }), //, textField("buttonText", "Button text")
    defineField({
      name: "whyChoose",
      title: "Why choose us",
      type: "object",
      fields: [
        textField("title", "Title"),
        longTextField("subtitle", "Subtitle"),
        defineField({
          name: "features",
          title: "Features",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                textField("title", "Title", { initialValue: "Industry Expert Trainers" }),
                longTextField("description", "Description", {
                  initialValue: "Every trainer brings 15+ years of hands-on industry experience. You learn directly from professionals.",
                }),
                textField("benefit", "Benefit", { initialValue: "15+ Years Experience" }),
              ],
            }),
          ],
        }),
      ],
    }),
    // defineField({
    //   name: "story",
    //   title: "Our story",
    //   type: "object",
    //   fields: [imageField("image", "Image"), textField("imageAlt", "Image alt text"), textField("title", "Title"), longTextField("mission", "Mission"), longTextField("vision", "Vision"), defineField({ name: "paragraphs", title: "Paragraphs", type: "array", of: [{ type: "text" }] }), textField("foundedLabel", "Founded label"), textField("foundedLocation", "Founded location"), textField("foundedYear", "Founded year")],
    // }),
    // defineField({ name: "featureHighlights", title: "Feature highlights", type: "array", of: [defineArrayMember({ type: "object", fields: [textField("title", "Title"), textField("subtitle", "Subtitle")] })] }),
    // defineField({ name: "faq", title: "FAQ heading", type: "object", fields: [textField("title", "Title"), longTextField("subtitle", "Subtitle")] }),
    // defineField({ name: "cta", title: "Call to action", type: "object", fields: [textField("title", "Title"), longTextField("description", "Description"), textField("buttonText", "Button text"), imageField("image", "Image")] }),
    defineField({
      name: "offerModal",
      title: "Get Offer Modal",
      type: "object",
      fields: [
        imageField("image", "Modal Image", {
          description: "Recommended size: 824 × 1040 px (4:5 ratio, minimum 412 × 520 px)",
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Home page" }) },
});

