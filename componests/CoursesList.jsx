import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import CourseCard from "./course/CourseCard";
import { courses } from "../src/data/courses";
import { useSanityContent } from "../src/hooks/useSanityContent";
import { isRenderableCourse } from "../src/content/validators";


const INITIAL_COUNT = 3;
const LOAD_MORE_COUNT = 6;

export function CoursesList({
  buttonText="EXPLORE ALL COURSES"
}) {
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

  const navigate = useNavigate();
  // const courses = [
  //   {
  //     id: "1",
  //     title: "Full Stack Web Development",
  //     description:
  //       "Learn modern frontend and backend development using React, Node.js, Express, and MongoDB with real-world projects.",
  //     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  //     mode: "Online",
  //     duration: "6 Months",
  //   },
  //   {
  //     id: "2",
  //     title: "UI/UX Design Masterclass",
  //     description:
  //       "Master user interface and user experience design principles using Figma, wireframing, prototyping, and design systems.",
  //     image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  //     mode: "Offline",
  //     duration: "4 Months",
  //   },
  //   {
  //     id: "3",
  //     title: "Digital Marketing Program",
  //     description:
  //       "Build expertise in SEO, social media marketing, Google Ads, and content strategy to grow brands online.",
  //     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  //     mode: "Hybrid",
  //     duration: "3 Months",
  //   },
  //   {
  //     id: "4",
  //     title: "Data Science & Analytics",
  //     description:
  //       "Learn Python, machine learning, data visualization, and analytics tools through hands-on case studies and projects.",
  //     image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  //     mode: "Online",
  //     duration: "8 Months",
  //   },
  //   {
  //     id: "5",
  //     title: "Mobile App Development",
  //     description:
  //       "Create cross-platform mobile applications using React Native and modern app development practices.",
  //     image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  //     mode: "Online",
  //     duration: "5 Months",
  //   },
  //   {
  //     id: "6",
  //     title: "Cloud Computing & DevOps",
  //     description:
  //       "Understand AWS, Docker, Kubernetes, CI/CD pipelines, and cloud deployment strategies for scalable applications.",
  //     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  //     mode: "Hybrid",
  //     duration: "7 Months",
  //   },
  // ];

  const [visibleCount] = useState(INITIAL_COUNT);

  const visibleCourses = resolvedCourses.slice(0, visibleCount);

  return (
    <>
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
            {visibleCourses.map((course, index) => (
              <div
                key={course.id}
                className="course-card-animate"
                style={{
                  animationDelay:
                    index >= visibleCount - LOAD_MORE_COUNT
                      ? `${(index % LOAD_MORE_COUNT) * 80}ms`
                      : "0ms",
                }}
              >
                <CourseCard
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  image={course.image}
                  mode={course.mode}
                  duration={course.duration}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 md:mt-16 px-4 md:px-0">
            <button
              onClick={() => navigate("/courses")}
              className="w-full max-w-sm sm:w-auto px-6 py-2.5 md:px-8 md:py-3 border-2 border-gray-600 text-gray-900 text-sm md:text-base font-bold rounded-[14px] hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}