import Xection from "../common/layout/Xection";
import { VisionCard } from "./VisionCard";
import { useSanityContent } from "../../src/hooks/useSanityContent";

const defaultContent = {
  mission: {
    title: "Our Mission",
    description:
      "To transform potential into profession by delivering industry-relevant skills, real-world experience, and career-focused mentorship that empowers individuals to succeed in a rapidly evolving digital world.",
  },
  vision: {
    title: "Our Vision",
    description:
      "To become a catalyst for career transformation — building a future where every individual is empowered with industry-ready expertise and limitless growth opportunities.",
  },
};

export default function VisionMision() {
  const { value: content } = useSanityContent(
    "aboutPage.visionMission",
    defaultContent,
  );

  return (
    <Xection id="vision-mission" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12">
        <VisionCard
          title={content.mission.title}
          description={content.mission.description}
          variant="light"
        />
        <VisionCard
          title={content.vision.title}
          description={content.vision.description}
          variant="dark"
        />
      </div>
    </Xection>
  );
}
