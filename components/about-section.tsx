"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Lightbulb, Rocket } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with modern best practices.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Breaking down complex challenges into elegant solutions.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Constantly exploring new technologies and pushing boundaries.",
  },
]

const skillBars = [
  { name: "JavaScript", level: 90 },
  { name: "Java", level: 85 },
  { name: "C", level: 75 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative px-6 py-24" ref={sectionRef}>
      <div className="mx-auto max-w-6xl">
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - About Text */}
          <div
            className={`transition-all delay-200 duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {"I'm a passionate Computer Science Engineering student who thrives on turning ideas into reality through code. With a strong foundation in "}
              <span className="font-semibold text-primary">JavaScript</span>
              {", "}
              <span className="font-semibold text-primary">Java</span>
              {", and "}
              <span className="font-semibold text-primary">C</span>
              {", I enjoy building full-stack applications that solve real-world problems."}
            </p>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {"My flagship project, "}
              <span className="font-semibold text-accent">Civic Connect</span>
              {", is a community-focused platform that showcases my ability to architect and deliver impactful solutions from concept to deployment."}
            </p>

            {/* Skill Bars */}
            <div className="space-y-4">
              {skillBars.map((skill, i) => (
                <div key={skill.name}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="font-mono text-sm text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${i * 150 + 500}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Highlight Cards */}
          <div
            className={`flex flex-col gap-4 transition-all delay-400 duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className="glass group rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:glow-blue"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
