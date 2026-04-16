import { motion } from 'framer-motion';
import { BriefcaseBusiness, CloudRainWind, Landmark, Blocks } from 'lucide-react';

const applications = [
  {
    title: "Mercado ESG e Consultorias",
    description: "Aplicar inteligência de dados na elaboração de relatórios de sustentabilidade, permitindo análises ricas e mensuráveis que as auditorias ESG e selos verdes exigem hoje nas grandes consultorias.",
    icon: Blocks
  },
  {
    title: "Licenciamento e Setor Público",
    description: "Transformar processos lentos de submissão em estudos ágeis. Dashboards online permitem que órgãos ambientais validem em minutos os mapas e as modelagens que antes exigiam calhamaços de papel.",
    icon: Landmark
  },
  {
    title: "Monitoramento de Riscos e Clima",
    description: "Utilização profissional do Processamento Digital de Imagens (PDI) para criar defesas preventivas contra desastres naturais, antecipar impactos operacionais e estudar áreas de conservação.",
    icon: CloudRainWind
  },
  {
    title: "Corporações Agro, Mineração & Energia",
    description: "Assumir a liderança em núcleos de Geoprocessamento ou Ciência de Dados dentro dos setores primários que mais demandam otimização espacial para garantir máxima rentabilidade respeitando normas ambientais.",
    icon: BriefcaseBusiness
  }
];

export default function PracticalApplications() {
  return (
    <section className="py-24 relative bg-[var(--color-brand-dark)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Onde Aplicar <span className="text-brand-gradient">na Prática?</span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary">O cenário prático, as portas de atuação e as soluções que você entregará resolvendo problemas reais do mercado.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {applications.map((app, index) => {
            const Icon = app.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6 p-8 shape-leaf bg-white/5 border border-white/10 hover:border-[var(--color-brand-green1)]/30 transition-colors group"
              >
                <div className="shrink-0 w-16 h-16 bg-black/30 flex items-center justify-center shape-leaf border border-white/5 group-hover:border-[var(--color-brand-green1)]/30 transition-colors">
                  <Icon className="w-8 h-8 text-[var(--color-brand-green1)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-brand-light)] font-primary uppercase tracking-wide mb-3">{app.title}</h3>
                  <p className="text-[var(--color-brand-light)]/60 font-secondary leading-relaxed">{app.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
