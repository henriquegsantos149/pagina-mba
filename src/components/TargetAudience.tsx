import { motion } from 'framer-motion';
import { UserCheck, CheckCircle2 } from 'lucide-react';

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
    <section className="py-24 bg-white/[0.02] relative border-y border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gradient opacity-[0.02] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-primary uppercase tracking-wide">
            Para <span className="text-brand-gradient">Quem é</span> o MBA?
          </h2>
          <p className="text-[var(--color-brand-light)]/70 text-lg font-secondary mb-10 leading-relaxed">
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
                className="flex items-center gap-4 bg-white/5 border border-white/5 p-4 shape-leaf hover:bg-white/10 transition-colors"
              >
                <UserCheck className="w-6 h-6 text-[var(--color-brand-secondary)] shrink-0" />
                <span className="font-secondary text-[var(--color-brand-light)]">{profile}</span>
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
            className="shape-leaf bg-black/40 border border-[var(--color-brand-primary)]/20 p-10 relative overflow-hidden backdrop-blur-sm"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-gradient"></div>
            
            <h3 className="text-2xl font-bold font-primary uppercase tracking-wide mb-6">Pré-Requisitos e Matrícula</h3>
            <p className="text-[var(--color-brand-light)]/70 font-secondary leading-relaxed mb-8">
              Para garantir o pleno aproveitamento da grade curricular avançada e a obtenção da sua chancela de Especialista, o alinhamento basal é essencial.
            </p>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-primary)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[var(--color-brand-light)] font-primary text-xl uppercase">Ensino Superior Completo</h4>
                  <p className="text-sm text-[var(--color-brand-light)]/60 font-secondary mt-1">É obrigatória a apresentação do diploma de graduação (bacharelado, licenciatura ou tecnólogo) reconhecido pelo MEC para oficializar a matrícula.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-primary)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[var(--color-brand-light)] font-primary text-xl uppercase">Conhecimentos Básicos</h4>
                  <p className="text-sm text-[var(--color-brand-light)]/60 font-secondary mt-1">Conhecimento prévio básico de planilhas de dados. O MBA tem disciplinas de introdução à programação para nivelamento dos inscritos.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
