"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Award, Calendar, Play, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeFilter, setActiveFilter] = useState("all")

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
  }, [activeFilter]) // Add activeFilter as dependency

  const projects = [
    {
      title: "Road Rage Detection System",
      description:
        "Real-time road rage detection using 3D CNNs with 5-frame temporal smoothing, achieving 94% accuracy on custom Indian dataset.",
      longDescription:
        "Developed using deep learning and computer vision techniques with transfer learning optimization.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "3D CNN", "Transfer Learning"],
      date: "Dec 2024",
      status: "Completed",
      category: "AI/ML",
      labels: ["Featured", "Published in IEEE"],
      achievements: ["94% Accuracy", "IEEE Publication", "15% False Positive Reduction"],
      github: "https://github.com/Mohammedmaaz1786",
      demo: "https://ieeexplore.ieee.org/document/10968328",
      demoVideo: "#",
      gradient: "from-red-500 to-orange-500",
    },
    {
      title: "AI-powered LinkedIn Automation",
      description:
        "Intelligent LinkedIn automation system with personalized messaging, connection requests, and auto-posting capabilities.",
      longDescription: "Features Gemini-powered NLP for context-aware messaging and human-like interaction patterns.",
      technologies: ["Python", "Selenium", "Gemini API", "NLP", "Tkinter", "HTML Parsing"],
      date: "May 2025",
      status: "In Development",
      category: "Automation",
      labels: ["Featured"],
      achievements: ["Smart Targeting", "NLP Integration", "Compliance-First Design"],
      github: "https://github.com/Mohammedmaaz1786",
      demo: "#",
      demoVideo: "#",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Amazon Review Sentiment Analyzer",
      description:
        "Streamlit-based sentiment analysis tool for Amazon product reviews using machine learning classification.",
      longDescription:
        "Implements TF-IDF vectorization with Random Forest classifier for accurate sentiment prediction.",
      technologies: ["Python", "Streamlit", "Scikit-learn", "NLTK", "TF-IDF", "Random Forest"],
      date: "Apr 2025",
      status: "Completed",
      category: "NLP",
      labels: [],
      achievements: ["Real-time Analysis", "Advanced Preprocessing", "Interactive UI"],
      github: "https://github.com/Mohammedmaaz1786",
      demo: "#",
      demoVideo: "#",
      gradient: "from-green-500 to-teal-500",
    },
  ]

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "AI/ML", label: "AI/ML" },
    { id: "Automation", label: "Automation" },
    { id: "NLP", label: "NLP" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Innovative AI/ML solutions that demonstrate technical expertise and real-world impact
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center mb-12 animate-on-scroll">
          <div className="bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg">
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-700"
                  }`}
                >
                  <Filter className="h-3 w-3 mr-2" />
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div key={`projects-${activeFilter}`} className="grid lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={`project-${project.title}-${activeFilter}`}
              className="animate-on-scroll group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6">
                {/* Labels and Status */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.labels.map((label) => (
                    <Badge
                      key={label}
                      variant="default"
                      className={`text-xs ${
                        label === "Featured"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                          : label === "Published in IEEE"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                      }`}
                    >
                      {label === "Published in IEEE" && <Award className="w-3 h-3 mr-1" />}
                      {label}
                    </Badge>
                  ))}
                  <Badge
                    variant={project.status === "Completed" ? "default" : "outline"}
                    className={`text-xs ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                        : "border-orange-500 text-orange-600 dark:text-orange-400"
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>

                {/* Date */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.date}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                {/* Achievements */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors duration-300 bg-transparent"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  {project.demoVideo !== "#" && (
                    <Button
                      size="sm"
                      className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white`}
                      asChild
                    >
                      <a href={project.demoVideo} target="_blank" rel="noopener noreferrer">
                        <Play className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.demo !== "#" && project.labels.includes("Published in IEEE") && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 bg-transparent"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Paper
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="https://github.com/Mohammedmaaz1786" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
