// src/pages/About.jsx

import { Navigation } from "../../componests/navigation";
import { Footer } from "../../componests/Footer";

import { About1 } from "../../componests/about/About1";
import { AboutContent } from "../../componests/about/AboutContent";
import { WhyChooseSection } from "../../componests/about/WhyChooseSection";
import { MentorsSection } from "../../componests/about/MentorsSection";
import VisionMision from "../../componests/about/VisionMision";
import CTASection from "../../componests/Gentric/CTASection";
import Xection from "../../componests/common/layout/Xection";
import { AchievementBadge } from "../../componests/achievement-badge";
import { BodyText, HeroTitle } from "../../componests/ui/Typography";
import { ImageCard } from "../../componests/about/image-card";
import Container from "../../componests/common/layout/Container";
import { useSanityContent } from "../hooks/useSanityContent";
import { getSanityImageUrl } from "../sanity/image";
import SEO from "../../componests/SEO";

export default function About() {
  const cards = [
     {
      src: "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786474110/clean_class_room_w4hh6f.png",
      alt: "Clean classroom",
      label: "Clean Class Room",
    },
    {
      src: "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786474113/Friendly_Mentors_mmkkqo.png",
      alt: "Friendly mentors",
      label: "Friendly Mentors",
    },
    {
      src: "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786474111/Real_Time_Projects_fbz8z3.png",
      alt: "Real Time Projects",
      label: "Real Time Projects",
    },
  ];
  const title = "Who we are?";
  const description =
    "  Building stronger teams and empowering businesses through tailored recruitment solutions and expert talent acquisition";
  const { value: hero } = useSanityContent("aboutPage.hero", {
    badge: "About Us",
    title,
    description,
    cards,
  });

  return (
    <>
    <SEO
      title="About Skillanic – Software Training Institute in Marathahalli, Bangalore"
      description="Learn about Skillanic Technologies, a trusted software training institute in Marathahalli, Bangalore. Discover our mission, expert trainers, and 100% placement-focused approach to IT education."
      canonical="https://skillanic.com/about"
      image="https://res.cloudinary.com/dd3qjg9qb/image/upload/q_auto:best,f_auto/v1786481384/ak_yiq5wg.png"
    />
    // max-[1366px]:scale-90 max-[1366px]:origin-top
    <div className="antialiased overflow-hidden ">
      <Navigation />
      <Xection
        spacing="none"
        className="
        relative overflow-hidden
      "
      >
        <div className="relative overflow-hidden">
          {/* Vertical Lines */}
          <div
            className="
              max-md:hidden
              absolute inset-0
              bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px)]
              bg-[size:85px_85px]
            "
          />

          {/* Horizontal Lines */}
          <div
            className="
              max-md:hidden
              absolute inset-0
              bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]
              bg-[size:85px_85px]
            "
          />
          <Xection spacing="tight">
            <Container size="default" padding="default">
              <div className="relative min-h-screen overflow-hidden pt-24">
                {/* shadow-[0_10px_40px_rgba(0,0,0,0.04)] */}
                <div className="relative max-w-7xl mx-auto">
                  {/* Badge */}
                  <div className="flex justify-center mb-7">
                    <AchievementBadge text={hero.badge} />
                  </div>

                  {/* Heading */}
                  <div className="text-center max-w-5xl mx-auto">
                    <HeroTitle className="justify-center !text-center ">
                      {hero.title}
                    </HeroTitle>

                    <BodyText
                      className="mt-3 max-w-xl
                      mx-auto !text-center text-gray-600"
                    >
                      {hero.description}
                    </BodyText>
                  </div>

                  <div className="mt-6 md:hidden">
                    <AboutContent />
                  </div>

                  {/* Cards */}
                  <div
                    className="
                hidden md:flex
                lg:mt-8 md:mt-6
                max-[768px]:mt-2
                [@media(max-height:768px)]:mt-2
                max-w-5xl
                mx-auto
                items-center
                justify-between
                gap-3 md:gap-2
              "
                  >
                    {hero.cards.map((card, index) => (
                      <div key={card.label || index} className={index === 1 ? "md:mt-12" : ""}>
                        <ImageCard
                          src={getSanityImageUrl(card.src, cards[index]?.src)}
                          alt={card.alt}
                          label={card.label}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </Xection>
        </div>

        <div>
          <Container size="default" padding="default">
            {/* 2nd section */}
            <div className="hidden md:block my-10 md:my-14 lg:my-16">
              {/* <AboutContent /> */}
            </div>

            {/* 3nd section */}
            <div className="mt-4 mb-10 md:my-14 lg:my-16">
              <VisionMision />
            </div>

            {/* 4nd section */}
            <div className="my-10 md:my-14 lg:my-16">
              <WhyChooseSection />
            </div>

            {/* 5nd section */}
            <div className="my-10 md:my-14 lg:my-16">
              <MentorsSection />
            </div>

            {/* 6nd section */}
            <div className="my-10 md:my-14 lg:my-16">
              <CTASection />
            </div>
          </Container>
        </div>
      </Xection>
      <Footer />
    </div>
</>
  );
}
