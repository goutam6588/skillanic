import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField, linkArray, longTextField, seoFields, textField } from "./shared";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    imageField("logo", "Navigation logo"),
    textField("logoAlt", "Navigation logo alt text"),
    imageField("footerLogo", "Footer logo"),
    textField("footerLogoAlt", "Footer logo alt text"),
    linkArray("navigationLinks", "Navigation links"),
    textField("navigationCta", "Navigation CTA text"),
    longTextField("description", "Footer description"),
    textField("mapUrl", "Google Maps URL"),
    textField("mapLabel", "Map link label"),
    defineField({ name: "featuredCourses", title: "Featured course names", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "contact",
      title: "Contact details",
      type: "object",
      fields: [
        longTextField("address", "Address"),
        textField("phone", "Phone"),
        textField("email", "Email"),
        textField("website", "Website"),
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            textField("platform", "Platform"),
            textField("label", "Accessible label"),
            textField("href", "URL"),
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        }),
      ],
    }),
    textField("copyrightEntity", "Copyright entity"),
    seoFields,
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});

