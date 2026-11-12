import { defineField, defineType } from "sanity";
import { imageField, longTextField, textField } from "./shared";

export const testimonialsPage = defineType({
  name: "testimonialsPage",
  title: "Testimonials page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        textField("badge", "Badge"),
        defineField({ name: "title", title: "Title", type: "object", fields: [textField("line1", "Line 1"), textField("line2", "Line 2")] }),
        longTextField("description", "Description"),
        defineField({ name: "metrics", title: "Metrics", type: "array", of: [{ type: "object", fields: [textField("label", "Label")] }] }),
      ],
    }),
    defineField({
      name: "comparison",
      title: "Before and after comparison",
      type: "object",
      fields: [textField("title", "Title"), longTextField("subtitle", "Subtitle"), defineField({ name: "beforeItems", title: "Before joining", type: "array", of: [{ type: "string" }] }), defineField({ name: "afterItems", title: "After joining", type: "array", of: [{ type: "string" }] })],
    }),
  ],
  preview: { prepare: () => ({ title: "Testimonials page" }) },
});

export const testimonial = defineType({
  name: "testimonial",
  title: "Legacy testimonial or success story",
  type: "document",
  fields: [
    // defineField({ name: "legacyId", title: "Fallback ID", type: "string" }),
    defineField({ name: "kind", title: "Content kind", type: "string", options: { list: [{ title: "Written alumni testimonial", value: "alumni" }, { title: "Video testimonial", value: "video" }, { title: "Placement success story", value: "placement" }] }, initialValue: "alumni", validation: (Rule) => Rule.required() }),
    textField("name", "Student name", { initialValue: "Alex Johnson", validation: (Rule) => Rule.required() }),
    textField("role", "Course or role", { initialValue: "Full Stack Development" }),
    imageField("image", "Student image"),
    imageField("homeImage", "Home page student image (optional)"),
    longTextField("quote", "Quote", { initialValue: "This course completely transformed my career. The hands-on projects and mentorship helped me land my dream job within months of completing the program." }),
    defineField({ name: "rating", title: "Rating", type: "number", initialValue: 5, validation: (Rule) => Rule.min(1).max(5) }),
    textField("videoUrl", "YouTube video URL", { initialValue: "https://www.youtube.com/watch?v=example" }),
    textField("salary", "Salary or package", { initialValue: "8 LPA" }),
    textField("company", "Company", { initialValue: "Tech Solutions Pvt. Ltd." }),
    imageField("companyLogo", "Company logo (optional)"),
  ],
  preview: { select: { title: "name", subtitle: "kind", media: "image" } },
});

const requiredText = (name, title, options = {}) =>
  textField(name, title, {
    validation: (Rule) => Rule.required(),
    ...options,
  });

const requiredImage = (title) =>
  imageField("image", title, {
    validation: (Rule) => Rule.required(),
  });

export const alumniTestimonial = defineType({
  name: "alumniTestimonial",
  title: "Alumni testimonial",
  type: "document",
  fields: [
    requiredText("name", "Alumni name", { initialValue: "Alex Johnson" }),
    requiredText("role", "Course or current role", { initialValue: "Full Stack Developer" }),
    imageField("image", "Alumni image", { validation: (Rule) => Rule.required() }),
    longTextField("quote", "Testimonial", {
      initialValue: "This course completely transformed my career. The hands-on projects and expert mentorship helped me land my dream job within months of completing the program.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      initialValue: 5,
      validation: (Rule) => Rule.required().integer().min(1).max(5),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "image" },
  },
});

export const videoTestimonial = defineType({
  name: "videoTestimonial",
  title: "Video testimonial",
  type: "document",
  fields: [
    requiredText("name", "Student name", { initialValue: "Jordan Smith" }),
    requiredText("role", "Course or current role", { initialValue: "Web Development Bootcamp Graduate" }),
    requiredImage("Video cover image"),
    textField("videoUrl", "YouTube video URL", {
      description:
        "Paste a YouTube watch, share, Shorts, or embed URL for the testimonial.",
      initialValue: "https://www.youtube.com/watch?v=hropFOo35KY",
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (!value) return true;

          return /^https?:\/\/(?:www\.)?(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/)|youtu\.be\/)[^\s&?]+/i.test(
            value,
          )
            ? true
            : "Enter a valid YouTube video URL.";
        }),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "image" },
  },
});

export const placementSuccessStory = defineType({
  name: "placementSuccessStory",
  title: "Placement success story",
  type: "document",
  fields: [
    requiredText("name", "Student name", { initialValue: "Priya Sharma" }),
    requiredText("role", "Placed role", { initialValue: "Software Engineer" }),
    requiredImage("Student image"),
    imageField("homeImage", "Home page student image", {
      description:
        "Optional separate image used on the home page success stories card. If not set, Student image will be used.",
    }),
    requiredText("company", "Company", { initialValue: "Infosys" }),
    imageField("companyLogo", "Company logo", {
      description:
        "Optional company logo image. If provided, displays company logo on the success card.",
    }),
    requiredText("salary", "Salary or package", { initialValue: "6 LPA" }),
  ],
  preview: {
    select: {
      title: "name",
      role: "role",
      company: "company",
      media: "image",
    },
    prepare: ({ title, role, company, media }) => ({
      title,
      subtitle: [role, company].filter(Boolean).join(" at "),
      media,
    }),
  },
});
