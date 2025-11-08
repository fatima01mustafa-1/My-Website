'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import styles from './footer.module.css'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/fatimamustafa',
    gradient: 'from-gray-500 to-gray-700'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/fatimamustafa',
    gradient: 'from-blue-600 to-blue-800'
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:fatima01mustafa@gmail.com',
    gradient: 'from-purple-500 to-pink-500'
  }
]

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
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
    <footer className={cn('relative overflow-hidden', styles.footer)}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
              <p className="text-white/70 mb-6 leading-relaxed">
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
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={cn(
                      'w-12 h-12 rounded-xl bg-gradient-to-r flex items-center justify-center text-white hover:shadow-lg transition-all duration-300',
                      social.gradient
                    )}
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
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
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
                <p className="text-white/70">
                  <span className="text-white font-medium">Email:</span><br />
                  <a 
                    href="mailto:fatima01mustafa@gmail.com" 
                    className="hover:text-purple-400 transition-colors duration-300"
                  >
                    fatima01mustafa@gmail.com
                  </a>
                </p>
                <p className="text-white/70">
                  <span className="text-white font-medium">Phone:</span><br />
                  <a 
                    href="tel:+15551234567" 
                    className="hover:text-purple-400 transition-colors duration-300"
                  >
                    +1 (555) 123-4567
                  </a>
                </p>
                <p className="text-white/70">
                  <span className="text-white font-medium">Location:</span><br />
                  San Francisco, CA
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Fatima Mustafa. All rights reserved.
            </p>
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-white/60 text-sm"
            >
              Made with <Heart size={16} className="text-red-500" /> and Next.js
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}