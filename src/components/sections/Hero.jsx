import { motion } from 'motion/react'
import { FiGithub, FiLinkedin, FiTwitter, FiDownload, FiArrowDown } from 'react-icons/fi'
import { personal } from '../../data/personal'
import Button from '../ui/Button'
import { scrollToSection } from '../../utils/smoothScroll'

const socialLinks = [
  { href: personal.social.github, icon: FiGithub, label: 'GitHub' },
  { href: personal.social.linkedin, icon: FiLinkedin, label: 'LinkedIn' }
]

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="pointer-events-none absolute top-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-1/4 -left-1/4 h-[400px] w-[400px] rounded-full bg-accent/3 blur-[100px]" />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 font-mono text-lg text-accent">Hi, my name is</p>
        </motion.div>

        <motion.h1
          className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="bg-gradient-to-r from-text-primary to-text-secondary bg-clip-text text-transparent">
            {personal.name}
          </span>
        </motion.h1>

        <motion.h2
          className="mb-6 text-2xl font-semibold text-text-secondary sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {personal.role}
        </motion.h2>

        <motion.p
          className="mb-8 max-w-xl text-text-secondary leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          className="mb-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#contact')
            }}
          >
            Get in Touch
          </Button>
          <Button
            variant="secondary"
            href={personal.resumeUrl}
            download
          >
            <FiDownload size={16} />
            Resume
          </Button>
        </motion.div>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border p-2.5 text-text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted transition-colors hover:text-accent"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
        aria-label="Scroll to about section"
      >
        <FiArrowDown size={20} />
      </motion.button>
    </section>
  )
}
