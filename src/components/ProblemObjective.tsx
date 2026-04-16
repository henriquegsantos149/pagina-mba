import { motion } from 'framer-motion';
import { Database, Target, AlertTriangle } from 'lucide-react';

export default function ProblemObjective() {
  return (
    <section id="problema" className="py-16 md:py-24 relative overflow-hidden bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-[var(--color-brand-primary)] mb-6 font-primary uppercase tracking-[0.2em] font-bold text-sm">
              <AlertTriangle className="w-5 h-5" />
              <span>O Desafio dos Dados Ambientais</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-primary uppercase leading-tight">
              Do Dado Bruto à <span className="text-brand-gradient">Decisão Estratégica</span>
            </h2>
            <div className="space-y-6 text-lg text-[var(--color-brand-light)]/70 font-secondary">
              <p>
                Projetos ambientais geram um <strong>volume esmagador de dados</strong> (laudos, sondagens, análises laboratoriais). Muitas vezes, essas informações ficam engavetadas em planilhas ou PDFs isolados.
              </p>
              <p>
                Essa falta de integração gera <strong>ineficiência, altos custos e falhas em compliance</strong> que travam a tomada de decisão em grandes licenciamentos e estratégias ESG.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shape-leaf bg-white/[0.03] backdrop-blur-sm border border-white/20 p-10 relative overflow-hidden shadow-lg shadow-black/40"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gradient opacity-[0.05] rounded-full blur-[60px]"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 shape-leaf bg-brand-gradient flex items-center justify-center text-[var(--color-brand-dark)]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-primary uppercase tracking-wide">Nosso Objetivo</h3>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-[var(--color-brand-primary)] shrink-0 shadow-[0_0_10px_var(--color-brand-primary)]"></div>
                <div>
                  <h4 className="font-bold text-[var(--color-brand-light)] mb-1 uppercase tracking-wider text-sm">Soluções Visuais</h4>
                  <p className="text-[var(--color-brand-light)]/60 text-sm">Transformar blocos de informação em Dashboards, WebMaps e relatórios interativos.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-[var(--color-brand-secondary)] shrink-0 shadow-[0_0_10px_var(--color-brand-secondary)]"></div>
                <div>
                  <h4 className="font-bold text-[var(--color-brand-light)] mb-1 uppercase tracking-wider text-sm">Orquestração de Dados</h4>
                  <p className="text-[var(--color-brand-light)]/60 text-sm">Centralizar a informação ambiental para segurança técnica e lucros claros.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-[var(--color-brand-accent)] shrink-0 shadow-[0_0_10px_var(--color-brand-accent)]"></div>
                <div>
                  <h4 className="font-bold text-[var(--color-brand-light)] mb-1 uppercase tracking-wider text-sm">Cenários Antecipados</h4>
                  <p className="text-[var(--color-brand-light)]/60 text-sm">Utilizar Ciência de Dados para antever riscos e otimizar licenciamentos.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/5 flex items-center gap-3 text-[var(--color-brand-accent)] font-bold italic">
              <Database className="w-5 h-5" />
              <span>Dados inteligentes para um futuro sustentável.</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

