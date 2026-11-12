import React from 'react'
import { cn } from '../common/Cn'
// import { cn } from '@/lib/utils'

export function VisionCard({
    title,
    description,
    variant = 'light',
    className,
}) {
    return (
        <div
            className={cn(
                'rounded-3xl p-5 md:p-6 lg:p-7',
                variant === 'light'
                    ? 'bg-white border border-neutral-400 text-neutral-900'
                    : 'bg-blue-900 text-white',
                className
            )}
        >
            <h2 className="text-lg md:text-xl font-bold tracking-wider mb-4 uppercase">
                {title}
            </h2>

            <p className="text-base md:text-lg leading-7 font-normal text-start">
                {description}
            </p>
        </div>
    )
}