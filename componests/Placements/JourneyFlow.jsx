import React from "react";
import {
  FilePenLine,
  BookOpen,
  ClipboardList,
  Mic,
  Send,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import { SectionHeader } from "../SectionHeader";
import Xection from "../common/layout/Xection";

export default function JourneyFlow({
  title1 = "500+ students successfully placed across top companies.",
  title2 = "You could be next",
}) {
  const steps = [
    {
      id: 1,
      icon: FilePenLine,
      title: "Enrol",
      subtitle: "Azure Data Engineering",
    },
    {
      id: 2,
      icon: BookOpen,
      title: "Train",
      subtitle: "Live classes + projects",
    },
    {
      id: 3,
      icon: ClipboardList,
      title: "Resume Build",
      subtitle: "ATS-ready resume",
    },
    {
      id: 4,
      icon: Mic,
      title: "Mock Interviews",
      subtitle: "Practice with experts",
    },
    {
      id: 5,
      icon: Send,
      title: "Job Applications",
      subtitle: "100+ company network",
    },
    {
      id: 6,
      icon: Sparkles,
      title: "Offer Letter",
      subtitle: "Land your dream role",
    },
  ];

  return (
    // <section className="w-full bg-white py-10 md:py-14 lg:py-16">
    <Xection >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <SectionHeader
          title="From Enrollment to Offer Letter"
          subtitle="A clear, guided path to help you succeed at every stage of your career journey."
        />

        {/* Desktop */}
        <div className="hidden lg:flex items-start justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center text-center min-w-[120px]">
                  <div
                    className="
                      w-[68px]
                      h-[68px]
                      rounded-[8px]
                      bg-[#003B82]
                      flex
                      items-center
                      justify-center
                      shadow-sm
                    "
                  >
                    <Icon
                      className="w-8 h-8 text-white"
                      strokeWidth={1.8}
                    />
                  </div>

                  <h4 className="mt-4 text-[20px] font-semibold text-[#222]">
                    {step.id}. {step.title}
                  </h4>

                  <p className="mt-1 text-[11px] text-[#8F8F8F]">
                    {step.subtitle}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex-1 flex items-center pt-8 px-3">
                    <div className="relative w-full">
                      <div className="border-t border-dashed border-[#BDBDBD]" />

                      <ChevronRight
                        size={12}
                        className="absolute right-[-6px] top-[-6px] text-[#BDBDBD]"
                      />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Tablet */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-10 mt-10">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                <div className="w-[68px] h-[68px] rounded-[8px] bg-[#003B82] flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" strokeWidth={1.8} />
                </div>

                <h4 className="mt-4 text-lg font-semibold">
                  {step.id}. {step.title}
                </h4>

                <p className="mt-1 text-xs text-[#8F8F8F]">{step.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="md:hidden max-w-[320px] mx-auto text-start">
          <div className="relative">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.id} className="relative flex gap-4 pb-8">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-[56px] h-[56px] rounded-lg bg-[#003B82] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                    </div>

                    {index < steps.length - 1 && (
                      <div className="w-px h-12 border-l border-dashed border-[#BDBDBD] mt-2" />
                    )}
                  </div>

                  <div className="pt-1">
                    <h4 className="text-[16px] font-semibold text-[#222]">
                      {step.id}. {step.title}
                    </h4>

                    <p className="text-[12px] text-[#8F8F8F] mt-1">
                      {step.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-14 hidden md:block">
          <h3 className="text-[20px] md:text-[26px] font-medium text-gray-600">
            {title1}
            <span className="text-[#003B82] font-semibold"> {title2}</span>
          </h3>
        </div>
      </div>
      </Xection>
    // </section>
  );
}
