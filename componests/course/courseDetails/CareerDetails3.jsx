import { ValueCard } from "../../Careers/value-card";
import Container from "../../common/layout/Container";
import Xection from "../../common/layout/Xection";
import { SectionHeader } from "../../SectionHeader";

import {
  ShieldCheck,
  ClipboardCheck,
  UserRound,
  TrendingUp,
  Lightbulb,
  Handshake,
} from "lucide-react";

const VALUES = [
  {
    title: "Industry-Focused Curriculum",
    description:
      "Learn the latest technologies and best practices aligned with industry requirements.",
  },
  {
    title: "Hands-On Projects",
    description:
      "Build real-world applications to gain practical experience and a strong portfolio.",
  },
  {
    title: "Expert Mentors",
    description:
      "Get guidance from experienced professionals with real industry expertise.",
  },
  {
    title: "Placement Assistance",
    description:
      "Prepare for interviews with resume reviews, mock interviews, and career support.",
  },
  {
    title: "Flexible Learning",
    description:
      "Choose from online, offline, or hybrid learning options that fit your schedule.",
  },
  {
    title: "Certification",
    description:
      "Earn an industry-recognized certificate after successfully completing your course.",
  },
];

export default function CareerDetails3({
  title = "Why Choose Skillanic?",
  subtitle = "We don't just teach — we transform careers with a hands-on, industry-driven approach that competitors simply can't match.",
}) {
  return (
    <Xection id="careers-values">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-10 md:mt-14 lg:mt-16 text-start">
          {VALUES.map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </Container>
    </Xection>
  );
}
