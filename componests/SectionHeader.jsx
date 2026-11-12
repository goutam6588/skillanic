import React from "react";
import { BodyText, HeroTitle } from "./ui/Typography";
import { HeroSection } from "./hero-section";

export function SectionHeader({
  title,
  subtitle
}) {
  return (
    <div className="grid grid-cols-1 text-start md:grid-cols-2 gap-4 md:gap-12 mb-16 md:mb-16 md:px-0">
      {/* Title */}
      <div>
        <HeroTitle>
          {title}
        </HeroTitle>
      </div>

      {/* Subtitle */}
      <div>
        <BodyText className="mt-3">{subtitle}</BodyText>
      </div>
    </div>
  );
}
