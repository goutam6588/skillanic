export function filterCourses(courses, filters) {
  return courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    const matchesCategory =
      filters.category === "All" || course.category === filters.category;

    const matchesLevel =
      filters.level === "All" || course.level === filters.level;

    // Filter by mode
    const matchesMode = filters.mode === "All" || course.mode === filters.mode;

    return matchesSearch && matchesCategory && matchesLevel && matchesMode;
  });
}
