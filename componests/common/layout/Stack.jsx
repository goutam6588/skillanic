// =============================================================================
// Stack
//
// Vertical flex container with a token-enforced gap scale.
// The gap prop is constrained to named sizes — no raw Tailwind gap classes
// allowed, which keeps spacing within the design system boundary.
//
// Props:
//   gap         — "xs"|"sm"|"md"|"lg"|"xl"|"2xl"  (default: "md")
//   align       — "start" | "center" | "end" | "stretch"  (default: "stretch")
//   justify     — "start" | "center" | "end" | "between" | "around"  (default: "start")
//   as          — HTML element to render  (default: "div")
//   className   — additional classes merged safely via cn()
//   children    — React node
//
// Usage:
//   <Stack>...</Stack>
//   <Stack gap="lg">...</Stack>
//   <Stack gap="xl" align="center">...</Stack>
//   <Stack as="ul" gap="sm">...</Stack>
// =============================================================================

import { cn } from "../Cn";
import { spacing } from "../tokens";

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
};

export default function Stack({
  children,
  gap = "md",
  align = "stretch",
  justify = "start",
  as: Tag = "div",
  className,
}) {
  return (
    <Tag
      className={cn(
        "flex flex-col",
        spacing.stack[gap],   // gap value pulled from token map
        alignMap[align],
        justifyMap[justify],
        className
      )}
    >
      {children}
    </Tag>
  );
}