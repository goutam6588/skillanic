export function ImageCard({ src, alt, label }) {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-[14px]
        w-[170px]
        sm:w-[190px]
        md:w-[210px]
        h-[140px]
        sm:h-[240px]
        md:h-[260px]
        shadow-md
      "
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />

      <div
        className="
          absolute bottom-0 left-0 right-0
          bg-[#003B7A]
          py-2.5
          flex items-center justify-center
        "
      >
        <p
          className="
            text-white
            text-[15px]
            sm:text-[16px]
            font-medium
          "
        >
          {label}
        </p>
      </div>
    </div>
  );
}