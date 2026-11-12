import { useModal } from "../../src/context/ModalContext";
import { AchievementBadge } from "../achievement-badge";
import Container from "../common/layout/Container";
import Xection from "../common/layout/Xection";
import { PrimaryButton } from "../ui/PrimaryButton";
import { BodyText, HeroTitle } from "../ui/Typography";
import StatsSection from "./StatsSection";

export function Placements1() {
  const title1 = "Empowering Careers";
  const title2 = "with Industry-Ready Skills";

  const description =
    "500+ students have successfully started their careers through Skillanic with dedicated placement support and industry-focused training.";

  const buttonText = "Get Placement Support";
  const stats = [
    { value: "500+", label: "Students Placed" },
    { value: "100%", label: "Success Rate" },
    { value: "50+", label: "Hiring Partners" },
    { value: "30 LPA", label: "Highest Package" },
  ];

  const { openModal } = useModal();

  return (
    <Xection spacing="tight">
      <div className="relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <Container size="default">
          <div className="relative min-h-screen flex items-center justify-center py-24">
            <div className="max-w-5xl text-center">
              {/* Badge */}
              <div className="mb-8 flex justify-center">
                <AchievementBadge text="Placement Results 2024-2026" />
              </div>

              {/* Heading */}
              <HeroTitle className="!text-center">
                {title1}
                <br />
                {title2}
              </HeroTitle>

              {/* Description */}
              <BodyText className="mt-3 max-w-[800px] mx-auto !text-center text-gray-600">
                {description}
              </BodyText>

              {/* Button */}
              <div className="mt-10 flex justify-center">
                <PrimaryButton onClick={openModal}>{buttonText}</PrimaryButton>
              </div>

              {/* Stats */}
              <div className="mt-20 rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="grid grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={
                        "p-4 sm:p-8 text-center transition-all " +
                        // Right border: odd items on mobile (2-col), all but last on lg (4-col)
                        (index % 2 === 0 ? "border-r border-gray-200 " : "") +
                        "lg:border-r lg:last:border-r-0 " +
                        // Bottom border: first two rows on mobile, none on lg
                        (index < stats.length - 2 ? "border-b border-gray-200 " : "") +
                        "lg:border-b-0"
                      }
                    >
                      <h2 className="text-2xl sm:text-4xl font-semibold text-[#003B73]">
                        {stat.value}
                      </h2>
                      <p className="mt-2 text-sm sm:text-base text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Xection>
  );
}
