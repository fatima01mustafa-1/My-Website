'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import SectionWrapper from './SectionWrapper'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'MyPropertyOrganiser',
    description: 'A comprehensive property management platform enabling landlords and tenants to manage listings, payments, and maintenance requests. Built with Next.js 15 (App Router) and NestJS, featuring real-time data integration with Plaid, Stripe, and PropertyData APIs.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80',
    technologies: ['Next.js 15', 'NestJS', 'AWS', 'Plaid API', 'Stripe', 'PropertyData API'],
    category: 'Full Stack',
    liveUrl: 'https://hub.mypropertyorganiser.com/',
    githubUrl: 'https://github.com/fatimamustafa/mypropertyorganiser',
    featured: true
  },
  {
    id: 2,
    title: 'HonestDog',
    description: 'Redesigned and optimized pet adoption and e-commerce platform end-to-end, improving UX and reliability. Automated CI/CD workflows, managed deployments across AWS and Heroku, and integrated communication frameworks for breeder–adopter interactions.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop&q=80',
    technologies: ['Next.js', 'PostgreSQL', 'AWS', 'Heroku', 'CI/CD', 'GitHub Actions'],
    category: 'Full Stack',
    liveUrl: 'https://www.honestdog.de/en',
    githubUrl: 'https://github.com/fatimamustafa/honestdog',
    featured: true
  },
  {
    id: 3,
    title: 'VeteranMeet',
    description: 'Built a MERN-stack social networking app with JWT authentication for veterans, enabling user registration, secure login, and interactive posting. Features include user profiles, community forums, and veteran-specific resources.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'MERN Stack'],
    category: 'Full Stack',
    liveUrl: null,
    githubUrl: 'https://github.com/fatimamustafa/veteranmeet',
    featured: true
  }
]


export function Projects () {
  return (
    <SectionWrapper>
      <section id="projects" className="relative py-16 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a8a7a] to-[#1a5a5a]">
              Projects
            </span>
          </motion.h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 80, x: index % 2 === 0 ? -80 : 80, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className={cn(
                  "glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300",
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse",
                  "flex flex-col lg:flex-row gap-0"
                )}>
                  {/* Image Section */}
                  <motion.div 
                    className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <motion.div 
                      className="absolute top-4 left-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      <span className="px-3 py-1 rounded-full bg-[#2a8a7a]/20 backdrop-blur-sm border border-[#2a8a7a]/40 text-[#2a8a7a] text-sm font-medium">
                        {project.category}
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div 
                    className="lg:w-1/2 p-8 flex flex-col justify-between"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#2a8a7a] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#E5E5E5]/80 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.5 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-3 py-1.5 bg-white/5 text-[#E5E5E5]/70 text-xs rounded-lg border border-white/10 hover:border-[#2a8a7a]/30 hover:bg-white/10 transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 5, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#5eead4] to-[#2a8a7a] text-white hover:shadow-[0_0_20px_rgba(94,234,212,0.6)] font-medium transition-all group/link"
                        >
                          <ExternalLink size={18} />
                          <span>Visit Website</span>
                          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                        </motion.a>
                      )}
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 text-[#5eead4] hover:text-[#2a8a7a] font-medium transition-colors group/link"
                      >
                        <Github size={20} />
                        <span>View on GitHub</span>
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/fatimamustafa"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-[#2a8a7a] text-[#2a8a7a] bg-black/10 backdrop-blur-sm hover:bg-[#2a8a7a]/10 transition-all duration-300 font-semibold"
            >
              <Github size={24} />
              View More on GitHub
            </motion.a>
          </motion.div>
        </div>
      </section>
    </SectionWrapper>
  )
}
