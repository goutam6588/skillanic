

export function BenefitItem({ text }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 mt-1">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-700">
          <div className="h-2.5 w-2.5 rounded-full bg-blue-700" />
        </div>
      </div>
      <p className="text-lg text-gray-800 leading-relaxed">{text}</p>
    </div>
  );
}