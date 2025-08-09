"use client"

import { useEffect, useRef } from "react"
import { Trophy, Zap, BookOpen, Users, Brain } from "lucide-react"

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
    description: "B.Tech Computer Science Engineering",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: Zap,
    value: "3+",
    label: "Projects Completed",
    description: "AI/ML and automation projects",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: BookOpen,
    value: "MERN & AI/ML",
    label: "Tech Exploration",
    description: "Full-stack & AI skill growth",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: Brain,
    value: "AI/ML",
    label: "Core Focus",
    description: "Deep learning & computer vision",
    color: "from-purple-500 to-blue-500",
  },
];


  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate about creating intelligent solutions that make a real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-on-scroll">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I'm currently pursuing my B.Tech in Computer Science Engineering at REVA University, where I've
                maintained a strong academic record with a CGPA of 9.35. My journey into technology began with a
                fascination for how artificial intelligence can transform everyday challenges into innovative solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                With expertise in Python, TensorFlow, and modern web technologies, I specialize in developing
                intelligent systems that bridge the gap between complex algorithms and practical applications. From road
                rage detection systems to LinkedIn automation tools, I enjoy creating projects that demonstrate the
                power of AI in real-world scenarios.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me playing cricket, gaming, or exploring new AI technologies that can automate and enhance everyday processes.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Key Highlights</h3>
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
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">{highlight.value}</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{highlight.label}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{highlight.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
