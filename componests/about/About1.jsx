import { AchievementBadge } from "../achievement-badge";
import Container from "../common/layout/Container";
import Xection from "../common/layout/Xection";
import CTASection from "../Gentric/CTASection";
import { HeroTitle } from "../ui/Typography";
import { AboutContent } from "./AboutContent";
import { ImageCard } from "./image-card";
import { MentorsSection } from "./MentorsSection";
import VisionMision from "./VisionMision";
import { WhyChooseSection } from "./WhyChooseSection";

export function About1() {
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
  const _description =
    "At Tutorly, our courses are led by experienced professionals, researchers, and educators who bring real-world knowledge.";

  return (
    <Xection
      spacing="none"
      className="
        relative overflow-hidden
      "
    >

      {/* Vertical Lines */}
      <div
        className="
              absolute inset-0
              bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px)]
              bg-[size:85px_85px]
            "
      />

      {/* Horizontal Lines */}
      <div
        className="
              absolute inset-0
              bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]
              bg-[size:85px_85px]
            "
      />

      {/* <Container size="default" padding="default"> */}
      <div className="relative min-h-screen overflow-hidden py-24">
        {/* shadow-[0_10px_40px_rgba(0,0,0,0.04)] */}
        <div className="relative max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-7">
            <AchievementBadge text="About Us" />
          </div>

          {/* Heading */}
          <div className="text-center max-w-5xl mx-auto">
            <HeroTitle className="justify-center !text-center ">
              {title}
            </HeroTitle>

            <p
              className="
              text-[16px]
              sm:text-[20px]
              md:text-[24px]
              leading-[1.5]
              text-gray-600
              font-normal
              max-w-xl
              mx-auto
            "
            >
              Building stronger teams and empowering businesses through
              tailored recruitment solutions and expert talent acquisition
            </p>
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
            {/* Left Card */}
            <div>
              <ImageCard
                src={cards[0].src}
                alt={cards[0].alt}
                label={cards[0].label}
              />
            </div>

            {/* Center Card */}
            <div className="md:mt-12">
              <ImageCard
                src={cards[1].src}
                alt={cards[1].alt}
                label={cards[1].label}
              />
            </div>

            {/* Right Card */}
            <div className="">
              <ImageCard
                src={cards[2].src}
                alt={cards[2].alt}
                label={cards[2].label}
              />
            </div>
          </div>
        </div>
        <div>
          {/* 2nd section */}
          <div className="my-10 md:my-14 lg:my-16">
            <AboutContent />
          </div>

          {/* 3nd section */}
          <div className="my-10 md:my-14 lg:my-16">
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
        </div>
      </div>
      {/* </Container> */}
    </Xection>
  );
}
