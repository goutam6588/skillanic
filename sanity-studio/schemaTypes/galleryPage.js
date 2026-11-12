import { defineArrayMember, defineField, defineType } from "sanity";
import { GalleryCategoryInput } from "../components/GalleryCategoryInput";
import { imageField, longTextField, textField } from "./shared";

export const galleryPage = defineType({
  name: "galleryPage",
  title: "Gallery page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        textField("badge", "Badge"),
        textField("title1", "Title line 1"),
        textField("title2", "Title line 2"),
        longTextField("description", "Description"),
      ],
    }),
    defineField({
      name: "categories",
      title: "Filter categories",
      description:
        'Add categories here first. Each Gallery image category dropdown uses this list. The website adds the "ALL" filter automatically.',
      type: "array",
      of: [
        defineArrayMember({
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: "items",
      title: "Gallery images",
      description:
        "When one or more valid published images exist here, they replace the website's default gallery images.",
      type: "array",
      of: [
        defineArrayMember({
          name: "galleryItem",
          title: "Gallery image",
          type: "object",
          fields: [
            textField("category", "Category", {
              description:
                "Choose a category from Filter categories above.",
              components: { input: GalleryCategoryInput },
              options: { layout: "dropdown" },
              validation: (Rule) =>
                Rule.required().custom((value, context) => {
                  if (!value) return true;

                  const categories = context.document?.categories;
                  return Array.isArray(categories) && categories.includes(value)
                    ? true
                    : "Choose a category from Filter categories above.";
                }),
            }),
            imageField("image", "Image", {
              validation: (Rule) => Rule.required(),
            }),
            textField("alt", "Alternative text", {
              description:
                "Describe the image for visitors who use screen readers.",
            }),
          ],
          preview: {
            select: {
              title: "alt",
              subtitle: "category",
              media: "image",
            },
            prepare: ({ title, subtitle, media }) => ({
              title: title || subtitle || "Gallery image",
              subtitle,
              media,
            }),
          },
        }),
      ],
    }),
    // defineField({
    //   name: "cta",
    //   title: "Call to action",
    //   type: "object",
    //   fields: [
    //     textField("title", "Title"),
    //     longTextField("description", "Description"),
    //     textField("buttonText", "Button text"),
    //   ],
    // }),
  ],
  preview: { prepare: () => ({ title: "Gallery page" }) },
});
