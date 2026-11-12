import React from "react";
import clsx from "clsx";

export function HeroTitle({ children, className }) {
  return (
    <h1
      className={clsx(
        `
        text-3xl
        sm:text-4xl
        lg:text-5xl
        font-semibold
        text-blue-900
        leading-tight
        sm:leading-[1.2]
        lg:leading-[70px]
        text-start
        mb-2
        `,
        className
      )}
    >
      {children}
    </h1>
  );
}

export function BodyText({ children, className }) {
  return (
    <p
      className={clsx(
        `
        text-[16px]
        sm:text-[20px]
        md:text-[22px]
        text-start
        leading-[170%] 
        text-[#3D3D3D]
        `,
        className
      )}
    >
      {children}
    </p>
  );
}

export function BoldText({
  children,
  className,
}) {
  return (
    <span
      className={clsx(
        `
        text-base
        sm:text-lg
        lg:text-xl
        font-semibold
        leading-relaxed
        text-gray-800
        `,
        className
      )}
    >
      {children}
    </span>
  );
}
