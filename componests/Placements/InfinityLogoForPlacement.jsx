import React from "react";

import logo1 from "../../src/assets/Company logos/c logo 2.png";
import logo2 from "../../src/assets/Company logos/c logo 3.png";
import logo3 from "../../src/assets/Company logos/c logo 4.png";
import logo4 from "../../src/assets/Company logos/c logo 5.png";
import logo5 from "../../src/assets/Company logos/c logo 6.png";
import logo6 from "../../src/assets/Company logos/c logo 7.png";
import logo7 from "../../src/assets/Company logos/c logo 8.png";
import logo8 from "../../src/assets/Company logos/c logo 9.png";
import logo9 from "../../src/assets/Company logos/c logo 10.png";
import logo10 from "../../src/assets/Company logos/company logo 1.png";
import Xection from "../common/layout/Xection";
import Container from "../common/layout/Container";

export default function InfinityLogoForPlacement({
  speed = 50,
  title = "100+ Companies Trust Skillanic Graduates",
  des = "From startups to global enterprises",
}) {
  const logos = [
    { name: "Deloitte", imagePath: logo2 },
    { name: "Bosch", imagePath: logo3 },
    { name: "Capgemini", imagePath: logo4 },
    { name: "Tech Mahindra", imagePath: logo5 },
    { name: "Accenture", imagePath: logo6 },
    { name: "IBM", imagePath: logo7 },
    { name: "Infosys", imagePath: logo8 },
    { name: "TCS", imagePath: logo9 },
    { name: "Wipro", imagePath: logo10 },
    { name: "HCL", imagePath: logo1 },
  ];

  return (
    <Xection id="inginite-logo-slider">
      <Container size="default" padding="default">
        {/* Heading */}
        <h2
          className="
            text-[#003B82]
            font-semibold
            text-[24px]
            md:text-[32px]
            leading-tight
            "
        >
          {title}
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[#6B7280] text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed">
          {des}
        </p>

        {/* Infinite Carousel */}
        <div className="overflow-hidden">
          <style>{`
            @keyframes scroll {
            from {
                transform: translateX(0);
            }

            to {
                transform: translateX(-50%);
            }
            }

            .scroll-animation {
            animation: scroll ${speed}s linear infinite;
            }
        `}</style>

          <div className="flex w-max scroll-animation mt-16">
            {/* First set */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 md:h-20 mx-4 md:mx-6"
              >
                <img
                  src={logo.imagePath}
                  alt={logo.name}
                  className="max-h-full max-w-[150px] md:max-w-[180px] object-contain grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}

            {/* Duplicate set */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 md:h-20 mx-4 md:mx-6"
              >
                <img
                  src={logo.imagePath}
                  alt={logo.name}
                  className="max-h-full max-w-[150px] md:max-w-[180px] object-contain grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Xection>
  );
}
