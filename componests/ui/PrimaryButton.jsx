import React from "react";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

export function PrimaryButton({
  children,
  className,

  // Variants
  variant = "primary",

  // Sizes
  size = "md",

  // Layout
  fullWidth = false,

  // States
  disabled = false,
  loading = false,

  // Icon
  icon = true,
  iconPosition = "right",

  // Navigation
  href,

  ...props
}) {
  const Component = href ? "a" : "button";

  // ─────────────────────────────────────
  // Variant Styles
  // ─────────────────────────────────────
  const variants = {
    primary: `
      bg-[#ED1C24]
      text-white
      border border-transparent

      hover:bg-[#c91219]
      hover:-translate-y-[1px]
      hover:shadow-[0_6px_20px_rgba(237,28,36,0.20)]
    `,

    outline: `
      bg-white
      border border-[#FF2D2D]
      text-[#111111]

      hover:bg-[#FF2D2D]
      hover:text-white
      hover:-translate-y-[1px]
      hover:shadow-[0_6px_20px_rgba(255,45,45,0.15)]
    `,

    dark: `
      bg-[#0B1F3A]
      text-white
      hover:bg-[#122d52]
      hover:-translate-y-[1px]
      hover:shadow-[0_6px_20px_rgba(11,31,58,0.20)]
    `,
  };

  // ─────────────────────────────────────
  // Size Styles
  // ─────────────────────────────────────
  const sizes = {
    sm: `
    h-10
    sm:h-11
    px-4
    sm:px-5
    text-sm
    sm:text-base
  `,

    md: `
    h-10
    sm:h-11
    md:h-12
    px-4
    sm:px-6
    md:px-8
    text-sm
    sm:text-base
    md:text-lg
  `,

    lg: `
    h-11
    sm:h-12
    md:h-14
    px-5
    sm:px-7
    md:px-10
    text-base
    sm:text-lg
    md:text-xl
  `,
  };

  return (
    <Component
      href={href}
      disabled={disabled || loading}
      className={clsx(
        `
        group
        inline-flex
        items-center
        justify-center
        gap-3
        uppercase
        tracking-[0.02em]
        px-4

        rounded-none

        whitespace-nowrap
        flex-shrink-0

        transition-all
        duration-300
        ease-out

        active:scale-[0.98]
        active:translate-y-0
        active:shadow-none

        disabled:opacity-60
        disabled:pointer-events-none
        `,

        variants[variant],
        sizes[size],

        fullWidth && "w-full",

        className,
      )}
      {...props}
    >
      {/* Left Icon */}
      {icon && iconPosition === "left" && !loading && (
        <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
      )}

      {/* Loading */}
      {loading ? (
        <div
          className="
            w-5
            h-5
            border-2
            border-current
            border-t-transparent
            rounded-full
            animate-spin
          "
        />
      ) : (
        <span>{children}</span>
      )}

      {/* Right Icon */}
      {icon && iconPosition === "right" && !loading && (
        <ArrowUpRight
          className="
              w-6 h-6
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          strokeWidth={2.5}
        />
      )}
    </Component>
  );
}
