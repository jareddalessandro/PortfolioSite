import { useState } from 'react'
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import AnimatedElement from './AnimatedElement'
import SkillBadge from './SkillBadge'

export default function ProjectCard({ project, index }) {
  const [currentImage, setCurrentImage] = useState(0)
  const hasImages = project.images && project.images.length > 0
  const imageCount = hasImages ? project.images.length : 0

  const nextImage = (e) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev + 1) % imageCount)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev - 1 + imageCount) % imageCount)
  }

  const goToImage = (i) => {
    setCurrentImage(i)
  }

  return (
    <AnimatedElement variant="scaleIn" delay={index * 0.1}>
      <div className="group rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
        {/* Image gallery or gradient header */}
        <div className="relative h-48 overflow-hidden rounded-t-xl bg-surface-light">
          {hasImages ? (
            <>
              {/* Images */}
              <div className="relative h-full w-full">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                      i === currentImage ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation arrows - only show if multiple images */}
              {imageCount > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 text-text-primary opacity-0 backdrop-blur-sm transition-opacity hover:bg-background group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <FiChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 text-text-primary opacity-0 backdrop-blur-sm transition-opacity hover:bg-background group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <FiChevronRight size={18} />
                  </button>

                  {/* Dots indicator */}
                  <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goToImage(i)}
                        className={`h-1.5 rounded-full transition-all ${
                          i === currentImage
                            ? 'w-6 bg-accent'
                            : 'w-1.5 bg-text-muted/50 hover:bg-text-muted'
                        }`}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            // Fallback gradient
            <div
              className={`flex h-full items-center justify-center bg-gradient-to-br ${project.gradient}`}
            >
              <span className="text-2xl font-bold text-text-primary/60 transition-colors group-hover:text-text-primary/80">
                {project.title}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="mb-2 text-lg font-semibold text-text-primary">
            {project.title}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-text-secondary">
            {project.description}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <SkillBadge key={t} skill={t} />
            ))}
          </div>

          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent"
                aria-label={`View ${project.title} source on GitHub`}
              >
                <FiGithub size={16} />
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent"
                aria-label={`View ${project.title} live demo`}
              >
                <FiExternalLink size={16} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </AnimatedElement>
  )
}
