'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]

export function Navigation () {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        isScrolled 
          ? 'bg-[#0A0F0D]/95 backdrop-blur-xl border-b border-[#5eead4]/30 shadow-[0_4px_20px_rgba(94,234,212,0.2)]' 
          : 'bg-[#0A0F0D]/80 backdrop-blur-lg border-b border-[#5eead4]/20'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
           <motion.div
             whileHover={{ scale: 1.1 }}
             className="flex-shrink-0"
           >
             <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5eead4] to-[#2a8a7a] drop-shadow-[0_0_15px_rgba(94,234,212,0.7)]">
               FM
             </span>
           </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                 <motion.button
                   key={item.name}
                   onClick={() => scrollToSection(item.href)}
                   whileHover={{ y: -2, scale: 1.05 }}
                   className="relative text-white font-semibold hover:text-[#5eead4] px-4 py-2 text-sm transition-all duration-300 group drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                 >
                   {item.name}
                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#5eead4] to-[#2a8a7a] group-hover:w-full transition-all duration-300 shadow-[0_0_15px_rgba(94,234,212,0.8)]" />
                 </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-[#5eead4] p-2 transition-colors duration-300 border border-[#5eead4]/30 rounded-lg hover:border-[#5eead4] hover:shadow-[0_0_15px_rgba(94,234,212,0.5)]"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="bg-[#0A0F0D]/95 backdrop-blur-xl rounded-2xl mt-4 p-6 shadow-2xl border border-[#5eead4]/30">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ x: 10 }}
                    className="block w-full text-left text-white font-semibold hover:text-[#5eead4] px-4 py-3 text-lg transition-all duration-300 hover:bg-[#5eead4]/10 rounded-xl hover:shadow-[0_0_15px_rgba(94,234,212,0.3)]"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
