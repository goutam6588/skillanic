import { useEffect, useState } from "react";

import { courses } from "../data/courses";

import { useCourseFilter } from "../hooks/useCourseFilter";
import CourseFilters from "../../componests/course/CourseFilters";
import CourseGrid from "../../componests/course/CourseGrid";
import EmptyState from "../../componests/course/EmptyState";
import { Navigation } from "../../componests/navigation";
import Xection from "../../componests/common/layout/Xection";
import Container from "../../componests/common/layout/Container";
import { AchievementBadge } from "../../componests/achievement-badge";
import { BodyText, HeroTitle } from "../../componests/ui/Typography";
import { Footer } from "../../componests/Footer";
import { useSanityContent } from "../hooks/useSanityContent";
import { isRenderableCourse } from "../content/validators";
import SEO from "../../componests/SEO";

export default function CoursesPage({
  title = "Explore Our Courses",
  description =
    "Discover courses that help you build the right skills for your future, learn from experienced experts with practical knowledge, and take the next step toward achieving your goals.",
}) {
  const { value: pageContent } = useSanityContent("coursesPage", {
    title,
    description,
  });
  const { value: resolvedCourses } = useSanityContent("courses", courses, {
    collection: true,
    matchBy: ["id"],
    fallbackByIndex: false,
    isValidItem: isRenderableCourse,
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [filters, setFilters] = useState({
    search: "",
    category: "All",
    level: "All",
    mode: "All",
  });

  const filteredCourses = useCourseFilter(resolvedCourses, filters);

  return (
  <>
    <SEO
      title="IT Courses in Bangalore | Job-Oriented IT Training | Skillanic"
      description="Explore job-oriented IT courses in Bangalore at Skillanic. Learn Data Science, Generative AI, Full Stack Development, SAP, Oracle, DevOps, Cloud, Power BI and more with practical training."
      canonical="/courses"
    />

    <div className="antialiased overflow-hidden">
      <Navigation />
      <Xection spacing="tight">
        {/* Main Content */}
        <main>
          <div className="relative overflow-hidden">
            {/* Vertical grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:85px_85px]" />

            {/* Horizontal grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:85px_85px]" />

            <Container size="default" padding="default">
              {/* Badge */}
              <div className="flex justify-center mb-7 pt-24">
                <AchievementBadge text="Courses" />
              </div>

              {/* Page Header */}
              <div className="text-center max-w-5xl mx-auto">
                <HeroTitle className="justify-center !text-center ">
                  {pageContent.title}
                </HeroTitle>

                <BodyText className="mt-3 max-w-[800px] mx-auto !text-center text-gray-600">
                  {pageContent.description}
                </BodyText>
              </div>
              {/* Filters */}
              <div className="mb-10 mt-16">
                <CourseFilters filters={filters} setFilters={setFilters} />
              </div>
            </Container>
          </div>
          <Container size="default" padding="default">
            {/* Course Grid */}
            <div className="pb-16">
              {filteredCourses.length > 0 ? (
                <CourseGrid courses={filteredCourses} />
              ) : (
                <EmptyState />
              )}
            </div>
          </Container>
        </main>
      </Xection>
      <Footer />
        </div>
  </>
);
}
