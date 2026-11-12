'use client'

import { SectionHeader } from '../SectionHeader'
import { SuccessStoryCard } from './success-story-card'
import Container from '../common/layout/Container';
import Xection from '../common/layout/Xection';
import { useSanityContent } from '../../src/hooks/useSanityContent';
import { isRenderablePlacement } from '../../src/content/validators';

const successStories = [
  {
    id: '1',
    name: 'Adithyan',
    company: 'Ascendion',
    role: 'React js developer',
    lpa: '₹13 LPA',
    imageUrl:
      'https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786563866/Adithyan._mzndfk.png',
    companyLogo: null,
  },
  {
    id: '2',
    name: 'Buradakunta Haritha',
    company: 'Codincity',
    role: 'Data scientist',
    lpa: '₹15 LPA',
    imageUrl:
      'https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786563865/Buradakunta_Haritha._fjdgqt.png',
    companyLogo: null,
  },
  {
    id: '3',
    name: 'Shamim Akther  ',
    company: 'Ganit Inc.',
    role: 'Data scientist',
    lpa: '₹13 LPA',
    imageUrl:
      'https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786563866/SHAMIM_AKTHER_MOZUMDER._c7nvux.png',
    companyLogo: null,
  },
  {
    id: '4',
    name: 'Laki Mohanty',
    company: 'Scale Healthcare',
    role: 'Data Engineering',
    lpa: '₹12 LPA',
    imageUrl:
      'https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786563866/Laki_Mohanty._g25eqj.png',
    companyLogo: null,
  },
  {
    id: '5',
    name: 'A S Bhasha',
    company: 'Infinite computer solutions',
    role: 'Data Engineering',
    lpa: '₹26 LPA',
    imageUrl:
      'https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786563865/A_S_Bhasha_2_in4jhd.png',
    companyLogo: null,
  },
  {
    id: '6',
    name: 'Dudimetla Gopi',
    company: 'Beyond soft It services',
    role: 'Azure Data Engineering',
    lpa: '₹15 LPA',
    imageUrl:
      'https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786563866/Dudimetla_Gopi._plfije.png',
    companyLogo: null,
  },
  {
    id: '7',
    name: 'Sunil Kumar',
    company: 'Mphasis',
    role: 'React.js',
    lpa: '₹15 LPA',
    imageUrl:
      'https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786651618/Sunil_Kumar_z0osxh.png',
    companyLogo: null,
  },
  {
    id: '8',
    name: 'Mahesh',
    company: 'quess corp',
    role: 'React.js',
    lpa: '₹12 LPA',
    imageUrl:
      'https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786651618/Mahesh_o79cw2.png',
    companyLogo: null,
  },
  {
    id: '9',
    name: 'Perugu Venkata reddy',
    company: 'aapoon digital pvt limited',
    role: 'front end developer',
    lpa: '₹6 LPA',
    imageUrl:
      'https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786651618/Venkata_reddy_q6gqlm.png',
    companyLogo: null,
  },
]

function chunkIntoRows(items, cols) {
  const rows = []
  for (let i = 0; i < items.length; i += cols) {
    rows.push(items.slice(i, i + cols))
  }
  return rows
}

export function SuccessStoriesSection({
  title = 'Success Stories That Inspire',

  description =
  'Discover how our students transformed their skills into successful careers',

  stories = successStories,
}) {
  const normalizedStories = stories.map((story) => ({
    ...story,
    studentName: story.studentName ?? story.name,
    studentRole: story.studentRole ?? story.role,
    studentImage: story.studentImage ?? story.imageUrl,
    salary: story.salary ?? story.lpa,
    companyLogo: story.companyLogo || story.logo || null,
  }));
  const { value: resolvedStories } = useSanityContent(
    'placementStories',
    normalizedStories,
    {
      collection: true,
      matchBy: ['id'],
      fallbackByIndex: false,
      isValidItem: isRenderablePlacement,
    },
  );

  return (
    <Xection>
      <Container>

        <div className="flex flex-col items-center">

          {/* Header */}
          <SectionHeader
            title={title}
            subtitle={description}
          />

          {/* Cards */}
          <div className="p-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30 text-start justify-items-center">
            {resolvedStories.map((story) => (
              <SuccessStoryCard
                key={story.id}
                name={story.studentName}
                company={story.company}
                role={story.studentRole}
                lpa={story.salary}
                imageUrl={story.studentImage}
                companyLogo={story.companyLogo}
              />
            ))}
          </div>
        </div>

      </Container>
    </Xection>
  )
}