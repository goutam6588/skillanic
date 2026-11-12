import CourseCard from "./CourseCard";

export default function CourseGrid({ courses }) {
  return (
    <div
      className="
        grid
        gap-12
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          description={course.description}
          image={course.image}
          mode={course.mode}
          duration={course.duration}
        />
      ))}
    </div>
  );
}
