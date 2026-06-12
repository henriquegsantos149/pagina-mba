import { motion } from 'framer-motion';
import { UserCheck, GraduationCap } from 'lucide-react';

const profiles = [
  "Engenheiros Ambientais, Florestais e Agrônomos",
  "Geólogos e Geógrafos",
  "Biólogos e Pesquisadores",
  "Tecnólogos em Geoprocessamento e Gestão Ambiental",
  "Gestores de Dados e Analistas de Sistemas (com foco ambiental)",
  "Profissionais atuantes em Consultorias, Mineração e Órgãos de Licenciamento"
];

export default function TargetAudience() {
  return (
    <section className="py-24 bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] relative border-y border-slate-200">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gradient opacity-[0.02] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-primary uppercase tracking-wide text-[var(--color-brand-dark)]">
            Para <span className="text-brand-gradient">Quem é</span> o MBA?
          </h2>
          <p className="text-[var(--color-brand-dark)]/70 text-lg font-secondary mb-10 leading-relaxed">
            Se você busca transitar do modelo tradicional de análise em planilhas para a vanguarda tecnológica que cruza Big Data com Sustentabilidade, esse MBA foi desenhado exatamente para o seu perfil.
          </p>

          <div className="space-y-4">
            {profiles.map((profile, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 bg-white border border-slate-200/80 p-4 shape-leaf hover:bg-slate-50 transition-colors shadow-sm"
              >
                <UserCheck className="w-6 h-6 text-[var(--color-brand-secondary)] shrink-0" />
                <span className="font-secondary text-[var(--color-brand-dark)]">{profile}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="shape-leaf bg-white border border-slate-200/80 p-10 relative overflow-hidden shadow-lg shadow-slate-200/40"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm bg-slate-100 flex items-center justify-center border border-slate-200">
                <GraduationCap className="w-6 h-6 text-[var(--color-brand-primary)]" />
              </div>
              <h3 className="text-2xl font-bold font-primary uppercase tracking-wide text-[var(--color-brand-dark)]">Pré-Requisitos</h3>
            </div>
            
            <p className="text-[var(--color-brand-dark)]/80 font-secondary leading-relaxed mb-10 text-lg">
              Para acessar esta Pós-Graduação e obter a certificação de especialista, o único requisito obrigatório é:
            </p>

            <div className="relative border border-slate-200 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md overflow-hidden bg-slate-50/80 p-8 shadow-sm">
               <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)]"></div>
               <div className="pl-2">
                 <h4 className="font-bold text-[var(--color-brand-dark)] font-primary text-2xl uppercase mb-2">Diploma de Graduação</h4>
                 <p className="text-[var(--color-brand-dark)]/50 font-secondary uppercase tracking-widest text-sm">Reconhecido pelo MEC</p>
               </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
