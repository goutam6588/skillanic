import { Timeline } from "./Timeline";
import imageUrl from "../../src/assets/normal images/about2.png";
import imageAlt from "../../src/assets/normal images/about2.png";
import Section from "../common/Section";
import { BodyText, BoldText, HeroTitle } from "../ui/Typography";
import Xection from "../common/layout/Xection";
import Container from "../common/layout/Container";

export function AboutContent({
  title1 = "Built for Learners.",
  title2 = "Loved by Recruiters.",
  description ="Skillanic Technologies Pvt. Ltd., founded in April 2024, provides practical IT training for real industry jobs. In under 18 months, it has placed 500+ students in 100+ companies like Deloitte, Wipro, and Capgemini, with packages up to 20 LPA, focusing on hands-on learning, small batches, and strong career support.",
}) {
  const timelineItems = [
    {
      year: "April 2024",
      description: "Skillanic founded in Bangalore",
    },
    {
      year: "Mid 2024",
      description: "First batch placed at top IT companies",
    },
    {
      year: "2025",
      description: "Crossed 500+ placements milestone",
    },
    {
      year: "2025",
      description: "1000+ active learners across India",
    },
  ];

  return (
    <Xection className="bg-white">
      {/* <Container size="default" padding="default"> */}
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Image */}
          {/* Image Section */}
          <div className="relative h-96 md:h-[500px] lg:h-[660px] rounded-2xl overflow-hidden">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />

            {/* Overlay text for large number */}
            <div className="absolute inset-0 flex items-start justify-start p-6 md:p-8">
              <span className="text-6xl md:text-8xl font-bold text-gray-200 opacity-30">
                25
              </span>
            </div>
          </div>

          {/* Right Content */}
          <div className="max-w-[620px]">
            {/* Heading */}
            {/* <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-blue-900 leading-tight sm:leading-[1.2] lg:leading-[70px] text-start"
            > */}
            <HeroTitle className="mb-6">
              {title1}
              <br />
              {title2}
            </HeroTitle>
            {/* </h1> */}

            {/* Paragraph */}

            <BodyText className="mb-10 space-y-4 md:space-y-6">
              {description}
            </BodyText>

            {/* Timeline */}
            <div className="space-y-7">
              {timelineItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  {/* Dot */}
                  <div
                    className="
                        w-3 h-3 sm:w-4 sm:h-4
                        rounded-full
                        bg-[#003B7A]
                        mt-2
                        flex-shrink-0
                      "
                  />

                  {/* Timeline Content */}
                  <div
                    className="
                        flex flex-row items-start
                        sm:flex-row sm:items-baseline
                        gap-2 sm:gap-3
                        flex-1
                      "
                  >
                    {/* Year */}
                    <BoldText
                      className="
                          !text-[#003B7A]
                          whitespace-nowrap
                          sm:min-w-[110px]
                        "
                    >
                      {item.year}
                    </BoldText>

                    {/* Dash */}
                    <span
                      className="
                          text-[#003B7A]
                          font-medium
                        "
                    >
                      -
                    </span>

                    {/* Description */}
                    <BodyText className="flex-1 !mt-0">
                      {item.description}
                    </BodyText>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      {/* </Container> */}
    </Xection>
  );
}
