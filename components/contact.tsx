'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import SectionWrapper from './SectionWrapper'
import toast, { Toaster } from 'react-hot-toast'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact () {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      setIsSubmitted(true)
      reset()
      
      // Success toast
      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        duration: 5000,
        style: {
          background: '#0A0F0D',
          color: '#5eead4',
          border: '1px solid #5eead4',
          borderRadius: '12px',
          padding: '16px',
        },
        iconTheme: {
          primary: '#5eead4',
          secondary: '#0A0F0D',
        },
      })
      
      setTimeout(() => {
        setIsSubmitted(false)
        setIsSubmitting(false)
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
      
      // Error toast
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Failed to send message. Please try again later.'
      
      toast.error(errorMessage, {
        duration: 5000,
        style: {
          background: '#0A0F0D',
          color: '#ff6b6b',
          border: '1px solid #ff6b6b',
          borderRadius: '12px',
          padding: '16px',
        },
        iconTheme: {
          primary: '#ff6b6b',
          secondary: '#0A0F0D',
        },
      })
    }
  }

  return (
    <SectionWrapper>
      <Toaster 
        position="top-right"
        containerStyle={{
          top: 80,
        }}
      />
      <section id="contact" className="relative py-8 md:py-12 lg:py-16 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 lg:mb-12"
          >
            Contact
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6"
            >
              <div className="glass rounded-xl p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-[#5eead4] to-[#2a8a7a] flex items-center justify-center shadow-[0_0_20px_rgba(94,234,212,0.5)]">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#E5E5E5]/60">Email</p>
                    <a href="mailto:fatima01mustafa@gmail.com" className="text-[#5eead4] hover:text-[#2a8a7a] transition-colors font-medium">
                      fatima01mustafa@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-[#5eead4] to-[#2a8a7a] flex items-center justify-center shadow-[0_0_20px_rgba(94,234,212,0.5)]">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#E5E5E5]/60">Phone</p>
                    <a href="tel:+923085733307" className="text-[#5eead4] hover:text-[#2a8a7a] transition-colors font-medium">
                      +92 308 5733307
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-[#5eead4] to-[#2a8a7a] flex items-center justify-center shadow-[0_0_20px_rgba(94,234,212,0.5)]">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#E5E5E5]/60">Location</p>
                    <p className="text-[#E5E5E5] font-medium">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-xl p-5 sm:p-6 bg-black/10 backdrop-blur-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#E5E5E5]/80 mb-2">
                      Name *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#2a8a7a]/20 text-white placeholder-[#E5E5E5]/50 focus:outline-none focus:ring-2 focus:ring-[#2a8a7a] focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#E5E5E5]/80 mb-2">
                      Email *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#2a8a7a]/20 text-white placeholder-[#E5E5E5]/50 focus:outline-none focus:ring-2 focus:ring-[#2a8a7a] focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#E5E5E5]/80 mb-2">
                      Subject *
                    </label>
                    <input
                      {...register('subject')}
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#2a8a7a]/20 text-white placeholder-[#E5E5E5]/50 focus:outline-none focus:ring-2 focus:ring-[#2a8a7a] focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="mt-2 text-sm text-red-400">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#E5E5E5]/80 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#2a8a7a]/20 text-white placeholder-[#E5E5E5]/50 focus:outline-none focus:ring-2 focus:ring-[#2a8a7a] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                    className={cn(
                      'w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all duration-300',
                      isSubmitting || isSubmitted
                        ? 'bg-gradient-to-r from-[#1a5a5a] to-[#2a8a7a] text-white cursor-wait opacity-90'
                        : 'bg-gradient-to-r from-[#5eead4] via-[#2a8a7a] to-[#5eead4] text-white hover:shadow-lg hover:shadow-[#5eead4]/50 hover:brightness-110 active:scale-95'
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  )
}
