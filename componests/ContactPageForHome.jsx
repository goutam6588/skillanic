import React from "react";
import Section from "./common/Section";
import { PrimaryButton } from "./ui/PrimaryButton";
import Xection from "./common/layout/Xection";
import Container from "./common/layout/Container";

export default function ContactPageForHome() {
  return (
    <Xection
      id="ContactPageForHome"
      className="bg-[#FFF5EE] border-t border-#FFC0CB-500"
    >
      {/* <div className="max-w-7xl mx-auto px-6 md:px-10 py-10"> */}
      <Container size="default" padding="default">  

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
          
          {/* Left Column */}
          <div className="space-y-8">
            
            {/* Address */}
            <div className="space-y-2">
              <h3 className="text-[22px] font-semibold text-[#1B1B1B] text-start">
                Address
              </h3>

              <p className="text-[16px] leading-7 text-[#6B6B6B] text-start">
                1st Floor, SVM Complex, #1, Marathahalli Bridge,
                <br />
                Near Skywalk, Bengaluru, Karnataka 560037
              </p>
            </div>

            {/* Business Hours */}
            <div className="space-y-2">
              <h3 className="text-[22px] font-semibold text-[#1B1B1B] text-start">
                Business Hours
              </h3>

              <p className="text-[16px] text-[#6B6B6B] text-start">
                Monday – Saturday: 9:00 AM – 8:00 PM
              </p>

              <p className="text-[16px] text-[#6B6B6B] text-start">
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-8">
            
            {/* Phone Numbers */}
            <div className="space-y-2">
              <h3 className="text-[22px] font-semibold text-[#1B1B1B] text-start">
                Phone Numbers
              </h3>

              <div className="flex flex-wrap items-center gap-3 text-[16px] text-[#6B6B6B] text-start">
                <a
                  href="tel:+917829999278"
                  className="hover:text-[#003B82] transition-colors"
                >
                  +91 78299 99278
                </a>

                <span>|</span>

                <a
                  href="tel:+917760003670"
                  className="hover:text-[#003B82] transition-colors"
                >
                  +91 77600 03670
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2 text-start">
              <h3 className="text-[22px] font-semibold text-[#1B1B1B] text-start">
                Email
              </h3>

              <a
                href="mailto:info@skillanic.com"
                className="
                  text-[16px]
                  text-[#6B6B6B]
                  hover:text-[#003B82]
                  transition-colors
                "
              >
                info@skillanic.com
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between text-start">
            
            <div className="space-y-3">
              <h3 className="text-[24px] font-semibold text-[#1B1B1B] text-start">
                Skillanic
              </h3>

              <p className="text-[16px] leading-7 text-[#6B6B6B]">
                SVM Complex, Marathahalli Bridge,
                <br />
                Bengaluru — 560037
              </p>
            </div>

            <div className="pt-6">
              <a
                href="https://maps.google.com/maps/search/SVM+Complex,+Marathahalli+Bridge,+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="
                    bg-[#003B82]
                    hover:bg-[#002D63]
                    text-white
                    text-[14px]
                    font-medium
                    px-7
                    py-3
                    rounded-xl
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                >
                  OPEN IN GOOGLE MAP
                </button>
              </a>
            </div>

          </div>
        </div>
      </Container>
    </Xection>
  );
}