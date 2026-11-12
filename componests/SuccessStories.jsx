"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { SuccessStoryCard } from "./SuccessStoryCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BodyText, HeroTitle } from "./ui/Typography";
import { PrimaryButton } from "./ui/PrimaryButton";
import Xection from "./common/layout/Xection";
import Container from "./common/layout/Container";
import { useNavigate } from "react-router-dom";
import { useSanityContent } from "../src/hooks/useSanityContent";
import { isRenderablePlacement } from "../src/content/validators";

const STORIES = [
  {
    id: "1",
    salary: "₹13 LPA",
    studentName: "Adithyan",
    studentRole: "React js developer",
    studentImage:
      "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786740692/Adithyan_dwojst.png",
    company: "Ascendion",
    companyLogo: null,
  },
  {
    id: "2",
    salary: "₹15 LPA",
    studentName: "Buradakunta Haritha",
    studentRole: "Data scientist",
    studentImage:
      "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786740827/Buradakunta_Haritha_pilbay.png",
    company: "Codincity",
    companyLogo: null,
  },
  {
    id: "3",
    salary: "₹13 LPA",
    studentName: "Shamim Akther Mozumder",
    studentRole: "Data scientist",
    studentImage:
      "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786740882/SHAMIM_AKTHER_MOZUMDER_hugkpo.png",
    company: "Ganit Inc",
    companyLogo: null,
  },
  {
    id: "4",
    salary: "₹12 LPA",
    studentName: "Laki Mohanty",
    studentRole: "Data Engineering",
    studentImage:
      "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786740929/Laki_Mohanty_gwu4om.png",
    company: "Scale Healthcare",
    companyLogo: null,
  },
];

export function SuccessStories({
  title = "Success Stories from Our Recent Placements",
  description = "Real students. Real career growth. Explore how Skillanic learners are achieving high-paying roles in top companies through industry-ready skills.",
  buttonLabel = "EXPLORE STORIES",
  buttonUrl = "/placements",
}) {
  const navigate = useNavigate();
  const { value: stories } = useSanityContent("placementStories", STORIES, {
    collection: true,
    matchBy: ["id"],
    fallbackByIndex: false,
    isValidItem: isRenderablePlacement,
  });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const frame = window.requestAnimationFrame(onSelect);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      window.cancelAnimationFrame(frame);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    // shadow-[0_10px_40px_rgba(0,0,0,0.13)]
    <Xection>
      <div className="relative min-h-[530px] py-8 overflow-hidden shadow-[0_-4px_10px_rgba(0,0,0,0.05),0_4px_10px_rgba(0,0,0,0.03)]">
        {/* Vertical grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:85px_85px]" />

        {/* Horizontal grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:85px_85px]" />

        <Container size="default" padding="lg">
        <div className="relative  overflow-hidden ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start sm:mt-8">
            {/* Left Content */}
            <div className=" sm:space-y-8 flex flex-col items-start">
              <div>
                <HeroTitle>{title}</HeroTitle>
                <br />
                <BodyText className="max-w-xl">{description}</BodyText>
              </div>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <PrimaryButton onClick={() => navigate(buttonUrl)} className="px-5 sm:px-6 py-3 transition-colors duration-300 mt-4">
                  {buttonLabel}
                </PrimaryButton>
              </div>
            </div>

            {/* Right Carousel */}
            <div className="space-y-4 sm:space-y-6 w-full order-2 lg:order-none">
              {/* Carousel Container */}
              <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
                <div className="flex">
                  {stories.map((story) => (
                    <div key={story.id} className="min-w-full">
                      <SuccessStoryCard
                        salary={story.salary}
                        studentName={story.studentName}
                        studentRole={story.studentRole}
                        studentImage={story.homeImage || story.studentImage}
                        company={story.company}
                        companyLogo={story.companyLogo}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-end gap-4">
                <button
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>

                <button
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  className=" w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  aria-label="Next story"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
          {/* Mobile button */}
          <div className="lg:hidden flex justify-start">
            <PrimaryButton onClick={() => navigate(buttonUrl)} className="px-5 sm:px-6 py-3 transition-colors  duration-300 mt-5">
              {buttonLabel}
            </PrimaryButton>
          </div>
        </div>
        </Container>
      </div>
    </Xection>
  );
}