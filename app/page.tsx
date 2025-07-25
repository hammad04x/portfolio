"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"

const techStack = [
  {
    name: "HTML5",
    color: "bg-orange-50 text-orange-700 border-orange-200",
    level: "Advanced",
  },
  {
    name: "CSS3",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    color: "bg-yellow-50 text-yellow-700 border-yellow-200",
    level: "Advanced",
  },
  {
    name: "React.js",
    color: "bg-cyan-50 text-cyan-700 border-cyan-200",
    level: "Intermediate",
  },
  {
    name: "Node.js",
    color: "bg-green-50 text-green-700 border-green-200",
    level: "Intermediate",
  },
  {
    name: "Express.js",
    color: "bg-gray-50 text-gray-700 border-gray-200",
    level: "Intermediate",
  },
  {
    name: "MongoDB",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    level: "Beginner",
  },
  {
    name: "MySQL",
    color: "bg-indigo-50 text-indigo-700 border-indigo-200",
    level: "Beginner",
  },
]

const projects = [
  {
    id: "ecommerce-website",
    title: "E-commerce Platform",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Next.js", "Tailwind"],
  },
  {
    id: "task-manager",
    title: "Task Management App",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["JavaScript", "Express", "MySQL"],
  },
]

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold text-gray-900">
              Portfolio
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 relative ${
                    activeSection === item.id ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <Button
                size="sm"
                className="hidden sm:flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </Button>

              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="hover:bg-gray-100" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-gray-100" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Available for opportunities
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Full Stack
              <span className="block text-gray-600">Developer</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Intern at <span className="font-semibold text-gray-900">Valudas Tech Park</span>, passionate about
              creating modern web experiences with clean code and innovative solutions.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-gray-300 hover:border-gray-900 hover:text-gray-900 px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors duration-300"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-8 rounded-full" />
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              I'm currently working as a{" "}
              <span className="font-semibold text-gray-900">Full Stack Developer Intern</span> at Valudas Tech Park,
              where I'm gaining hands-on experience in modern web development. I've successfully completed an E-commerce
              project and am passionate about creating efficient, scalable web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <Card className="p-8 bg-white shadow-lg border-0">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="group"
                    >
                      <div
                        className={`${tech.color} border-2 p-4 rounded-xl text-center transition-all duration-300 group-hover:shadow-md`}
                      >
                        <div className="font-semibold text-sm mb-1">{tech.name}</div>
                        <div className="text-xs opacity-75">{tech.level}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Projects</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-8 rounded-full" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in full-stack development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader className="p-6">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-3">{project.title}</CardTitle>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Link href={`/projects/${project.id}`}>
                      <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">View Details</Button>
                    </Link>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's Connect</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-8 rounded-full" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, and potential collaborations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover:shadow-xl transition-all duration-300 group bg-white border-0 shadow-lg h-full">
                <CardContent className="p-0 flex flex-col items-center text-center space-y-4">
                  <div className="bg-gray-900 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Me</h3>
                    <p className="text-gray-600 mb-4">Drop me a line anytime</p>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-gray-900 hover:text-gray-700 font-semibold transition-colors duration-300"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover:shadow-xl transition-all duration-300 group bg-white border-0 shadow-lg h-full">
                <CardContent className="p-0 flex flex-col items-center text-center space-y-4">
                  <div className="bg-gray-900 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Call Me</h3>
                    <p className="text-gray-600 mb-4">Let's have a conversation</p>
                    <a
                      href="tel:+15551234567"
                      className="text-gray-900 hover:text-gray-700 font-semibold transition-colors duration-300"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-gray-900 mb-4">Full Stack Developer</div>
              <p className="text-gray-600 mb-4 max-w-md">
                Passionate about creating modern web experiences with clean code and innovative solutions.
              </p>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Resume
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Certificates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Experience
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-600 mb-4 md:mb-0">© 2024 Portfolio. All rights reserved.</div>

            <div className="flex items-center space-x-6">
              <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
