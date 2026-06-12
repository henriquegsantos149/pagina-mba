import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Como funciona a modalidade 100% EAD?",
    answer: "O curso é totalmente ministrado de forma online e gravada, oferecendo flexibilidade para você estudar nos horários que preferir. Você terá acesso à nossa plataforma virtual de aprendizagem, com vídeos, materiais de apoio complementares e suporte técnico contínuo."
  },
  {
    question: "O certificado é reconhecido pelo MEC?",
    answer: "Sim, o MBA é ofertado em conjunto com a Universidade Anhanguera, que é devidamente credenciada pelo Ministério da Educação (MEC). Com o cumprimento das obrigações e horas, você receberá um diploma reconhecido nacionalmente com o título de Especialista."
  },
  {
    question: "Como funcionam as provas e avaliações?",
    answer: "As avaliações são realizadas online no final de cada módulo por meio de testes ou entregas práticas referentes ao tema ensinado, garantindo flexibilidade e facilidade de acompanhamento sem a necessidade de deslocamento físico."
  },
  {
    question: "Não tenho conhecimentos avançados em computação ou programação. Posso fazer o curso?",
    answer: "Sim! Embora o MBA utilize ferramentas de Ciência de Dados e programação, o conteúdo programático é desenhado para evoluir desde os fundamentos da lógica. Ensinamos do zero as ferramentas práticas antes de evoluirmos para aplicações mais complexas de IA ou automações."
  },
  {
    question: "Qual o tempo de duração do curso?",
    answer: "A carga horária total é de 400 horas, o que confere a profundidade ideal de um MBA de excelência, normalmente concluído em torno de 12 meses dependendo do seu ritmo de visualização do EAD."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] relative border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide text-[var(--color-brand-dark)]">
            Perguntas <span className="text-brand-gradient">Frequentes</span>
          </h2>
          <p className="text-[var(--color-brand-dark)]/70 max-w-2xl mx-auto font-secondary">Ainda com dúvidas? Esclarecemos abaixo os pontos mais recorrentes sobre a estrutura do MBA.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`shape-leaf bg-white border transition-all duration-300 ${isOpen ? 'border-[var(--color-brand-secondary)]/40 shadow-md shadow-slate-200/50' : 'border-slate-200/80 hover:border-[var(--color-brand-accent)]/30 shadow-sm'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group gap-4 cursor-pointer"
                >
                  <h3 className={`text-base md:text-lg font-bold font-primary tracking-wide transition-colors duration-300 uppercase ${isOpen ? 'text-[var(--color-brand-secondary)]' : 'text-[var(--color-brand-dark)] group-hover:text-black'}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[var(--color-brand-secondary)]/20' : 'bg-slate-100 group-hover:bg-slate-200'}`}>
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-[var(--color-brand-secondary)]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[var(--color-brand-dark)]/70" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="h-px w-full bg-slate-200 mb-4"></div>
                        <p className="text-[var(--color-brand-dark)]/85 font-secondary leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
