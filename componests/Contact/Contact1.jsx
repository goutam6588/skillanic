import { useModal } from "../../src/context/ModalContext";
import { AchievementBadge } from "../achievement-badge";
import Container from "../common/layout/Container";
import Xection from "../common/layout/Xection";
import { PrimaryButton } from "../ui/PrimaryButton";
import { BodyText, HeroTitle } from "../ui/Typography";
import { useSanityContent } from "../../src/hooks/useSanityContent";

export function Contact1() {
  const title1 = "We help you learn and";
  const title2 = "succeed";

  const des =
    "Whether you're a student, instructor, or business partner — our team is ready to support your learning journey.";
  const buttonText = "GET FREE COUNSELLING";
  const { openModal } = useModal();
  const { value: content } = useSanityContent("contactPage.hero", {
    badge: "Contact",
    title1,
    title2,
    description: des,
    buttonText,
  });

  return (
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
          <div
            className="
                relative
                h-[60vh] md:h-screen
                flex
                justify-center
                md:items-center
                py-24
            "
          >
            <div className="w-full max-w-5xl text-center">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <AchievementBadge text={content.badge} />
              </div>

              {/* Heading */}
              <HeroTitle className="!text-center max-w-3xl mx-auto">
                {content.title1}
              </HeroTitle>
              <HeroTitle className="!text-center max-w-3xl mx-auto">
                {content.title2}
              </HeroTitle>

              {/* Description */}
              <BodyText className="mt-3 !text-center text-gray-600 max-w-xl mx-auto">
                {content.description}
              </BodyText>

              {/* Button */}
              <div className="mt-10 flex justify-center">
                <PrimaryButton onClick={openModal}>{content.buttonText}</PrimaryButton>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Xection>
  );
}
