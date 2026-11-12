export function Timeline({ items }) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-3 h-3 rounded-full bg-blue-700 mt-2"></div>
          <div className="min-w-0 flex-1">
            <div className="flex gap-2 items-baseline flex-wrap">
              <span className="text-lg font-bold text-blue-700">
                {item.year}
              </span>
              <span className="text-gray-600">-</span>
              <span className="text-gray-700 leading-relaxed">
                {item.description}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}