export function AchievementBadge({ text, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 md:gap-2 bg-red-50 border border-red-200 rounded-full px-2.5 py-0.5 md:px-3 md:py-1 text-xs md:text-sm ${className}`}
    >
      <div className="flex items-center justify-center w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-500 flex-shrink-0">
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white" />
      </div>

      <span className="text-gray-800 font-medium">{text}</span>
    </div>
  );
}
