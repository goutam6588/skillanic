import { cn } from "../Cn";

const maxWidthMap = {
  narrow: "max-w-3xl",
  default: "max-w-7xl xl:max-w-full",
  wide: "max-w-screen-2xl",
};

const paddingMap = {
  none: "",
  sm: "px-2 sm:px-4 lg:px-4",
  default: "px-4 sm:px-6 lg:px-2 xl:px-20", //px-4 sm:px-6 lg:px-8
  lg: "px-6 sm:px-8 lg:px-10",
};

export default function Container({
  children,
  size = "default",
  padding = "default",
  className,
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        maxWidthMap[size],
        paddingMap[padding],
        //apdat for smaller screens
        // "max-[1366px]:scale-90",
        // "max-[1366px]:origin-top",
        // "max-[1366px]:[margin-bottom:calc((scale(0.9)-1)*-100%)]",
        //
        className
      )}
    >
      {children}
    </div>
  );
}