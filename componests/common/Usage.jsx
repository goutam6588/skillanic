// =============================================================================
// USAGE EXAMPLE
// Demonstrates how all layout primitives compose together in a real page.
// =============================================================================

import Section from "./components/Section";
import Container from "./components/Container";
import Stack from "./components/Stack";
import Inline from "./components/Inline";
import { typography } from "./styles/tokens";
import { cn } from "./lib/cn";
import Xection from "./layout/Xection";

// ─── Example: Hero Section ───────────────────────────────────────────────────

function HeroSection() {
  return (
    <Section spacing="loose" className="bg-white">
      <Container size="narrow">
        <Stack gap="xl" align="center" className="text-center">

          <Stack gap="md">
            <p className={cn(typography.overline)}>Design Systems</p>
            <h1 className={cn(typography.heroTitle, "text-gray-900")}>
              Build with consistency
            </h1>
          </Stack>

          <p className={cn(typography.bodyLg, "max-w-xl")}>
            A token-based spacing system that keeps your UI consistent
            at every breakpoint, across every component.
          </p>

          <Inline gap="md">
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium">
              Learn More
            </button>
          </Inline>

        </Stack>
      </Container>
    </Section>
  );
}

// ─── Example: Feature Cards Section ──────────────────────────────────────────

function FeatureCard({ title, description }) {
  return (
    <Stack gap="sm" className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm">
      <h3 className={cn(typography.subsectionTitle, "text-gray-900")}>{title}</h3>
      <p className={cn(typography.body)}>{description}</p>
    </Stack>
  );
}

function FeaturesSection() {
  const features = [
    { title: "Token-enforced gaps", description: "Gap values are constrained to named sizes from the token map. No arbitrary values slip through." },
    { title: "Responsive by default", description: "Padding and spacing adjust automatically across breakpoints without per-component overrides." },
    { title: "Safe className merging", description: "cn() resolves Tailwind conflicts intelligently so className overrides always work as expected." },
  ];

  return (
    <Xection spacing="default" className="bg-gray-50">
      <Container>
        <Stack gap="2xl">

          {/* Section header */}
          <Stack gap="md" align="center" className="text-center">
            <h2 className={cn(typography.sectionTitle, "text-gray-900")}>
              What this system solves
            </h2>
            <p className={cn(typography.body, "max-w-2xl")}>
              Every layout primitive enforces the design token contract so spacing
              stays consistent even as the team scales.
            </p>
          </Stack>

          {/* Card grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>

        </Stack>
      </Container>
    </Xection>
  );
}

// ─── Example: Navbar using Inline ────────────────────────────────────────────

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
      <Container>
        <Inline justify="between" align="center" className="h-16">
          <span className={cn(typography.label, "text-gray-900 font-bold")}>
            Acme Inc.
          </span>

          <Inline gap="lg" as="nav">
            {["Product", "Pricing", "Docs"].map((item) => (
              <a
                key={item}
                href="#"
                className={cn(typography.bodySm, "text-gray-600 hover:text-gray-900 transition-colors")}
              >
                {item}
              </a>
            ))}
          </Inline>

          <button className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium">
            Sign up
          </button>
        </Inline>
      </Container>
    </header>
  );
}

// ─── Full Page Assembly ───────────────────────────────────────────────────────

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
    </div>
  );
}