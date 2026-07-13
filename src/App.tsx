import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProblemObjective from './components/ProblemObjective'
import Curriculum from './components/Curriculum'
import SkillsAcquired from './components/SkillsAcquired'
import PracticalApplications from './components/PracticalApplications'
import TargetAudience from './components/TargetAudience'
import Faculty from './components/Faculty'
import CourseInfo from './components/CourseInfo'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CallToAction from './components/CallToAction'
import StickyCTA from './components/StickyCTA'
import LeadModal from './components/LeadModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="w-full min-h-screen bg-[var(--color-brand-dark)] text-[var(--color-brand-light)] font-secondary selection:bg-[var(--color-brand-primary)] selection:text-[var(--color-brand-dark)]">
      <Header />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <ProblemObjective />
      <Curriculum />
      <SkillsAcquired />
      <PracticalApplications />
      <TargetAudience />
      <Faculty />
      <CourseInfo />
      <Pricing onOpenModal={() => setIsModalOpen(true)} />
      <Testimonials />
      <FAQ />
      
      <CallToAction onOpenModal={() => setIsModalOpen(true)} />
      
      <StickyCTA onOpenModal={() => setIsModalOpen(true)} />

      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      <footer className="bg-black/60 border-t border-white/5 py-10 text-center text-[var(--color-brand-light)]/40 text-sm">
        <p className="font-secondary tracking-widest uppercase">© {new Date().getFullYear()} MBA Inteligência de Dados Ambientais. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}

export default App
