import { defineArrayMember, defineField } from "sanity";

export const textField = (name, title, options = {}) =>
  defineField({ name, title, type: "string", ...options });

export const longTextField = (name, title, options = {}) =>
  defineField({ name, title, type: "text", rows: 4, ...options });

export const imageField = (name, title, options = {}) =>
  defineField({ name, title, type: "image", options: { hotspot: true }, ...options });

export const linkArray = (name, title) =>
  defineField({
    name,
    title,
    type: "array",
    of: [
      defineArrayMember({
        type: "object",
        fields: [
          textField("label", "Label", { validation: (Rule) => Rule.required() }),
          textField("path", "Path or URL", { validation: (Rule) => Rule.required() }),
        ],
        preview: { select: { title: "label", subtitle: "path" } },
      }),
    ],
  });

export const seoFields = defineField({
  name: "seo",
  title: "SEO",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    textField("title", "Page title"),
    longTextField("description", "Meta description"),
    imageField("image", "Social sharing image"),
  ],
});

