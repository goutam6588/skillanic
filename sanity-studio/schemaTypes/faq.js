import { defineField, defineType } from "sanity";
import { longTextField, textField } from "./shared";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    // defineField({ name: "legacyId", title: "Fallback ID", type: "string" }),
    defineField({ name: "order", title: "Display order", type: "number" }),
    textField("question", "Question", { validation: (Rule) => Rule.required() }),
    longTextField("answer", "Answer"),
  ],
  preview: { select: { title: "question", subtitle: "answer" } },
});

