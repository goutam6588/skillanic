// =============================================================================
// DESIGN TOKENS
// Single source of truth for all spacing, typography, and layout values.
// All components must consume from here — never hardcode raw Tailwind classes.
// =============================================================================

export const spacing = {
  // Section vertical padding — responsive: tighter on mobile, generous on desktop
  section: {
    y: "py-8 sm:py-2 md:py-20 lg:py-24",
    yTight: "py-8 md:py-12 lg:py-16",
    yLoose: "py-16 md:py-24 lg:py-32",
  },

  // Container horizontal padding + max-width constraints
  container: {
    x: "px-4 sm:px-6 lg:px-8",
    maxW: "max-w-7xl",
    maxWNarrow: "max-w-3xl",
    maxWWide: "max-w-screen-2xl",
  },

  // Stack gap scale — mapped to named sizes, not raw classes
  stack: {
    none:"",
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-10",
    "2xl": "gap-16",
  },

  // Card / surface internal padding
  card: {
    sm: "p-3 md:p-4",
    base: "p-4 md:p-6",
    lg: "p-6 md:p-8",
    xl: "p-8 md:p-10",
  },

  // Inline (horizontal) gaps for row layouts
  inline: {
    none:"",
    sm: "gap-2",
    md: "gap-3",
    lg: "gap-4",
    xl: "gap-6",
    xxl: "gap-12",
    xxxl: "gap-16"

  },
};

export const typography = {
  // Display / hero — large impact titles
  display: "text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none",
  heroTitle: "text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight",

  // Section headings
  sectionTitle: "text-3xl md:text-4xl font-semibold tracking-tight",
  subsectionTitle: "text-xl md:text-2xl font-semibold",

  // Body copy
  bodyLg: "text-lg text-gray-600 leading-relaxed",
  body: "text-base text-gray-600 leading-relaxed",
  bodySm: "text-sm text-gray-500 leading-relaxed",

  // Labels / captions
  label: "text-sm font-medium text-gray-700",
  caption: "text-xs text-gray-400 tracking-wide",
  overline: "text-xs font-semibold uppercase tracking-widest text-gray-400",
};

export const radius = {
  sm: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
};

export const shadow = {
  sm: "shadow-sm",
  base: "shadow",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
};