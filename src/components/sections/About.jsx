import { motion } from 'motion/react'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import AnimatedElement from '../ui/AnimatedElement'
import SkillBadge from '../ui/SkillBadge'
import { personal } from '../../data/personal'
import { skillCategories } from '../../data/skills'
import { staggerContainer } from '../../utils/animations'

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        title="About Me"
        subtitle="A brief introduction to who I am and what I work with."
      />

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Bio */}
        <AnimatedElement variant="fadeLeft">
          <div className="space-y-4 text-text-secondary leading-relaxed">
            {personal.bio.split('\n').map((paragraph, i) => (
              <p key={i}>{paragraph.trim()}</p>
            ))}
          </div>
        </AnimatedElement>

        {/* Skills */}
        <AnimatedElement variant="fadeRight">
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                className="rounded-xl border border-border bg-surface p-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <h3 className="mb-3 text-sm font-semibold text-text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedElement>
      </div>
    </Section>
  )
}
