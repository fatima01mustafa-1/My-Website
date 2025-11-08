'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, Eye } from 'lucide-react'
import { cn } from '@/lib/utils'
import styles from './projects.module.css'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'MyPropertyOrganiser',
    description: 'A comprehensive property management platform enabling landlords and tenants to manage listings, payments, and maintenance requests. Built with Next.js 15 (App Router) and NestJS, featuring real-time data integration with Plaid, Stripe, and PropertyData APIs.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    technologies: ['Next.js 15', 'NestJS', 'AWS', 'Plaid API', 'Stripe', 'PropertyData API'],
    category: 'Full Stack',
    liveUrl: null,
    githubUrl: 'https://github.com/fatimamustafa/mypropertyorganiser',
    featured: true,
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: 2,
    title: 'HonestDog',
    description: 'Redesigned and optimized pet adoption and e-commerce platform end-to-end, improving UX and reliability. Automated CI/CD workflows, managed deployments across AWS and Heroku, and integrated communication frameworks for breeder–adopter interactions.',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'PostgreSQL', 'AWS', 'Heroku', 'CI/CD', 'GitHub Actions'],
    category: 'Full Stack',
    liveUrl: null,
    githubUrl: 'https://github.com/fatimamustafa/honestdog',
    featured: true,
    gradient: 'from-green-500 to-blue-600'
  },
  {
    id: 3,
    title: 'VeteranMeet',
    description: 'Built a MERN-stack social networking app with JWT authentication for veterans, enabling user registration, secure login, and interactive posting. Features include user profiles, community forums, and veteran-specific resources.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'MERN Stack'],
    category: 'Full Stack',
    liveUrl: null,
    githubUrl: 'https://github.com/fatimamustafa/veteranmeet',
    featured: true,
    gradient: 'from-yellow-500 to-orange-600'
  },
  {
    id: 4,
    title: 'AI-Powered Chat Assistant',
    description: 'Built a conversational chatbot using FastAPI, React, and OpenAI API for customer support automation. Features NLP-based responses, multi-language support, and intelligent conversation flow management.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    technologies: ['FastAPI', 'React', 'OpenAI API', 'Python', 'AI/ML', 'NLP'],
    category: 'AI/ML',
    liveUrl: null,
    githubUrl: 'https://github.com/fatimamustafa/ai-chat-assistant',
    featured: true,
    gradient: 'from-pink-500 to-red-600'
  }
]

const categories = ['All', 'Full Stack', 'AI/ML']

export function Projects () {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className={cn('py-20 relative overflow-hidden', styles.projects)}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/60 font-medium mb-4 block"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Projects
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and experience 
            in full-stack development, mobile apps, and modern web technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                'px-6 py-3 rounded-full font-semibold transition-all duration-300',
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                  : 'glass text-white/80 hover:text-white hover:bg-white/10'
              )}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="absolute top-4 left-4 flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      <Star size={16} />
                      Featured
                    </motion.div>
                  )}
                  
                  <div className="absolute top-4 right-4">
                    <span className={cn(
                      'px-3 py-1 rounded-full text-sm font-medium text-white',
                      `bg-gradient-to-r ${project.gradient}`
                    )}>
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 text-white/80 text-xs rounded-full border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                      >
                        <Eye size={16} />
                        Live Demo
                      </motion.a>
                    )}
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 glass text-white/80 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-300"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/fatimamustafa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
          >
            <Github size={24} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
