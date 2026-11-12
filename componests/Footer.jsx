"use client";

import React from "react";
import { Link } from "react-router-dom";
import skillanicLogo1 from "../src/assets/Company logos/skillanicLogo1.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";
import Container from "./common/layout/Container";
import { useSanityContent } from "../src/hooks/useSanityContent";
import { getSanityImageUrl } from "../src/sanity/image";


const brandInfo = {
  logo: skillanicLogo1,
  logoAlt: "Skillanic",
  description:
    "Skillanic Technologies Pvt. Ltd. — Bangalore's premier IT training & placement institute. Bridging the gap between education and industry since April 2024.",
  mapUrl: "https://maps.google.com/?q=SVM+Complex+Marathahalli+Bengaluru",
  mapLabel: "OPEN IN GOOGLE MAP",
};

const featuredCourses = [
  "MERN Full Stack",
  "React JS",
  "Azure Data Engineering",
  "Data Science & ML",
  "Generative AI",
  "DevOps & Cloud",
  "Python Full Stack",
];

const QUICK_LINKS = [
  { label: "Home", path: "/" },
  { label: "Courses", path: "/courses" },
  { label: "About", path: "/about" },
  { label: "Placements", path: "/placements" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Team", path: "/team" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const MORE_COURSES = [
  "Java Full Stack",
  "SAP All Modules",
  "Salesforce CRM",
  "Power BI & Analytics",
  "Digital Marketing",
  "Software Testing",
  "UI/UX Design",
  "HR & Payroll",
];

const contactDetails = [
  {
    icon: HiOutlineMapPin,
    text: "SVM Complex, Marathahalli Bridge,\nBengaluru - 560037",
    isMultiLine: true,
    align: "items-start",
  },
  {
    icon: HiOutlinePhone,
    text: "+91 78299 99278",
    href: "tel:+917829999278",
  },
  {
    icon: HiOutlineEnvelope,
    text: "info@skillanic.com",
    href: "mailto:info@skillanic.com",
  },
  {
    icon: HiOutlineGlobeAlt,
    text: "www.skillanic.com",
    href: "https://www.skillanic.com",
    external: true,
  },
];

const socialLinks = [
  { icon: FaFacebookF, href: "https://facebook.com/skillanic", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com/skillanic", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/company/skillanic", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com/skillanic", label: "X (Twitter)" },
];

const legalLinks = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms & Conditions", path: "/terms-and-conditions" },
];

const copyrightEntity = "Skillanic Technologies Pvt. Ltd.";


export function Footer() {
  const { value: content } = useSanityContent("siteSettings.footer", {
    logo: { src: brandInfo.logo, alt: brandInfo.logoAlt },
    description: brandInfo.description,
    mapUrl: brandInfo.mapUrl,
    mapLabel: brandInfo.mapLabel,
    featuredCourses,
    contact: {
      address: contactDetails[0].text,
      phone: contactDetails[1].text,
      email: contactDetails[2].text,
      website: contactDetails[3].text,
    },
    socialLinks,
    copyrightEntity,
  });
  const resolvedContactDetails = [
    { ...contactDetails[0], text: content.contact.address },
    { ...contactDetails[1], text: content.contact.phone, href: `tel:${content.contact.phone.replace(/\s/g, "")}` },
    { ...contactDetails[2], text: content.contact.email, href: `mailto:${content.contact.email}` },
    { ...contactDetails[3], text: content.contact.website, href: /^https?:\/\//.test(content.contact.website) ? content.contact.website : `https://${content.contact.website}` },
  ];
  return (
    <footer className="bg-[#003D7A] text-white">
      <Container className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-start">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">

          {/* ── Left: Brand ── */}
          <div>
            <img
              src={getSanityImageUrl(content.logo.src, brandInfo.logo)}
              alt={content.logo.alt}
              className="w-[260px] mb-8"
            />

            <p className="text-[#D7E3F4] text-[18px] leading-10 max-w-[420px]">
              {content.description}
            </p>

            <a
              href={content.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-12 text-white font-medium uppercase tracking-wide text-sm"
            >
              <HiOutlineMapPin className="w-5 h-5" />
              {content.mapLabel}
            </a>
          </div>

          {/* ── Middle: Trending Courses ── */}
          <div>
            <h3 className="text-[32px] font-semibold mb-8">
              Trending Courses
            </h3>

            <ul className="space-y-5 text-[#D7E3F4] text-[18px]">
              {content.featuredCourses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
              <li>
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  View All Courses →
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Right: Contact + Social ── */}
          <div>
            <h3 className="text-[32px] font-semibold mb-8">Contact</h3>

            <div className="space-y-6">
              {resolvedContactDetails.map((item, index) => {
                const Icon = item.icon;
                const textContent = item.isMultiLine ? (
                  <p className="font-semibold leading-7">
                    {item.text.split("\n").map((line, i, arr) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                ) : item.href ? (
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                );

                return (
                  <div
                    key={index}
                    className={`flex gap-3 ${item.align ?? "items-center"}`}
                  >
                    <Icon className="w-5 h-5 mt-1 shrink-0" />
                    {textContent}
                  </div>
                );
              })}
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-12">
              {content.socialLinks.map((social, index) => {
                const Icon = social.icon || socialLinks[index]?.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-12 h-12
                      rounded-full
                      border border-white/30
                      flex items-center justify-center
                      text-xl
                      hover:bg-white
                      hover:text-[#003D7A]
                      transition-all
                    "
                  >
                    {Icon ? <Icon /> : null}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/15 mt-8 md:mt-16 pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#D7E3F4] text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} {content.copyrightEntity}. All rights reserved.
            </p>

            <div className="flex gap-4 md:gap-12 mt-2 md:mt-0">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-[#D7E3F4] hover:text-white text-xs md:text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
