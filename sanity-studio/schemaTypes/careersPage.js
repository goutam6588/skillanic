import { defineArrayMember, defineField, defineType } from "sanity";
import { longTextField, seoFields, textField } from "./shared";

export const careersPage = defineType({
  name: "careersPage",
  title: "Careers page",
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
        textField("buttonText", "Button text"),
      ],
    }),
    // defineField({
    //   name: "jobsSection",
    //   title: "Job openings section",
    //   type: "object",
    //   fields: [
    //     textField("title", "Title"),
    //     longTextField("subtitle", "Description"),
    //     // textField("applyButtonText", "Apply button text"),
    //   ],
    // }),
    // defineField({
    //   name: "valuesSection",
    //   title: "Values section",
    //   type: "object",
    //   fields: [
    //     textField("title", "Title"),
    //     longTextField("subtitle", "Description"),
    //     defineField({
    //       name: "items",
    //       title: "Values",
    //       type: "array",
    //       of: [
    //         defineArrayMember({
    //           name: "careerValue",
    //           title: "Value",
    //           type: "object",
    //           fields: [
    //             textField("title", "Title", {
    //               validation: (Rule) => Rule.required(),
    //             }),
    //             longTextField("description", "Description", {
    //               validation: (Rule) => Rule.required(),
    //             }),
    //           ],
    //           preview: {
    //             select: { title: "title", subtitle: "description" },
    //           },
    //         }),
    //       ],
    //     }),
    //   ],
    // }),
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
    // seoFields,
  ],
  preview: { prepare: () => ({ title: "Careers page" }) },
});

export const jobOpening = defineType({
  name: "jobOpening",
  title: "Job opening",
  type: "document",
  fields: [
    textField("title", "Job title", {
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: "slug",
    //   title: "URL slug",
    //   type: "slug",
    //   options: { source: "title", maxLength: 96 },
    //   validation: (Rule) => Rule.required(),
    // }),
    textField("company", "Company", {
      initialValue: "Skillanic Technologies",
      validation: (Rule) => Rule.required(),
    }),
    longTextField("description", "Description", {
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: "highlights",
    //   title: "Highlights",
    //   type: "array",
    //   of: [defineArrayMember({ type: "string" })],
    // }),
    // defineField({
    //   name: "datePosted",
    //   title: "Date posted",
    //   type: "date",
    //   validation: (Rule) => Rule.required(),
    // }),
    // defineField({
    //   name: "validThrough",
    //   title: "Application deadline",
    //   type: "date",
    //   validation: (Rule) =>
    //     Rule.required().custom((value, context) => {
    //       const datePosted = context.parent?.datePosted;
    //       return !value || !datePosted || value >= datePosted
    //         ? true
    //         : "Application deadline must be on or after the posted date.";
    //     }),
    // }),
    // textField("employmentType", "Employment type", {
    //   initialValue: "FULL_TIME",
    //   options: {
    //     layout: "dropdown",
    //     list: [
    //       { title: "Full time", value: "FULL_TIME" },
    //       { title: "Part time", value: "PART_TIME" },
    //       { title: "Contractor", value: "CONTRACTOR" },
    //       { title: "Temporary", value: "TEMPORARY" },
    //       { title: "Intern", value: "INTERN" },
    //       { title: "Volunteer", value: "VOLUNTEER" },
    //       { title: "Per diem", value: "PER_DIEM" },
    //       { title: "Other", value: "OTHER" },
    //     ],
    //   },
    //   validation: (Rule) => Rule.required(),
    // }),
    // defineField({
    //   name: "order",
    //   title: "Display order",
    //   type: "number",
    //   validation: (Rule) => Rule.integer().min(0),
    // }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "displayOrder",
      by: [
        { field: "order", direction: "asc" },
        { field: "datePosted", direction: "desc" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      company: "company",
      datePosted: "datePosted",
    },
    prepare: ({ title, company, datePosted }) => ({
      title: title || "Untitled job opening",
      subtitle: [company, datePosted].filter(Boolean).join(" · "),
    }),
  },
});
