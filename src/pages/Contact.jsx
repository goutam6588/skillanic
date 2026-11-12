import { Navigation } from "../../componests/navigation";
import { Footer } from "../../componests/Footer";

import Xection from "../../componests/common/layout/Xection";
import ContactForm from "../../componests/Contact/ContactForm";
import FloatingButtons from "../../componests/Gentric/FloatingButtons";
import ContactInfo from "../../componests/Contact/ContactInfo";
import { useState } from "react";

// import contactImg from "../../src/assets/Company logos/contactImg.png";

import { Contact1 } from "../../componests/Contact/Contact1";
import MapContainer from "../../componests/Contact/MapContainer";
import Container from "../../componests/common/layout/Container";
import CTASection from "../../componests/Gentric/CTASection";
import { useSanityContent } from "../hooks/useSanityContent";
import { getSanityImageUrl } from "../sanity/image";
import SEO from "../../componests/SEO";
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": "https://skillanic.com/contact",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Skillanic Technologies Pvt Ltd",
    "image": "https://res.cloudinary.com/dd3qjg9qb/image/upload/q_auto:best,f_auto/v1786481384/ak_yiq5wg.png",
    "telephone": "+91-77600 03670",
    "email": "info@skillanic.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SVM Complex, Marathahalli Bridge",
      "addressLocality": "Marathahalli, Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560037",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    "url": "https://skillanic.com/"
  }
};
export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };
  const contactImg = "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1783161010/contactImg.png";
  const { value: contactCard } = useSanityContent("contactPage.contactCard", {
    image: contactImg,
    address: "1st floor, #1, SVM Complex, Marathahalli, Bengaluru, Karnataka 560037",
    email: "info@skillanic.com",
    phone: "7760003670",
  });

  return (
  <>
    <SEO
  title="Contact Skillanic – IT Training Institute in Marathahalli, Bangalore"
  description="Get in touch with Skillanic Technologies for course details, fees, and free demo classes. Visit our Marathahalli, Bangalore campus or reach out online today."
  ogTitle="Contact Skillanic Technologies"
  OGDescription="Reach out to Skillanic for Python, Data Science, Full Stack & more course enquiries. Located in Marathahalli, Bangalore."
  TwitterTitle="Contact Skillanic Technologies"
  TwitterDescription="Get course details, fees, and book a free demo class at Skillanic, Marathahalli, Bangalore."
  canonical="https://skillanic.com/contact"
  image="https://res.cloudinary.com/dd3qjg9qb/image/upload/q_auto:best,f_auto/v1786481384/ak_yiq5wg.png"
/>
    <div className="antialiased overflow-hidden ">
      <Navigation />
      <Xection spacing="none" className="relative overflow-hidden">
        <div className="min-h-screen bg-background">
          <Contact1 />
          <Container>
            <Xection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 py-8 lg:py-12 max-w-7xl mx-auto">
                {/* Left Column - Contact Info */}
                <ContactInfo
                  image={getSanityImageUrl(contactCard.image, contactImg)}
                  logo="/images/logo.png"
                  companyName="SKILLANIC"
                  companySubTitle="LEARNING"
                  address={contactCard.address}
                  email={contactCard.email}
                  phone={contactCard.phone}
                />

                {/* Right Column - Contact Form */}
                <ContactForm
                  formData={formData}
                  onInputChange={handleInputChange}
                  onSubmit={handleSubmit}
                />
              </div>
            </Xection>
          </Container>
        </div>
        <Container>
          <MapContainer />
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
