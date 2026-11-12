import { CgTapSingle } from "react-icons/cg";
import { Footer } from "../../componests/Footer";
import { InfinityLogoSlider } from "../../componests/InfinityLogoSlider";
import { Navigation } from "../../componests/navigation";
import InfinityLogoForPlacement from "../../componests/Placements/InfinityLogoForPlacement";
import JourneyFlow from "../../componests/Placements/JourneyFlow";
import { Placements1 } from "../../componests/Placements/Placements1";
import { SuccessStoriesSection } from "../../componests/Placements/SuccessStoriesSection";
import { CTAHero } from "../../componests/CTAHero";
import CTASection from "../../componests/Gentric/CTASection";
import Xection from "../../componests/common/layout/Xection";
import Container from "../../componests/common/layout/Container";
import SEO from "../../componests/SEO"; 

export default function Placements() {
  return (
  <>
    <SEO
      title="IT Course Placements in Bangalore | Placement Assistance | Skillanic"
      description="Explore Skillanic's placement-focused IT training in Bangalore with interview preparation, career guidance, hiring support and placement assistance for students."
      canonical="/placements"
    />
    <div className="antialiased overflow-hidden ">
      <Navigation />
      <Xection spacing="none" className="relative overflow-hidden">
        <Placements1 />
        <SuccessStoriesSection />
        <JourneyFlow />
        <InfinityLogoForPlacement />
        <Container>
          <CTASection
            title="Ready to Start Your Career?"
            description="Get industry-ready training, expert mentorship, and dedicated placement support from Skillanic."
            buttonText="GET PLACEMENT SUPPORT"
          />
        </Container>
      </Xection>
      <Footer />
    </div>
     </>
  );
}
