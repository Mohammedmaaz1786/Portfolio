"use client"

import { useEffect, useRef } from "react"
import { Trophy, Zap, BookOpen, Users, Brain, Award } from "lucide-react"

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
    label: "Published Author",
    description: "Road Rage Detection Research Paper",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Zap,
    value: "6+",
    label: "Major Projects",
    description: "AI/ML, MERN Stack & Automation",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BookOpen,
    value: "MERN & AI/ML",
    label: "Tech Exploration", 
    description: "Full-stack & AI skill growth",
    color: "from-blue-500 to-indigo-500",
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
            Passionate about building intelligent solutions that bridge AI innovation with real-world applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-on-scroll">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I'm currently pursuing my B.Tech in Computer Science Engineering with specialization in AI/ML at REVA University, Bengaluru, 
                maintaining a strong academic record with a CGPA of 9.35. My journey into technology began with curiosity about how 
                artificial intelligence can solve complex real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                As a published IEEE researcher, I've developed cutting-edge solutions including a road rage detection system with 94% accuracy, 
                intelligent document processing systems using FAISS vector search, and full-stack applications with the MERN stack. 
                My expertise spans from <span className="font-semibold text-blue-600 dark:text-blue-400">machine learning and AI frameworks</span> to 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> modern web development with React and Node.js</span>.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding or working on AI models, you'll find me playing cricket, gaming, or exploring new technologies 
                that can automate processes and enhance productivity. I believe in leveraging AI tools to streamline workflows 
                and create innovative solutions for everyday challenges.
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

        {/* Technical Skills Preview */}
        <div className="animate-on-scroll">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Technical Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="space-y-2">
                <div className="font-semibold text-blue-600 dark:text-blue-400">Languages</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Python, Java, JavaScript</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-purple-600 dark:text-purple-400">AI/ML</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">TensorFlow, PyTorch, OpenCV</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-green-600 dark:text-green-400">Web Stack</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">MERN, Next.js, FastAPI</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-orange-600 dark:text-orange-400">Tools</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Git, Docker, Postman</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
