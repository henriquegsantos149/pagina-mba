import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { id: 1, src: 'testimonial-1.png' },
  { id: 2, src: 'testimonial-2.png' },
  { id: 3, src: 'testimonial-3.png' },
  { id: 4, src: 'testimonial-4.png' },
  { id: 5, src: 'testimonial-5.png' },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 50) {
      prevSlide();
    } else if (info.offset.x < -50) {
      nextSlide();
    }
  };

  const getSlideIndex = (index: number) => {
    return (index + testimonials.length) % testimonials.length;
  };

  return (
    <section id="depoimentos" className="py-24 bg-[var(--color-brand-dark)] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            O que dizem os <span className="text-brand-gradient">Alunos</span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary">Resultados reais de quem já aplicou a inteligência de dados na prática.</p>
        </div>

        <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px]">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 z-30 p-3 rounded-full bg-white/5 border border-white/10 text-[var(--color-brand-light)] hover:bg-brand-gradient hover:text-[var(--color-brand-dark)] transition-all hidden md:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 z-30 p-3 rounded-full bg-white/5 border border-white/10 text-[var(--color-brand-light)] hover:bg-brand-gradient hover:text-[var(--color-brand-dark)] transition-all hidden md:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex items-center justify-center w-full gap-4 md:gap-12 perspective-[1000px]">
            {[-1, 0, 1].map((offset) => {
              const index = getSlideIndex(currentIndex + offset);
              const isCenter = offset === 0;
              const testimonial = testimonials[index];

              return (
                <motion.div
                  key={testimonial.id}
                  initial={false}
                  animate={{
                    scale: isCenter ? 1 : 0.85,
                    opacity: isCenter ? 1 : 0.3,
                    filter: isCenter ? 'blur(0px)' : 'blur(8px)',
                    x: offset * (typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 40),
                    zIndex: isCenter ? 20 : 10,
                  }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  className={`relative shrink-0 cursor-pointer transition-all duration-300 ${!isCenter ? 'hidden md:block pointer-events-none' : 'w-full md:w-[600px] z-20'}`}
                  drag={isCenter ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50"
                    >
                      <img 
                        src={`${import.meta.env.BASE_URL}testimonials/${testimonial.src}`}
                        alt={`Depoimento ${testimonial.id}`}
                        className="w-full h-auto object-contain block"
                      />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === i ? 'w-8 bg-brand-gradient' : 'w-2 bg-white/10'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
