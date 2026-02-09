import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { personal } from '../../data/personal'

const socialIcons = [
  { href: personal.social.github, icon: FiGithub, label: 'GitHub' },
  { href: personal.social.linkedin, icon: FiLinkedin, label: 'LinkedIn' }]

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Syncope Industries LLC. All rights reserved.
        </p>
        <div className="flex gap-4">
          {socialIcons.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-accent"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
