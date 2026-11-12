"use client";

import { useNavigate, useLocation } from "react-router-dom";
import Container from "../common/layout/Container";
import Xection from "../common/layout/Xection";
import { SectionHeader } from "../SectionHeader";
import { MentorCard } from "./MentorCard";
import { useSanityContent } from "../../src/hooks/useSanityContent";
import { getSanityImageUrl } from "../../src/sanity/image";
import { isRenderableTrainer } from "../../src/content/validators";

export function MentorsSection({
  title = "Meet our mentors",
  description = "At Tutorly, our courses are led by experienced professionals, researchers, and educators who bring real-world knowledge.",
  buttonText = "VIEW ALL MENTORS",
}) {
  const mentors = [
    {
      id: "1",
      name: "A.Krishna Murthy",
      title: "Manager",
      image:
        "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1785317536/e1_jf7sxk.png",
      linkedinUrl: "https://linkedin.com",
    },
    {
      id: "2",
      name: "V. Mercy",
      title: "Career Counselor/Admin",
      image:
        "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1785317548/e2_z5fqmx.png",
      linkedinUrl: "https://linkedin.com",
    },
    {
      id: "3",
      name: "N. Lahari ",
      title: "Hr executive",
      image:
        "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1785317535/e3_h0unqr.png",
      linkedinUrl: "https://linkedin.com",
    },
    {
      id: "4",
      name: "P. Veeranarappa",
      title: "Tech lead",
      image:
        "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1785317534/e4_n9etuh.png",
      linkedinUrl: "https://linkedin.com",
    },
    {
      id: "5",
      name: "Joel",
      title: "HR Manager",
      image:
        "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786644856/Joel_oukozd.png",
      linkedinUrl: "https://linkedin.com",
    },
  ];
  const { value: heading } = useSanityContent("teamPage.mentorsHeading", {
    title,
    description,
    buttonText,
  });
  const { value: sanityMentors } = useSanityContent("trainers", mentors, {
    collection: true,
    matchBy: ["id"],
    isValidItem: isRenderableTrainer,
  });
  const resolvedMentors = sanityMentors.map((mentor, index) => ({
    ...mentor,
    image: getSanityImageUrl(mentor.image, mentors[index]?.image),
  }));

  const navigate = useNavigate();
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const isTeamPage = location.pathname === "/team";
  return (
    <Xection className="bg-white">
      {/* <Container size="default" padding="default"> */}
      {/* Header Section */}
      <div className="mb-12 md:mb-30">
        <SectionHeader title={heading.title} subtitle={heading.description} />
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-start">
        {resolvedMentors.map((mentor, index) => {
          // On /about: show max 3 on desktop, max 2 on mobile
          if (isAboutPage && index >= 3) return null;
          return (
            <div
              key={mentor.id}
              className={
                isAboutPage && index === 2
                  ? "hidden md:block" // 3rd card: hide on mobile, show md+
                  : ""
              }
            >
              <MentorCard {...mentor} />
            </div>
          );
        })}
      </div>
      {!isTeamPage && (
        <div className="flex justify-center mt-12 md:mt-16">
          <button
            onClick={() => navigate("/team")}
            className="px-8 py-3 border-2 border-gray-600 text-gray-900 font-bold rounded-[14px] hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            {heading.buttonText}
          </button>
        </div>
      )}
      {/* </Container> */}
    </Xection>
  );
}
