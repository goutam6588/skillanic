import Container from '../common/layout/Container'
import Xection from '../common/layout/Xection'
import { SectionHeader } from '../SectionHeader'
import { ValueCard } from './value-card'
import { isRenderableCareerValue } from '../../src/content/validators'
import { useSanityContent } from '../../src/hooks/useSanityContent'

const VALUES = [
    {
        title: 'Python Fullstack Trainer',
        description: 'At Skillanic, we are driven by learning, innovation, and student success'
    },
    {
        title: 'The Skillanic Way',
        description: 'We believe in quality education, expert mentorship, and hands-on learning'
    },
    {
        title: 'Driven by Purpose, Powered by Skillanic',
        description: 'Empowering learners with the skills and confidence to succeed in the digital world'
    },
    {
        title: 'The Values Behind Skillanic',
        description: 'Our values inspire growth, strengthen learning, and support student success'
    }
]

export default function Careers3({
    title = "The Core Values of Skillanic",
    subtitle = "At Skillanic, our values inspire growth, encourage collaboration, and guide us in creating meaningful learning experiences."
}) {
    const { value: heading } = useSanityContent(
        "careersPage.valuesSection",
        { title, subtitle },
    )
    const { value: values } = useSanityContent(
        "careersPage.valuesSection.items",
        VALUES,
        {
            collection: true,
            matchBy: ["id"],
            fallbackByIndex: false,
            isValidItem: isRenderableCareerValue,
        },
    )

    return (
        <Xection id="careers-values">
            <Container>
                <SectionHeader
                    title={heading.title}
                    subtitle={heading.subtitle}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-10 md:mt-14 lg:mt-16 text-start">
                    {values.map((value, index) => (
                        <ValueCard
                            key={value.id || index}
                            title={value.title}
                            description={value.description}
                        />
                    ))}
                </div>
            </Container>
        </Xection>
    )
}
