import { ArrowRight } from "lucide-react";

export default function JobCard({
  title,
  company,
  description,
  highlights,
  applyButtonText = "Apply Now",
  onApply,
}) {
  return (
    <div
      className="
        group
        flex flex-col gap-4
        rounded-lg
        border border-gray-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:bg-blue-900
        hover:border-blue-900
        hover:shadow-lg
      "
    >
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold text-gray-900 transition-colors group-hover:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 transition-colors group-hover:text-blue-100">
          {company}
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed transition-colors group-hover:text-blue-100">
        {description}
      </p>

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <div className="flex flex-col gap-1">
          {highlights.map((highlight, index) => (
            <p
              key={index}
              className="text-xs text-gray-500 transition-colors group-hover:text-blue-200"
            >
              {highlight}
            </p>
          ))}
        </div>
      )}

      {/* Apply Button */}
      <div className="mt-auto pt-2">
        <button
          onClick={onApply}
          className="group/button flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors hover:text-white group-hover:text-white"
          aria-label={`Apply for ${title}`}
        >
          {applyButtonText}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
