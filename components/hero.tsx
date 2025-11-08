'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import { cn } from '@/lib/utils'
import styles from './hero.module.css'
import Image from 'next/image'

export function Hero () {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className={cn('min-h-screen flex items-center justify-center relative overflow-hidden', styles.hero)}>
      {/* Animated Background */}
      <div className={styles.animatedBackground}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gradientOrb3} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-lg text-muted-foreground font-medium">Hello, I'm</span>
              <div className="text-sm text-muted-foreground/70 mt-2">
                📞 +92 308 5733307 | 📧 fatima01mustafa@gmail.com
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4"
            >
              Fatima{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Mustafa
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <span className="text-2xl sm:text-3xl text-muted-foreground">
                And I'm a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
                  Full Stack Developer
                </span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate Full Stack Developer with 1+ years of professional experience building and deploying scalable web applications. 
              Skilled in <span className="text-purple-400 font-semibold">Next.js, NestJS, AWS, PostgreSQL, and MongoDB</span>, with hands-on expertise in 
              <span className="text-purple-400 font-semibold"> CI/CD pipelines</span> and <span className="text-purple-400 font-semibold">cloud-based architectures</span>. 
              Adept at transforming business requirements into efficient, reliable, and user-friendly digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
              >
                <Download size={20} />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex justify-center lg:justify-start gap-6"
            >
              {[
                { icon: Github, href: "https://github.com/fatimamustafa", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/fatimamustafa", label: "LinkedIn" },
                { icon: Mail, href: "mailto:fatima01mustafa@gmail.com", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
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
                    {/* Profile Picture - Large and Modern */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative w-[450px] h-[500px] lg:w-[500px] lg:h-[600px] overflow-hidden"
                    >
                      <Image
                        src="/images/my-pfp.png"
                        alt="Fatima Mustafa"
                        fill
                        className="object-cover object-top"
                        priority
                        style={{
                          filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))'
                        }}
                      />
                    </motion.div>

                    {/* Floating Elements */}
                    <motion.div
                      animate={{ y: [-15, 15, -15] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-90 shadow-lg"
                    />
                    <motion.div
                      animate={{ y: [15, -15, 15] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-16 left-8 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-90 shadow-lg"
                    />
                  </div>
                </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToAbout}
          className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  )
}
