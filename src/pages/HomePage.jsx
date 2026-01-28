"use client"
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion"
import { ArrowDown, Download, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "../components/ui/Button.jsx"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card.jsx"
import { Badge } from "../components/ui/Badge.jsx"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Footer } from "../components/layout/Footer.jsx"
import zepxThumbnail from "../components/images/zepxThumbnail.png"
// import zepxThumbnai from "../components/resume/Hammad_Jagarala_Resume"

const techStack = [
  {
    name: "HTML5",
    className: "skill-html",
    level: "Frontend",
  },
  {
    name: "CSS3",
    className: "skill-css",
    level: "Frontend",
  },
  {
    name: "JavaScript",
    className: "skill-js",
    level: "Frontend",
  },
  {
    name: "React.js",
    className: "skill-react",
    level: "Frontend",
  },
  {
    name: "Node.js",
    className: "skill-node",
    level: "Backend",
  },
  {
    name: "Express.js",
    className: "skill-express",
    level: "Backend",
  },
  {
    name: "MySQL",
    className: "skill-html",
    level: "Database",
  },
  {
    name: "Git",
    className: "skill-css",
    level: "Tool",
  },
  {
    name: "GitHub",
    className: "skill-js",
    level: "Tool",
  },
  {
    name: "VsCode",
    className: "skill-react",
    level: "Tool",
  },
]

const projects = [
  {
    id: "ecommerce-website",
    title: "E-commerce Platform",
    image: zepxThumbnail,
    technologies: ["React", "Node.js", "Express.js", "Express.js"],
  }
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <Helmet>
        <title>Hammad Jagarala | Full Stack Web Developer</title>
        <meta name="description" content="I'm Hammad Jagarala — Full Stack developer building modern React and Node.js apps. Explore my projects, skills, and contact info." />
        <meta name="keywords" content="Hammad Jagarala,Hammad jagarala, hammad Jagarala, hammad jagarala, Hammad Jagrala, Hammad jagrala, hammad Jagrala, hammad jagrala, Web Developer, Full Stack, React, Node.js, Portfolio" />
        <link rel="canonical" href="https://jagaralahammad.vercel.app/" />

        {/* Open Graph */}
        <meta property="og:title" content="Hammad Jagarala | Web Developer" />
        <meta property="og:description" content="Full Stack developer building modern React & Node.js experiences." />
        <meta property="og:image" content="https://jagaralahammad.vercel.app/preview.jpg" />
        <meta property="og:url" content="https://jagaralahammad.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hammad Jagarala | Web Developer" />
        <meta name="twitter:description" content="Full Stack developer building modern React & Node.js experiences." />
        <meta name="twitter:image" content="https://jagaralahammad.vercel.app/preview.jpg" />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {`
      {
        "@context":"https://schema.org",
        "@type":"Person",
        "name":"Hammad Jagarala",
        "url":"https://jagaralahammad.vercel.app",
        "jobTitle":"Full Stack Developer",
        "image":"https://jagaralahammad.vercel.app/preview.jpg",
        "sameAs":[
          "https://github.com/hammad04x",
          "https://www.linkedin.com/in/hammad-jagarala-240b83260/",
          "https://www.instagram.com/hammad_jagarala/"
        ] 
      }
    `}
        </script>
      </Helmet>

      <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
        {/* Navigation */}
        <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="navbar">
          <div className="navbar-container">
            <div className="navbar-content">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="navbar-logo">
                HAMMAD
              </motion.div>

              <div className="navbar-menu">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "projects", label: "Projects" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`navbar-link ${activeSection === item.id ? "active" : ""}`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div layoutId="activeSection" className="navbar-link-indicator" />
                    )}
                  </button>
                ))}
              </div>

              <div className="navbar-actions">
                <Button size="sm" className="sm:flex hidden" asChild>
                  <a
                    href="/Hammad_Jagarala_Resume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download size={16} />
                    <span>Resume</span>
                  </a>
                </Button>


                <div className="navbar-social">
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://github.com/hammad04x" target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://www.linkedin.com/in/hammad-jagarala-240b83260/" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-container">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="hero-status">
                  <span className="hero-status-dot"></span>
                  Available for opportunities
                </div>
              </motion.div>
              <h1 className="hero-title">Hi, I’m Hammad</h1>
              <h1 className="hero-title">
                <span className="hero-title-secondary">  Full Stack
                  Developer</span>
              </h1>

              <p className="hero-description">
                Full Time at <span className="hero-description-highlight">Valudas Tech Park</span>, passionate about creating
                modern web experiences with clean code and innovative solutions.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hero-actions"
              >
                <Button size="lg" onClick={() => scrollToSection("projects")}>
                  View My Work
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="hero-scroll"
            >
              <button onClick={() => scrollToSection("about")} className="hero-scroll-btn animate-bounce">
                <ArrowDown size={24} />
              </button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section section-gray">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2 className="section-title">About Me</h2>
              <div className="section-divider" />
              <p className="section-description">
                I'm currently working as a{" "}
                <span style={{ fontWeight: 600, color: "#1f2937" }}>Full Stack Developer Full Time</span> at Valudas Tech
                Park, where I'm gaining hands-on experience in modern web development. I've successfully completed an
                E-commerce project and am passionate about creating efficient, scalable web applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                style={{
                  padding: "2rem",
                  backgroundColor: "white",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  border: "none",
                }}
              >
                <CardContent>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#1f2937",
                      marginBottom: "2rem",
                      textAlign: "center",
                    }}
                  >
                    Technical Skills
                  </h3>
                  <div className="skills-grid">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className={`skill-card ${tech.className}`}>
                          <div className="skill-name">{tech.name}</div>
                          <div className="skill-level">{tech.level}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Projects Completed Section */}
        <section id="completed-projects" className="section section-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2 className="section-title">Projects Completed</h2>
              <div className="section-divider" />
              <p className="section-description">
                I've completed several full-stack and frontend projects that reflect my growth and hands-on development skills.
              </p>
            </motion.div>

            <div className="projects-completed-grid">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="completed-project-card"
              >
                <h3 className="completed-project-title">E-commerce Platform</h3>
                <p className="completed-project-desc">
                  A full-featured E-commerce website with product listings, authentication, and admin dashboard using MERN stack.
                </p>
              </motion.div>


            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="section section-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2 className="section-title">My Projects</h2>
              <div className="section-divider" />
              <p className="section-description">
                Here are some of the projects I've worked on, showcasing my skills in full-stack development.
              </p>
            </motion.div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="project-card">
                    <div className="project-image-container">
                      <img src={project.image || zepxThumbnail} alt={project.title} className="project-image" />

                      <div className="project-overlay" />
                    </div>

                    <CardHeader className="project-content">
                      <CardTitle className="project-title">{project.title}</CardTitle>

                      <div className="project-technologies flex flex-wrap items-center gap-2 mt-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}

                        {project.technologies.length > 3 && (
                          <Badge variant="secondary">+more</Badge>
                        )}
                      </div>

                      <Link to={`/projects/${project.id}`}>
                        <Button style={{ width: "100%" }}>View Details</Button>
                      </Link>
                    </CardHeader>
                  </Card>

                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Experience Section */}
        <section id="experience" className="section section-gray">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2 className="section-title">Experience</h2>
              <div className="section-divider" />
              <p className="section-description">
                Here’s a glimpse into my professional experiences and what I’ve been cooking in the dev world.
              </p>
            </motion.div>

            <div className="experience-timeline">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="experience-card"
              >
                <h3 className="experience-role">Full Stack Developer Full Time</h3>
                <p className="experience-company">Valudas Tech Park</p>
                <p className="experience-duration">June 2025 – Present</p>
                <p className="experience-desc">
                  Working on dynamic web apps using React and Node.js. Built internal tools, worked with REST APIs,
                  and improved code performance across projects.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section section-gray">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2 className="section-title">Let's Connect</h2>
              <div className="section-divider" />
              <p className="section-description">
                I'm always open to discussing new opportunities, interesting projects, and potential collaborations.
              </p>
            </motion.div>

            <div className="contact-grid">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="contact-card">
                  <CardContent className="contact-card-section">
                    <div className="contact-icon">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="contact-title">Email Me</h3>
                      <p className="contact-description">Drop me a line anytime</p>
                      <a href="mailto:your.email@example.com" className="contact-link">
                        codewithhammad.dev@gmail.com
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
                <Card className="contact-card">
                  <CardContent className="contact-card-section">
                    <div className="contact-icon">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="contact-title">Call Me</h3>
                      <p className="contact-description">Let's have a conversation</p>
                      <a href="tel:+917203053578" className="contact-link">
                        +91 (720) 305-3578
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
