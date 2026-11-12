import React, { useState, useEffect } from "react";
import { Navigation } from "../../componests/navigation";
import Xection from "../../componests/common/layout/Xection";
import { Footer } from "../../componests/Footer";
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import { BodyText, HeroTitle } from "../../componests/ui/Typography";
import { PrimaryButton } from "../../componests/ui/PrimaryButton";
import Container from "../../componests/common/layout/Container";
import { AchievementBadge } from "../../componests/achievement-badge";
import CareerDetails3 from "../../componests/course/courseDetails/CareerDetails3";
import { WhatOurAlumniSay } from "../../componests/WhatOurAlumniSay";
import CTASection from "../../componests/Gentric/CTASection";
import { FAQ } from "../../componests/FAQ";
import { useModal } from "../context/ModalContext";
import { Clock, Monitor, CheckCircle2, Download } from "lucide-react";
import { useSanityContent } from "../hooks/useSanityContent";
import { isRenderableCourse } from "../content/validators";
import { sanityClient, isSanityConfigured } from "../sanity/client";
import SEO from "../../componests/SEO";

export default function CareerDetails() {
  const { id } = useParams();
  const { openModal } = useModal();
  const { value: resolvedCourses } = useSanityContent("courses", courses, {
    collection: true,
    matchBy: ["id"],
    fallbackByIndex: false,
    isValidItem: isRenderableCourse,
  });

  const course = resolvedCourses.find((item) => String(item.id) === id);
const courseTitle = course?.title || "IT Course";

const seoTitle =
  `${courseTitle} Course in Bangalore | Skillanic`;

const seoDescription =
  course?.seoDescription ||
  `Learn ${courseTitle} with practical training, real-world projects and career-focused guidance at Skillanic, an IT training institute in Bangalore.`;

const seoCanonical =
  `/courses/${course?.id || id}`;

const courseImage =
  course?.image ||
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/q_auto:best,f_auto/v1786481384/ak_yiq5wg.png";
  
  const courseSchema = course
  ? {
      "@context": "https://schema.org",
      "@type": "Course",

      name: course.title,

      description:
        course.seoDescription ||
        course.detailDescription ||
        course.description,

      url: `https://skillanic.com/courses/${course.id}`,

      image: course.image
        ? [course.image]
        : undefined,

      provider: {
        "@type": "EducationalOrganization",
        name: "Skillanic Technologies",
        url: "https://skillanic.com",
      },

      inLanguage: "en-IN",

      educationalLevel: course.level || undefined,

      timeRequired: course.duration || undefined,

      courseMode: course.mode || undefined,
    }
  : null;
  // ── Direct Sanity fetch for syllabusUrl ────────────────────────────────
  // Use course.sanityId (_id) — always a guaranteed unique match.
  // Falls back to title match if sanityId isn't available yet.
  // useCdn:false bypasses CDN so newly uploaded PDFs appear instantly.
  const [syllabusUrl, setSyllabusUrl] = useState(null);

  useEffect(() => {
    if (!isSanityConfigured || !sanityClient || !course) return;
    let cancelled = false;

    const sanityId = course.sanityId;
    const query = sanityId
      ? `*[_type == "course" && _id == $sanityId][0]{"syllabusUrl": syllabusFile.asset->url}`
      : `*[_type == "course" && title == $title][0]{"syllabusUrl": syllabusFile.asset->url}`;
    const params = sanityId
      ? { sanityId }
      : { title: course.title ?? "" };

    sanityClient
      .withConfig({ useCdn: false })
      .fetch(query, params)
      .then((result) => {
        if (!cancelled) setSyllabusUrl(result?.syllabusUrl ?? null);
      })
      .catch(() => {});

    return () => { cancelled = true; };
  }, [course]);


  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Course not found.
      </div>
    );
  }

  return (
  <>
    <SEO
      title={seoTitle}
      description={seoDescription}
      canonical={seoCanonical}
      image={courseImage}
      type="article"
      structuredData={courseSchema}
    />

    <div className="antialiased">
      <Navigation />

      {/* ── Hero Banner ──────────────────────────────────────────────────── */}
      <div className="h-screen pt-[40px] sm:pt-[50px] lg:pt-[90px] flex flex-col">
        <Xection spacing="none" className="flex-1">
          {/* Grid lines — same as site hero */}
          <div className="relative overflow-hidden h-full">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:85px_85px]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:85px_85px]" />

            <Container className="h-full">
              <div className="relative h-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10">

                {/* Left — text */}
                <div className="flex flex-col items-start gap-6 order-2 md:order-1">
                  <AchievementBadge text="Course" />

                  <HeroTitle>
                    {course.title}
                  </HeroTitle>

                  <BodyText className="text-gray-500 max-w-lg">
                    {course.description}
                  </BodyText>

                  {/* Meta pills */}
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 border border-gray-200 bg-white rounded-full px-4 py-1.5 text-sm text-gray-600 font-medium shadow-sm">
                      <Clock className="w-4 h-4 text-[#ED1C24]" />
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 border border-gray-200 bg-white rounded-full px-4 py-1.5 text-sm text-gray-600 font-medium shadow-sm">
                      <Monitor className="w-4 h-4 text-[#ED1C24]" />
                      {course.mode}
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <PrimaryButton onClick={openModal} className="w-full sm:w-auto">
                      Enroll Now
                    </PrimaryButton>

                    {syllabusUrl && (
                      <a
                        href={syllabusUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="group w-full sm:w-auto h-10 sm:h-11 md:h-12 px-4 sm:px-6 md:px-8 inline-flex items-center justify-center gap-2 bg-white text-black text-sm sm:text-base md:text-lg font-medium uppercase tracking-[0.02em] rounded-none border border-red-400 shadow-none cursor-pointer transition-all duration-300 ease-out hover:bg-gray-100 hover:border-red-500 hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(237,28,36,0.12)] active:translate-y-0 active:scale-[0.98]"
                      >
                        <Download className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                        <span>Download Syllabus</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right — image */}
                <div className="flex justify-center order-1 md:order-2">
                  <div className="w-full max-w-md h-72 md:h-96 rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </Container>
          </div>
        </Xection>
      </div>

      {/* ── About + What You'll Learn ─────────────────────────────────────── */}
      <Xection>
        <Container>

          {/* About */}
          {/* <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-3">
              About This Course
            </h2>
            <div className="w-10 h-1 bg-[#ED1C24] mb-5" />
            <BodyText className="text-gray-600 max-w-3xl leading-8">
              {course.detailDescription || course.description}
            </BodyText>
          </div> */}

          {/* What You'll Learn */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-3">
              {course.learnTitle}
            </h2>
            <div className="w-10 h-1  mb-8" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-start">
              {course.learn.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 p-5 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-shadow duration-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#ED1C24] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      {item.title}
                    </p>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </Container>
      </Xection>

      {/* ── Why Choose Skillanic ──────────────────────────────────────────── */}
      <CareerDetails3 />

      {/* ── Alumni, FAQ, CTA ──────────────────────────────────────────────── */}
      <Container>
        <WhatOurAlumniSay />
        <FAQ />
        <CTASection />
      </Container>

      <Footer />
        </div>
  </>
);
}
