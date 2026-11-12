import { ExternalLink } from "lucide-react";
import { Navigation } from "../../componests/navigation";
import { Footer } from "../../componests/Footer";
import Container from "../../componests/common/layout/Container";
import { AchievementBadge } from "../../componests/achievement-badge";
import Xection from "../../componests/common/layout/Xection";
import { BodyText, HeroTitle } from "../../componests/ui/Typography";
import { FaLinkedinIn } from "react-icons/fa";
import { MentorsSection } from "../../componests/about/MentorsSection";
import Team3 from "../../componests/Team/Team3";
import CTASection from "../../componests/Gentric/CTASection";
import { useSanityContent } from "../hooks/useSanityContent";
import { getSanityImageUrl } from "../sanity/image";
import SEO from "../../componests/SEO";

const teamImages = [
  {
    src: "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1785318176/team1_dptzue.png",
    alt: "Team members in office setting",
  },
  {
    src: "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1785318179/team2_vmulid.png",
    alt: "Team members celebrating success",
  },
];

const founder = {
  name: "Goutam Mahali",
  role: "Founder & MD",
  image:
    "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1785317409/skillanic_founder_mmeuoa.png",
  description:
    "Goutam founded Skillanic in April 2024 with a mission to make industry-grade IT training accessible to every learner in India. With over a decade of experience in software engineering, data, and education, he focuses on bridging the gap between academic learning and real-world industry needs. Under his leadership, Skillanic has placed 500+ students into 100+ companies in under 18 months.",
  linkedin: "https://linkedin.com",
};

export default function Team() {
  const title1 = "Meet the Experts";
  const title2 = "Behind Your Success";
  const { value: content } = useSanityContent("teamPage", {
    badge: "Our Team",
    title1,
    title2,
    teamImages,
    founder,
  });
  return (
  <>
    <SEO
      title="Skillanic Team | Expert IT Trainers & Mentors in Bangalore"
      description="Meet the expert trainers, mentors and leadership team at Skillanic. Learn from experienced IT professionals through practical training, industry guidance and career-focused mentorship in Bangalore."
      canonical="/team"
    />
    
    <div className="min-h-screen bg-background">
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
          {/* Header Section */}
          <Container className="relative overflow-hidden py-24">
            <Xection spacing="tight">
              <div className="mx-auto max-w-6xl space-y-8 ">
                {/* Badge */}
                <div className="flex justify-center">
                  <AchievementBadge text={content.badge} />
                </div>

                {/* Title */}
                <div className="text-center max-w-5xl mx-auto">
                  <HeroTitle className="!text-center">
                    {content.title1}
                    <br />
                    {content.title2}
                  </HeroTitle>
                </div>

                {/* Team Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-12 ">
                  {content.teamImages.map((img, index) => (
                    <div
                      key={index}
                      className="
                          aspect-[16/10]
                          bg-[#F8F8F8]
                          border
                          border-[#D9D9D9]
                          rounded-[24px]
                          p-4
                          shadow-sm
                          transition-all
                          duration-300
                          hover:shadow-md
                        "
                    >
                      <img
                        src={getSanityImageUrl(img.src, teamImages[index]?.src)}
                        alt={img.alt}
                        className="w-full h-full object-cover rounded-[20px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Xection>
          </Container>
        </div>
        {/* Profile Section */}
        <Container className="relative ">
          <Xection>
            {/* <div className="mx-auto max-w-6xl"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left Column - Founder Image */}
              <div className="flex justify-center md:justify-start">
                <div
                  className="w-full max-w-md h-96 md:h-[600px] flex-shrink-0
                  bg-[#F8F8F8]
                  border
                  border-[#D9D9D9]
                  rounded-[24px]
                  p-4
                  shadow-sm
                  transition-all
                  duration-300
                  hover:shadow-md"
                >
                  <img
                    src={getSanityImageUrl(
                      content.founder.image,
                      founder.image,
                    )}
                    alt={content.founder.name}
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="flex flex-col justify-center">
                <div className="mb-4 justify-start md:justify-start flex">
                  <AchievementBadge text={content.founder.role} />
                </div>

                <HeroTitle>{content.founder.name}</HeroTitle>

                <div className="mt-6 max-w-xl">
                  <BodyText className="mb-6">
                    {content.founder.description}
                  </BodyText>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-3 mt-4">
                  <a
                    href={content.founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${content.founder.name} LinkedIn`}
                    className="
                      flex-shrink-0
                      hover:opacity-70
                      transition-opacity
                    "
                  >
                    <svg
                      className="w-6 h-6 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Xection>
          <div className="my-10 md:my-14 lg:my-16">
            <MentorsSection />
          </div>

          <div className="my-10 md:my-14 lg:my-16">
            <Team3 />
          </div>

          <div className="my-10 md:my-14 lg:my-16">
            <CTASection
              title="Ready to Start Your Career?"
              description="Get industry-ready training, expert mentorship, and dedicated placement support from Skillanic."
              buttonText="GET PLACEMENT SUPPORT"
            />
          </div>
        </Container>
      </Xection>
      <Footer />
    </div>
    </>
  );
}
