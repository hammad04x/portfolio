

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useParams } from "next/navigation"

const projectData = {
  "ecommerce-website": {
    title: "E-commerce Platform",
    description:
      "A comprehensive e-commerce platform that provides a seamless shopping experience for users and powerful management tools for administrators. Built with modern web technologies and following best practices for performance, security, and user experience.",
    duration: "3 months",
    completedDate: "December 2023",
    technologies: ["React", "Node.js", "Express", "MongoDB", "CSS", "JavaScript", "JWT", "Stripe API"],
    images: [
      "/placeholder.svg?height=500&width=800",
      "/placeholder.svg?height=500&width=800",
      "/placeholder.svg?height=500&width=800",
      "/placeholder.svg?height=500&width=800",
    ],
    features: [
      {
        title: "User Authentication & Authorization",
        description: "Secure user registration, login, and role-based access control using JWT tokens.",
      },
      {
        title: "Product Catalog Management",
        description: "Dynamic product listings with search, filtering, and categorization capabilities.",
      },
      {
        title: "Shopping Cart & Checkout",
        description: "Intuitive cart management with secure payment processing integration.",
      },
      {
        title: "Admin Dashboard",
        description: "Comprehensive admin panel for inventory management, order tracking, and analytics.",
      },
      {
        title: "Responsive Design",
        description: "Mobile-first approach ensuring optimal experience across all devices.",
      },
      {
        title: "Performance Optimization",
        description: "Implemented lazy loading, caching, and code splitting for fast load times.",
      },
    ],
    challenges: [
      "Implementing secure payment processing with Stripe API",
      "Optimizing database queries for large product catalogs",
      "Creating a responsive design that works across all devices",
      "Managing complex state for shopping cart and user sessions",
    ],
    learnings: [
      "Advanced React patterns and state management",
      "RESTful API design and implementation",
      "Database schema design and optimization",
      "Security best practices for web applications",
    ],
  },
  "portfolio-website": {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my skills and projects as a full-stack developer.",
    duration: "2 weeks",
    completedDate: "January 2024",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    images: ["/placeholder.svg?height=500&width=800", "/placeholder.svg?height=500&width=800"],
    features: [
      { title: "Responsive Design", description: "Mobile-first responsive design" },
      { title: "Smooth Animations", description: "Framer Motion animations" },
    ],
    challenges: ["Creating smooth animations", "Responsive design implementation"],
    learnings: ["Next.js best practices", "Animation libraries"],
  },
  "task-manager": {
    title: "Task Management App",
    description: "A simple task management application for organizing daily tasks and projects.",
    duration: "1 month",
    completedDate: "November 2023",
    technologies: ["JavaScript", "Express", "MySQL", "HTML", "CSS"],
    images: ["/placeholder.svg?height=500&width=800", "/placeholder.svg?height=500&width=800"],
    features: [
      { title: "Task CRUD Operations", description: "Create, read, update, delete tasks" },
      { title: "User Management", description: "User registration and authentication" },
    ],
    challenges: ["Database design", "User authentication"],
    learnings: ["MySQL database management", "Express.js fundamentals"],
  },
}

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = projectData[slug as keyof typeof projectData]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Button>Back to Home</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header showBackButton={true} title={project.title} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">{project.title}</h1>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-lg">
                <Calendar className="w-5 h-5 text-gray-600" />
                <span className="font-semibold text-gray-700">Completed: {project.completedDate}</span>
              </div>
              <div className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-lg">
                <Clock className="w-5 h-5 text-gray-600" />
                <span className="font-semibold text-gray-700">Duration: {project.duration}</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-gray-100 text-gray-700 px-4 py-2 text-sm font-semibold"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={800}
                  height={500}
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-8 rounded-full" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive functionality designed for optimal user experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Learnings */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white border-0 shadow-lg">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Challenges Overcome</h3>
                  <ul className="space-y-6">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-4">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 leading-relaxed">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white border-0 shadow-lg">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Learnings</h3>
                  <ul className="space-y-6">
                    {project.learnings.map((learning, index) => (
                      <li key={index} className="flex items-start space-x-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 leading-relaxed">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Interested in this project?</h3>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Check out the live demo or explore the source code on GitHub
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold flex items-center space-x-3"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Live Demo</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-gray-900 hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-300 flex items-center space-x-3 bg-transparent"
              >
                <Github className="w-5 h-5" />
                <span>View Source Code</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
