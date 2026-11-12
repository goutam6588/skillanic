import React from "react";

import Section from "./common/Section";
import { AchievementBadge } from "./achievement-badge";
import { BodyText, HeroTitle } from "./ui/Typography";
import Xection from "./common/layout/Xection";
import Container from "./common/layout/Container";
import { useSanityContent } from "../src/hooks/useSanityContent";
import { getSanityImageUrl } from "../src/sanity/image";

export function StorySection({
  imageSrc = "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1783436480/image_48_pudemo.png",
  imageAlt = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  title = "Build to Bridge the Gap Between Learning & Industry",

  mission = "To transform potential into profession by delivering industry-relevant skills, real-world experience, and career-focused mentorship that empowers individuals to succeed in a rapidly evolving digital world.",
  vision = "To become a catalyst for career transformation — building a future where every individual is empowered with industry-ready expertise and limitless growth opportunities.",
  paragraphs = [
    "Skillanic Training Institute was established in April 2024 with a clear vision — to bridge the growing gap between academic learning and industry requirements.",
    "Our founder, a technology professional with extensive industry experience, recognised a recurring challenge: many graduates possessed theoretical knowledge but lacked the practical skills needed to succeed in today's competitive job market.",
  ],
  Founded = "Founded in Bangalore",
  FoundedIn = "Marathahalli, Bangalore — Karnataka",
}) {
  const defaults = { imageSrc, imageAlt, title, mission, vision, paragraphs, Founded, FoundedIn, foundedYear: "2024" };
  const { value: content } = useSanityContent("homePage.story", defaults);
  return (
    <Xection id="StorySection">
      {/* <Container size="default" padding="default"> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Image Section */}
        <div className="relative h-auto md:h-[500px] lg:h-[1080px] rounded-2xl overflow-hidden border border-gray-300 order-2 md:order-none">
          <img
            src={getSanityImageUrl(content.imageSrc, imageSrc)}
            alt={content.imageAlt}
            className="w-full h-auto md:h-full lg:h-[970px] object-cover rounded-[0px]"
          />

          {/* Overlay text */}
          <div className="absolute inset-0 flex items-start justify-center p-4 md:p-6">
            <span className="text-[120px] md:text-[160px] lg:text-[200px] font-black text-gray-300 opacity-40 leading-none select-none">
              {content.foundedYear}
            </span>
          </div>

          {/* Caption Section (mobile only fix) */}
          <div className="mt-6 text-center md:block m-4">
            <h2 className="text-lg font-semibold text-gray-600">
              {content.Founded}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {content.FoundedIn}
            </p>
          </div>
        </div>

        {/* Content Section */}

        <div className="flex flex-col items-start gap-6 md:gap-8">
          <AchievementBadge text="Our Story" className="w-fit" />

          {/* Title */}
          <HeroTitle className="mb-1">{content.title}</HeroTitle>

          {/* Paragraphs */}
          <div className="space-y-4 md:space-y-6">
            {content.paragraphs.map((paragraph, index) => (
              <BodyText key={index}>{paragraph}</BodyText>
            ))}
          </div>

          {/* Mission Card */}
          {content.mission && (
            <div className="bg-blue-900 rounded-xl p-6 md:p-8 text-white mt-4">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-start">
                OUR MISSION
              </h3>

              <p className="text-sm md:text-base leading-relaxed text-start">
                {content.mission}
              </p>
            </div>
          )}

          {/* Vision Card */}
          {content.vision && (
            <div className="bg-blue-900 rounded-xl p-6 md:p-8 text-white">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-start">
                OUR VISION
              </h3>

              <p className="text-sm md:text-base leading-relaxed text-start">
                {content.vision}
              </p>
            </div>
          )}
        </div>
      </div>
      {/* </Container> */}
    </Xection>
  );
}
