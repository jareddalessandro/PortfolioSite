import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FiMail, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import AnimatedElement from '../ui/AnimatedElement'
import Button from '../ui/Button'
import { personal } from '../../data/personal'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      )
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <Section id="contact">
      <SectionHeading
        title="Get in Touch"
        subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
      />

      <div className="grid gap-12 lg:grid-cols-5">
        {/* Info */}
        <AnimatedElement variant="fadeLeft" className="lg:col-span-2">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="rounded-lg border border-border bg-surface p-2.5">
                <FiMail size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">Email</p>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  {personal.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="rounded-lg border border-border bg-surface p-2.5">
                <FiMapPin size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">Location</p>
                <p className="text-sm text-text-secondary">{personal.location}</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-text-muted">
              I'm currently open to freelance projects and full-time opportunities.
              Feel free to reach out — I'll get back to you within 24 hours.
            </p>
          </div>
        </AnimatedElement>

        {/* Form */}
        <AnimatedElement variant="fadeRight" className="lg:col-span-3">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="user_name" className="mb-1.5 block text-sm font-medium text-text-primary">
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="mb-1.5 block text-sm font-medium text-text-primary">
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-text-primary">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-accent"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-primary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-accent"
                placeholder="Your message..."
              />
            </div>

            <Button type="submit" disabled={status === 'sending'}>
              {status === 'sending' && (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              )}
              {status === 'idle' && (
                <>
                  <FiSend size={16} />
                  Send Message
                </>
              )}
              {status === 'success' && (
                <>
                  <FiCheck size={16} />
                  Message Sent!
                </>
              )}
              {status === 'error' && (
                <>
                  <FiAlertCircle size={16} />
                  Failed — Try Again
                </>
              )}
            </Button>
          </form>
        </AnimatedElement>
      </div>
    </Section>
  )
}
