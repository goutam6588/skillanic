import React from "react";
import Section from "./common/Section";
import { BodyText, HeroTitle } from "./ui/Typography";
import { SectionHeader } from "./SectionHeader";
import { PrimaryButton } from "./ui/PrimaryButton";
import Xection from "./common/layout/Xection";
import Container from "./common/layout/Container";
import { useModal } from "../src/context/ModalContext";
import { useSanityContent } from "../src/hooks/useSanityContent";
import { getSanityImageUrl } from "../src/sanity/image";

export function CTAHero({
  title = "Start Building Your IT Career Today",
  description = "Join a growing community of 500+ students who have transformed their careers with Skillanic by mastering practical skills, working on real-world projects, and learning from industry experts.",
  buttonText = "GET FREE COUNSELLING",
  buttonUrl = "/counselling",
  imageUrl = "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1783436723/image_uh6m2d.png",
}) {
  const { openModal } = useModal();
  const defaults = { title, description, buttonText, buttonUrl, imageUrl };
  const { value: content } = useSanityContent("homePage.cta", defaults);
  return (
    <Xection id="CTAHero">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-10 md:gap-12 lg:gap-20 items-stretch">
        {/* Left */}
        <div className="order-1 md:order-1 flex flex-col justify-between text-start max-w-xl h-full min-h-0 md:min-h-[520px]">
          {/* Mobile: SectionHeader */}
          <div className="md:hidden">
            <SectionHeader title={content.title} subtitle={content.description} />
          </div>

          {/* Desktop: HeroTitle + BodyText */}
          <div className="hidden md:block lg:mt-28">
            <HeroTitle>{content.title}</HeroTitle>
            <BodyText className="mt-6 md:mt-8">{content.description}</BodyText>
          </div>

          {/* Desktop button */}
          <div className="hidden md:block pt-8 mt-auto">
            <PrimaryButton onClick={openModal}>{content.buttonText}</PrimaryButton>
          </div>
        </div>

        {/* Right */}
        <div className="order-2 md:order-2 flex justify-center md:justify-end items-end mt-2 sm:mt-4 md:mt-0">
          <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[420px] h-[320px] sm:h-[380px] md:h-[520px] flex items-end justify-center">
            <div className="absolute bottom-0 w-[92%] h-[68%] bg-[#003B82] rounded-[32px]" />

            <img
              src={getSanityImageUrl(content.imageUrl, imageUrl)}
              alt="Career professional"
              className="relative z-10 h-full object-contain"
            />
          </div>
        </div>

        {/* Mobile button */}
        <div className="order-3 md:hidden flex justify-start mt-6">
          <PrimaryButton onClick={openModal}>{content.buttonText}</PrimaryButton>
        </div>
      </div>
    </Xection>
  );
}
