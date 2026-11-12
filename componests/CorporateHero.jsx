import React from "react";
import { ArrowRight } from "lucide-react";
import Section from "./common/Section";
import { BodyText, HeroTitle } from "./ui/Typography";
import { PrimaryButton } from "./ui/PrimaryButton";
import Xection from "./common/layout/Xection";
import Container from "./common/layout/Container";
import { Statistics } from "./Statistics";
import { WhyChooseUs } from "./WhyChooseUs";
import CoursesSection from "./CoursesSection";
import { SuccessStories } from "./SuccessStories";
import { StorySection } from "./StorySection";
import { FeatureHighlights } from "./FeatureHighlights";
import { SuccessStories2 } from "./SuccessStories2";
import { WhatOurAlumniSay } from "./WhatOurAlumniSay";
import { CTAHero } from "./CTAHero";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
import { useSanityContent } from "../src/hooks/useSanityContent";
import { getSanityImageUrl } from "../src/sanity/image";

export function CorporateHero({
  imageUrl = 'https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786735142/abouthome_yojdyy.png',
  title = "Corporate IT Training for Future Ready Teams",
  description1 = "Upskill your workforce with industry-relevant IT training designed to meet real business needs. Our programs focus on in-demand technologies, helping teams stay competitive and productive.",
  description2 = "We deliver hands-on, practical training led by experienced professionals. From software development to UI/UX, cloud, and data, our courses are tailored to your company’s goals.",
  buttonText = "EXPLORE COURSES",
  buttonUrl = "/courses",
  imageAlt = "Corporate training professional",
}) {
  const navigate = useNavigate();
  const defaults = { title, description1, description2, buttonText, buttonUrl, imageUrl, imageAlt };
  const { value: content } = useSanityContent("homePage.corporateTraining", defaults);
  return (
    <Xection spacing="none" id="CorporateHero">
      <Container size="default" padding="default">
        <Xection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Image */}
            <div className="flex justify-center md:justify-start">
              <div className="w-full max-w-md h-96 md:h-[600px] rounded-3xl overflow-hidden bg-gray-100 flex-shrink-0 mt-6 md:mt-0">
                <img
                  src={getSanityImageUrl(content?.imageUrl || content?.image, imageUrl)}
                  alt={content?.imageAlt || imageAlt}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 15%" }}
                />
              </div>
            </div>
            {/* Right Column - Content */}
            <div className="flex flex-col justify-center">
              <HeroTitle>{content.title}</HeroTitle>
              <br />

              <BodyText className="mb-6">{content.description1}</BodyText>

              <BodyText className="mb-8">{content.description2}</BodyText>

              <br />
              <div className="self-start">
                <PrimaryButton onClick={() => navigate(content.buttonUrl)}>{content.buttonText}</PrimaryButton>
              </div>
            </div>
          </div>
        </Xection>
        <Statistics />
        <WhyChooseUs />
        <CoursesSection />
        <SuccessStories />
        <StorySection />
        <FeatureHighlights />
        <WhatOurAlumniSay />
        <SuccessStories2 />
        <CTAHero />
        <FAQ />
      </Container>
    </Xection>
  );
}