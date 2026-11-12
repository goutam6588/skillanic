import Container from "../common/layout/Container";
import Xection from "../common/layout/Xection";
import { SectionHeader } from "../SectionHeader";
import { ValueCard } from "./ValueCard";

import {
  ShieldCheck,
  ClipboardCheck,
  UserRound,
  TrendingUp,
  Lightbulb,
  Handshake,
} from "lucide-react";
import { useSanityContent } from "../../src/hooks/useSanityContent";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Industry Experience",
    description:
      "Our mentors bring real-world industry knowledge and practical insights.",
  },
  {
    icon: ClipboardCheck,
    title: "Real-time Projects",
    description:
      "Work on 3–5 real-world projects to gain hands-on experience and build a strong portfolio.",
  },
  {
    icon: UserRound,
    title: "Personalized Mentorship",
    description:
      "Get 1-on-1 guidance and support to overcome challenges and achieve your goals.",
  },
  {
    icon: TrendingUp,
    title: "Career Support",
    description:
      "Resume building, interview prep, and placement assistance to kickstart your career.",
  },
  {
    icon: Lightbulb,
    title: "Flexible Learning Environment",
    description:
      "Learn at your own pace with flexible training and continuous support.",
  },
  {
    icon: Handshake,
    title: "Expert Career Guidance",
    description:
      "Receive expert career advice and support to achieve your goals.",
  },
];

export default function Team3({
  title = "Why Learn From Our Team?",
  subtitle = "Learn from experienced professionals and educators who bring real-world expertise and industry insights to help you succeed.",
}) {
  const { value: heading } = useSanityContent("teamPage.valuesHeading", {
    title,
    subtitle,
  });
  const { value: values } = useSanityContent("teamPage.values", VALUES, {
    collection: true,
  });
  return (
    <Xection >
      {/* <Container > */}
      <SectionHeader title={heading.title} subtitle={heading.subtitle} />

      <section className=" mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </section>
      {/* </Container> */}
    </Xection>
  );
}
