import { siteSettings } from "./siteSettings";
import { homePage } from "./homePage";
import { course, coursesPage } from "./course";
import { aboutPage } from "./aboutPage";
import { teamPage, trainer } from "./team";
import {
  alumniTestimonial,
  placementSuccessStory,
  testimonial,
  testimonialsPage,
  videoTestimonial,
} from "./testimonial";
import { faq } from "./faq";
import { contactPage } from "./contactPage";
import { galleryPage } from "./galleryPage";
import { careersPage, jobOpening } from "./careersPage";

export const singletonTypes = new Set([
  "siteSettings",
  "homePage",
  "coursesPage",
  "aboutPage",
  "teamPage",
  "testimonialsPage",
  "contactPage",
  "galleryPage",
  "careersPage",
]);

export const schemaTypes = [
  siteSettings,
  homePage,
  coursesPage,
  course,
  aboutPage,
  teamPage,
  trainer,
  testimonialsPage,
  alumniTestimonial,
  videoTestimonial,
  placementSuccessStory,
  testimonial,
  faq,
  contactPage,
  galleryPage,
  careersPage,
  jobOpening,
];
