"use client";
import React from "react";
import { SectionHeader } from "./SectionHeader.jsx";
import { WhyChooseCard } from "./WhyChooseCard.jsx";
import { MessageCircle, Radio, LayoutGrid } from "lucide-react";
import Section from "./common/Section.jsx";
import Xection from "./common/layout/Xection.jsx";
import Container from "./common/layout/Container.jsx";
import { useSanityContent } from "../src/hooks/useSanityContent";

const style = `
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll {
    animation: marquee 18s linear infinite;
  }
  .animate-scroll:hover {
    animation-play-state: paused;
  }
`;

export function WhyChooseUs() {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Real-Time Project Training",
      description:
        "Work on 3–5 live, industry-scale projects per course. Build a portfolio that hiring managers ",
      benefit: "3–5 Projects Per Course",
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Industry Expert Trainers",
      description:
        "Every trainer brings 15+ years of hands-on industry experience. You learn directly from professionals .",
      benefit: "15+ Years Experience",
    },
    {
      icon: <LayoutGrid className="w-8 h-8" />,
      title: "100% Placement Assistance",
      description:
        "Dedicated placement team, 100+ hiring partners, mock interviews, resume building & job referrals — .",
      benefit: "500+ Students Placed",
    },
  ];
  const { value: content } = useSanityContent("homePage.whyChoose", {
    features,
  });

  return (
    <Xection id="WhyChooseUs">
      {/* Inject keyframes */}
      <style>{style}</style>

      {/* Header */}
      <div className="mb-12 md:mb-30">
        <SectionHeader
          title="Why Choose Skillanic?"
          subtitle="We don't just teach — we transform careers with a hands-on, industry-driven approach that competitors simply can't match."
        />
      </div>

      {/* Cards Grid */}
      <div className="overflow-hidden">
        <div className="flex gap-6 md:gap-8 animate-scroll w-max lg:mt-4">
          {content.features.map((feature, index) => (
            <div
              key={`b-${index}`}
              className="w-[230px] sm:w-auto sm:min-w-[320px] md:min-w-[350px] max-w-[370px] flex-shrink-0"
            >
              <WhyChooseCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                benefit={feature.benefit}
              />
            </div>
          ))}

          {content.features.map((feature, index) => (
            <div
              key={`b-${index}`}
              className="w-[230px] sm:w-auto sm:min-w-[320px] md:min-w-[350px] max-w-[370px] flex-shrink-0"
            >
              <WhyChooseCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                benefit={feature.benefit}
              />
            </div>
          ))}
        </div>
      </div>
    </Xection>
  );
}