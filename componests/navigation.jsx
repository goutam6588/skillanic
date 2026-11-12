"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

import {
  navLinks,
  navigationLogo,
  navigationCTA,
} from "../src/data/navigation.js";
import { PrimaryButton } from "./ui/PrimaryButton";
import Container from "./common/layout/Container";
// No longer imports EnquiryModal — the global instance handles rendering
import { useModal } from "../src/context/ModalContext";
import { useSanityContent } from "../src/hooks/useSanityContent";
import { getSanityImageUrl } from "../src/sanity/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  // Replaced local showEnquiry state with the global modal context
  const { openModal } = useModal();
  const { value: content } = useSanityContent("siteSettings.navigation", {
    logo: navigationLogo,
    links: navLinks,
    cta: navigationCTA,
  });

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 h-[70px] lg:h-[90px]">
      <Container size="default" padding="default" className="h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <NavLink to="/" className="flex items-center flex-shrink-0">
            <img
              src={getSanityImageUrl(content.logo.src, navigationLogo.src)}
              alt={content.logo.alt}
              className="
  w-[150px]
  md:w-[190px]
  object-contain
"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {content.links.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) => `
                  px-3 py-2
                  text-[19px]
                  font-medium
                  transition-colors
                  ${isActive
                    ? "text-red-500"
                    : "text-gray-700 hover:text-red-500"
                  }
                `}
              >
                {link.label}
              </NavLink>
            ))}
            {/* CTA Section */}
            <div className="border-t border-gray-100 p-4 bg-gray-50/50">
              <PrimaryButton
                size="sm"
                onClick={() => {
                  openModal();
                  setIsOpen(false);
                }}
              >
                {content.cta.buttonText}
              </PrimaryButton>
            </div>
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              md:hidden
              p-2
              rounded-md
              text-gray-900
              hover:bg-gray-100
            "
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="
              md:hidden
              absolute top-full left-0 right-0
              mt-2 mx-4
              rounded-2xl
              border border-gray-200
              bg-white/95 backdrop-blur-xl
              shadow-2xl
              overflow-hidden
              origin-top
              animate-in fade-in slide-in-from-top-4 duration-300
            "
          >
            <div className="flex flex-col py-3">
              {content.links.map((link, index) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    group relative overflow-hidden
                    flex items-center justify-between
                    px-5 py-4
                    text-[16px]
                    font-medium
                    border-b border-gray-100 last:border-b-0
                    transition-colors duration-200
                    ${isActive
                      ? "text-red-500"
                      : "text-gray-700 hover:text-red-500"
                    }
                  `}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Background wipe */}
                  <span
                    className="
                      absolute inset-0
                      bg-red-50
                      -translate-x-full
                      group-hover:translate-x-0
                      transition-transform duration-[280ms]
                      ease-[cubic-bezier(0.4,0,0.2,1)]
                    "
                  />

                  {/* Label */}
                  <span className="relative z-10">{link.label}</span>

                  {/* Arrow */}
                  <span
                    className="
                      relative z-10
                      text-red-500
                      opacity-0 -translate-x-1.5
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      transition-all duration-200
                      ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    "
                  >
                    →
                  </span>
                </NavLink>
              ))}
            </div>

            {/* CTA Section */}
            <div className="border-t border-gray-100 p-4 bg-gray-50/50">
              <PrimaryButton
                size="sm"
                onClick={() => {
                  openModal();
                  setIsOpen(false);
                }}
              >
                {content.cta.buttonText}
              </PrimaryButton>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
