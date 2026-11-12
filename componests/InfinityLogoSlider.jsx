import React from 'react';

import logo1 from "../src/assets/Company logos/c logo 2.png"
import logo2 from "../src/assets/Company logos/c logo 3.png"
import logo3 from "../src/assets/Company logos/c logo 4.png"
import logo4 from "../src/assets/Company logos/c logo 5.png"
import logo5 from "../src/assets/Company logos/c logo 6.png"
import logo6 from "../src/assets/Company logos/c logo 7.png"
import logo7 from "../src/assets/Company logos/c logo 8.png"
import logo8 from "../src/assets/Company logos/c logo 9.png"
import logo9 from "../src/assets/Company logos/c logo 10.png"
import logo10 from "../src/assets/Company logos/company logo 1.png"
import Xection from './common/layout/Xection';
import Container from './common/layout/Container';
import { useSanityContent } from '../src/hooks/useSanityContent';
import { getSanityImageUrl } from '../src/sanity/image';
// import Section from './common/Section';

export function InfinityLogoSlider({
    title = 'Trusted by 100+ companies across India',
    speed = 50,
}) {


    const logos = [
        { name: 'HCL', imagePath: logo1 },
        { name: 'Deloitte', imagePath: logo2 },
        { name: 'Bosch', imagePath: logo3 },
        { name: 'Capgemini', imagePath: logo4 },
        { name: 'Tech Mahindra', imagePath: logo5 },
        { name: 'Accenture', imagePath: logo6 },
        { name: 'IBM', imagePath: logo7 },
        { name: 'Infosys', imagePath: logo8 },
        { name: 'TCS', imagePath: logo9 },
        { name: 'Wipro', imagePath: logo10 },
    ];
    const { value: content } = useSanityContent('homePage.trustedCompanies', {
        title,
        logos,
    });
    return (
        <Xection spacing="default" id="inginite-logo-slider">
            <Container size="default" padding="default">

                {/* Header */}
                <div className="flex items-center justify-center gap-2 mb-8 md:mb-16">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full flex-shrink-0"></div>

                    <p className="text-gray-500 text-xs md:text-base text-center leading-snug">
                        {content.title}
                    </p>
                </div>

                {/* Infinite Carousel */}
                <div
                    className="overflow-hidden relative"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
                    }}
                >

                    <style>{`
                            @keyframes scroll {
                            from {
                                transform: translateX(0);
                            }

                            to {
                                transform: translateX(-50%);
                            }
                            }

                            .scroll-animation {
                            animation: scroll ${speed}s linear infinite;
                            }

                            @media (max-width: 640px) {
                                .scroll-animation {
                                    animation-duration: ${Math.max(speed * 0.6, 20)}s;
                                }
                            }
                        `}</style>

                    <div className="flex w-max scroll-animation">

                        {/* First set */}
                        {content.logos.map((logo, index) => (
                            <div
                                key={`first-${index}`}
                                className="flex-shrink-0 flex items-center justify-center h-12 sm:h-16 md:h-20 mx-3 sm:mx-4 md:mx-6"
                            >
                                <img
                                    src={getSanityImageUrl(logo.imagePath, logos[index]?.imagePath)}
                                    alt={logo.name}
                                    className="max-h-full w-auto max-w-[90px] sm:max-w-[130px] md:max-w-[180px] object-contain grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        ))}

                        {/* Duplicate set */}
                        {content.logos.map((logo, index) => (
                            <div
                                key={`second-${index}`}
                                className="flex-shrink-0 flex items-center justify-center h-12 sm:h-16 md:h-20 mx-3 sm:mx-4 md:mx-6"
                            >
                                <img
                                    src={getSanityImageUrl(logo.imagePath, logos[index]?.imagePath)}
                                    alt={logo.name}
                                    className="max-h-full w-auto max-w-[90px] sm:max-w-[130px] md:max-w-[180px] object-contain grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </Container>
        </Xection>
    );
}
