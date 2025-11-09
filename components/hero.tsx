'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export function Hero () {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className={cn('min-h-screen flex items-center justify-center relative overflow-hidden z-10 py-8 md:py-12 lg:py-20 bg-transparent')}>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Main Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-4 md:mb-6 lg:mb-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Hi, I'm{' '}
                <span className="text-[#5eead4] drop-shadow-[0_0_25px_rgba(94,234,212,0.8)]">
                  Fatima
                </span>
              </h2>
              <div className="text-xl sm:text-2xl md:text-3xl text-white font-semibold mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <span className="inline-block">Full Stack Developer</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block ml-2"
                >
                  |
                </motion.span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-4 md:mb-6 lg:mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-6 py-3 md:px-8 md:py-4 rounded-lg bg-gradient-to-r from-[#5eead4] via-[#2a8a7a] to-[#5eead4] text-white font-bold text-base md:text-lg shadow-[0_0_30px_rgba(94,234,212,0.6)] hover:shadow-[0_0_40px_rgba(94,234,212,0.8)] hover:brightness-110 transition-all duration-300 border border-[#5eead4]/50"
              >
                Contact
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start gap-4 md:gap-6"
            >
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/fatimamustafa", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/fatimamustafa", label: "GitHub" },
                { icon: Mail, href: "mailto:fatima01mustafa@gmail.com", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 border-2 border-[#5eead4] flex items-center justify-center text-[#5eead4] hover:text-white hover:bg-[#5eead4]/40 hover:border-[#5eead4] hover:shadow-[0_0_30px_rgba(94,234,212,1)] hover:brightness-125 transition-all duration-300 backdrop-blur-sm"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="md:w-5 md:h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Circular Frame with Glow */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px]"
              >
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2a8a7a]/30 to-[#1a5a5a]/30 blur-xl"></div>
                
                {/* Circular Border Frame */}
                <div className="absolute inset-0 rounded-full border-4 border-[#2a8a7a] shadow-[0_0_30px_rgba(42,138,122,0.6),inset_0_0_20px_rgba(42,138,122,0.2)]"></div>
                
                {/* Inner Glow Ring */}
                <div className="absolute inset-[2px] rounded-full border-2 border-[#2a8a7a]/50"></div>
                
                {/* Translucent Dark Background */}
                <div className="absolute inset-0 rounded-full bg-black/30 backdrop-blur-sm"></div>
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/my-pfp.png"
                    alt="Fatima Mustafa"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
