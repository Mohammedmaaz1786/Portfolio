"use client"

import { useEffect, useRef } from "react"
import { Trophy, Zap, BookOpen, Award } from "lucide-react"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: Trophy,
      value: "9.35",
      label: "Current CGPA",
      description: "B.Tech CSE (AIML) - REVA University",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: Award,
      value: "IEEE",
      label: "Publication",
      description: "Peer-reviewed research work",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Zap,
      value: "6+",
      label: "Projects",
      description: "AI & Full-Stack Applications",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: BookOpen,
      value: "AI + MERN",
      label: "Learning Focus",
      description: "Applied AI & Web Development",
      color: "from-blue-500 to-indigo-500",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Exploring the intersection of artificial intelligence and full-stack software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Journey */}
          <div className="animate-on-scroll">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                My Journey
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I am currently pursuing a B.Tech in Computer Science Engineering with a specialization in
                Artificial Intelligence and Machine Learning REVA University, Bengaluru. Over time, I have developed a strong interest
                in building software systems that combine intelligent decision-making with robust application
                design.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                My experience includes working on <span className="font-semibold text-blue-600 dark:text-blue-400">
                AI-enabled applications</span>, automation workflows, and full-stack web platforms.
                I enjoy designing backend services, integrating intelligent features, and building clean,
                responsive user interfaces using modern web technologies.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Beyond academics and projects, I actively explore new tools and frameworks that improve
                developer productivity and system scalability. I am particularly interested in applying
                AI techniques to enhance real-world software products and user experiences.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Key Highlights
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.label}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <div
                      className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${highlight.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <highlight.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                    {highlight.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.label}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {highlight.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="animate-on-scroll">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Technical Focus Areas
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="space-y-2">
                <div className="font-semibold text-blue-600 dark:text-blue-400">
                  Programming
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Python, Java, JavaScript
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-semibold text-purple-600 dark:text-purple-400">
                  AI & ML
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Machine Learning, Deep Learning, NLP
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-semibold text-green-600 dark:text-green-400">
                  Full Stack
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  MERN Stack, REST APIs
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-semibold text-orange-600 dark:text-orange-400">
                  Tools
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Git, Docker, Cloud Platforms
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
