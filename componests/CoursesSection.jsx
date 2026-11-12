import React from "react";
import { SectionHeader } from "./SectionHeader";
import { CoursesList } from "./CoursesList";
import { X } from "lucide-react";
import Container from "./common/layout/Container";
import Xection from "./common/layout/Xection";
import { useSanityContent } from "../src/hooks/useSanityContent";

function CoursesSection() {
  const { value: content } = useSanityContent("homePage.coursesSection", {
    title: "Courses That Help You Land Real Jobs",
    subtitle: "Industry-aligned curriculum focused on practical, real-world skills, delivered by seasoned professionals with 15+ years of experience to prepare you for high-demand job opportunities.",
  });
  return (
    <Xection id="CoursesSection">
      {/* <Container size="default" padding="default"> */}
      <SectionHeader
        title={content.title}
        subtitle={content.subtitle}
      />

      <div>
        <CoursesList />
      </div>
      {/* </Container> */}
    </Xection>
  );
}

export default CoursesSection;
