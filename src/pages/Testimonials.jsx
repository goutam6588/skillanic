// src/pages/About.jsx

import { Navigation } from "../../componests/navigation";
import { Footer } from "../../componests/Footer";
import { Testimonials1 } from "../../componests/Testimonials/Testimonials1";
import { TestimonialSection } from "../../componests/Testimonials/TestimonialSection";
import { WhatOurAlumniSay } from "../../componests/WhatOurAlumniSay";
import { SuccessStories2 } from "../../componests/SuccessStories2";
import { CgTapSingle } from "react-icons/cg";
import CTASection from "../../componests/Gentric/CTASection";
import Xection from "../../componests/common/layout/Xection";
import Container from "../../componests/common/layout/Container";
import SEO from "../../componests/SEO";

export default function Testimonials() {
  return ( 
     <>
      <SEO
        title="Skillanic Reviews & Student Testimonials | IT Training Bangalore"
        description="Read reviews and testimonials from Skillanic students about their IT training experience, expert mentors, practical learning and career support in Bangalore."
        canonical="/testimonials"
      />
    <div className="antialiased overflow-hidden ">
      <Navigation />
      <Xection spacing="none" className="relative overflow-hidden">
        <Testimonials1 />
        <Container>
          <WhatOurAlumniSay />
          <TestimonialSection />
          <SuccessStories2 />
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
