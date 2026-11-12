'use client';

import { ArrowRight, ChevronDown } from 'lucide-react';

export default function ContactForm({
  formData,
  onInputChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className="w-full text-start">
      <div
        className="
          rounded-[16px]
          border
          border-[#E5E5E5]
          p-5
          sm:p-6
          lg:p-7
          shadow-lg
        "
      >
        {/* Heading */}
        <h2
          className="
            text-[26px]
            md:text-[32px]
            font-semibold
            text-gray-700
            leading-tight
            mb-6
          "
        >
          Want to talk? Let&apos;s do it!
        </h2>

        {/* Form Fields */}
        <div className="space-y-5">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[15px] md:text-[16px] text-[#3D3D3D] mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={onInputChange}
                placeholder="Jhan Smith"
                className="
                  w-full
                  h-[48px]
                  px-4
                  rounded-[6px]
                  border
                  border-[#B9C3CF]
                  bg-white
                  text-[#222]
                  text-sm
                  placeholder:text-[#9A9A9A]
                  focus:outline-none
                  focus:border-[#0A4B95]
                  transition-colors
                "
              />
            </div>

            <div>
              <label className="block text-[15px] md:text-[16px] text-[#3D3D3D] mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onInputChange}
                placeholder="Email address"
                className="
                  w-full
                  h-[48px]
                  px-4
                  rounded-[6px]
                  border
                  border-[#B9C3CF]
                  bg-white
                  text-[#222]
                  text-sm
                  placeholder:text-[#9A9A9A]
                  focus:outline-none
                  focus:border-[#0A4B95]
                  transition-colors
                "
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[15px] md:text-[16px] text-[#3D3D3D] mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={onInputChange}
                placeholder="+91"
                className="
                  w-full
                  h-[48px]
                  px-4
                  rounded-[6px]
                  border
                  border-[#B9C3CF]
                  bg-white
                  text-[#222]
                  text-sm
                  placeholder:text-[#9A9A9A]
                  focus:outline-none
                  focus:border-[#0A4B95]
                  transition-colors
                "
              />
            </div>

            <div>
              <label className="block text-[15px] md:text-[16px] text-[#3D3D3D] mb-2">
                Subject
              </label>

              <div className="relative">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={onInputChange}
                  className="
                    w-full
                    h-[48px]
                    px-4
                    rounded-[6px]
                    border
                    border-[#B9C3CF]
                    bg-white
                    text-sm
                    text-[#777]
                    appearance-none
                    focus:outline-none
                    focus:border-[#0A4B95]
                    transition-colors
                  "
                >
                  <option value="">Subject...</option>
                  <option value="course">
                    Course Information
                  </option>
                  <option value="training">
                    Training Program
                  </option>
                  <option value="support">
                    Support
                  </option>
                  <option value="other">
                    Other
                  </option>
                </select>

                <ChevronDown
                  size={18}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                    pointer-events-none
                  "
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-[15px] md:text-[16px] text-[#3D3D3D] mb-2">
              Message
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={onInputChange}
              placeholder="Write Something..."
              rows={5}
              className="
                w-full
                min-h-[120px]
                px-4
                py-3
                rounded-[6px]
                border
                border-[#B9C3CF]
                bg-white
                text-[#222]
                text-sm
                placeholder:text-[#9A9A9A]
                resize-none
                focus:outline-none
                focus:border-[#0A4B95]
                transition-colors
              "
            />
          </div>

          {/* Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="
                inline-flex
                items-center
                gap-2
                bg-[#FF1D25]
                hover:bg-[#E6161D]
                text-white
                font-medium
                text-[16px]
                px-6
                py-3
                transition-all
                duration-300
              "
            >
              Send Message
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}