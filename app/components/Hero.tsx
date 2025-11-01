"use client"

import { useEffect, useState } from "react"
import { ExternalLink, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const roles = [
    "Undergraduate Software Developer",
    "AI/ML Enthusiast",
    "MERN Stack Developer",
    "Deep Learning Learner",
    "Published Research Author",
    "Aspiring Data Scientist",
  ];



  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 1000 : 2000

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      } else {
        setDisplayText((prev) => (isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRoleIndex, roles])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-pink-600/10"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-poppins">
              <span className="block text-gray-900 dark:text-white mb-2">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Mohammed Maaz
                </span>
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 font-medium min-h-[1.2em]">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Passionate Computer Science Engineering student building intelligent systems with deep learning and innovative automation, 
              while mastering full-stack web development with the MERN stack. <span className="font-semibold text-gray-800 dark:text-gray-200">IEEE published author</span> enthusiastic 
              about transforming complex problems into elegant AI solutions and creating impactful, user-friendly applications that make a difference.
            </p>


            
            {/* Key Achievements Highlight */}
            {/* <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full font-medium">
                🎯 94% ML Model Accuracy
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full font-medium">
                📚 IEEE Published Paper
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full font-medium">
                🏆 9.35 CGPA
              </span>
            </div> */}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <a 
                href="https://drive.google.com/file/d/1VjcgcKfDenEoNKkXyF7iWRa7rXfwXuDV/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Resume
              </a>
            </Button>

            <Button
              onClick={scrollToProjects}
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-full font-semibold border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 bg-transparent"
            >
              Explore Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center space-y-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
          aria-label="Scroll to explore"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="h-5 w-5 animate-bounce group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>
    </section>
  )
}
