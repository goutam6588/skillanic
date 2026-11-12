'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { AlumniCard } from './AlumniCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import Xection from './common/layout/Xection';
import Container from './common/layout/Container';
import { useSanityContent } from '../src/hooks/useSanityContent';
import { isRenderableAlumni } from '../src/content/validators';

const marqueeStyle = `
  @keyframes alumni-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .alumni-scroll-track {
    animation: alumni-scroll 24s linear infinite;
    will-change: transform;
  }

//   .alumni-scroll-track:hover {
//     animation-play-state: paused;
//   }
`;

const ALUMNI_DATA = [
  {
    id: '1',
    name: 'Dudimetla Gopi .',
    role: 'Azure Data Engineering ',
    image: 'https://res.cloudinary.com/dd3qjg9qb/image/upload/v1787067526/Dudimetla_Gopi_po3vpp.png',
    rating: 5,
    testimonial:
      'Skillanic helped me build practical skills in Azure Data Engineering and prepared me for real-world opportunities. The project-based training and career guidance were really valuable.',
  },
  {
    id: '2',
    name: ' A S Bhasha',
    role: ' Data Engineering',
    image: 'https://res.cloudinary.com/dd3qjg9qb/image/upload/v1787068621/A_S_Bhasha_smtgvt.png',
    rating: 5,
    testimonial:
      'The training at Skillanic helped me strengthen my Data Engineering skills through practical learning and projects. The trainers were supportive and focused on industry requirements.',
  },
  {
    id: '3',
    name: 'SHAMIM AKTHER MOZUMDER',
    role: 'Data Science',
    image: 'https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786740882/SHAMIM_AKTHER_MOZUMDER_hugkpo.png',
    rating: 5,
    testimonial:
      'Skillanic provided a great learning environment with practical projects and industry-focused training. The Data Science training helped me build the confidence and skills needed for my career.',
  },
  {
    id: '4',
    name: 'Laki Mohanty',
    role: ' Data Engineering ',
    image: 'https://res.cloudinary.com/dd3qjg9qb/image/upload/v1787067520/Laki_Mohanty_m9j5gz.png',
    rating: 5,
    testimonial:
      'The Data Engineering training at Skillanic gave me valuable practical exposure and helped me understand industry technologies better. The placement guidance was also very helpful.',
  },
  {
    id: '5',
    name: 'Buradakunta Haritha ',
    role: ' Data Scientist ',
    image: 'https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786740929/Laki_Mohanty_gwu4om.png',
    rating: 5,
    testimonial:
      'The practical training at Skillanic helped me understand Data Science concepts much better. The guidance from trainers and placement support helped me move toward my career goals',
  },
  {
    id: '6',
    name: ' Adithyan ',
    role: ' React js developer ',
    image: ' https://res.cloudinary.com/dd3qjg9qb/image/upload/v1787067519/Adithyan_dverdw.png',
    rating: 5,
    testimonial:
      'Skillanic gave me strong practical knowledge and helped me become confident in React JS development. The real-time projects and placement support made a big difference in my career.',
  },
];

export function WhatOurAlumniSay() {
  const { value: alumniData } = useSanityContent('alumniTestimonials', ALUMNI_DATA, {
    collection: true,
    matchBy: ['id'],
    isValidItem: isRenderableAlumni,
  });
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    loop: false,
    breakpoints: {
      '(max-width: 640px)': { dragFree: true },
    },
  });

  return (
    <Xection>
      <style>{marqueeStyle}</style>
      {/* Header Section */}
      <div className="mb-12 md:mb-16">
        <SectionHeader
          title="What Our Alumni Say"
          subtitle="Real stories. Real transformations. Hear directly from our learners who upskilled
              with Skillanic, built confidence, and successfully launched their dream careers in
              tech."
        />
      </div>

      {/* Carousel Section - full-bleed edge-to-edge so no white space gap shows at the sides */}
      <div className="relative">
        <div className="overflow-hidden w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 md:px-8">
          <div ref={emblaRef} className="flex gap-6 md:gap-8 alumni-scroll-track w-max">
            {[...alumniData, ...alumniData].map((alumni, index) => (
              <div
                key={index}
                className="min-w-[230px] sm:min-w-[320px] max-w-[340px] flex-shrink-0 text-start"
              >
                <AlumniCard
                  name={alumni.name}
                  role={alumni.role}
                  image={alumni.image}
                  rating={alumni.rating}
                  testimonial={alumni.testimonial}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Xection>
  );
}