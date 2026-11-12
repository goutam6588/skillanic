import React from "react";
import { Star } from "lucide-react";

export function AlumniCard({
  name,
  role,
  image,
  rating = 5,
  testimonial,
}) {
  return (
    <div className="relative bg-white rounded-[8px] p-3 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.12)] border border-gray-200 w-full h-[240px] sm:h-[320px] flex flex-col overflow-hidden">

      {/* Corner Brackets */}
      <div className="absolute top-0 right-0">
        <div className="w-8 h-[2px] bg-red-400 absolute right-0 top-0" />
        <div className="h-8 w-[2px] bg-red-400 absolute right-0 top-0" />
      </div>

      <div className="absolute bottom-0 left-0">
        <div className="w-8 h-[2px] bg-red-400 absolute left-0 bottom-0" />
        <div className="h-8 w-[2px] bg-red-400 absolute left-0 bottom-0" />
      </div>

      {/* Header */}
      <div className="flex gap-3 sm:gap-4">
        {/* Image */}
        <div className="w-[56px] h-[68px] sm:w-[70px] sm:h-[85px] rounded-[12px] sm:rounded-[14px] overflow-hidden flex-shrink-0">
          <img src={image} alt={name} className="w-full h-full object-cover object-top" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-[16px] sm:text-[20px] font-semibold text-black leading-tight truncate">
            {name}
          </h3>

          <p className="text-[12px] sm:text-[14px] text-gray-600 mt-1">
            {role}
          </p>

          {/* Stars */}
          <div className="flex justify-start mt-2 sm:mt-3">
            <div className="flex gap-[3px] sm:gap-1">
              {Array.from({ length: rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-red-500 text-red-500"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <p className="mt-4 sm:mt-5 text-[13px] sm:text-[14px] leading-[1.65] text-gray-700 text-start">
        {testimonial}
      </p>
    </div>
  );
}