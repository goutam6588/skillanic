import React from "react";

export function FeatureHighlight({ icon, title, subtitle }) {
  return (
    <div className="flex flex-col items-center text-center sm:text-left sm:items-start flex-1 px-4 sm:px-6 py-4 sm:py-0 ">
   
      {/* Icon Container */}
      <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center mb-4 flex-shrink-0 self-start">
        <div className="text-white text-2xl">{icon}</div>
      </div>

      {/* Content */}
      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 text-start">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed text-start">
        {subtitle}
      </p>

      {/* Vertical Divider - Hidden on last item and mobile */}
      {/* {!isLast && (
        <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-300" />
      )} */}
    </div>
  );
}
