"use client"
import React, { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Helmet } from "react-helmet-async"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, Github, Linkedin, ExternalLink, Monitor, Server, Database, Wrench } from "lucide-react"
import { Button } from "../components/ui/Button.jsx"
import { Badge } from "../components/ui/Badge.jsx"
import { Link } from "react-router-dom"
import { Navbar } from "../components/layout/Navbar.jsx"
import { Footer } from "../components/layout/Footer.jsx"
import zepxThumbnail from "../components/images/zepxThumbnail.png"
import sheetalThumbnail from "../components/images/sheetalThumbnail.png"
import smsThumbnail from "../components/images/smsThumbnail.png"

const techStack = {
  frontend: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  backend: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs", "JWT Auth"],
  database: ["MySQL", "Hibernate", "JPA"],
  tools: ["Git", "GitHub", "Postman", "Maven", "VS Code", "IntelliJ Idea", "Vite"],
};

const projects = [
  {
    id: "sheetal-sweets",
    title: "Sheetal Sweets & Bakery",
    desc: "A fully responsive business website for a local sweets and bakery brand. Built to establish a premium digital presence with product showcasing, brand storytelling, and a clean user experience that converts visitors into customers.",
    technologies: ["React", "Node.js", "Express.js", "MySQL"],
    image: sheetalThumbnail,
    liveUrl: "https://sheetalsweets.in/",
    githubUrl: null,
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    desc: "A production-grade REST API built with Java and Spring Boot. Features JWT authentication, role-based access, student/course/enrollment management, image uploads, and pagination — layered architecture from entity to controller.",
    technologies: ["Java", "Spring Boot", "MySQL", "JWT", "REST API"],
    image: smsThumbnail,
    liveUrl: null,
    githubUrl: "https://github.com/hammad04x/Students-Management-System-In-Java-Spring-Boot.git",
  },
  {
    id: "ecommerce-website",
    title: "ZepX E-commerce Platform",
    desc: "A comprehensive e-commerce solution with dynamic product management, JWT authentication, and secure payment processing via Razorpay. Built completely from scratch to handle real-world shopping experiences.",
    technologies: ["React", "Node.js", "Express.js", "MySQL", "Razorpay API"],
    image: zepxThumbnail,
    liveUrl: null,
    githubUrl: "https://github.com/hammad04x/Zepx-The-Ecommerce.git",
  },
];

const experiences = [
  {
    company: "Valudas Tech Park",
    role: "Full Stack Developer Trainee",
    duration: "June 2024 — January 2026",
    desc: "Completed an intensive full-stack training program where I went from fundamentals to shipping real products. Built an e-commerce platform, a real estate web app, and several other client-facing projects. Gained deep hands-on experience integrating third-party services like Google Auth and Razorpay into production-ready applications.",
    skills: ["HTML", "CSS", "Tailwind Css", "JavaScript", "React", "Node.js", "Express.js", "MySQL", "JWT", "Google Auth", "Razorpay"],
  },
  {
    company: "Quba Info Tech",
    role: "Software Developer Intern",
    duration: "February 2026 — Present",
    desc: "Currently working on real-world client projects in a professional Agile environment. Deepening expertise in Java and Spring Boot for backend architecture while also building modern frontends with Next.js. Collaborating with a team using Jira and Slack, shipping features that go into actual production systems.",
    skills: ["Java", "Spring Boot", "Node.js", "Express.js", "Tailwind Css", "Next.js", "REST APIs", "MySQL", "Slack"],
  },
];

const rise = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }

export default function HomePage() {
  const [activeExp, setActiveExp] = useState(0)
  const [formState, handleFormSubmit] = useForm("xykbqlpe")

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <>
      <Helmet>
        {/* ── Primary ── */}
        <title>Hammad Jagarala | Full Stack Developer — React, Spring Boot, Node.js</title>
        <meta name="description" content="Hammad Jagarala is a Full Stack Developer from Gujarat, India, building production-grade apps with Java, Spring Boot, React, and Node.js. Available for freelance and full-time opportunities." />
        <meta name="keywords" content="Hammad Jagarala, Full Stack Developer, React Developer, Spring Boot Developer, Java Developer, Node.js Developer, portfolio, portfolio website, developer portfolio, web developer India, hire developer, portfolio website template, hammad jagarala portfolio, Gujarat developer" />
        <meta name="author" content="Hammad Jagarala" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://jagaralahammad.vercel.app/" />

        {/* ── Open Graph ── */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hammad Jagarala — Portfolio" />
        <meta property="og:url" content="https://jagaralahammad.vercel.app/" />
        <meta property="og:title" content="Hammad Jagarala | Full Stack Developer — React, Spring Boot, Node.js" />
        <meta property="og:description" content="Full Stack Developer building production-grade systems with Java, Spring Boot, React & Node.js. Explore case studies and projects." />
        <meta property="og:image" content="https://jagaralahammad.vercel.app/preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Hammad Jagarala — Full Stack Developer Portfolio" />
        <meta property="og:locale" content="en_IN" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@hammad04x" />
        <meta name="twitter:title" content="Hammad Jagarala | Full Stack Developer" />
        <meta name="twitter:description" content="Java, Spring Boot, React & Node.js developer from Gujarat, India. Portfolio, projects & case studies." />
        <meta name="twitter:image" content="https://jagaralahammad.vercel.app/preview.jpg" />
        <meta name="twitter:image:alt" content="Hammad Jagarala Portfolio" />

        {/* ── JSON-LD: Person ── */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Hammad Jagarala",
          "url": "https://jagaralahammad.vercel.app/",
          "image": "https://jagaralahammad.vercel.app/preview.jpg",
          "sameAs": [
            "https://github.com/hammad04x",
            "https://www.linkedin.com/in/hammad-jagarala-240b83260/"
          ],
          "jobTitle": "Full Stack Developer",
          "worksFor": { "@type": "Organization", "name": "Quba Info Tech" },
          "address": { "@type": "PostalAddress", "addressRegion": "Gujarat", "addressCountry": "IN" },
          "knowsAbout": ["Java", "Spring Boot", "React", "Node.js", "MySQL", "REST APIs", "JWT", "JavaScript", "Express.js"],
          "email": "codewithhammad.dev@gmail.com",
          "telephone": "+917203053578"
        })}</script>

        {/* ── JSON-LD: ItemList (Projects) ── */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Hammad Jagarala — Projects",
          "description": "Portfolio projects by Hammad Jagarala — Full Stack Developer",
          "itemListElement": [
            {
              "@type": "ListItem", "position": 1,
              "name": "Sheetal Sweets & Bakery",
              "url": "https://jagaralahammad.vercel.app/projects/sheetal-sweets",
              "description": "Fully responsive business website for a local sweets and bakery brand. Built with React, Node.js, Express.js, and MySQL."
            },
            {
              "@type": "ListItem", "position": 2,
              "name": "Student Management System",
              "url": "https://jagaralahammad.vercel.app/projects/student-management-system",
              "description": "Production-grade REST API built with Java and Spring Boot, featuring JWT auth, role-based access, and pagination."
            },
            {
              "@type": "ListItem", "position": 3,
              "name": "ZepX E-commerce Platform",
              "url": "https://jagaralahammad.vercel.app/projects/ecommerce-website",
              "description": "Full-stack e-commerce platform with Razorpay payment integration, JWT authentication, and admin dashboard."
            }
          ]
        })}</script>
      </Helmet>

      <Navbar />

      <main style={{ paddingBottom: "5rem" }}>

        {/* ── SIMPLE BUT ATTRACTIVE HERO ── */}
        <section id="home" className="hero-section">
          <div className="hero-container">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="hero-badge">
              Available for Opportunities
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h1 className="hero-title">
                <span>Hammad</span> Jagarala.
                Backend-First. Full Stack by Nature.
              </h1>
              <p className="hero-description">
                I build backend systems in Java/Spring Boot and full-stack products with React and Node.js — clean architecture, secure APIs, real-world scale. Backend-first. Always.
              </p>

              <div className="hero-buttons">
                <button className="btn hero-btn-primary" onClick={() => scrollTo("projects")} style={{ padding: "1.2rem 2.5rem", fontSize: "1.1rem" }}>View Projects</button>
                <button className="btn hero-btn-outline" onClick={() => scrollTo("contact")} style={{ padding: "1.2rem 2.5rem", fontSize: "1.1rem" }}>Contact Me</button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── ABOUT & SKILLS (SIMPLE GRID) ── */}
        <section id="about" className="section section-gray">
          <div className="container">
            <motion.div variants={rise} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ once: true }} className="section-header">
              <div className="section-eyebrow">
                <span className="section-num">01</span><span className="section-tag">About & Skills</span>
              </div>
              <h2 className="section-title">My Background</h2>
              <div className="section-divider" />
            </motion.div>

            {/* ── BENTO BOX ABOUT GRID ── */}
            <div className="about-bento-grid">
              <motion.div variants={rise} initial="hidden" whileInView="show" transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="bento-card highlight">
                <h3 style={{ fontSize: "1.75rem", fontWeight: "800", marginBottom: "1.5rem" }}>Code is craft. I treat it that way.</h3>
                <div className="about-text-content">
                  <p>
                    I'm Hammad — a Full Stack Developer from Gujarat, India, building backend systems that scale and frontends that don't lie about what they are. I started with curiosity and stayed for the architecture.
                  </p>
                  <p>
                    My core is <strong>Java and Spring Boot</strong> — layered systems, clean APIs, real security. But I speak React fluently, and I've shipped full products from database schema to pixel-perfect UI.
                  </p>
                  <p>
                    I'm not chasing hype stacks. I'm building depth — because the engineers who get hired at great companies aren't the ones who know everything, they're the ones who truly know <em>something</em>.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={rise} initial="hidden" whileInView="show" transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="bento-card bento-stats">
                <div className="stat-number">1+</div>
                <div className="stat-label">Years Experience</div>
                <div style={{ width: "40px", height: "4px", background: "var(--brand-primary)", margin: "1rem 0" }}></div>
                <div className="stat-number">4+</div>
                <div className="stat-label">Projects Built</div>
              </motion.div>
            </div>

            {/* ── FLUID SKILLS MARQUEE ── */}
            <motion.div variants={rise} initial="hidden" whileInView="show" transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} style={{ marginTop: "2rem" }}>
              <h3 style={{ fontSize: "2rem", fontWeight: "900", marginBottom: "2rem", textAlign: "center" }}>Technical Arsenal</h3>
              <div className="skills-marquee-container">
                {/* 1. Frontend */}
                <div className="skills-category">
                  <div className="skills-category-title">
                    <Monitor size={20} className="text-brand-primary" /> Frontend
                  </div>
                  <div className="marquee-track">
                    {[...Array(4)].map((_, i) => (
                      <React.Fragment key={i}>
                        {techStack.frontend.map(skill => (
                          <div key={`f-${i}-${skill}`} className="marquee-item">
                            <span className="marquee-item-name">{skill}</span>
                          </div>
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* 2. Backend */}
                <div className="skills-category">
                  <div className="skills-category-title">
                    <Server size={20} className="text-brand-primary" /> Backend
                  </div>
                  <div className="marquee-track reverse">
                    {[...Array(4)].map((_, i) => (
                      <React.Fragment key={i}>
                        {techStack.backend.map(skill => (
                          <div key={`b-${i}-${skill}`} className="marquee-item">
                            <span className="marquee-item-name">{skill}</span>
                          </div>
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* 3. Database */}
                <div className="skills-category">
                  <div className="skills-category-title">
                    <Database size={20} className="text-brand-primary" /> Database
                  </div>
                  <div className="marquee-track">
                    {[...Array(4)].map((_, i) => (
                      <React.Fragment key={i}>
                        {techStack.database.map(skill => (
                          <div key={`d-${i}-${skill}`} className="marquee-item">
                            <span className="marquee-item-name">{skill}</span>
                          </div>
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* 4. Tools */}
                <div className="skills-category">
                  <div className="skills-category-title">
                    <Wrench size={20} className="text-brand-primary" /> Tools
                  </div>
                  <div className="marquee-track reverse">
                    {[...Array(4)].map((_, i) => (
                      <React.Fragment key={i}>
                        {techStack.tools.map(skill => (
                          <div key={`t-${i}-${skill}`} className="marquee-item">
                            <span className="marquee-item-name">{skill}</span>
                          </div>
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PROJECTS (ASYMMETRIC) ── */}
        <section id="projects" className="section section-alt">
          <div className="container">
            <motion.div variants={rise} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ once: true }} className="section-header">
              <div className="section-eyebrow">
                <span className="section-num">02</span><span className="section-tag">Portfolio</span>
              </div>
              <h2 className="section-title">Selected Work</h2>
              <div className="section-divider" />
            </motion.div>

            <div className="projects-wrapper">
              {projects.map((p, i) => (
                <motion.div key={p.id} variants={rise} initial="hidden" whileInView="show" transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="project-featured">
                  <div className="pf-image">
                    <img src={p.image} alt={p.title} />
                  </div>
                  <div className="pf-body">
                    <div className="pf-label">Featured Case Study</div>
                    <div className="pf-title">{p.title}</div>
                    <p className="pf-desc">{p.desc}</p>
                    <div className="pf-techs">
                      {p.technologies.map(t => <Badge key={t}>{t}</Badge>)}
                    </div>
                    <div className="pf-links">
                      <Button asChild>
                        <Link to={`/projects/${p.id}`}>View Details</Link>
                      </Button>
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pf-link-btn"
                        >
                          Live Site ↗
                        </a>
                      )}
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pf-link-btn"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section >

        {/* ── EXPERIENCE (INTERACTIVE TABS) ── */}
        < section id="experience" className="section" >
          <div className="container">
            <motion.div variants={rise} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ once: true }} className="section-header centered">
              <div className="section-eyebrow" style={{ justifyContent: "center" }}>
                <span className="section-num">03</span><span className="section-tag">Experience</span>
              </div>
              <h2 className="section-title">Professional Journey</h2>
              <div className="section-divider centered" />
            </motion.div>

            <div className="exp-tabs-container">
              {/* Tabs Menu */}
              <div className="exp-tabs-list">
                {experiences.map((exp, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveExp(i)}
                    className={`exp-tab-button ${activeExp === i ? 'active' : ''}`}
                  >
                    {exp.company}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="exp-tab-content-container" style={{ position: "relative", minHeight: "300px" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeExp}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="exp-tab-content"
                  >
                    <div className="exp-role">{experiences[activeExp].role}</div>
                    <div className="exp-company">@ {experiences[activeExp].company}</div>
                    <div className="exp-duration">{experiences[activeExp].duration}</div>
                    <p className="exp-desc">{experiences[activeExp].desc}</p>
                    <div className="tl-skills">
                      {experiences[activeExp].skills.map(s => <Badge key={s} variant="outline">{s}</Badge>)}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section >

        {/* ── CONTACT (SPLIT FORM) ── */}
        < section id="contact" className="section section-gray" >
          <div className="container">
            <motion.div variants={rise} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ once: true }} className="section-header left">
              <div className="section-eyebrow">
                <span className="section-num">04</span><span className="section-tag">Get In Touch</span>
              </div>
              <h2 className="section-title">Let's build something real.</h2>
              <div className="section-divider" />
            </motion.div>

            <div className="contact-split">
              {/* Contact Form */}
              <motion.div variants={rise} initial="hidden" whileInView="show" transition={{ duration: 0.6 }} viewport={{ once: true }}>
                {formState.succeeded ? (
                  <div className="bento-box" style={{ padding: "2.5rem", background: "var(--bg-surface)", textAlign: "center" }}>
                    <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✅</div>
                    <h3 style={{ fontWeight: 800, fontSize: "1.25rem", color: "var(--text-main)", marginBottom: "0.5rem" }}>Message Sent!</h3>
                    <p style={{ color: "var(--text-muted)" }}>Thanks for reaching out — I'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form className="bento-box" style={{ padding: "2.5rem", display: "grid", gap: "1.5rem", background: "var(--bg-surface)" }} onSubmit={handleFormSubmit}>
                    <div style={{ display: "grid", gap: "0.5rem" }}>
                      <label htmlFor="name" style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text-main)" }}>Name</label>
                      <input id="name" type="text" name="name" placeholder="John Doe" style={{ padding: "0.8rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--border)", background: "transparent", fontFamily: "inherit" }} required />
                      <ValidationError prefix="Name" field="name" errors={formState.errors} style={{ color: "red", fontSize: "0.8rem" }} />
                    </div>
                    <div style={{ display: "grid", gap: "0.5rem" }}>
                      <label htmlFor="email" style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text-main)" }}>Email</label>
                      <input id="email" type="email" name="email" placeholder="john@example.com" style={{ padding: "0.8rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--border)", background: "transparent", fontFamily: "inherit" }} required />
                      <ValidationError prefix="Email" field="email" errors={formState.errors} style={{ color: "red", fontSize: "0.8rem" }} />
                    </div>
                    <div style={{ display: "grid", gap: "0.5rem" }}>
                      <label htmlFor="message" style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text-main)" }}>Message</label>
                      <textarea id="message" name="message" rows="4" placeholder="How can I help you?" style={{ padding: "0.8rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--border)", background: "transparent", fontFamily: "inherit", resize: "vertical" }} required></textarea>
                      <ValidationError prefix="Message" field="message" errors={formState.errors} style={{ color: "red", fontSize: "0.8rem" }} />
                    </div>
                    <Button type="submit" disabled={formState.submitting} style={{ width: "100%", justifyContent: "center" }}>
                      {formState.submitting ? "Sending…" : "Send Message"}
                    </Button>
                  </form>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={rise} initial="hidden" whileInView="show" transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--text-main)" }}>Direct Outreach</h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    Got a project, an opportunity, or just want to talk tech? Skip the form and reach out directly — I respond within 24 hours.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <a href="mailto:codewithhammad.dev@gmail.com" className="bento-box" style={{ padding: "1.25rem", display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none", background: "var(--bg-surface)" }}>
                      <div className="contact-icon" style={{ flexShrink: 0, background: "var(--brand-alpha)", width: "3rem", height: "3rem", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--brand-dark)" }}><Mail size={20} /></div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email</div>
                        <div style={{ fontWeight: 700, color: "var(--text-main)", wordBreak: "break-all" }}>codewithhammad.dev@gmail.com</div>
                      </div>
                    </a>

                    <a href="tel:+917203053578" className="bento-box" style={{ padding: "1.25rem", display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none", background: "var(--bg-surface)" }}>
                      <div className="contact-icon" style={{ flexShrink: 0, background: "var(--brand-alpha)", width: "3rem", height: "3rem", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--brand-dark)" }}><Phone size={20} /></div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Phone</div>
                        <div style={{ fontWeight: 700, color: "var(--text-main)", wordBreak: "break-word" }}>+91 (720) 305-3578</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div style={{ paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text-main)" }}>Socials</h3>
                  <div className="contact-socials" style={{ flexDirection: "row", gap: "1rem", display: "flex" }}>
                    <a href="https://github.com/hammad04x" target="_blank" rel="noopener noreferrer" className="bento-box" style={{ width: "3rem", height: "3rem", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-main)", borderRadius: "var(--radius-full)", background: "var(--bg-surface)" }}>
                      <Github size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/hammad-jagarala-240b83260/" target="_blank" rel="noopener noreferrer" className="bento-box" style={{ width: "3rem", height: "3rem", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-main)", borderRadius: "var(--radius-full)", background: "var(--bg-surface)" }}>
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section >

      </main >

      <Footer />
    </>
  )
}
