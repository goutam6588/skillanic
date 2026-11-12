export function SuccessStoryCard({ name, company, role, lpa, imageUrl, companyLogo }) {
  return (
    <div className="w-full  overflow-hidden bg-white">
      {/* Image Section */}
      <div className="relative h-[300px] bg-[#efefef] flex items-center justify-center">
        {/* Left Chevron
        <div className="absolute left-[20%] top-[25%] z-0">
          <div className="w-[90px] h-[90px] border-l-[16px] border-b-[16px] border-[#ff1717] rotate-45" />
        </div> */}

        {/* Right Chevron */}
        {/* <div className="absolute right-[20%] top-[45%] z-0">
          <div className="w-[90px] h-[90px] border-r-[16px] border-t-[16px] border-[#ff1717] rotate-45" />
        </div> */}

        {/* Person Image */}
        <div className="absolute inset-0 flex items-end justify-center z-10">
          <img
            src={imageUrl}
            alt={name}
            className="h-[96%] w-auto object-contain"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 74%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 74%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="grid grid-cols-2 bg-[#003b80] text-white min-h-[80px]">
        <div className="px-6 py-4 flex flex-col justify-center">
          <h3 className="text-sm font-semibold mb-1">{name}</h3>
          <p className="text-xs text-white/90">{role}</p>
        </div>

        <div className="px-6 py-4 border-l border-white/25 text-start flex flex-col justify-center items-start">
          {companyLogo ? (
            <img
              src={companyLogo}
              alt={company}
              className="h-6 w-auto max-w-[120px] object-contain object-left mb-1 self-start"
            />
          ) : (
            <p className="text-sm font-semibold mb-1">{company}</p>
          )}
          <p className="text-xs font-bold">{lpa}</p>
        </div>
      </div>
    </div>
  );
}
