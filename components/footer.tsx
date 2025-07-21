"use client"

import { Download, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
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
                <a href="/#home" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </a>
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
  )
}
