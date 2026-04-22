import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2 } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    formacao: '', // empty by default as requested
    area: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.email || !formData.telefone || !formData.formacao) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    if (formData.formacao === 'Sim' && !formData.area) {
      alert('Por favor, informe sua área de formação.');
      return;
    }

    setLoading(true);

    const payload = {
      ...formData,
      course: 'mba-ida'
    };

    try {
      // Usamos keepalive: true para que a requisição continue mesmo após o redirecionamento
      // E não usamos 'await' na resposta para que o redirecionamento seja instantâneo
      fetch('https://script.google.com/macros/s/AKfycbzoQQtPl_TazLAIbacOSLYyq_fCulFa10Dv_Wd1DOR96Xsurd9_HeSKgsv9axxm9l4PTg/exec', {
        method: 'POST',
        mode: 'no-cors',
        keepalive: true,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Pequeno timeout apenas para o usuário ver o estado de "loading" por um breve momento (melhora UX)
      setTimeout(() => {
        window.location.href = 'https://pay.voompcreators.com.br/13467';
      }, 100);

    } catch (error) {
      console.error('Error submitting lead:', error);
      window.location.href = 'https://pay.voompcreators.com.br/13467';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-[var(--color-brand-dark)] border border-white/10 p-8 md:p-10 shape-leaf shadow-2xl overflow-hidden"
          >
            {/* Design accents */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gradient opacity-10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-gradient opacity-10 rounded-full blur-3xl pointer-events-none" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold font-primary uppercase tracking-tight mb-2">
                Falta Pouco!
              </h2>
              <p className="text-[var(--color-brand-light)]/60 font-secondary text-sm md:text-base mb-8">
                Preencha os dados abaixo para continuar sua inscrição no MBA em Inteligência de Dados Ambientais.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[var(--color-brand-primary)] text-xs font-bold uppercase tracking-widest mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome aqui"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[var(--color-brand-primary)] text-xs font-bold uppercase tracking-widest mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@exemplo.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[var(--color-brand-primary)] text-xs font-bold uppercase tracking-widest mb-2">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[var(--color-brand-primary)] text-xs font-bold uppercase tracking-widest mb-2">
                    Possui Formação?
                  </label>
                  <select
                    name="formacao"
                    required
                    value={formData.formacao}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#1A1A1A]">Selecione...</option>
                    <option value="Sim" className="bg-[#1A1A1A]">Sim</option>
                    <option value="Não" className="bg-[#1A1A1A]">Não</option>
                  </select>
                </div>

                <AnimatePresence>
                  {formData.formacao === 'Sim' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <label className="block text-[var(--color-brand-primary)] text-xs font-bold uppercase tracking-widest mb-2">
                        Área de Formação
                      </label>
                      <input
                        type="text"
                        name="area"
                        required={formData.formacao === 'Sim'}
                        value={formData.area}
                        onChange={handleChange}
                        placeholder="Ex: Engenharia Ambiental, Biologia..."
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full shape-leaf bg-brand-gradient text-[var(--color-brand-dark)] font-bold py-4 mt-4 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(15,166,10,0.3)]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      PROCESSANDO...
                    </>
                  ) : (
                    <>
                      CONTINUAR PARA INSCRIÇÃO
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
