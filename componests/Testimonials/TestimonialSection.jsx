'use client'

import { Check, X, MoveRight } from 'lucide-react'
import Container from '../common/layout/Container'
import Xection from '../common/layout/Xection'
import { SectionHeader } from '../SectionHeader'
import { useSanityContent } from '../../src/hooks/useSanityContent'

const testimonialItems = [
    'Strong Portfolio',
    'Real Project Experience',
    'Job Ready Skills',
    'Clear Career Direction',
    'Interview Confidence',
]

const beforeItems = [
    'No Portfolio',
    'No Industry Experience',
    'Low Confidence',
    'Unclear Career Path',
    'No Interview Skills',
]

export function TestimonialSection({
    title = "What Our Students Say",
    subtitle = "Real stories from students who transformed their careers through our training and support."
}) {
    const { value: content } = useSanityContent('testimonialsPage.comparison', {
        title,
        subtitle,
        beforeItems,
        afterItems: testimonialItems,
    })
    return (
        <Xection>
            {/* <Container> */}

            {/* Header */}
            <SectionHeader
                title={content.title}
                subtitle={content.subtitle}
            />

            {/* Comparison Layout */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">

                {/* Before Card */}
                <div
                    className="
                            w-full md:w-[38%]
                            bg-white
                            border border-gray-200/80
                            rounded-2xl
                            p-8 md:p-10
                            flex flex-col items-center
                            shadow-[0_2px_8px_rgba(0,0,0,0.12)]
                            transition-all duration-300
                        "
                >
                    {/* Title Pill */}
                    <div className="inline-block px-6 py-2 border border-gray-200 rounded-xl font-semibold text-[#003B73] text-sm md:text-base mb-8 shadow-sm">
                        Before Joining
                    </div>

                    <div className="space-y-5 w-full max-w-[260px] mx-auto">
                        {content.beforeItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-5 h-5 bg-red-500 rounded flex items-center justify-center">
                                    <X className="w-3.5 h-3.5 text-white stroke-[3]" />
                                </div>
                                <span className="text-sm md:text-base font-medium text-[#003B73]/90">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Connection Arrow */}
                <div className="flex items-center justify-center my-2 md:my-0">
                    <MoveRight className="hidden md:block w-14 h-14 text-gray-300 stroke-[1.5]" />
                    <MoveRight className="md:hidden w-14 h-14 text-gray-300 rotate-90 stroke-[1.5]" />
                </div>

                {/* After Card */}
                <div
                    className="
                            w-full md:w-[38%]
                            bg-[#003B73]
                            rounded-2xl
                            p-8 md:p-10
                            flex flex-col items-center
                            shadow-[0_2px_8px_rgba(0,0,0,0.18)]
                            transition-all duration-300
                        "
                >
                    {/* Title Pill */}
                    <div className="inline-block px-6 py-2 bg-white rounded-xl font-semibold text-[#003B73] text-sm md:text-base mb-8 shadow-sm">
                        After Joining
                    </div>

                    <div className="space-y-5 w-full max-w-[260px] mx-auto">
                        {content.afterItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-5 h-5 bg-white rounded flex items-center justify-center">
                                    <Check className="w-3.5 h-3.5 text-[#003B73] stroke-[3]" />
                                </div>
                                <span className="text-sm md:text-base font-medium text-white/95">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* </Container> */}
        </Xection>
    )
}
