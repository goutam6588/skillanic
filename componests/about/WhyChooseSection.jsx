import Xection from "../common/layout/Xection";
import { PrimaryButton } from "../ui/PrimaryButton";
import { BodyText, BoldText, HeroTitle } from "../ui/Typography";
import { useSanityContent } from "../../src/hooks/useSanityContent";
import { getSanityImageUrl } from "../../src/sanity/image";

const defaultBenefits = [
  "Learn from expert trainers with real-world insights.",
  "Flexible learning that fits your schedule.",
  "Build practical skills to grow your career.",
];

const defaultImage =
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786474598/whychoose_shq6qi.png";

export function WhyChooseSection({
  title1 = "Why Choose Skillanic",
  title2 = "Training?",
  description =
    "Skillanic Training offers expert-led programs with real-world experience, hands-on learning, and industry-relevant skills. Our practical approach helps you build confidence and stay job-ready, ensuring you’re well-prepared to achieve your career goals.",
}) {
  const { value: content } = useSanityContent("aboutPage.whyChoose", {
    title1,
    title2,
    description,
    benefits: defaultBenefits,
    image: defaultImage,
    imageAlt: "Team Collaboration",
    buttonText: "Explore Courses",
  });

  return (
    <Xection id="why-choose-about" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="max-w-[620px]">
          <HeroTitle>
            {content.title1}
            <br />
            {content.title2}
          </HeroTitle>

          <BodyText className="mb-10 max-w-[620px] mt-5">
            {content.description}
          </BodyText>

          <div className="space-y-7 mb-10">
            {content.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-5">
                <div className="w-4 h-4 rounded-full bg-[#003B7A] mt-2 flex-shrink-0" />
                <BoldText className="min-w-[90px] sm:min-w-[110px] text-start">
                  {benefit}
                </BoldText>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex w-full justify-start mt-5">
            <PrimaryButton className="!mx-0">{content.buttonText}</PrimaryButton>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="overflow-hidden rounded-[24px] w-full max-w-[540px]">
            <img
              src={getSanityImageUrl(content.image, defaultImage)}
              alt={content.imageAlt}
              className="w-full h-[340px] sm:h-[480px] md:h-[560px] object-cover"
            />
          </div>
        </div>

        <div className="flex lg:hidden justify-start">
          <PrimaryButton className="!mx-0">{content.buttonText}</PrimaryButton>
        </div>
      </div>
    </Xection>
  );
}
