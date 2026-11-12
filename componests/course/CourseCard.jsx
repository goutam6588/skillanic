import { useNavigate } from "react-router-dom";


export default function CourseCard({
  id,
  title,
  description,
  image,
  mode,
  duration,
}) {
  const navigate = useNavigate();
  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col hover:border-b-4 hover:border-b-red-500">
      {/* Image */}
      <div className="relative w-full h-[200px] overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content — flex-col so footer is always pushed to bottom */}
      <div className="p-6 md:p-8 flex flex-col flex-1">

        {/* Title — clamped to 2 lines, fixed min-height so 1-line titles don't shrink the slot */}
        <h3 className="text-lg md:text-xl font-bold text-black mb-0 md:mb-3 line-clamp-2 text-start min-h-[3.5rem]">
          {title}
        </h3>

        {/* Description — clamped to 3 lines with fixed height */}
        <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-3 leading-relaxed text-start">
          {description}
        </p>

        {/* Footer — mt-auto pins it to the bottom no matter how tall the content above is */}
        {/* Mobile: badges on top, VIEW DETAILS at bottom. sm+: row with VIEW DETAILS left, badges right */}
        <div className="mt-auto flex flex-col sm:flex-row-reverse sm:items-center sm:justify-between gap-3 pt-2">

          <div className="flex gap-2 flex-wrap">
            <span className="inline-block bg-pink-100 text-gray-800 text-xs md:text-sm px-3 py-1 rounded-[10px]">
              {mode}
            </span>
            <span className="inline-block bg-pink-100 text-gray-800 text-xs md:text-sm px-3 py-1 rounded-[10px]">
              {duration}
            </span>
          </div>

          <button
            onClick={() => navigate(`/courses/${id}`)}
            className="bg-blue-900 text-white py-2 px-4 rounded-[10px] text-sm md:text-base
              transition-all duration-300 ease-out
              hover:bg-blue-950
              hover:shadow-[0_6px_20px_rgba(30,58,138,0.20)]
              active:translate-y-0
              active:shadow-none
              active:scale-[0.98]
              whitespace-nowrap"
            aria-label={`View details for ${title}`}
          >
            VIEW DETAILS
          </button>
        </div>
      </div>
    </div>
  );
}
