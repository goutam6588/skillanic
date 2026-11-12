"use client";

import { AchievementBadge } from "./achievement-badge";
import { ArrowUpRight, Star } from "lucide-react";
import { BodyText, HeroTitle } from "./ui/Typography";

import Container from "./common/layout/Container";
import Stack from "./common/layout/Stack";
import Inline from "./common/layout/Inline";
import { PrimaryButton } from "./ui/PrimaryButton";
import { CgPlayButton } from "react-icons/cg";

// import heroImage from "../src/assets/normal images/hero-image.png";
import bookImage from "../src/assets/Hero section Icons/hero logo 2.png";
import AwardImage from "../src/assets/Hero section Icons/Group.png";
import user1 from "../src/assets/Hero section Review image/image 16.png";
import user2 from "../src/assets/Hero section Review image/image 15.png";
import user3 from "../src/assets/Hero section Review image/image 14.png";
import user4 from "../src/assets/Hero section Review image/image 13.png";
import user5 from "../src/assets/Hero section Review image/image 16.png";
// No longer imports EnquiryModal — the global instance at AppRouter handles it
import { useModal } from "../src/context/ModalContext";
import { useOfferModal } from "../src/context/OfferModalContext";
import { useNavigate } from "react-router-dom";
import { useSanityContent } from "../src/hooks/useSanityContent";
import { getSanityImageUrl } from "../src/sanity/image";


const heroData = {
  badge: "#1 IT Training Institute in Marathahalli, Bangalore",
  heading: "Transform Your Career with Industry-Ready Skills",
  description:
    "Placement-focused IT training with real-world projects, expert mentors & dedicated career support. Learn from industry professionals with 15+ years of experience.",
  buttons: {
    primary: "EXPLORE COURSES",
    secondary: "GET OFFER",
  },
  stats: {
    studentsPlaced: "5,000+ Students Placed",
    hiringSupport: { value: "100%", label: "Hiring Support" },
    rating: { value: "4.9", label: "Google Rating" },
  },
  floatingCards: {
    courses: { value: "20+", label: "Courses Available" },
    placement: { value: "100%", label: "Placement Assistance" },
  },
  images: {
    hero: { src: "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786730484/home_hiehqw.png", alt: "Professional working on laptop" },
    book: { src: bookImage, alt: "bookImage" },
    award: { src: AwardImage, alt: "AwardImage" },
    reviewUsers: [user1, user2, user3, user4, user5],
  },
};


export function HeroSection() {

  const { openModal } = useModal();
  const { openOfferModal } = useOfferModal();
  const navigate = useNavigate();
  const { value: content } = useSanityContent("homePage.hero", heroData);

  console.log({content});

  const HeroButtons = (
    <Inline
      gap="xxl"
      className="flex-col sm:flex-row pt-2 sm:pt-4 w-full sm:w-auto lg:pt-8 gap-6 sm:gap-xxl"
    >
      <button
        onClick={() => navigate("/courses")}
        className="
          group
          w-full sm:w-auto  
          justify-center
          h-[44px]
          lg:px-4
          md:px-4
          bg-[#ED1C24]
          text-white
          text-[16px] sm:text-[20px]
          uppercase
          rounded-none
          border-0
          flex items-center gap-2
          transition-all duration-300 ease-out
          hover:bg-[#c91219]
          hover:-translate-y-[1px]
          hover:shadow-[0_6px_20px_rgba(237,28,36,0.20)]
          active:translate-y-0
          active:shadow-none
          active:scale-[0.98]
        "
      >
        {content.buttons.primary}
        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2.5} />
      </button>

      <button
        onClick={openOfferModal}
        className="
          group
          w-full sm:w-auto
          h-[44px]
          lg:px-4
          md:px-4
          bg-white
          text-black
          text-[16px] sm:text-[20px]
          uppercase
          rounded-none
          border
          border-red-400
          transition-all duration-300 ease-out
          hover:bg-gray-200
          hover:-translate-y-[1px]
          active:translate-y-0
          active:shadow-none
          active:scale-[0.98]
        "
      >
        {content.buttons.secondary}
      </button>
    </Inline>
  );

  return (
    // max-[768px]:pt-6 [@media(max-height:768px)]:pt-6 ===for small screen
    <div id="hero">
      <div className="relative min-h-screen overflow-hidden">
        {/* Vertical grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:85px_85px] pointer-events-none" />

        {/* Horizontal grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:85px_85px] pointer-events-none" />


        <Container
          size="default"
          padding="default"
          // className="max-[768px]:mt-34 [@media(max-height:768px)]:mt-34 pt-28 md:pt-0 md:mt-20 lg:mt-36 "
          className="mt-0 max-[768px]:mt-0 pt-28 md:pt-0 md:mt-20 lg:mt-36"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
            <Stack
              gap="md"
              align="start"
              className="justify-center text-left order-2 md:order-1 max-w-[720px]"
            >
              {/* Badge */}
              <div>
                <AchievementBadge text={content.badge} />
              </div>

              {/* Main heading */}
              <HeroTitle className="max-w-[1050px] text-[#0B3B82]">
                {content.heading}
              </HeroTitle>

              {/* Description */}
              <BodyText className="max-w-[550px] ">
                {content.description}
              </BodyText>

              <div className="hidden md:block">{HeroButtons}</div>

              <Inline
                gap="md"
                align="center"
                className="hidden lg:flex flex-row lg:pt-24 w-full max-[768px]:pt-8 [@media(max-height:768px)]:pt-8"
              >
                {/* Students Placed */}
                <div className="flex-1 max-w-[170px]">
                  <Stack gap="sm">
                    <div className="text-sm text-gray-900">
                      {content.stats.studentsPlaced}
                    </div>

                    <Inline gap="sm" className="-space-x-8 mx-1 ">
                      {[...Array(4)].map((_, i) => {
                        const images = content.images.reviewUsers;
                        return (
                          <div
                            key={i}
                            className="w-11 h-11 rounded-full border-1 border-black overflow-hidden"
                          >
                            <img
                              src={images[i]}
                              alt={`user-${i}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        );
                      })}

                      <div className="w-11 h-11 rounded-full bg-red-500 border-1 border-black flex items-center justify-center text-white text-xs font-bold">
                        +
                      </div>
                    </Inline>
                  </Stack>
                </div>

                {/* Hiring Support */}
                <div className="flex-1 flex items-center gap-3 lg:border-l-2 lg:border-red-500 lg:pl-6 max-w-[150px]">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{content.stats.hiringSupport.value}</div>
                    <div className="text-sm text-gray-900">{content.stats.hiringSupport.label}</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex-1 flex lg:border-l-2 lg:border-red-500 lg:pl-6 max-w-[150px]">
                  <Stack gap="sm">
                    <Inline gap="xs">
                      {[...Array(5)].map((_, i) => {
                        if (i < 4) {
                          return (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-red-500 text-red-500"
                            />
                          );
                        }
                        return (
                          <div key={i} className="relative w-4 h-4">
                            <Star className="absolute w-4 h-4 text-red-500" />
                            <div className="absolute overflow-hidden w-1/2">
                              <Star className="w-4 h-4 fill-red-500 text-red-500" />
                            </div>
                          </div>
                        );
                      })}
                    </Inline>

                    <div className="text-sm text-gray-900">
                      {content.stats.rating.value} {content.stats.rating.label}
                    </div>
                  </Stack>
                </div>
              </Inline>
            </Stack>

            {/* ── Right Column — Hero Image ──────────────────────────────────────── */}
            <div className="relative flex flex-col justify-center items-center order-2 md:order-2">
              {/* Main image */}

              <div
                className="
                  relative
                  w-full
                  max-w-[530px]
                  h-[450px]
                  md:h-[510px]
                  lg:h-[620px]
                  lg:w-[82%]

                  max-[768px]:h-[380px]      
                  [@media(max-height:768px)]:h-[550px]


                  overflow-hidden
                  rounded-b-[36px]
                  bottom-3
                "
              //  shadow-xl
              // rounded-[36px]
              >
                {/* img tag — change ② */}
                <img
                  src={getSanityImageUrl(content.images.hero.src, heroData.images.hero.src)}
                  alt={content.images.hero.alt}
                  className="w-full h-full object-cover rounded-[36px] lg:mt-4 max-[768px]:object-top"
                />
              </div>

              {/* Floating Card - Courses */}
              <div
                className="
                    absolute
                    top-2 right-2
                    sm:top-14 sm:-right-2
                    bg-white
                    rounded-xl sm:rounded-2xl
                    border border-gray-100
                    w-[140px] sm:w-[220px]
                    min-h-[50px] sm:h-[76px]
                    px-2 sm:px-3
                    py-2
                    shadow-[0_0_10px_rgba(0,0,0,0.25)]
                    z-10
                    m-1
                  "
              >
                <Inline gap="sm">
                  <img
                    src={content.images.book.src}
                    alt={content.images.book.alt}
                    className="w-5 h-6 sm:w-7 sm:h-9 flex-shrink-0"
                  />

                  <Stack gap="none" align="start">
                    <div className="text-base sm:text-2xl font-bold text-black-900 leading-none">
                      {content.floatingCards.courses.value}
                    </div>

                    <div className="text-[9px] sm:text-base text-black-900 leading-tight">
                      {content.floatingCards.courses.label}
                    </div>
                  </Stack>
                </Inline>
              </div>

              {/* Floating Card - Placement */}
              <div
                className="
                  absolute
                  bottom-4 left-2
                  sm:bottom-24 sm:-left-10
                  bg-white
                  rounded-xl sm:rounded-2xl
                  border border-gray-100
                  w-[150px] sm:w-[230px]
                  min-h-[50px] sm:h-[76px]
                  px-2 sm:px-3
                  py-2
                  shadow-[0_0_10px_rgba(0,0,0,0.25)]
                  z-10
                  m-2
                "
              >
                <Inline gap="sm">
                  <img
                    src={content.images.award.src}
                    alt={content.images.award.alt}
                    className="w-6 h-6 sm:w-9 sm:h-9 flex-shrink-0"
                  />

                  <Stack gap="none" align="start">
                    <div className="text-base sm:text-2xl font-bold text-black-900 leading-none">
                      {content.floatingCards.placement.value}
                    </div>

                    <div className="text-[9px] sm:text-base text-black-900 leading-tight">
                      {content.floatingCards.placement.label}
                    </div>
                  </Stack>
                </Inline>
              </div>
            </div>
          </div>
          {/* Mobile CTA Buttons */}
          <div className="md:hidden w-full mt-6 px-4">{HeroButtons}</div>
        </Container>
      </div>
    </div>
  );
}
