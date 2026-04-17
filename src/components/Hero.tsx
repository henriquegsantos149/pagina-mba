import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-70"></div>
      
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-brand-dark)]/40 to-black/20 opacity-100 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-16 text-center flex flex-col items-center">
        
        {/* Badges */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-16 mb-12"
        >
          {/* Ambiental Pro */}
          <a 
            href="https://www.ambientalpro.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <img 
              src={`${import.meta.env.BASE_URL}logo-ambientalpro.png`} 
              alt="Ambiental Pro" 
              className="h-10 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </a>

          {/* MEC */}
          <a 
            href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/NTE1/93916316abe23148507bd4c260e4b878/MjU4NDQ1" 
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <img 
              src={`${import.meta.env.BASE_URL}mec-badge.png`} 
              alt="Selo MEC" 
              className="h-14 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </a>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold tracking-tight mb-8 max-w-6xl uppercase leading-[1.1] font-primary"
        >
          MBA em <br className="md:block" />
          <span className="inline-block bg-brand-gradient text-[var(--color-brand-dark)] px-4 py-2 md:px-6 md:py-2 mt-4 mb-2 shape-leaf transform -skew-x-6">
            <span className="inline-block skew-x-6">Inteligência de Dados</span>
          </span> <br className="md:block" />
          Ambientais
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-[var(--color-brand-light)]/70 mb-10 max-w-3xl leading-relaxed font-secondary"
        >
          Pós-Graduação que desenvolve habilidades práticas, técnicas e gerenciais em tecnologias inovadoras na área ambiental, com uma abordagem abrangente e atualizada sobre gestão, análise e visualização de dados.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a 
            href="https://pay.voompcreators.com.br/2385/offer/LV3OY1/?utm_source=site_anhanguera" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Inscreva-se agora no MBA em Inteligência de Dados Ambientais" 
            className="shape-leaf group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-gradient text-[var(--color-brand-dark)] font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_var(--color-brand-primary)]/30 hover:shadow-[0_0_30px_var(--color-brand-primary)]/50"
          >
            <span className="relative z-10 transition-colors uppercase tracking-wider font-primary">Inscreva-se Agora</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-[var(--color-brand-accent)] opacity-70" />
        </motion.div>

      </div>
    </section>
  );
}
