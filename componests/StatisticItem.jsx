import React from "react";

export function StatisticItem({ metric, label, isLast = false }) {
  return (
    <div className="flex flex-col items-center flex-1">
      {/* Metric Value */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-blue-900 mb-2 ">
        {metric}
      </h2>

      {/* Label */}
      <p className="text-lg sm:text-xl lg:text-2xl leading-snug text-gray-600 font-medium">
        {label}
      </p>

      {/* Vertical Divider - Hidden on last item */}
      {!isLast && (
        <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-red-400" />
      )}
    </div>
  );
}
