"use client"

import { useEffect, useRef, useState } from "react"
import { BookOpen, Cpu, Globe } from "lucide-react"

const experiences = [
  {
    icon: Globe,
    title: "Full-Stack Development",
    description:
      "Self-learning and building full-stack applications using React, Node.js, Express, and MongoDB. Focused on mastering both frontend and backend architecture.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    icon: BookOpen,
    title: "Real-World Applications",
    description:
      "Building production-grade applications like Civic Connect to solve genuine community problems. Practicing agile workflows and version control with Git.",
    tags: ["Project Management", "Git", "Agile", "Deployment"],
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description:
      "Exploring artificial intelligence and machine learning, integrating smart features into web applications to create more intuitive user experiences.",
    tags: ["AI/ML", "APIs", "Automation", "Data"],
  },
]

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <section id="experience" className="relative px-6 py-24" ref={sectionRef}>
      <div className="mx-auto max-w-6xl">
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Experience & <span className="text-gradient">Learning</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            My journey of continuous growth and hands-on building.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent md:left-1/2 md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.title}
                className={`flex flex-col items-start gap-6 md:flex-row md:items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                } transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Card */}
                <div className="glass w-full rounded-xl p-6 transition-all duration-300 hover:border-primary/30 md:w-[calc(50%-2rem)]">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <exp.icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                  </div>
                  <p className="mb-4 leading-relaxed text-muted-foreground">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary/60 px-2.5 py-1 font-mono text-xs text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline dot (desktop only) */}
                <div className="hidden h-4 w-4 flex-shrink-0 rounded-full border-2 border-primary bg-background md:block" />

                {/* Spacer */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
