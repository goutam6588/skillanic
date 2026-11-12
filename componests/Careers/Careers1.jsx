import { AchievementBadge } from "../achievement-badge";
import Container from "../common/layout/Container";
import Xection from "../common/layout/Xection";
import { PrimaryButton } from "../ui/PrimaryButton";
import { BodyText, HeroTitle } from "../ui/Typography";
import { CAREERS_HERO_DEFAULTS } from "../../src/content/fallback/careersContent";
import { useSanityContent } from "../../src/hooks/useSanityContent";

export function Careers1() {
  const { value: content } = useSanityContent(
    "careersPage.hero",
    CAREERS_HERO_DEFAULTS,
  );

  return (
    <>
      <Xection spacing="tight">
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

          <Container size="default" padding="default">
            {/* for mobile screen */}
            {/* h-[60vh] md:h-screen */}
            <div
              className="
                relative
                  h-[60vh]
                  md:h-screen
                flex
                md:items-center
                justify-center
                py-24
            "
            >
              <div className="w-full max-w-5xl text-center">
                {/* Badge */}
                <div className="flex justify-center mb-6">
                  <AchievementBadge text={content.badge} />
                </div>

                {/* Desktop */}
                <div className="hidden sm:block">
                  <HeroTitle className="!text-center max-w-3xl mx-auto">
                    {content.title1}
                  </HeroTitle>
                  <HeroTitle className="!text-center max-w-3xl mx-auto">
                    {content.title2}
                  </HeroTitle>
                </div>

                {/* Mobile */}
                <div className="block sm:hidden">
                  <HeroTitle className="!text-center max-w-3xl mx-auto">
                    {content.title1} {content.title2}
                  </HeroTitle>
                </div>

                {/* Description */}
                <BodyText className="mt-3 max-w-[650px] mx-auto !text-center text-gray-600">
                  {content.description}
                </BodyText>

                {/* Button */}
                <div className="mt-10 flex justify-center">
                  <PrimaryButton
                    onClick={() =>
                      document
                        .getElementById("job-listings")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {content.buttonText}
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Xection>
    </>
  );
}
