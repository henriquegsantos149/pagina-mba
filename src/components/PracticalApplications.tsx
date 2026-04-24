import { motion } from 'framer-motion';

const applications = [
  {
    title: "Mercado ESG e Consultorias",
    description: "Aplicar inteligência de dados na elaboração de relatórios de sustentabilidade, permitindo análises ricas e mensuráveis que as auditorias ESG e selos verdes exigem hoje nas grandes consultorias.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Licenciamento e Setor Público",
    description: "Transformar processos lentos de submissão em estudos ágeis. Dashboards online permitem que órgãos ambientais validem em minutos os mapas e as modelagens que antes exigiam calhamaços de papel.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Monitoramento de Riscos e Clima",
    description: "Utilização profissional do Processamento Digital de Imagens (PDI) para criar defesas preventivas contra desastres naturais, antecipar impactos operacionais e estudar áreas de conservação.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Corporações Agro, Mineração & Energia",
    description: "Assumir a liderança em núcleos de Geoprocessamento ou Ciência de Dados dentro dos setores primários que mais demandam otimização espacial para garantir máxima rentabilidade respeitando normas ambientais.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800"
  }
];

export default function PracticalApplications() {
  return (
    <section className="py-24 relative bg-[var(--color-brand-dark)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Aplicações <span className="text-brand-gradient">Práticas</span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary">O cenário prático, as portas de atuação e as soluções que você entregará resolvendo problemas reais do mercado.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--color-brand-green1)]/50 transition-all duration-300 shadow-lg"
            >
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-black/20">
                <img 
                  src={app.image} 
                  alt={app.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)] to-transparent"></div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1 bg-[var(--color-brand-dark)]/50">
                <h3 className="text-xl font-bold text-[var(--color-brand-light)] font-primary uppercase tracking-wide mb-3 group-hover:text-[var(--color-brand-green1)] transition-colors">
                  {app.title}
                </h3>
                <p className="text-[var(--color-brand-light)]/60 font-secondary leading-relaxed">
                  {app.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
