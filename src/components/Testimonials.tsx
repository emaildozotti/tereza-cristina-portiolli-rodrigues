import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FadeIn } from './FadeIn'

const testimonials = [
  {
    id: 1,
    nome: 'Nome do paciente',
    descricao: 'Profissão, cidade',
    depoimento: '[DEPOIMENTO REAL — AGUARDANDO CLIENTE]',
  },
  {
    id: 2,
    nome: 'Nome do paciente',
    descricao: 'Profissão, cidade',
    depoimento: '[DEPOIMENTO REAL — AGUARDANDO CLIENTE]',
  },
  {
    id: 3,
    nome: 'Nome do paciente',
    descricao: 'Profissão, cidade',
    depoimento: '[DEPOIMENTO REAL — AGUARDANDO CLIENTE]',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section className="section-padding-lg" style={{ background: '#F3EDE4' }}>
      <div className="container-ultra">
        <FadeIn>
          <h2 className="font-display text-heading font-semibold text-3xl md:text-[2.5rem] md:leading-[1.2] text-center mb-16">
            Resultados que o corpo <span className="text-primary">confirma</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative max-w-2xl mx-auto text-center">
            {/* Decorative quote */}
            <span
              className="absolute -top-8 left-1/2 -translate-x-1/2 font-display text-primary/20 select-none pointer-events-none"
              style={{ fontSize: '120px', lineHeight: '1' }}
            >
              "
            </span>

            <div className="min-h-[200px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="px-4"
                >
                  <p className="font-sub italic text-text-main text-lg md:text-xl leading-relaxed mb-6">
                    "{t.depoimento}"
                  </p>
                  <p className="text-heading font-bold text-sm">{t.nome}</p>
                  <p className="text-text-main/60 text-sm">{t.descricao}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-off-white transition-all duration-300"
                aria-label="Depoimento anterior"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 2L4 8l6 6" />
                </svg>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-primary w-6' : 'bg-primary/30'
                    }`}
                    aria-label={`Depoimento ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-off-white transition-all duration-300"
                aria-label="Próximo depoimento"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-center mt-14 font-sub italic text-text-main/60 text-sm">
            Mas talvez uma parte de você ainda tenha dúvidas. Normal.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
