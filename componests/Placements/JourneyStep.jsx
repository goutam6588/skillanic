

export function JourneyStep({ step }) {
  return (
    <div className="relative flex flex-col items-center gap-4 pb-12">
      {/* Icon Badge */}
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-4xl shadow-md">
        {step.icon}
      </div>

      {/* Label */}
      <div className="text-center">
        <p className="font-sans text-sm font-semibold text-foreground">
          {step.number}. {step.label}
        </p>
        <p className="text-xs text-muted-foreground">{step.description}</p>
      </div>
    </div>
  );
}
