"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative px-6 py-24" ref={sectionRef}>
      <div className="mx-auto max-w-4xl">
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            {"Have a project in mind or just want to say hi? I'd love to hear from you."}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div
            className={`transition-all delay-200 duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <form onSubmit={handleSubmit} className="glass rounded-xl p-6">
              <div className="mb-4">
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full resize-none rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary"
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02] glow-blue"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  <Send size={16} />
                  {isSubmitted ? "Message Sent!" : "Send Message"}
                </span>
                {/* Glow sweep effect */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`flex flex-col justify-center gap-6 transition-all delay-400 duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="glass rounded-xl p-6">
              <h3 className="mb-4 text-lg font-semibold text-foreground">{"Let's Connect"}</h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing."}
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:mahi@example.com"
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm">mahi@example.com</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Github size={18} />
                  </div>
                  <span className="text-sm">github.com/mahi</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Linkedin size={18} />
                  </div>
                  <span className="text-sm">linkedin.com/in/mahi</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
