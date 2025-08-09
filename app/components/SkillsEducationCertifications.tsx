"use client"

import { useState, useEffect, useRef } from "react"
import { Code, GraduationCap, Award, Calendar, MapPin, ExternalLink, Database, Globe, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function SkillsEducationCertifications() {
  const [activeTab, setActiveTab] = useState("skills")
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
  }, [activeTab])

  const skillCategories = [
  {
    title: "Programming & Development",
    icon: Code,
    iconColor: "from-blue-500 to-purple-500",
    skills: ["Python", "Java", "C", "PHP", "JavaScript"],
  },
  {
    title: "AI/ML & Deep Learning",
    icon: Cpu,
    iconColor: "from-blue-500 to-purple-500",
    skills: [
      "TensorFlow",
      "Keras",
      "PyTorch",
      "OpenCV",
      "NLTK",
      "Natural Language Processing",
      "Computer Vision",
      "Transfer Learning"
    ],
  },
  {
    title: "Web & UI Development",
    icon: Globe,
    iconColor: "from-blue-500 to-purple-500",
    skills: ["HTML", "CSS", "JavaScript", "React", "Streamlit", "Tkinter"],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    iconColor: "from-blue-500 to-purple-500",
    skills: ["MySQL", "MongoDB", "Git", "GitHub", "VS Code", "Jupyter Notebook"],
  },
];


  const education = [
    {
      degree: "B.Tech in Computer Science Engineering (AIML)",
      institution: "REVA University",
      location: "Bengaluru, India",
      duration: "2022 - Present (Expected 2026)",
      cgpa: "9.35",
      description:
        "Specializing in Artificial Intelligence and Machine Learning with focus on deep learning, computer vision, and intelligent systems.",
    },
    {
      degree: "XII (2nd PUC)",
      institution: "Presidency PU College",
      location: "Bengaluru, India",
      duration: "2022",
      cgpa: "93.33%",
      description: "Completed higher secondary education with distinction in Science stream.",
    },
    {
      degree: "X (SSLC)",
      institution: "The Best High School",
      location: "Bengaluru, India",
      duration: "2020",
      cgpa: "93.92%",
      description: "Completed secondary education with excellent academic performance.",
    },
  ]

  const certifications = [
    {
      name: "Data Structures and Algorithms using Java",
      issuer: "NPTEL",
      date: "Jul-Oct 2024",
      score: "Completed",
      description: "Completed a 12-week course covering arrays, trees, graphs, and algorithmic problem-solving.",
      link: "#",
    },
    {
      name: "Kubernetes & Docker Fundamentals",
      issuer: "Udemy",
      date: "May 2025",
      score: "Completed",
      description: "4-hour course on Docker basics, Kubernetes orchestration, and hands-on labs.",
      link: "#",
    },
    {
      name: "SQL using MySQL and DB Design",
      issuer: "Scaler",
      date: "Apr 2024",
      score: "Completed",
      description: "Covered SQL queries, joins, subqueries, aggregation, and schema design.",
      link: "#",
    },
    {
      name: "MongoDB Developer Course",
      issuer: "Infosys Springboard",
      date: "Dec 2024",
      score: "Completed",
      description: "Learned CRUD operations, indexing, aggregation, and NoSQL data modeling.",
      link: "#",
    },
    {
      name: "WordPress Development",
      issuer: "rtCamp",
      date: "Ongoing",
      score: "In Progress",
      description: "Learning theme/plugin creation, WP-CLI, security, and PHP optimization.",
      link: "#",
    },
    {
      name: "Full Stack Web Development (Sigma 5.0)",
      issuer: "Apna College",
      date: "Ongoing",
      score: "In Progress",
      description:
        "Pursuing in-depth training in the MERN stack (MongoDB, Express, React, Node.js) and data structures using Java, covering frontend development, backend APIs, database integration, and algorithmic problem-solving.",
      link: "#",
    },
  ]

  const tabs = [
    { id: "skills", label: "Skills", icon: Code },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certifications", label: "Certifications", icon: Award },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case "skills":
        return (
          <div className="animate-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Technical Skills
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Expertise across multiple domains of software development and AI/ML
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={`skill-category-${category.title}`}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <div className="flex items-center mb-6">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${category.iconColor} mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <Badge
                        key={`${category.title}-${skill}`}
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 text-sm font-medium hover:scale-105 transition-transform duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case "education":
        return (
          <div className="animate-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Education
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">Academic journey and achievements</p>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={`education-${edu.degree}`}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <GraduationCap className="h-4 w-4 mr-2" />
                          {edu.institution}
                        </div>
                        <div className="flex items-center mb-2 sm:mb-0">
                          <MapPin className="h-4 w-4 mr-2" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {edu.duration}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 text-lg font-semibold">
                        {edu.cgpa}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        )

      case "certifications":
        return (
          <div className="animate-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Certifications
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Continuous learning and professional development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={`certification-${cert.name}`}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant={cert.score === "In Progress" ? "outline" : "default"}
                        className={
                          cert.score === "In Progress"
                            ? "border-orange-500 text-orange-600 dark:border-orange-400 dark:text-orange-400"
                            : "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                        }
                      >
                        {cert.score}
                      </Badge>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{cert.issuer}</p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{cert.description}</p>

                  {cert.link !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors duration-300 bg-transparent"
                      asChild
                    >
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </a>
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section
      id="skills-education-certifications"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 animate-on-scroll">
          <div className="bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-700"
                  }`}
                >
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div key={`tab-content-${activeTab}`}>{renderTabContent()}</div>
      </div>
    </section>
  )
}
