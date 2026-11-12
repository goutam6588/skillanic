"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo({
  image,
  companyName: _companyName,
  companySubTitle: _companySubTitle,
  address,
  email,
  phone,
  logo: _logo,
}) {
  return (
    <div className="relative overflow-hidden rounded-[24px] w-full h-[550px] sm:h-[560px] text-start">
      <img
        src={image}
        alt="Office"
        className="absolute inset-0 h-full w-full object-cover object-[center_80%]"
      />

      {/* Bottom Floating Card */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">
        <div className="bg-[#003A80] text-white rounded-[20px] px-4 py-5 sm:px-8 sm:py-7 shadow-2xl">
          {/* Location */}
          <div>
            <div className="flex items-start gap-2 sm:gap-3">
              <MapPin size={16} className="mt-1 shrink-0 text-white sm:w-5 sm:h-5" />

              <div>
                <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">Location</h3>

                <p className="text-white/90 text-xs sm:text-base leading-5 sm:leading-7 max-w-xl">
                  {address}
                </p>
              </div>
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className="my-3 sm:my-5 border-t border-white/20" />

          {/* Contact Details */}
          <div className="grid grid-cols-2 sm:grid-cols-2">
            {/* Email */}
            <div className="flex items-start gap-2 sm:gap-3 pr-2 sm:pr-8 min-w-0">
              <Mail size={14} className="mt-1 shrink-0 sm:w-[18px] sm:h-[18px]" />

              <div className="min-w-0">
                <h4 className="font-semibold text-xs sm:text-lg mb-1 sm:mb-2">
                  Email
                </h4>

                <a
                  href={`mailto:${email}`}
                  className="text-white/90 hover:text-white transition text-[10px] sm:text-sm break-all leading-4 sm:leading-normal"
                >
                  {email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-2 sm:gap-3 border-l border-white/20 pl-2 sm:pl-8">
              <Phone size={14} className="mt-1 shrink-0 sm:w-[18px] sm:h-[18px]" />

              <div>
                <h4 className="font-semibold text-xs sm:text-lg mb-1 sm:mb-2">
                  Number
                </h4>

                <a
                  href={`tel:${phone}`}
                  className="text-white/90 hover:text-white transition text-[10px] sm:text-sm leading-4 sm:leading-normal"
                >
                  {phone}
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
