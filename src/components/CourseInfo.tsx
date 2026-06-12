import { motion } from 'framer-motion';
import { Clock, BookOpen, MonitorPlay, Award } from 'lucide-react';

export default function CourseInfo() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative py-16 md:py-24 bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide text-[var(--color-brand-dark)]">
            Sobre o <span className="text-brand-gradient">Curso</span>
          </h2>
          <p className="text-[var(--color-brand-dark)]/70 max-w-2xl mx-auto">Tudo que você precisa saber sobre a estrutura técnica e operacional da Pós-Graduação.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12"
        >
          {/* Card: Título */}
          <motion.div variants={item} className="shape-leaf bg-white border border-slate-200/80 p-5 md:p-8 hover:border-[var(--color-brand-primary)]/50 transition-all group relative overflow-hidden shadow-lg shadow-slate-200/40">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gradient opacity-10 rounded-full blur-[40px] group-hover:opacity-30 transition-opacity"></div>
            <div className="w-12 h-12 md:w-14 md:h-14 shape-leaf bg-slate-100 flex items-center justify-center mb-4 md:mb-6 border border-slate-250 group-hover:border-[var(--color-brand-primary)]/50 transition-colors">
              <Award className="w-6 h-6 md:w-7 md:h-7 text-[var(--color-brand-primary)]" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold text-[var(--color-brand-dark)] mb-1 md:mb-2 font-primary uppercase">Título</h3>
            <p className="text-base sm:text-xl font-impact tracking-wider text-brand-gradient leading-tight">MBA em Inteligência de Dados Ambientais</p>
          </motion.div>

          {/* Card: Duração */}
          <motion.div variants={item} className="shape-leaf bg-white border border-slate-200/80 p-5 md:p-8 hover:border-[var(--color-brand-primary)]/50 transition-all group relative overflow-hidden shadow-lg shadow-slate-200/40">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gradient opacity-10 rounded-full blur-[40px] group-hover:opacity-30 transition-opacity"></div>
            <div className="w-12 h-12 md:w-14 md:h-14 shape-leaf bg-slate-100 flex items-center justify-center mb-4 md:mb-6 border border-slate-250 group-hover:border-[var(--color-brand-primary)]/50 transition-colors">
              <Clock className="w-6 h-6 md:w-7 md:h-7 text-[var(--color-brand-primary)]" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold text-[var(--color-brand-dark)] mb-1 md:mb-2 font-primary uppercase">Duração</h3>
            <p className="text-2xl sm:text-4xl font-impact tracking-wider text-brand-gradient">12 meses</p>
          </motion.div>

          {/* Card: Carga Horária */}
          <motion.div variants={item} className="shape-leaf bg-white border border-slate-200/80 p-5 md:p-8 hover:border-[var(--color-brand-secondary)]/50 transition-all group relative overflow-hidden shadow-lg shadow-slate-200/40">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gradient opacity-10 rounded-full blur-[40px] group-hover:opacity-30 transition-opacity"></div>
            <div className="w-12 h-12 md:w-14 md:h-14 shape-leaf bg-slate-100 flex items-center justify-center mb-4 md:mb-6 border border-slate-250 group-hover:border-[var(--color-brand-secondary)]/50 transition-colors">
              <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-[var(--color-brand-secondary)]" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold text-[var(--color-brand-dark)] mb-1 md:mb-2 font-primary uppercase">Carga Horária</h3>
            <p className="text-2xl sm:text-4xl font-impact tracking-wider text-brand-gradient">400h</p>
          </motion.div>

          {/* Card: Modalidade */}
          <motion.div variants={item} className="shape-leaf bg-white border border-slate-200/80 p-5 md:p-8 hover:border-[var(--color-brand-accent)]/50 transition-all group relative overflow-hidden shadow-lg shadow-slate-200/40">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gradient opacity-10 rounded-full blur-[40px] group-hover:opacity-30 transition-opacity"></div>
            <div className="w-12 h-12 md:w-14 md:h-14 shape-leaf bg-slate-100 flex items-center justify-center mb-4 md:mb-6 border border-slate-250 group-hover:border-[var(--color-brand-accent)]/50 transition-colors">
              <MonitorPlay className="w-6 h-6 md:w-7 md:h-7 text-[var(--color-brand-accent)]" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold text-[var(--color-brand-dark)] mb-1 md:mb-2 font-primary uppercase">Modalidade</h3>
            <p className="text-xl sm:text-3xl font-impact tracking-wider text-brand-gradient leading-tight">100% EAD<br/><span className="text-[10px] md:text-sm font-secondary tracking-normal text-[var(--color-brand-dark)]/60 uppercase">Aulas Gravadas</span></p>
          </motion.div>
        </motion.div>

        {/* Footer info area: Chancela and MEC side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Selo Anhanguera */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 w-full shape-leaf bg-white border border-slate-200/80 p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-6 relative overflow-hidden shadow-lg shadow-slate-200/40"
          >
            <div className="absolute top-1/2 left-10 -translate-y-1/2 w-48 h-48 bg-brand-gradient opacity-[0.08] blur-[60px] pointer-events-none"></div>

            <div className="flex-shrink-0 flex items-center justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}logo-anhanguera.webp`} 
                alt="Logo Anhanguera" 
                className="h-14 md:h-20 w-auto object-contain"
              />
            </div>
            <div className="text-center md:text-left relative z-10 flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[var(--color-brand-dark)] font-primary uppercase tracking-wide">Chancela Anhanguera</h3>
              <p className="text-[var(--color-brand-dark)]/70 text-base md:text-lg">Um diploma de peso para sua carreira, com a tradição acadêmica da Anhanguera no setor ambiental.</p>
            </div>
          </motion.div>

          {/* Selo MEC */}
          <motion.a 
            href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/NTE1/93916316abe23148507bd4c260e4b878/MjU4NDQ1"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="md:col-span-1 w-full shape-leaf bg-white border border-slate-200/80 p-6 md:p-8 hover:border-[var(--color-brand-primary)]/50 transition-all group relative overflow-hidden flex flex-col items-center justify-center text-center cursor-pointer shadow-lg shadow-slate-200/40"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gradient opacity-10 rounded-full blur-[40px] group-hover:opacity-30 transition-opacity"></div>
            <img 
              src={`${import.meta.env.BASE_URL}mec-badge.webp`} 
              alt="Selo MEC" 
              className="h-16 md:h-20 w-auto object-contain mb-3 group-hover:scale-105 transition-transform"
            />
            <h3 className="text-lg font-bold text-[var(--color-brand-primary)] uppercase tracking-wider text-center">Nota Máxima no MEC</h3>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
