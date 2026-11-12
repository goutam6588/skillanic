"use client";

import { useState } from "react";
import Container from "../common/layout/Container";
import Xection from "../common/layout/Xection";
import { SectionHeader } from "../SectionHeader";
import ApplyJobModal from "./ApplyJobModal";
import JobCard from "./job-card";
import { CAREERS_JOBS_SECTION_DEFAULTS } from "../../src/content/fallback/careersContent";
import { isRenderableCareerJob } from "../../src/content/validators";
import { useSanityContent } from "../../src/hooks/useSanityContent";

const JOBS = [
  {
    id: "1",
    title: "Telecaller (0-2 Years)",
    company: "Skillantic Technologies",
    description: "Hiring Telecaller (Female)",
    highlights: [],
  },
  {
    id: "2",
    title: "Receptionist (0-2 Years)",
    company: "Skillantic Technologies",
    description: "Receptionist (Female)",
    highlights: [],
  },
  {
    id: "3",
    title: "Java Fullstack Trainer 3+ Years",
    company: "Skillantic Technologies Hiring",
    description:
      "Java Fullstack Trainer 3+ experience Realtime. 3+ Training Experience",
    highlights: [],
  },
  {
    id: "4",
    title: "Python Fullstack Trainer (3+ Years)",
    company: "Skillantic Technologies Hiring",
    description:
      "Java Fullstack Trainer 3+ experience Realtime. 3+ Training Experience",
    highlights: [],
  },
  {
    id: "5",
    title: "Digital Marketing Paid Intern",
    company: "Skillantic Technologies",
    description: "Conducting Digital Marketing Internship for Freshers",
    highlights: [],
  },
];

export default function JobListings() {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const { value: section } = useSanityContent(
    "careersPage.jobsSection",
    CAREERS_JOBS_SECTION_DEFAULTS,
  );
  const { value: jobs } = useSanityContent("careerJobs", JOBS, {
    collection: true,
    matchBy: ["id"],
    fallbackByIndex: false,
    isValidItem: isRenderableCareerJob,
  });

  const handleApply = (job) => {
    setSelectedJob(job);
    setOpen(true);
  };
  return (
    <Xection id="job-listings">
      <Container>
        {/* Header Section */}
        <SectionHeader title={section.title} subtitle={section.subtitle} />

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-start mt-10 md:mt-14 lg:mt-16">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              company={job.company}
              description={job.description}
              highlights={job.highlights}
              applyButtonText={section.applyButtonText}
              onApply={() => handleApply(job)}
            />
          ))}
        </div>
      </Container>
      <ApplyJobModal
        open={open}
        onClose={() => setOpen(false)}
        jobTitle={selectedJob?.title}
      />
    </Xection>
  );
}
