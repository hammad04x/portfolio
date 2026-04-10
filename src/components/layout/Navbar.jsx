import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, Github, Linkedin, Menu, X } from "lucide-react"
import { Button } from "../ui/Button.jsx"
import { useLocation, useNavigate } from "react-router-dom"

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  
  const isHome = location.pathname === "/"

  useEffect(() => {
    if (!isHome) return
    const ids = ["home", "about", "projects", "experience", "contact"]
    const handler = () => {
      const y = window.scrollY + 150
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [isHome])

  const scrollTo = (id) => {
    setIsMobileOpen(false)
    if (!isHome) {
      navigate("/")
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }), 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior:"smooth" })
    }
  }

  const navItems = [
    { id:"home", label:"Home" },
    { id:"about", label:"About" },
    { id:"projects", label:"Work" },
    { id:"experience", label:"Experience" },
    { id:"contact", label:"Contact" }
  ]

  return (
    <>
      <div className="navbar-wrapper">
        <motion.nav initial={{y:-100, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6, ease:[0.16,1,0.3,1]}} className="navbar">
          <button onClick={() => scrollTo("home")} style={{background:"none",border:"none",cursor:"pointer"}} className="navbar-logo">
            HJ<span>.</span>
          </button>

          <div className="navbar-nav">
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className={`nav-link ${isHome && activeSection===item.id ? "active":""}`}>
                {item.label}
                {isHome && activeSection===item.id && <motion.div layoutId="nav-indicator" className="nav-indicator" transition={{type:"spring", stiffness:350, damping:30}} />}
              </button>
            ))}
          </div>

          <div className="navbar-actions">
            <Button variant="ghost" size="sm" asChild className="md:flex hidden">
              <a href="https://github.com/hammad04x" target="_blank" rel="noopener noreferrer"><Github size={16}/></a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="md:flex hidden">
              <a href="https://www.linkedin.com/in/hammad-jagarala-240b83260/" target="_blank" rel="noopener noreferrer"><Linkedin size={16}/></a>
            </Button>
            <Button size="sm" asChild className="md:flex hidden">
              <a href="/Hammad_Jagarala_Resume.pdf" download target="_blank" rel="noopener noreferrer">
                <Download size={14}/> <span style={{marginLeft:"0.5rem"}}>Resume</span>
              </a>
            </Button>
            
            <button className="mobile-menu-btn" onClick={() => setIsMobileOpen(true)}>
              <Menu size={20} />
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="mobile-sidebar-backdrop" onClick={() => setIsMobileOpen(false)}
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="mobile-sidebar"
            >
              <div className="mobile-sidebar-header">
                <div className="navbar-logo">HJ<span>.</span></div>
                <button className="mobile-close-btn" onClick={() => setIsMobileOpen(false)}>
                  <X size={20}/>
                </button>
              </div>
              <div className="mobile-nav-links">
                {navItems.map((item, i) => (
                  <motion.button 
                    initial={{x:20, opacity:0}} animate={{x:0, opacity:1}} transition={{delay: i*0.05}}
                    key={item.id} onClick={() => scrollTo(item.id)} 
                    className={`mobile-nav-link ${isHome && activeSection===item.id ? "active":""}`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
              <div className="mobile-sidebar-footer">
                <a href="https://github.com/hammad04x" target="_blank" rel="noopener noreferrer" className="mobile-sidebar-social"><Github size={20}/></a>
                <a href="https://www.linkedin.com/in/hammad-jagarala-240b83260/" target="_blank" rel="noopener noreferrer" className="mobile-sidebar-social"><Linkedin size={20}/></a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
