"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import Section from "./common/Section";
import Xection from "./common/layout/Xection";
import Container from "./common/layout/Container";
import { useSanityContent } from "../src/hooks/useSanityContent";
import { isRenderableFaq } from "../src/content/validators";

const faqs = [
  {
    question: "Which courses are offered by Skillanic?",
    answer:
      "Skillanic offers technology-oriented courses including Java Full Stack, Python Full Stack, MERN Stack, React JS, Data Science, Data Analytics, Software Testing, DevOps & Cloud, Generative AI, SAP, Salesforce, UI/UX Design, Digital Marketing, etc.",
  },
  {
    question: "Is Skillanic an IT training institute in Bangalore?",
    answer:
      "Yes, Skillanic is an IT training institute based in Bangalore, offering industry-relevant courses to students and professionals.",
  },
  {
    question: "Does Skillanic offer placement services?",
    answer:
      "Yes, Skillanic offers comprehensive placement services to help students secure jobs in the industry. Our placement team works closely with partner companies to ensure students are matched with suitable opportunities.",
  },
  {
    question: "Does Skillanic offer real-time project training?",
    answer:
      "Yes, Skillanic provides real-time project training to its students. Our experienced instructors guide learners through hands-on projects that simulate real-world scenarios, ensuring they gain practical experience and are job-ready upon completion.",
  },
  {
    question: "Does Skillanic provide online and classroom training?",
    answer:
      "Yes, we offer both online and classroom training options to cater to different learning preferences and schedules.",
  },
  {
    question: "What is the duration of Skillanic courses?",
    answer:
      "The duration of courses may vary as per the course. Most Skillanic courses can be completed within 3 to 6 months.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const { value: section } = useSanityContent("homePage.faq", {
    title: "Freaquently asked questions",
    subtitle: "Every thing you need to know before enrolling at Skillanic Learning.",
  });
  const { value: resolvedFaqs } = useSanityContent("faqs", faqs, {
    collection: true,
    matchBy: ["id"],
    isValidItem: isRenderableFaq,
  });

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Xection id="faq">

      <SectionHeader
        title={section.title}
        subtitle={section.subtitle}
      />

      <Container size="default" padding="default">

        <div>
          {resolvedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-border">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full py-6 flex items-start justify-between gap-6 text-left group"
                >
                  <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                    {faq.question}
                  </span>

                  <Plus
                    className={`w-6 h-6 flex-shrink-0 transition-transform duration-500 ease-in-out ${isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    strokeWidth={1.5}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0 "
                    }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`
                        text-muted-foreground leading-relaxed pb-6 pr-12 text-start transition-all duration-500 ease-in-out
                        ${isOpen ? "pb-6 translate-y-0" : "pb-0 -translate-y-2"}
                      `}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Xection>
  );
}
