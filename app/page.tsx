import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home () {
  return (
    <main className="min-h-screen relative z-10 w-full bg-transparent">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
