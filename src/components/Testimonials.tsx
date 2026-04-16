import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { id: 1, src: 'testimonial-1.jpg' },
  { id: 2, src: 'testimonial-2.jpg' },
  { id: 3, src: 'testimonial-3.png' },
  { id: 4, src: 'testimonial-4.jpg' },
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

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > 50) {
      prevSlide();
    } else if (info.offset.x < -50) {
      nextSlide();
    }
  };

  // Helper to calculate shortest distance in the loop
  const getRelativePosition = (itemIndex: number) => {
    let diff = itemIndex - currentIndex;
    const len = testimonials.length;
    if (diff > len / 2) diff -= len;
    if (diff < -len / 2) diff += len;
    return diff;
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

        <div className="relative flex flex-col items-center min-h-[450px] md:min-h-[600px] justify-center">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 z-40 p-3 rounded-full bg-white/5 border border-white/10 text-[var(--color-brand-light)] hover:bg-brand-gradient hover:text-[var(--color-brand-dark)] transition-all hidden lg:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 z-40 p-3 rounded-full bg-white/5 border border-white/10 text-[var(--color-brand-light)] hover:bg-brand-gradient hover:text-[var(--color-brand-dark)] transition-all hidden lg:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center py-10 overflow-visible">
            {testimonials.map((testimonial, i) => {
              const relativePos = getRelativePosition(i);
              const isActive = relativePos === 0;
              const isVisible = Math.abs(relativePos) <= 1; // Show neighbors

              return (
                <motion.div
                  key={testimonial.id}
                  initial={false}
                  animate={{
                    x: relativePos * 280, // Small distance as requested
                    scale: isActive ? 1 : 0.82,
                    opacity: isVisible ? (isActive ? 1 : 0.4) : 0, // Fade out non-neighbors
                    filter: isActive ? 'blur(0px)' : 'blur(6px)',
                    zIndex: isActive ? 30 : 20 - Math.abs(relativePos),
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                    mass: 0.8,
                  }}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                  className="absolute w-[300px] md:w-[500px] cursor-pointer"
                >
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-black">
                    <img 
                      src={`${import.meta.env.BASE_URL}testimonials/${testimonial.src}`}
                      alt={`Depoimento ${i + 1}`}
                      className="w-full h-auto object-contain block select-none pointer-events-none"
                    />
                  </div>
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
              className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === i ? 'w-8 bg-brand-gradient' : 'w-2 bg-white/10 hover:bg-white/20'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
