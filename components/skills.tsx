'use client'

import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { Code, Database, Globe, Cloud, Brain } from 'lucide-react'
import { cn } from '@/lib/utils'

const skillsCategories = [
  {
    category: 'Front-End',
    icon: Code,
    technologies: [
      'Next.js (App Router)',
      'React',
      'TailwindCSS',
      'HTML5',
      'CSS3',
      'TypeScript',
      'JavaScript'
    ],
    color: 'from-[#5eead4] to-[#2a8a7a]'
  },
  {
    category: 'Back-End',
    icon: Database,
    technologies: [
      'NestJS',
      'Node.js',
      'Express.js',
      'Flask (Python)',
      'PostgreSQL',
      'MongoDB',
      'REST APIs'
    ],
    color: 'from-[#2a8a7a] to-[#1a5a5a]'
  },
  {
    category: 'AI & Data',
    icon: Brain,
    technologies: [
      'Python',
      'ResNet',
      'Data Science',
      'AI/ML Integration',
      'Data Analysis',
      'Machine Learning'
    ],
    color: 'from-[#1a5a5a] to-[#2a8a7a]'
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    technologies: [
      'AWS (Elastic Beanstalk, EC2, S3, RDS, IAM)',
      'Docker',
      'Heroku',
      'GitHub Actions (CI/CD)',
      'CI/CD Pipelines',
      'Infrastructure'
    ],
    color: 'from-[#2a8a7a] to-[#5eead4]'
  }
]

export function Skills () {
  return (
    <SectionWrapper>
      <section id="skills" className="relative py-16 z-10 w-full">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            Key{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5eead4] to-[#2a8a7a]">
              Skills
            </span>
          </motion.h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsCategories.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group h-full"
              >
                <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-[#5eead4]/30 bg-black/10 backdrop-blur-sm h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={cn(
                      'w-14 h-14 rounded-xl bg-gradient-to-r flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[0_0_25px_rgba(94,234,212,0.6)]',
                      skill.color
                    )}>
                      <skill.icon className="w-7 h-7 text-white drop-shadow-[0_0_15px_rgba(94,234,212,1)]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {skill.category}
                    </h3>
                  </div>

                  {/* Technologies - Compact Grid */}
                  <div className="flex flex-wrap gap-2 flex-grow items-start">
                    {skill.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 bg-white/5 text-[#E5E5E5] text-sm rounded-lg border border-white/10 hover:border-[#5eead4]/50 hover:bg-[#5eead4]/10 hover:text-[#5eead4] transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SectionWrapper>
  )
}
