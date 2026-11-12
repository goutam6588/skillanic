import { Helmet } from "react-helmet-async";
import { Careers1 } from "../../componests/Careers/Careers1";
import Careers3 from "../../componests/Careers/Careers3";
import JobListings from "../../componests/Careers/JobListings";
import Container from "../../componests/common/layout/Container";
import Xection from "../../componests/common/layout/Xection";
import { Footer } from "../../componests/Footer";
import CTASection from "../../componests/Gentric/CTASection";
import { Navigation } from "../../componests/navigation";
import SEO from "../../componests/SEO";
import {
  CAREERS_CTA_DEFAULTS,
  CAREERS_SEO_DEFAULTS,
} from "../content/fallback/careersContent";
import { isRenderableStructuredCareerJob } from "../content/validators";
import { useSanityContent } from "../hooks/useSanityContent";

// Permanent fallback for the structured data when no usable CMS jobs exist.
const STRUCTURED_JOB_DEFAULTS = [
  {
    id: "skl-python-trainer-01",
    title: "Python Trainer",
    description:
      "Skillanic is hiring a Python Trainer to deliver hands-on classroom training in Python programming, Data Science fundamentals, and project-based learning for students and working professionals.",
    datePosted: "2026-08-01",
    validThrough: "2026-09-30",
    employmentType: "FULL_TIME",
    slug: "python-trainer",
  },
  // add more job objects here as openings come up
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Skillanic Technologies Pvt Ltd",
  url: "https://skillanic.com/",
  logo: "https://res.cloudinary.com/dd3qjg9qb/image/upload/q_auto:best,f_auto/v1786481384/ak_yiq5wg.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "SVM Complex, Marathahalli Bridge",
    addressLocality: "Marathahalli, Bengaluru",
    postalCode: "560037",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/skillanic",
    "https://www.instagram.com/skillanic",
    "https://www.linkedin.com/company/skillanic",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://skillanic.com/" },
    { "@type": "ListItem", position: 2, name: "Careers", item: "https://skillanic.com/careers" },
  ],
};

const itemListSchema = (careerJobs) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: careerJobs.map((job, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `https://skillanic.com/careers/${job.slug}`,
    name: job.title,
  })),
});

const jobPostingSchema = (job) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: job.title,
  description: job.description,
  identifier: {
    "@type": "PropertyValue",
    name: "Skillanic Technologies Pvt Ltd",
    value: job.id,
  },
  datePosted: job.datePosted,
  validThrough: job.validThrough,
  employmentType: job.employmentType,
  hiringOrganization: {
    "@type": "Organization",
    name: "Skillanic Technologies Pvt Ltd",
    sameAs: "https://skillanic.com/",
    logo: "https://res.cloudinary.com/dd3qjg9qb/image/upload/q_auto:best,f_auto/v1786481384/ak_yiq5wg.png",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "SVM Complex, Marathahalli Bridge",
      addressLocality: "Marathahalli, Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560037",
      addressCountry: "IN",
    },
  },
});

export default function Careers() {
  const { value: seo } = useSanityContent(
    "careersPage.seo",
    CAREERS_SEO_DEFAULTS,
  );
  const { value: cta } = useSanityContent(
    "careersPage.cta",
    CAREERS_CTA_DEFAULTS,
  );
  const { value: structuredJobs } = useSanityContent(
    "careerJobs",
    STRUCTURED_JOB_DEFAULTS,
    {
      collection: true,
      matchBy: ["id"],
      fallbackByIndex: false,
      isValidItem: isRenderableStructuredCareerJob,
    },
  );

  return (
    <div className="antialiased overflow-hidden ">
      <Navigation />
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        image={seo.image}
      />

      {/* Structured data — kept separate from SEO.jsx so it doesn't depend on that component's schema support */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema(structuredJobs))}
        </script>
        {structuredJobs.map((job) => (
          <script key={job.id} type="application/ld+json">
            {JSON.stringify(jobPostingSchema(job))}
          </script>
        ))}
      </Helmet>

      <Xection spacing="none" className="relative overflow-hidden">
        <Careers1 />
        <div id="job-listings">
          <JobListings />
        </div>
        <Careers3 />
        <Container>
          <CTASection
            title={cta.title}
            description={cta.description}
            buttonText={cta.buttonText}
          />
        </Container>
      </Xection>
      <Footer />
    </div>
  );
}
