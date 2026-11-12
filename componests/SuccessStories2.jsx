import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Xection from "./common/layout/Xection";
import { SectionHeader } from "./SectionHeader";
import { TestimonialCard } from "./testimonial-card";
import { useSanityContent } from "../src/hooks/useSanityContent";
import { isRenderableVideoTestimonial } from "../src/content/validators";

/**
 * Testimonials data
 *
 * To add a YouTube video to a card, add a `videoUrl` field:
 *   videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
 *
 * When `videoUrl` is present:
 *   - The card thumbnail auto-switches to YouTube's HQ thumbnail
 *   - Clicking the play button opens the video in a modal
 *
 * When `videoUrl` is absent:
 *   - The card shows the provided `image` as a static thumbnail
 *   - The play button is visible but non-functional (ready for future use)
 */
// ── Dummy video: Big Buck Bunny (public domain, always available on YouTube) ──
// This single card is shown only when the CMS collection is empty.
const DEFAULT_VIDEO_URL = "s"; //"https://youtube.com/shorts/jBRL1-gDWQE";

const testimonials = [
  {
    id: "default-video-testimonial",
    name: "Hitesh Butanath",
    role: "SWE, Data Engineering",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    name: "Adithyan",
    role: "React js developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    name: "PriySHAMIM AKTHER MOZUMDER",
    role: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    videoUrl: DEFAULT_VIDEO_URL,
  },
  {
    name: "Rajinesh",
    role: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    videoUrl: DEFAULT_VIDEO_URL,
  },
];

export function SuccessStories2({ buttonText = "VIEW ALL TESTIMONIALS" }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isTestimonialsPage = location.pathname === "/testimonials";
  // Track which card index is currently playing; null = all paused
  const [playingIndex, setPlayingIndex] = useState(null);
  const { value: resolvedTestimonials } = useSanityContent(
    "videoTestimonials",
    testimonials,
    {
      collection: true,
      matchBy: ["id"],
      isValidItem: isRenderableVideoTestimonial,
    },
  );
  const displayedTestimonials = isTestimonialsPage
    ? resolvedTestimonials
    : resolvedTestimonials.slice(0, 4);
  return (
    <Xection id="success-stories2">
      {/* Header */}
      <SectionHeader
        title="Success stories that inspire."
        subtitle="Our learners have used Skillanic to transition careers, secure promotions, and break into competitive industries."
      />

      {/* Mobile: horizontal scroll | sm+: grid */}
<div
  className={`mb-8 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
    displayedTestimonials.length === 1
      ? "justify-center overflow-visible"
      : "justify-start"
  }`}
>
  {displayedTestimonials.map((testimonial, index) => (
    <div
      key={testimonial.id ?? index}
      className="snap-start shrink-0 w-[75vw] sm:w-[280px] lg:w-[300px]"
    >
      <TestimonialCard
        name={testimonial.name}
        role={testimonial.role}
        image={testimonial.image}
        alt={testimonial.name}
        videoUrl={testimonial.videoUrl}
        isPlaying={playingIndex === index}
        onPlay={() => setPlayingIndex(index)}
      />
    </div>
  ))}
</div>

      {!isTestimonialsPage && (
        <div className="flex justify-center">
          <button
            id="view-all-testimonials-btn"
            onClick={() => navigate("/testimonials")}
            className="
              w-full max-w-xs sm:w-auto
              px-8 py-3
              border-2 border-gray-600
              text-gray-900 font-bold
              rounded-[14px]
              hover:bg-gray-900 hover:text-white
              transition-all duration-300
              text-sm sm:text-base
            "
          >
            {buttonText}
          </button>
        </div>
      )}
    </Xection>
  );
}
