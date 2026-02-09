import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        title="Projects"
        subtitle="A selection of apps I've built on the side recently. If the repository is private contact me for access."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}
