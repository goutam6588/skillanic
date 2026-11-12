// =============================================================================
// Inline
//
// Horizontal flex row with token-enforced gap scale and wrap support.
// The companion to Stack — use Inline for row layouts, Stack for column layouts.
//
// Props:
//   gap         — "sm"|"md"|"lg"|"xl"  (default: "md")
//   align       — "start" | "center" | "end" | "baseline" | "stretch"  (default: "center")
//   justify     — "start" | "center" | "end" | "between" | "around"   (default: "start")
//   wrap        — boolean, enables flex-wrap  (default: false)
//   as          — HTML element to render  (default: "div")
//   className   — additional classes merged safely via cn()
//   children    — React node
//
// Usage:
//   <Inline gap="lg" justify="between">
//     <Logo />
//     <Nav />
//   </Inline>
//
//   <Inline gap="sm" wrap>
//     {tags.map(tag => <Tag key={tag} label={tag} />)}
//   </Inline>
// =============================================================================

import { cn } from "../Cn";
import { spacing } from "../tokens";

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  baseline: "items-baseline",
  stretch: "items-stretch",
};

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
};

export default function Inline({
  children,
  gap = "md",
  align = "center",
  justify = "start",
  wrap = false,
  as: Tag = "div",
  className,
}) {
  return (
    <Tag
      className={cn(
        "flex flex-row",
        spacing.inline[gap],   // gap value pulled from token map
        alignMap[align],
        justifyMap[justify],
        wrap && "flex-wrap",
        className
      )}
    >
      {children}
    </Tag>
  );
}