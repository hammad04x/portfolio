// "use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Clock } from "lucide-react"
import { Button } from "../components/ui/Button.jsx"
import { Card, CardContent } from "../components/ui/Card.jsx"
import { Badge } from "../components/ui/Badge.jsx"
import { Header } from "../components/layout/Header.jsx"
import { Footer } from "../components/layout/Footer.jsx"
import { useParams } from "react-router-dom"

import zepx1 from "../components/images/zepx1.png"
import zepx2 from "../components/images/zepx2.png"
import zepx3 from "../components/images/zepx3.png"
import zepx4 from "../components/images/zepx4.png"
import zepx5 from "../components/images/zepx5.png"
import zepx6 from "../components/images/zepx6.png"
import zepx7 from "../components/images/zepx7.png"
import zepx8 from "../components/images/zepx8.png"
import zepx9 from "../components/images/zepx9.png"

const projectData = {
  "ecommerce-website": {
    title: "E-commerce Platform",
    description:
      "A comprehensive e-commerce platform that provides a seamless shopping experience for users and powerful management tools for administrators. Built with modern web technologies and following best practices for performance, security, and user experience.",
    duration: "2 months",
    completedDate: "March 2025",
    technologies: ["React", "Node.js", "Express", "CSS", "Razorpay", "Figma", "Mysql"],
    images: [
      zepx1,
      zepx2,
      zepx3,
      zepx4,
      zepx5,
      zepx6,
      zepx7,
      zepx8,
      zepx9,
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
      "Implementing secure payment processing with Razorpay API",
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
  }
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const [modalImage, setModalImage] = useState(null)
  const project = projectData[slug]

  if (!project) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1f2937", marginBottom: "1rem" }}>
            Project Not Found
          </h1>
          <Button>Back to Home</Button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <Header showBackButton={true} title={project.title} />

      {/* Hero Section */}
      <section className="project-hero">
        <div className="project-hero-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="project-hero-title">{project.title}</h1>
            <div className="section-divider" />
            <p className="project-hero-description">{project.description}</p>

            <div className="project-meta">
              <div className="project-meta-item">
                <Calendar size={20} style={{ color: "#6b7280" }} />
                <span className="project-meta-text">Completed: {project.completedDate}</span>
              </div>
              <div className="project-meta-item">
                <Clock size={20} style={{ color: "#6b7280" }} />
                <span className="project-meta-text">Duration: {project.duration}</span>
              </div>
            </div>

            <div className="project-technologies">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  style={{ padding: "0.5rem 1rem", fontSize: "0.875rem", fontWeight: 600 }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="project-gallery">
        <div className="project-gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="project-gallery-grid"
          >
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="project-gallery-item"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="project-gallery-image"
                  onClick={() => setModalImage(image)}
                  style={{ cursor: "zoom-in" }}
                />

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {modalImage && (
        <div className="image-modal">
          <div className="image-modal-backdrop" onClick={() => setModalImage(null)} />
          <div className="image-modal-content">
            <button className="image-modal-close" onClick={() => setModalImage(null)}>✖</button>
            <img src={modalImage} alt="Zoomed project" />
          </div>
        </div>
      )}

      {/* Features Section */}
      <section className="project-features">
        <div className="project-features-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Key Features</h2>
            <div className="section-divider" />
            <p className="section-description">Comprehensive functionality designed for optimal user experience</p>
          </motion.div>

          <div className="project-features-grid">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="project-feature-card">
                  <CardContent>
                    <h3 className="project-feature-title">{feature.title}</h3>
                    <p className="project-feature-description">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Learnings */}
      <section className="project-challenges">
        <div className="project-challenges-container">
          <div className="project-challenges-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="project-challenge-card">
                <CardContent>
                  <h3 className="project-challenge-title">Challenges Overcome</h3>
                  <ul className="project-challenge-list">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="project-challenge-item">
                        <div className="project-challenge-dot red" />
                        <span className="project-challenge-text">{challenge}</span>
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
              <Card className="project-challenge-card">
                <CardContent>
                  <h3 className="project-challenge-title">Key Learnings</h3>
                  <ul className="project-challenge-list">
                    {project.learnings.map((learning, index) => (
                      <li key={index} className="project-challenge-item">
                        <div className="project-challenge-dot green" />
                        <span className="project-challenge-text">{learning}</span>
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
  
      <Footer />
    </div>
  )
}
