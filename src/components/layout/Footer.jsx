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
            <div className="footer-brand-title">Hammad Jagarala</div>
            <p className="footer-brand-description">
              Backend-first. Full stack by nature. Building systems that scale and interfaces that don't lie about what they are.
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
                <button onClick={() => scrollToSection("home")} className="footer-link">Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="footer-link">About & Skills</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")} className="footer-link">Projects</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("experience")} className="footer-link">Experience</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="footer-link">Contact</button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-section-title">Resources</h3>
            <ul className="footer-links">
              <li>
                <a href="/Hammad_Jagarala_Resume.pdf" download target="_blank" rel="noopener noreferrer" className="footer-link">
                  Resume
                </a>
              </li>
              <li>
                <a href="https://github.com/hammad04x" target="_blank" rel="noopener noreferrer" className="footer-link">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/hammad-jagarala-240b83260/" target="_blank" rel="noopener noreferrer" className="footer-link">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">© 2025 Hammad Jagarala. All rights reserved.</div>
          <div className="footer-actions">
            <Button size="sm" asChild>
              <a href="/Hammad_Jagarala_Resume.pdf" download target="_blank" rel="noopener noreferrer">
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