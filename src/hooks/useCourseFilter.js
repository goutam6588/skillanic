import { useMemo } from "react";
import { filterCourses } from "../utils/filterCourses";

export function useCourseFilter(courses, filters) {
  const filteredCourses = useMemo(() => {
    return filterCourses(courses, filters);
  }, [courses, filters]);

  return filteredCourses;
}