import React from "react";
export function SuccessStoryCard({
  salary,
  studentName,
  studentRole,
  studentImage,
  company,
  companyLogo, // optional: pass a logo image URL to show logo instead of text
}) {
  return (
    <div className="relative min-w-full h-[240px] sm:h-[280px] lg:h-[320px] overflow-hidden rounded-[22px] sm:rounded-[28px] bg-[#003B82] text-white">
      {/* Top Section */}
      <div className="flex items-start justify-center pt-6 sm:pt-8 lg:pt-10 px-5 sm:px-8 lg:px-10 relative">
        <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
          <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-none tracking-tight">
            {salary}
          </h3>
          <span className="text-[11px] sm:text-[14px] lg:text-[16px] text-white/70 uppercase mt-1 tracking-tight">
            PACKAGE
          </span>
        </div>
      </div>
      {/* Divider */}
      <div className="mt-5 sm:mt-6 lg:mt-8 border-t border-white/10" />
      {/* Company Badge (logo if provided, else text) */}
      <div className="absolute top-[90px] sm:top-[110px] lg:top-[125px] right-5 sm:right-8 lg:right-10 border border-white/20 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full flex items-start justify-start min-h-[40px] sm:min-h-[52px]">
        {companyLogo ? (
          <img
            src={companyLogo}
            alt={company}
            className="h-[26px] sm:h-[34px] lg:h-[40px] w-auto object-contain object-left"
          />
        ) : (
          <span className="text-[13px] sm:text-[16px] lg:text-[18px] font-semibold">
            {company}
          </span>
        )}
      </div>
      {/* Bottom Content */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-5 sm:left-8 lg:left-10 flex items-end gap-4 sm:gap-6 lg:gap-8">
        {/* Profile Image */}
        <div className="w-[85px] h-[100px] sm:w-[110px] sm:h-[130px] lg:w-[130px] lg:h-[150px] rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden flex-shrink-0 bg-white/10">
          <img
            src={studentImage}
            alt={studentName}
            className="w-full h-full object-cover object-top"
          />
        </div>
        {/* Text Content */}
        <div className="pb-2 sm:pb-3 lg:pb-4 flex flex-col items-start">
          {/* Quote */}
          <div className="text-white/80 text-[40px] sm:text-[52px] lg:text-[64px] leading-none font-serif mb-0 sm:mb-1">
            &ldquo;
          </div>
          {/* Name */}
          <h4 className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold leading-tight tracking-tight">
            {studentName}
          </h4>
          {/* Role */}
          <p className="text-[12px] sm:text-[14px] lg:text-[15px] text-white/90 mt-1">
            {studentRole}
          </p>
        </div>
      </div>
    </div>
  );
}