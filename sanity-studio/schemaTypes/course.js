import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField, longTextField, textField } from "./shared";

export const coursesPage = defineType({
  name: "coursesPage",
  title: "Courses page",
  type: "document",
  fields: [
    textField("badge", "Badge"),
    textField("title", "Title"),
    longTextField("description", "Description"),
  ],
  preview: { prepare: () => ({ title: "Courses page" }) },
});

export const course = defineType({
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    // defineField({
    //   name: "legacyId",
    //   title: "Website course ID",
    //   description: "Optional: Use the current numeric ID (e.g. 1, 2) to override a specific fallback course. Leave blank for new courses.",
    //   type: "number",
    //   validation: (Rule) => Rule.integer().positive(),
    // }),
    defineField({ name: "order", title: "Display order", type: "number" }, { validation: (Rule) => Rule.required() }),
    textField("title", "Title", { validation: (Rule) => Rule.required() }),
    textField("duration", "Duration", { initialValue: "5 months", validation: (Rule) => Rule.required() }),
    defineField({ name: "mode", title: "Mode", type: "string", options: { list: ["Online", "Offline", "Hybrid", "Online + Offline", "Corporate" ] }, initialValue: "Online", validation: (Rule) => Rule.required() }),
    textField("category", "Category", { initialValue: "Web Development", validation: (Rule) => Rule.required() }),
    textField("level", "Level", { initialValue: "Beginner", validation: (Rule) => Rule.required() }),
    longTextField("description", "Card description", { initialValue: "Master the core concepts and practical skills of this course through hands-on projects and real-world application development.", validation: (Rule) => Rule.required() }),
    // longTextField("detailDescription", "Detailed description", { validation: (Rule) => Rule.required() }),
    textField("learnTitle", "Learning outcomes heading", { initialValue: "What You'll Learn", validation: (Rule) => Rule.required() }),
    defineField({
      name: "learn",
      title: "Learning outcomes",
      type: "array",
      validation: (Rule) => Rule.required().min(1),
      of: [defineArrayMember({ type: "object", fields: [textField("title", "Title", { validation: (Rule) => Rule.required() }), longTextField("description", "Description", { validation: (Rule) => Rule.required() })] })],
      initialValue: [
        {
          _type: "object",
          title: "Core Concepts & Fundamentals",
          description: "Understand the foundational principles and key concepts that form the backbone of this course.",
        },
        {
          _type: "object",
          title: "Practical Skills & Techniques",
          description: "Gain hands-on experience by applying industry-standard techniques and best practices.",
        },
        {
          _type: "object",
          title: "Tools & Technologies",
          description: "Get comfortable with the tools, platforms, and technologies used by professionals in this field.",
        },
        {
          _type: "object",
          title: "Problem Solving & Critical Thinking",
          description: "Develop the ability to analyze challenges and design effective, efficient solutions.",
        },
        {
          _type: "object",
          title: "Project-Based Learning",
          description: "Apply your skills through real-world projects that you can showcase in your portfolio.",
        },
        {
          _type: "object",
          title: "Career Readiness",
          description: "Prepare for job roles in this domain with industry-aligned knowledge and practical experience.",
        },
      ],
    }),
    imageField("image", "Course image", { validation: (Rule) => Rule.required() }),
    defineField({
      name: "syllabusFile",
      title: "Syllabus PDF",
      description: "Upload the syllabus PDF for this course. When uploaded, a 'Download Syllabus' button will appear next to 'Enroll Now' on the course detail page.",
      type: "file",
      options: { accept: "application/pdf" },
    }),
  ],
  preview: { select: { title: "title", subtitle: "duration", media: "image" } },
});

