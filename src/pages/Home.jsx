// src/pages/Home.jsx

import ContactPageForHome from "../../componests/ContactPageForHome";
import { CorporateHero } from "../../componests/CorporateHero";
import CoursesSection from "../../componests/CoursesSection";
import { CTAHero } from "../../componests/CTAHero";
import { FAQ } from "../../componests/FAQ";
import { FeatureHighlights } from "../../componests/FeatureHighlights";
import { Footer } from "../../componests/Footer";
import { HeroSection } from "../../componests/hero-section";
import { InfinityLogoSlider } from "../../componests/InfinityLogoSlider";
import { Navigation } from "../../componests/navigation";
import { Statistics } from "../../componests/Statistics";
import { StorySection } from "../../componests/StorySection";
import { SuccessStories } from "../../componests/SuccessStories";
import { SuccessStories2 } from "../../componests/SuccessStories2";
import { WhatOurAlumniSay } from "../../componests/WhatOurAlumniSay";
import { WhyChooseUs } from "../../componests/WhyChooseUs";
import SEO from "../../componests/SEO";

export default function Home() {
  return (
    <>
      <SEO
      title="Skillanic – Best IT Training Institute in Marathahalli, Bangalore | Python, Data Science, Full Stack & More"
      description="Skillanic is a top-rated IT training institute in Marathahalli, Bangalore offering Python, Data Science, Full Stack, AWS, Testing & UI/UX courses with 100% placement assistance. Join now for free demo class."
      canonical="https://skillanic.com/"
      image="https://res.cloudinary.com/dd3qjg9qb/image/upload/q_auto:best,f_auto/v1786481384/ak_yiq5wg.png"
      />  

    
     {/* max-[1366px]:scale-90 max-[1366px]:origin-top - apdat for smaller screens */}
    <div className="antialiased overflow-hidden" >
      <Navigation />
      <HeroSection />
      <InfinityLogoSlider />
      <CorporateHero />
      {/* <Statistics /> */}
      {/* <WhyChooseUs /> */}
      {/* <CoursesSection /> */}
      {/* <SuccessStories /> */}
      {/* <StorySection /> */}
      {/* <FeatureHighlights /> */}
      {/* <WhatOurAlumniSay /> */}
      {/* <SuccessStories2 /> */}
      {/* <CTAHero /> */}
      {/* <FAQ /> */}
      {/* <ContactPageForHome /> */}
      <Footer />
    </div>
  </>
  );
}
