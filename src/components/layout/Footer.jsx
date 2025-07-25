"use client"

import { Download, Github, Linkedin } from "lucide-react"
import { Button } from "../ui/Button.jsx"

export function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-title">Full Stack Developer</div>
            <p className="footer-brand-description">
              Passionate about creating modern web experiences with clean code and innovative solutions.
            </p>
            <div className="footer-social">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/hammad04x" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://www.linkedin.com/in/hammad-jagarala-240b83260/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="footer-section-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <button onClick={() => scrollToSection("home")} className="footer-link">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="footer-link">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")} className="footer-link">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="footer-link">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-section-title">Resources</h3>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Resume
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Certificates
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Experience
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">© 2024 Portfolio. All rights reserved.</div>

          <div className="footer-actions">
            {/* <Button size="sm">
              <Download size={16} />
              <span>Download Resume</span>
            </Button> */}
             <Button size="sm" className="sm:flex " asChild>
                <a
                  href="/Hammad_Jagarala_Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </a>
              </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
