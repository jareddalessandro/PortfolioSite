import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import TimelineItem from '../ui/TimelineItem'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        title="Experience"
        subtitle="Where I've worked and what I've built along the way."
      />

      <div className="mx-auto max-w-3xl">
        {experience.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </Section>
  )
}
