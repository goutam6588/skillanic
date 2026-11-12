// =============================================================================
// Section
//
// Semantic <section> wrapper that enforces vertical rhythm via consistent
// top/bottom padding. Always wraps a <Container> inside.
//
// Props:
//   spacing     — "tight" | "default" | "loose"  (default: "default")
//   as          — HTML element to render  (default: "section")
//   id          — anchor ID for in-page navigation
//   className   — additional classes merged safely via cn()
//   children    — React node
//
// Usage:
//   <Section>
//     <Container>...</Container>
//   </Section>
//
//   <Section spacing="tight" id="about">
//     <Container size="narrow">...</Container>
//   </Section>
//
//   <Section as="div" className="bg-gray-50">
//     <Container>...</Container>
//   </Section>
// =============================================================================

import { cn } from "../Cn";

const spacingMap = {
  none: "",
  tight: "py-4 md:py-6 lg:py-8",
  default: "py-10 md:py-14 lg:py-16",
  loose: "py-14 md:py-20 lg:py-24",
};

export default function Xection({
  children,
  spacing: spacingSize = "default",
  as: Tag = "section",
  id,
  className,
}) {
  return (
    <Tag
      id={id}
      className={cn(
        spacingMap[spacingSize],
        className
      )}
    >
      {children}
    </Tag>
  );
}