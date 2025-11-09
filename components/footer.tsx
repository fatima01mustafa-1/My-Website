'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/fatimamustafa'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/fatimamustafa'
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:fatima01mustafa@gmail.com'
  }
]

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]

export function Footer () {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className={cn('relative overflow-hidden border-t border-[#2a8a7a]/20 z-10 bg-black/10 backdrop-blur-sm')}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Fatima Mustafa
            </h3>
            <p className="text-[#E5E5E5]/70 mb-6 leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital experiences 
              through innovative web solutions and modern technologies.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-[#2a8a7a]/30 flex items-center justify-center text-[#2a8a7a] hover:text-[#5eead4] hover:bg-[#2a8a7a]/20 hover:border-[#5eead4] hover:shadow-[0_0_25px_rgba(94,234,212,0.8)] hover:brightness-125 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#E5E5E5]/70 hover:text-[#2a8a7a] transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold text-white mb-6">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <p className="text-[#E5E5E5]/70">
                <span className="text-white font-medium">Email:</span><br />
                <a 
                  href="mailto:fatima01mustafa@gmail.com" 
                  className="text-[#2a8a7a] hover:text-[#1a5a5a] transition-colors"
                >
                  fatima01mustafa@gmail.com
                </a>
              </p>
              <p className="text-[#E5E5E5]/70">
                <span className="text-white font-medium">Phone:</span><br />
                <a 
                  href="tel:+923085733307" 
                  className="text-[#2a8a7a] hover:text-[#1a5a5a] transition-colors"
                >
                  +92 308 5733307
                </a>
              </p>
              <p className="text-[#E5E5E5]/70">
                <span className="text-white font-medium">Location:</span><br />
                Islamabad, Pakistan
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-[#2a8a7a]/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#E5E5E5]/60 text-sm">
              © 2024 Fatima Mustafa. All rights reserved.
            </p>
            <p className="text-[#E5E5E5]/60 text-sm">
              Made with Next.js & Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
