import React from "react";
import { FeatureHighlight } from "./FeatureHighlight";
import { Users, Briefcase, Shield, TrendingUp } from "lucide-react";
import Xection from "./common/layout/Xection";
import Container from "./common/layout/Container";
import { useSanityContent } from "../src/hooks/useSanityContent";

export function FeatureHighlights() {
  const features = [
    {
      icon: <Users className="w-6 h-6 fill-none stroke-current" />,
      title: "Industry-Relevant Training",
      subtitle: "Skills that match real-world needs.",
    },
    {
      icon: <Briefcase className="w-6 h-6 fill-none stroke-current" />,
      title: "Hands-on Experience",
      subtitle: "Practical learning through real projects.",
    },
    {
      icon: <Shield className="w-6 h-6 fill-none stroke-current" />,
      title: "Expert Mentorship",
      subtitle: "Guidance from industry professionals.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 fill-none stroke-current" />,
      title: "Career-Focused Approach",
      subtitle: "Preparing you for meaningful careers.",
    },
  ];
  const { value: content } = useSanityContent(
    "homePage.featureHighlights",
    features,
    { collection: true },
  );

  return (
    <Xection>
      {/* <Container size="default" padding="default"> */}
      <div className="relative isolate">
        {/* Center vertical line */}
        {/* <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-300 -translate-x-1/2" /> */}

        {/* Top line */}
        <div className="absolute left-1/2 top-0 h-[40%] w-px bg-blue-300 -translate-x-1/2 md:hidden" />

        {/* Bottom line */}
        <div className="absolute left-1/2 bottom-0 h-[40%] w-px bg-blue-300 -translate-x-1/2 md:hidden" />

        {/* Middle horizontal line */}
        <div className="absolute left-4 right-4 top-1/2 h-px bg-blue-300 -translate-y-1/2 md:hidden" />

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 text-start">
          {content.map((feature, index) => (
            <div key={index} className="relative ">
              {/* Custom Divider */}
              {index !== content.length - 1 && (
<div className="hidden lg:block absolute right-0 top-0 h-full w-px bg-blue-400" />              )}
              <FeatureHighlight
                key={index}
                index={index}
                icon={feature.icon}
                title={feature.title}
                subtitle={feature.subtitle}
                isLast={index === content.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
      {/* </Container> */}
    </Xection>
  );
}
