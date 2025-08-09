import Hero from "./components/Hero"
import About from "./components/About"
import SkillsEducationCertifications from "./components/SkillsEducationCertifications"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 transition-colors duration-500">
      <Navigation />
      <main>
        <Hero />
        <About />
        <SkillsEducationCertifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
