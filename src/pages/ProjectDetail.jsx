import { useParams, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { Github, ExternalLink, Calendar, Code2, AlertTriangle, CheckCircle2 } from "lucide-react"
import { Button } from "../components/ui/Button.jsx"
import { Navbar } from "../components/layout/Navbar.jsx"
import { Footer } from "../components/layout/Footer.jsx"

// Image Imports
import zepxImage from "../components/images/zepxThumbnail.png"
import zepx1 from "../components/images/zepx1.png"
import zepx2 from "../components/images/zepx2.png"
import zepx3 from "../components/images/zepx3.png"
import zepx4 from "../components/images/zepx4.png"
import zepx5 from "../components/images/zepx5.png"
import zepx6 from "../components/images/zepx6.png"
import zepx7 from "../components/images/zepx7.png"
import zepx8 from "../components/images/zepx8.png"

import sheetalThumbnail from "../components/images/sheetalThumbnail.png"
import sheetalHomePage from "../components/images/sheetalHomePage.png"
import sheetalMenuPage from "../components/images/sheetalMenuPage.png"
import sheetalGalleryPage from "../components/images/sheetalGalleryPage.png"
import sheetalContactPage from "../components/images/sheetalContactPage.png"

import smsThumbnail from "../components/images/smsThumbnail.png"

const projectData = {
  "sheetal-sweets": {
    title: "Sheetal Sweets & Bakery",
    date: "2025",
    role: "Full Stack Developer",
    description: "A fully responsive business website for a local sweets and bakery brand. Built to establish a premium digital presence with product showcasing, brand storytelling, and a clean user experience that converts visitors into customers. Deployed on a Hostinger VPS with a Node.js/Express backend.",
    image: sheetalThumbnail,
    gallery: [
      sheetalHomePage,
      sheetalMenuPage,
      sheetalGalleryPage,
      sheetalContactPage
    ],
    github: null,
    live: "https://sheetalsweets.in/",
    technologies: ["React", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    features: [
      { num: "01", title: "Responsive Design", desc: "Pixel-perfect layout across all devices — mobile, tablet, and desktop." },
      { num: "02", title: "Product Showcase", desc: "Dynamic product listings with category filtering for a smooth browsing experience." },
      { num: "03", title: "VPS Deployment", desc: "Fully deployed on Hostinger VPS with Node.js/Express backend serving the production build." },
    ],
    challenges: [
      { title: "VPS Deployment Pipeline", success: true, text: "Configured Nginx reverse proxy and PM2 process manager to keep the Node.js server running reliably on a Linux VPS." },
      { title: "Performance on Mobile", success: false, text: "Initial load times were slow on low-end devices — optimized images and lazy loading to bring it to an acceptable threshold." },
    ],
    learnings: "Deploying a real client website on a VPS was a completely different beast from localhost. Managing Nginx configs, SSL certificates, and process managers taught me how production infrastructure actually works — no abstractions, no hand-holding."
  },

  "student-management-system": {
    title: "Student Management System",
    date: "March 2026",
    role: "Backend Developer",
    description: "A production-grade REST API built with Java and Spring Boot. Features JWT authentication, role-based access, student/course/enrollment management, image uploads with UUID-based file storage, and pagination — clean layered architecture from entity to controller.",
    image: smsThumbnail,
    gallery: [],
    github: "https://github.com/hammad04x/Students-Management-System-In-Java-Spring-Boot",
    live: null,
    technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "JWT", "REST API", "Postman"],
    features: [
      { num: "01", title: "Layered Architecture", desc: "Strict separation of concerns spanning Controller, Service, DAO, and Entity layers." },
      { num: "02", title: "JWT Authentication", desc: "Access and refresh token pattern with secure role-based route protection." },
      { num: "03", title: "File Upload System", desc: "Custom FileStorageService handles UUID-based profile image saving directly to server disk." },
    ],
    challenges: [
      { title: "Image Update Workflow", success: true, text: "Built logic to detect, extract, and delete older images on update — preserving disk space without orphaned files." },
      { title: "ManyToMany Relationship Mapping", success: false, text: "Navigating complex bidirectional relationships significantly complicated DTO contracts — solved with careful mapping strategies." },
    ],
    learnings: "Building the file storage logic manually taught me how memory blocks and local paths actually work instead of blindly relying on cloud abstractions. This project also refined my understanding of Spring Boot's layered architecture at a production level."
  },

  "ecommerce-website": {
    title: "ZepX E-commerce Platform",
    date: "February 2025",
    role: "Full Stack Developer",
    description: "A comprehensive e-commerce solution with dynamic product management, JWT authentication, and secure payment processing via Razorpay. Built completely from scratch to handle real-world shopping experiences.",
    image: zepxImage,
    gallery: [zepx1, zepx2, zepx3, zepx4, zepx5, zepx6, zepx7, zepx8],
    github: "https://github.com/hammad04x/Zepx-The-Ecommerce",
    live: null,
    technologies: ["React", "Node.js", "Express.js", "MySQL", "Razorpay API"],
    features: [
      { num: "01", title: "Authentication Flow", desc: "Secure user registration, login, and protected routes using JWT." },
      { num: "02", title: "Payment Integration", desc: "Integrated Razorpay for seamless and secure checkout." },
      { num: "03", title: "Admin Portal", desc: "Dedicated admin dashboard to manage inventory and view orders." },
    ],
    challenges: [
      { title: "State Management", success: true, text: "Leveraged Context API to handle complex shopping cart states globally." },
      { title: "API Security", success: false, text: "Initially struggled with token expiration, solved using HTTP-only cookies securely." },
    ],
    learnings: "Building this platform taught me the importance of maintaining an organized component architecture when scaling React apps. Integrating Razorpay solidified my understanding of strict backend security constraints and webhook fulfillments."
  },
}

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projectData[slug]

  if (!project) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ fontSize: "2rem" }}>Project not found</h1>
        <Button asChild style={{ marginLeft: "2rem" }}><Link to="/">Return Home</Link></Button>
      </div>
    )
  }

  const canonicalBase = "https://jagaralahammad.vercel.app"
  const canonicalUrl = `${canonicalBase}/projects/${slug}`
  const ogImage = typeof project.image === "string" && project.image.startsWith("http")
    ? project.image
    : `${canonicalBase}/preview.jpg`

  const projectMeta = {
    "sheetal-sweets": {
      description: "Case study: Sheetal Sweets & Bakery — a fully responsive business website built with React, Node.js, Express.js and MySQL. Deployed on Hostinger VPS with Nginx reverse proxy.",
      keywords: "Sheetal Sweets Bakery website, React business website, Node.js Express MySQL, VPS deployment, Hostinger Nginx, full stack project"
    },
    "student-management-system": {
      description: "Case study: Student Management System — a production-grade Java Spring Boot REST API with JWT authentication, role-based access control, Hibernate/MySQL, and UUID-based file storage.",
      keywords: "Student Management System Java, Spring Boot REST API, JWT authentication, Hibernate MySQL, role based access, Java Spring Boot project portfolio"
    },
    "ecommerce-website": {
      description: "Case study: ZepX E-commerce Platform — full-stack React + Node.js shopping platform with Razorpay payment integration, JWT auth, admin dashboard, and Context API cart state.",
      keywords: "ZepX ecommerce, React Node.js ecommerce, Razorpay integration, JWT authentication, full stack ecommerce project, React shopping cart"
    }
  }
  const meta = projectMeta[slug] || { description: project.description, keywords: "" }

  return (
    <>
      <Helmet>
        {/* ── Primary ── */}
        <title>{project.title} — Case Study | Hammad Jagarala</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content="Hammad Jagarala" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={canonicalUrl} />

        {/* ── Open Graph ── */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Hammad Jagarala — Portfolio" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={`${project.title} — Case Study | Hammad Jagarala`} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={`${project.title} — project screenshot`} />
        <meta property="og:locale" content="en_IN" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@hammad04x" />
        <meta name="twitter:title" content={`${project.title} | Hammad Jagarala`} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={`${project.title} screenshot`} />

        {/* ── JSON-LD: SoftwareApplication ── */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": project.title,
          "url": canonicalUrl,
          "description": meta.description,
          "applicationCategory": "WebApplication",
          "operatingSystem": "Web",
          "datePublished": project.date,
          "author": {
            "@type": "Person",
            "name": "Hammad Jagarala",
            "url": canonicalBase
          },
          "programmingLanguage": project.technologies,
          ...(project.live ? { "installUrl": project.live } : {}),
          ...(project.github ? { "codeRepository": project.github } : {})
        })}</script>

        {/* ── JSON-LD: BreadcrumbList ── */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": canonicalBase + "/" },
            { "@type": "ListItem", "position": 2, "name": "Projects", "item": canonicalBase + "/#projects" },
            { "@type": "ListItem", "position": 3, "name": project.title, "item": canonicalUrl }
          ]
        })}</script>
      </Helmet>

      <Navbar />

      <main style={{ paddingBottom: "5rem", paddingTop: "5rem" }}>

        {/* Breadcrumb */}
        <div className="container">
          <div className="pd-breadcrumb">
            <Link to="/" className="pd-breadcrumb-link">Home</Link>
            <span className="pd-breadcrumb-sep">/</span>
            <Link to="/#projects" className="pd-breadcrumb-link">Projects</Link>
            <span className="pd-breadcrumb-sep">/</span>
            <span className="pd-breadcrumb-cur">{project.title}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="project-hero">
          <div className="container">
            <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
              <div className="project-hero-badge">Case Study</div>
              <h1 className="project-hero-title">{project.title}</h1>
              <p className="project-hero-description">{project.description}</p>

              <div className="project-hero-actions">
                {project.live && (
                  <Button asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} /><span style={{ marginLeft: "0.5rem" }}>Live Site</span>
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button variant="secondary" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} /><span style={{ marginLeft: "0.5rem" }}>Source Code</span>
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6, delay: 0.2 }} className="project-hero-meta bento-box">
              <div className="pm-item">
                <Calendar size={18} className="pm-icon" />
                <div>
                  <div className="pm-label">Timeline</div>
                  <div className="pm-value">{project.date}</div>
                </div>
              </div>
              <div className="pm-item">
                <Code2 size={18} className="pm-icon" />
                <div>
                  <div className="pm-label">My Role</div>
                  <div className="pm-value">{project.role}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Image */}
        <section className="project-image-section">
          <div className="container">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="bento-box" style={{ padding: "0.5rem" }}>
              <img src={project.image} alt={project.title} className="project-main-image" />
            </motion.div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="section section-gray" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              {project.technologies.map((tech, i) => (
                <motion.div key={tech} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }} className="bento-box" style={{ padding: "1rem 2.5rem", fontWeight: 700, fontSize: "1.0625rem", color: "var(--text-main)" }}>
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="section">
          <div className="container">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="section-header centered">
              <h2 className="section-title">Key Features</h2>
              <div className="section-divider centered" />
            </motion.div>
            <div className="features-grid">
              {project.features.map((feat, i) => (
                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="bento-box feature-card">
                  <div className="fc-num">{feat.num}</div>
                  <h3 className="fc-title">{feat.title}</h3>
                  <p className="fc-desc">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="section section-alt">
            <div className="container">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="section-header centered">
                <h2 className="section-title">Application Gallery</h2>
                <div className="section-divider centered" />
              </motion.div>
              <div className="pd-gallery-grid">
                {project.gallery.map((imgSrc, i) => (
                  <motion.img
                    key={i} src={imgSrc} alt={`${project.title} screenshot ${i + 1}`}
                    className="pd-gallery-img"
                    initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }} viewport={{ once: true }}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Challenges & Learnings */}
        <section className="section">
          <div className="container">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="section-header centered">
              <h2 className="section-title">Challenges & Learnings</h2>
              <div className="section-divider centered" />
            </motion.div>

            <div style={{ display: "grid", gap: "4rem" }}>
              {project.challenges && (
                <div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.5rem" }}>Challenges Overcome</h3>
                  <div className="pd-challenges">
                    {project.challenges.map((ch, i) => (
                      <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="pd-challenge-item">
                        <div className={`pd-ch-icon ${ch.success ? "success" : "warning"}`}>
                          {ch.success ? <CheckCircle2 size={24} /> : <AlertTriangle size={24} />}
                        </div>
                        <div>
                          <div className="pd-ch-title">{ch.title}</div>
                          <div className="pd-ch-text">{ch.text}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {project.learnings && (
                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="bento-box" style={{ padding: "2.5rem", background: "var(--bg-surface)" }}>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>Key Learnings</h3>
                  <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", lineHeight: "1.8" }}>{project.learnings}</p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}