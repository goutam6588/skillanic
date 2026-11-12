export function ValueCard({ title, description }) {
  return (
    <div className="bg-blue-900 rounded-lg p-6 sm:p-8  transition-colors duration-200">
      <h3 className="text-white font-bold text-lg sm:text-xl mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  )
}
