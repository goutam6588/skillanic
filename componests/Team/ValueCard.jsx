export function ValueCard({ icon: Icon, title, description }) {
  return (
    <div
      className="
        bg-[#003F88]
        border border-[#005EB8]
        rounded-lg
        p-6 md:p-8
        min-h-[145px]
        flex
        items-start
        gap-4
        transition-all
        duration-300
        text-start
      "
    >
      {/* Icon Box */}
      <div
        className="
          w-12
          h-12
          min-w-[48px]
          bg-white
          rounded-xl
          flex
          items-center
          justify-center
        "
      >
        <Icon size={24} className="text-[#003F88]" strokeWidth={2} />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>

        <p className="text-white/85 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
