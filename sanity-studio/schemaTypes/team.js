import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField, longTextField, textField } from "./shared";

export const teamPage = defineType({
  name: "teamPage",
  title: "Team page",
  type: "document",
  fields: [
    textField("badge", "Badge"),
    textField("title1", "Title line 1"),
    textField("title2", "Title line 2"),
    defineField({ name: "teamImages", title: "Team images", type: "array", of: [defineArrayMember({ type: "object", fields: [imageField("image", "Image"), textField("alt", "Alt text")] })] }),
    defineField({
      name: "founder",
      title: "Founder",
      type: "object",
      fields: [textField("name", "Name"), textField("role", "Role"), imageField("image", "Image"), longTextField("description", "Description"), textField("linkedin", "LinkedIn URL")],
    }),
    defineField({ name: "mentorsHeading", title: "Mentors section", type: "object", fields: [textField("title", "Title"), longTextField("description", "Description")] }),//, textField("buttonText", "Button text")
    defineField({ name: "valuesHeading", title: "Values heading", type: "object", fields: [textField("title", "Title"), longTextField("subtitle", "Subtitle")] }),
    defineField({ name: "values", title: "Team benefits", type: "array", of: [defineArrayMember({ type: "object", fields: [textField("title", "Title"), longTextField("description", "Description")] })] }),
  ],
  preview: { prepare: () => ({ title: "Team page" }) },
});

export const trainer = defineType({
  name: "trainer",
  title: "Trainer",
  type: "document",
  fields: [
    // defineField({ name: "legacyId", title: "Fallback ID", type: "string" }),
    defineField({ name: "order", title: "Display order", type: "number" }),
    textField("name", "Name", { validation: (Rule) => Rule.required() }),
    textField("role", "Role"),
    imageField("image", "Photo"),
    textField("linkedinUrl", "LinkedIn URL"),
    // longTextField("bio", "Biography"),
  ],
  preview: { select: { title: "name", subtitle: "role", media: "image" } },
});

