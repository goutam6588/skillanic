import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField, longTextField, textField } from "./shared";

const statement = (name, title) =>
  defineField({ name, title, type: "object", fields: [textField("title", "Title"), longTextField("description", "Description")] });

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        textField("badge", "Badge"),
        textField("title", "Title"),
        longTextField("description", "Description"),
        // defineField({
        //   name: "cards",
        //   title: "Image cards",
        //   type: "array",
        //   of: [defineArrayMember({ type: "object", fields: [imageField("image", "Image"), textField("alt", "Alt text"), textField("label", "Label")] })],
        // }),
      ],
    }),
    defineField({ name: "visionMission", title: "Vision and mission", type: "object", fields: [statement("mission", "Mission"), statement("vision", "Vision")] }),
    defineField({
      name: "whyChoose",
      title: "Why choose Skillanic",
      type: "object",
      fields: [
        textField("titleLine1", "Title line 1"),
        textField("titleLine2", "Title line 2"),
        longTextField("description", "Description"),
        defineField({ name: "benefits", title: "Benefits", type: "array", of: [{ type: "string" }] }),
        // imageField("image", "Image"),
        // textField("imageAlt", "Image alt text"),
        textField("buttonText", "Button text"),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "About page" }) },
});

