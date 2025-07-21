"use client"

import { motion } from "framer-motion"
import { Download, Github, Linkedin, ArrowLeft } from "lucide-react"
import { Button } from "../ui/Button.jsx"
import { Link } from "react-router-dom"

export function Header({ showBackButton = false, title }) {
  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <Link to="/" className="navbar-link flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            )}

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="navbar-logo">
              {title || "Portfolio"}
            </motion.div>
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
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
