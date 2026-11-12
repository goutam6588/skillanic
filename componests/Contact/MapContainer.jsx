import React from "react";
import Xection from "../common/layout/Xection";
import { useSanityContent } from "../../src/hooks/useSanityContent";

const DEFAULT_MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2297438157843!2d77.69909107484108!3d12.957145587356878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92e050656793703%3A0xcd7abc2624db166e!2sSkillanic%20-%20Software%20Training%20and%20Placement%20Bangalore!5e0!3m2!1sen!2sin!4v1782289701433!5m2!1sen!2sin";

/**
 * Extracts the src URL from an iframe HTML string or returns the string if it's already a URL.
 */
export function extractMapEmbedUrl(input) {
  if (!input || typeof input !== "string") return DEFAULT_MAP_URL;
  const trimmed = input.trim();
  const srcMatch = trimmed.match(/src=["']([^"']+)["']/i);
  if (srcMatch && srcMatch[1]) {
    return srcMatch[1];
  }
  return trimmed || DEFAULT_MAP_URL;
}

const MapContainer = ({ mapUrl: propMapUrl }) => {
  const { value: sanityMapUrl } = useSanityContent("contactPage.mapUrl", DEFAULT_MAP_URL);
  const rawMapUrl = propMapUrl || sanityMapUrl || DEFAULT_MAP_URL;
  const embedUrl = extractMapEmbedUrl(rawMapUrl);

  return (
    <Xection>
      <div className="relative w-full max-w-7xl h-[400px] md:h-[600px] mx-auto rounded-2xl border border-gray-200 shadow-sm overflow-hidden font-sans">
        {/* Google Map Embed */}
        <iframe
          title="Skillanic Location"
          src={embedUrl}
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />

        {/* Open in Maps Button */}
        <a
          href={embedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-xs font-semibold text-blue-600 px-3 py-2 rounded-lg shadow-md border flex items-center gap-1"
        >
          Open In Maps
        </a>
      </div>
    </Xection>
  );
};

export default MapContainer;

