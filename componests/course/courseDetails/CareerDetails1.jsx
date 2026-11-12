import React from "react";
import Xection from "../../common/layout/Xection";
import Container from "../../common/layout/Container";
import { AchievementBadge } from "../../achievement-badge";
import { BodyText, HeroTitle } from "../../ui/Typography";
import { PrimaryButton } from "../../ui/PrimaryButton";

export default function CareerDetails1({ course }) {
  const badge = "course";

  const title1 = "Launch Your Career in";
  const title2 = course;

  const metrics = [
    {
      id: 1,
      label: "Certificate",
      minWidth: "min-w-[180px]",
      // icon: (
      //   <svg
      //     className="w-5 h-5 text-yellow-400 fill-current"
      //     viewBox="0 0 20 20"
      //   >
      //     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      //   </svg>
      // ),
    },
    {
      id: 2,
      label: "Placement Support",
      minWidth: "min-w-[200px]",
      // icon: (
      //   <svg
      //     className="w-5 h-5 text-red-500 fill-none stroke-current stroke-2"
      //     viewBox="0 0 24 24"
      //   >
      //     <path
      //       strokeLinecap="round"
      //       strokeLinejoin="round"
      //       d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      //     />
      //   </svg>
      // ),
    },
    {
      id: 3,
      label: "300+ Placements",
      minWidth: "min-w-[180px]",
      // icon: (
      //   <svg
      //     className="w-5 h-5 text-red-500 fill-none stroke-current stroke-2"
      //     viewBox="0 0 24 24"
      //   >
      //     <path
      //       strokeLinecap="round"
      //       strokeLinejoin="round"
      //       d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002 2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      //     />
      //   </svg>
      // ),
    },
  ];

  const des =
    "Turn Your Creativity into a Successful UI/UX Career with Practical Learning and Real-World Experience.";

  const _features = ["Certificate", "Placement Support", "Real Projects"];

  return (
    <Xection spacing="tight">
      <div className="relative lg:min-h-screen overflow-hidden">
        {/* Vertical Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:85px_85px]" />

        {/* Horizontal Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:85px_85px]" />

        <Container>
          <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center py-24 text-center">
            <div className="mb-8">
              <AchievementBadge text={badge} />
            </div>

            {/* Desktop */}
            <div className="hidden sm:block">
              <HeroTitle className="!text-center max-w-3xl mx-auto">
                {title1}
              </HeroTitle>
              <HeroTitle className="!text-center max-w-3xl mx-auto">
                {title2}
              </HeroTitle>
            </div>

            {/* Mobile */}
            <div className="block sm:hidden">
              <HeroTitle className="!text-center max-w-3xl mx-auto">
                {title1} {title2}
              </HeroTitle>
            </div>

            <BodyText className="mt-3 max-w-[600px] mx-auto !text-center text-gray-600">
              {des}
            </BodyText>

            <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 px-4 sm:flex-row">
              {metrics.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-center gap-2 rounded-xl border border-gray-100 bg-white px-5 py-3 shadow-sm w-full sm:w-auto ${item.minWidth}`}
                >
                  {item.icon}
                  <span className="text-xs font-bold text-gray-800 md:text-sm">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </Xection>
  );
}
