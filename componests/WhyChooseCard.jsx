import React from "react";

export function WhyChooseCard({ icon, title, description, benefit }) {
  return (
    <div
      className="bg-white border border-gray-300 rounded-lg p-5 md:p-8
                 hover:shadow-lg transition-shadow duration-300
                 flex flex-col h-full"
    >
      {/* Icon */}
      <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-900 rounded-full flex items-center justify-center mb-4 md:mb-6">
        <div className="text-white text-xl md:text-2xl">{icon}</div>
      </div>

      {/* Content */}
      <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 text-start">{title}</h3>

      {/* Make description flexible */}
      <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 flex-grow text-start">
        {description}
      </p>

      {/* Benefit always sticks to bottom */}
      <div className="flex items-center gap-2 text-red-500 mt-auto">
        <svg
          className="w-4 h-4 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>

        <span className="text-sm font-semibold">
          {benefit}
        </span>
      </div>
    </div>
  );
}
