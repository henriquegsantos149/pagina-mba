import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const modules = [
  {
    title: "Ambiental Trends: Análises de Futuring & Modelos de Negócios",
    description: "Objetivo: Discutir tendências emergentes no setor ambiental, utilizando ferramentas de análise de futuro (futuring) e de modelagem de negócios."
  },
  {
    title: "Fundamentos de Programação para Ciência de Dados Ambientais",
    description: "Objetivo: Introduzir a lógica de programação e sua aplicação no tratamento e análise de dados ambientais."
  },
  {
    title: "Inteligência Artificial e Aprendizado de Máquinas",
    description: "Objetivo: Apresentar conceitos de inteligência artificial e machine learning voltados para análise e tomada de decisão em projetos ambientais."
  },
  {
    title: "Gerenciamento de Bancos de Dados e Big Data aplicado ao Setor Ambiental",
    description: "Objetivo: Ensinar os fundamentos da organização e gestão de grandes bases de dados ambientais."
  },
  {
    title: "Geotecnologias aplicadas à área ambiental",
    description: "Objetivo: Explorar conceitos e aplicações de geoprocessamento e SIG no setor ambiental."
  },
  {
    title: "Sensoriamento Remoto e Processamento Digital de Imagens",
    description: "Objetivo: Abordar os fundamentos do sensoriamento remoto e do processamento digital de imagens para o monitoramento ambiental."
  },
  {
    title: "Gestão de Risco e Sustentabilidade Corporativa",
    description: "Objetivo: Desenvolver conhecimentos sobre metodologias de gestão de riscos e sua aplicação em contextos empresariais."
  },
  {
    title: "Modelagem e Análise de Decisão em Contextos Ambientais",
    description: "Objetivo: Ensinar técnicas de modelagem e de análise de decisão aplicadas a problemas complexos da área ambiental."
  },
  {
    title: "WebMaps e Dashboards: Visualização Interativa de Dados",
    description: "Objetivo: Capacitar na criação de produtos digitais interativos para comunicar informações ambientais de forma acessível e clara."
  },
  {
    title: "Escritório de Projetos Ágil (Tailoring, Modelos, Métodos e Artefatos)",
    description: "Objetivo: Estudar fundamentos de gestão ágil aplicados ao planejamento e execução de projetos no setor ambiental."
  }
];

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="curriculo" className="py-16 md:py-24 bg-[var(--color-brand-dark)] relative overflow-hidden">
      {/* background grid again for continuity */}
      <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Conteúdo <span className="inline-block bg-brand-gradient text-[var(--color-brand-dark)] px-3 py-1 mt-2 mb-1 shape-leaf transform -skew-x-6"><span className="inline-block transform skew-x-6">Programático</span></span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary">10 módulos desenhados para conectar a teoria à prática, com foco absoluto no que o mercado exige.</p>
        </div>

        <div className="space-y-4">
          {modules.map((mod, index) => {
            const isOpen = openIndex === index;
            // Extract text after "Objetivo: " if present
            const objectiveText = mod.description.startsWith("Objetivo: ") 
              ? mod.description.replace("Objetivo: ", "") 
              : mod.description;

            return (
              <div 
                key={index}
                className={`shape-leaf bg-white/[0.03] backdrop-blur-sm border transition-all duration-300 ${isOpen ? 'border-[var(--color-brand-primary)] shadow-[0_0_25px_rgba(111,176,58,0.2)]' : 'border-white/10 hover:border-[var(--color-brand-accent)]/40 shadow-lg shadow-black/40'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 shape-leaf flex items-center justify-center font-bold font-impact text-xl transition-all duration-300 ${isOpen ? 'bg-brand-gradient text-[var(--color-brand-dark)] shadow-[0_0_15px_rgba(88,174,105,0.4)]' : 'bg-white/5 text-[var(--color-brand-light)]/40 group-hover:bg-white/10'}`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <h3 className={`text-xl font-bold font-primary uppercase tracking-wide transition-colors duration-300 ${isOpen ? 'text-[var(--color-brand-secondary)]' : 'text-[var(--color-brand-light)]'}`}>
                      {mod.title}
                    </h3>
                  </div>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[var(--color-brand-secondary)]' : 'text-[var(--color-brand-light)]/40'}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8 pt-0 md:pl-26 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)] mt-2.5 shrink-0" />
                      <p className="text-[var(--color-brand-light)]/80 text-base md:text-lg font-secondary">
                        <strong className="text-[var(--color-brand-primary)] uppercase text-xs tracking-widest block mb-1">Objetivo</strong>
                        {objectiveText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

