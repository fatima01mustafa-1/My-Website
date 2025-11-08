'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone, Zap, Award, Users, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import styles from './about.module.css'

const skills = [
  {
    category: 'Frontend',
    icon: Globe,
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Backend',
    icon: Database,
    technologies: ['NestJS', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    category: 'AI & Data',
    icon: Smartphone,
    technologies: ['Python', 'ResNet', 'Data Science', 'AI/ML Integration'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Cloud & DevOps',
    icon: Code,
    technologies: ['AWS', 'Docker', 'Heroku', 'GitHub Actions', 'CI/CD'],
    color: 'from-orange-500 to-red-500'
  }
]

const experience = [
  {
    title: 'Full Stack Developer',
    company: 'Code Huddle',
    period: 'July 2024 – Present',
    description: 'Architected and maintained full-stack applications with Next.js (App Router) and NestJS, serving ~25k users and driving 24% organic traffic growth. Managed AWS infrastructure and built CI/CD pipelines using GitHub Actions.',
    achievements: ['24% organic traffic growth', '38% infrastructure cost reduction', 'Served ~25k users']
  },
  {
    title: 'Software Development Intern',
    company: 'SolutionsHut',
    period: '08/2022 - 09/2022',
    description: 'Contributed to MERN-stack microservices: developed UI components and backend API endpoints, participated in Agile sprints, and helped refine deployment workflows.',
    achievements: ['MERN-stack development', 'Agile methodology', 'API development']
  },
  {
    title: 'Teaching Assistant / Lab Demonstrator',
    company: 'FAST NUCES',
    period: '08/2022 - 01/2024',
    description: 'Mentored 50+ students in Discrete Structures, Programming and Operating Systems labs; developed instructional materials, ran lab sessions, and clarified complex technical concepts.',
    achievements: ['Mentored 50+ students', 'Lab demonstrations', 'Instructional materials']
  }
]

const stats = [
  { number: '1+', label: 'Year Industry Experience', icon: Clock },
  { number: '3+', label: 'Major Projects Delivered', icon: Award },
  { number: '50+', label: 'Students Mentored', icon: Users },
  { number: '24%', label: 'Organic Traffic Growth', icon: Zap }
]

export function About () {
  return (
    <section id="about" className={cn('py-20 relative overflow-hidden', styles.about)}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
            About Me
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Crafting Digital{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Experiences
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated Full Stack Developer driven by curiosity and a passion for clean, maintainable code. 
            My journey spans frontend and backend development, cloud deployment, and automation pipelines. 
            I enjoy solving complex problems, experimenting with emerging technologies, and building impactful products.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className={cn(
                      'w-16 h-16 rounded-2xl bg-gradient-to-r flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300',
                      skill.color
                    )}>
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">
                      {skill.category}
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {skill.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="inline-block px-4 py-2 bg-white/5 text-white/80 text-sm rounded-full border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 mr-2 mb-2"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      {job.title}
                    </h4>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold text-lg">
                      {job.company}
                    </p>
                  </div>
                  <span className="text-white/60 font-medium mt-2 lg:mt-0">
                    {job.period}
                  </span>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {job.achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white/80 text-sm rounded-full border border-purple-500/30"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
