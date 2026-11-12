const nonBlank = (value) => typeof value === "string" && value.trim().length > 0;
const hasImage = (value) => nonBlank(value) || Boolean(value?.asset);

export const isRenderableCourse = (course) =>
  course != null &&
  (typeof course.id === "number" || nonBlank(course.id)) &&
  nonBlank(course.title) &&
  nonBlank(course.duration) &&
  nonBlank(course.mode) &&
  nonBlank(course.description) &&
  hasImage(course.image) &&
  Array.isArray(course.learn) &&
  course.learn.length > 0;

export const isRenderableTrainer = (trainer) =>
  trainer != null && nonBlank(trainer.name) && hasImage(trainer.image);

export const isRenderableAlumni = (testimonial) =>
  testimonial != null &&
  nonBlank(testimonial.name) &&
  nonBlank(testimonial.testimonial) &&
  hasImage(testimonial.image);

export const isRenderableVideoTestimonial = (testimonial) =>
  testimonial != null &&
  nonBlank(testimonial.name) &&
  (nonBlank(testimonial.videoUrl) || hasImage(testimonial.image));

export const isRenderablePlacement = (story) =>
  story != null &&
  nonBlank(story.studentName) &&
  nonBlank(story.salary) &&
  nonBlank(story.company) &&
  hasImage(story.studentImage);

export const isRenderableFaq = (faq) =>
  faq != null && nonBlank(faq.question) && nonBlank(faq.answer);

export const isRenderableGalleryItem = (item) =>
  item != null && nonBlank(item.category) && hasImage(item.img);

export const isRenderableCareerJob = (job) =>
  job != null &&
  (typeof job.id === "number" || nonBlank(job.id)) &&
  nonBlank(job.title) &&
  nonBlank(job.company) &&
  nonBlank(job.description);

export const isRenderableCareerValue = (value) =>
  value != null && nonBlank(value.title) && nonBlank(value.description);

export const isRenderableStructuredCareerJob = (job) =>
  job != null &&
  (typeof job.id === "number" || nonBlank(job.id)) &&
  nonBlank(job.title) &&
  nonBlank(job.description) &&
  nonBlank(job.datePosted) &&
  nonBlank(job.validThrough) &&
  nonBlank(job.employmentType) &&
  nonBlank(job.slug);
