import { motion } from 'framer-motion';
import { Terminal, Lightbulb, Map, Globe, Database, BrainCircuit, Activity } from 'lucide-react';

const skills = [
  {
    title: "Análise Espacial Avançada",
    description: "Domínio prático de ferramentas GIS e Sensoriamento Remoto para transformar imagens orbitais em produtos decisivos.",
    icon: Map
  },
  {
    title: "Programação e Automação",
    description: "Criação de scripts para mineração e estruturação de bases ambientais robustas, dando fim ao trabalho braçal repetitivo.",
    icon: Terminal
  },
  {
    title: "Visualização Interativa",
    description: "Construção de WebMaps e Dashboards Dinâmicos atraentes para reportar dados complexos de forma clara para clientes e gestores.",
    icon: Globe
  },
  {
    title: "Engenharia de Dados (Big Data)",
    description: "Gestão técnica de enormes volumes de dados ambientais com arquiteturas ágeis e bancos de dados estruturados.",
    icon: Database
  },
  {
    title: "Governança e ESG",
    description: "Avaliação antecipada de cenários, unificando compliance ambiental, gestão de riscos operacionais e modelagem climática.",
    icon: Activity
  },
  {
    title: "Inteligência Artificial Escalonável",
    description: "Emprego de Machine Learning aplicado, treinando rotinas para previsão de impactos e identificação automatizada de padrões.",
    icon: BrainCircuit
  }
];

export default function SkillsAcquired() {
  return (
    <section className="py-16 md:py-24 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Habilidades <span className="text-brand-gradient">Adquiridas</span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto">Tudo que você será capaz de aplicar na prática após concluir o MBA.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 shape-leaf bg-[var(--color-brand-dark)] border border-white/5 hover:border-[var(--color-brand-primary)]/40 transition-all"
              >
                <div className="w-12 h-12 shape-leaf bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-gradient group-hover:text-[var(--color-brand-dark)] transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-primary uppercase tracking-wide group-hover:text-[var(--color-brand-primary)] transition-colors">
                  {skill.title}
                </h3>
                <p className="text-[var(--color-brand-light)]/60 font-secondary leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

