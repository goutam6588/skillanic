import { defineField, defineType } from "sanity";
import { imageField, longTextField, textField } from "./shared";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [textField("badge", "Badge"), textField("title1", "Title line 1"), textField("title2", "Title line 2"), longTextField("description", "Description"), textField("buttonText", "Button text")],
    }),
    defineField({
      name: "contactCard",
      title: "Contact card",
      type: "object",
      fields: [longTextField("address", "Address"), textField("email", "Email"), textField("phone", "Phone")], //imageField("image", "Image"),
    }),
    longTextField("mapUrl", "Map URL / Embed Code", {
      description: "Paste Google Maps embed URL (https://www.google.com/maps/embed?...) or full <iframe> code snippet."
    }),
  ],
  preview: { prepare: () => ({ title: "Contact page" }) },
});

