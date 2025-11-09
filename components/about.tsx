'use client'

import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { Zap, Award, Users, Clock, Briefcase } from 'lucide-react'

const experience = [
  {
    title: 'Full Stack Developer',
    company: 'Code Huddle',
    period: 'July 2024 – Present',
    description: 'Architected and maintained full-stack applications with Next.js 15 (App Router) and NestJS, serving ~25k users and driving 24% organic traffic growth. Managed AWS infrastructure and built CI/CD pipelines using GitHub Actions.',
    achievements: ['24% organic traffic growth', '38% infrastructure cost reduction', 'Served ~25k users', 'Built scalable microservices'],
    technologies: ['Next.js 15', 'NestJS', 'AWS', 'PostgreSQL', 'CI/CD', 'GitHub Actions']
  },
  {
    title: 'Software Development Intern',
    company: 'SolutionsHut',
    period: 'August 2022 – September 2022',
    description: 'Contributed to MERN-stack microservices: developed UI components and backend API endpoints, participated in Agile sprints, and helped refine deployment workflows.',
    achievements: ['MERN-stack development', 'Agile methodology', 'API development', 'UI/UX improvements'],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs']
  },
  {
    title: 'Teaching Assistant / Lab Demonstrator',
    company: 'FAST NUCES',
    period: 'August 2022 – January 2024',
    description: 'Mentored 50+ students in Discrete Structures, Programming and Operating Systems labs; developed instructional materials, ran lab sessions, and clarified complex technical concepts.',
    achievements: ['Mentored 50+ students', 'Lab demonstrations', 'Instructional materials', 'Technical support'],
    technologies: ['C++', 'Python', 'Data Structures', 'Algorithms']
  }
]

const stats = [
  { number: '1+', label: 'Year Industry Experience', icon: Clock },
  { number: '3+', label: 'Major Projects Delivered', icon: Award },
  { number: '50+', label: 'Students Mentored', icon: Users },
  { number: '24%', label: 'Organic Traffic Growth', icon: Zap }
]

const itemVariants = {
  hidden: { opacity: 0, y: 50, x: -30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function About () {
  return (
    <SectionWrapper>
      <section id="about" className="relative py-8 md:py-12 lg:py-16 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 lg:mb-8"
          >
            About
          </motion.h2>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 md:p-8 lg:p-12 mb-6 md:mb-8 lg:mb-12"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
              Hello
            </h3>
            <p className="text-base sm:text-lg text-[#E5E5E5]/90 leading-relaxed">
              Passionate Full Stack Developer with 1+ years of professional experience building and deploying scalable web applications. 
              Skilled in <span className="text-[#5eead4] font-semibold drop-shadow-[0_0_10px_rgba(94,234,212,0.5)]">Next.js, NestJS, AWS, PostgreSQL, and MongoDB</span>, with hands-on expertise in 
              <span className="text-[#5eead4] font-semibold drop-shadow-[0_0_10px_rgba(94,234,212,0.5)]"> CI/CD pipelines</span> and <span className="text-[#5eead4] font-semibold drop-shadow-[0_0_10px_rgba(94,234,212,0.5)]">cloud-based architectures</span>. 
              Adept at transforming business requirements into efficient, reliable, and user-friendly digital solutions.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8 lg:mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={statVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-center group"
              >
                <div className="glass rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-xl bg-gradient-to-r from-[#5eead4] to-[#2a8a7a] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(94,234,212,0.6)]">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-[0_0_8px_rgba(94,234,212,0.8)]" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                    {stat.number}
                  </div>
                  <div className="text-[#E5E5E5]/70 font-medium text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-6 md:mb-8 lg:mb-12"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 lg:mb-8 flex items-center gap-2 sm:gap-3">
              <Briefcase className="text-[#5eead4] drop-shadow-[0_0_15px_rgba(94,234,212,0.8)] w-6 h-6 sm:w-8 sm:h-8" />
              Experience
            </h3>
            <div className="space-y-4 md:space-y-6">
              {experience.map((job, index) => (
                <motion.div
                  key={job.title}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ delay: index * 0.15 }}
                  className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {job.title}
                      </h4>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#5eead4] to-[#2a8a7a] font-semibold text-lg drop-shadow-[0_0_10px_rgba(94,234,212,0.5)]">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-[#E5E5E5]/60 font-medium mt-2 lg:mt-0">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-[#E5E5E5]/70 mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.achievements.map((achievement) => (
                      <motion.span
                        key={achievement}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-[#5eead4]/20 to-[#2a8a7a]/20 text-[#5eead4] text-sm rounded-full border border-[#5eead4]/40 drop-shadow-[0_0_8px_rgba(94,234,212,0.4)]"
                      >
                        {achievement}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 text-[#E5E5E5]/80 text-xs rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </SectionWrapper>
  )
}
