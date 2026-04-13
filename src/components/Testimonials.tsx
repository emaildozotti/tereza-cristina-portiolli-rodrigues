// DECISÃO CRIATIVA: Crossfade animado com auto-advance 6s cria tensão
// narrativa — o leitor quer ver o próximo depoimento. Barras indicadoras (não
// dots) em caramelo comunicam progresso. Aspa gigante opacity 0.08 em display
// serif é decorativa sem competir. Fundo Petróleo + hachura diagonal para
// consistência com seções dark. Pause on hover para controle do leitor.
import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'

interface Testimonial {
  name: string
  description: string
  text: string
}

const testimonials: Testimonial[] = [
  {
    name: 'F. C., 44 anos',
    description: 'Ansiedade generalizada há 12 anos',
    text: 'Eu já tinha tentado de tudo. Remédio controlado, psicóloga, meditação, retiro. Nada segurava a crise por muito tempo. Na segunda sessão com a Tereza eu chorei de alívio, porque pela primeira vez alguém olhou pra mim e disse exatamente o que eu sentia sem eu precisar explicar. Não é mágica. É método, e funciona.',
  },
  {
    name: 'M. A., 39 anos',
    description: 'Trauma de acidente e pânico ao dirigir',
    text: 'Depois do acidente eu não conseguia mais sentar no banco do motorista. Meu corpo travava antes mesmo de eu ligar o carro. Em quatro sessões de TFT com a Tereza, eu voltei a dirigir. Sem medo, sem o aperto no peito. Parece pouco descrito assim, mas pra mim foi ter a minha vida de volta.',
  },
  {
    name: 'C. R., 52 anos',
    description: 'Insônia crônica e fobia de consultas médicas',
    text: 'Eu não dormia uma noite inteira há mais de três anos. Acordava às três da manhã e ficava trancada no meu próprio corpo. A Tereza trabalhou com calma e precisão, me explicou cada passo. Hoje durmo sete horas seguidas e fui numa consulta de rotina sem pânico. Nunca pensei que isso fosse possível de novo.',
  },
]

export const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length)
    }, 6000)
  }

  useEffect(() => {
    if (!isHovered) startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isHovered])

  const goTo = (idx: number) => {
    if (timerRef.current) clearInterval(timerRef.current)
    setCurrent(idx)
    if (!isHovered) startTimer()
  }

  return (
    <section
      id="testimonials"
      style={{
        backgroundColor: '#1A5C6B',
        backgroundImage:
          'repeating-linear-gradient(-45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 12px)',
      }}
      className="section-padding-lg"
      onMouseEnter={() => {
        setIsHovered(true)
        if (timerRef.current) clearInterval(timerRef.current)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
      }}
    >
      <div className="container-ultra">
        {/* Header */}
        <FadeIn direction="up" delay={0}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span
              className="eyebrow-ultra"
              style={{ color: '#B5813A', display: 'block', marginBottom: '1rem' }}
            >
              DEPOIMENTOS
            </span>
            <h2
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 600,
                color: '#F9F6F2',
                lineHeight: 1.2,
              }}
            >
              Quem sentiu,{' '}
              <em style={{ color: '#B5813A', fontStyle: 'italic' }}>
                sabe
              </em>
            </h2>
            <div
              className="circuit-divider"
              style={{ maxWidth: '300px', margin: '1.5rem auto 0' }}
            >
              <div className="circuit-node" />
              <div className="circuit-node" />
              <div className="circuit-node" />
            </div>
          </div>
        </FadeIn>

        {/* Carousel */}
        <FadeIn direction="up" delay={0.1}>
          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              position: 'relative',
            }}
          >
            {/* Giant quote mark */}
            <div
              style={{
                position: 'absolute',
                top: '-1rem',
                left: '-1rem',
                fontFamily: 'Fraunces, serif',
                fontSize: '10rem',
                lineHeight: 1,
                color: '#F9F6F2',
                opacity: 0.08,
                pointerEvents: 'none',
                userSelect: 'none',
                zIndex: 0,
              }}
            >
              &ldquo;
            </div>

            {/* Card */}
            <div
              style={{
                position: 'relative',
                minHeight: '280px',
                zIndex: 1,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    backgroundColor: 'rgba(28, 43, 53, 0.35)',
                    border: '1px solid rgba(249,246,242,0.1)',
                    borderRadius: '16px 4px 16px 4px',
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                  }}
                >
                  {/* Text */}
                  <p
                    style={{
                      fontFamily: 'Fraunces, serif',
                      fontSize: '1.05rem',
                      fontStyle: 'italic',
                      fontWeight: 300,
                      color: '#F9F6F2',
                      opacity: 0.9,
                      lineHeight: 1.85,
                    }}
                  >
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>

                  {/* Author */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      paddingTop: '0.5rem',
                      borderTop: '1px solid rgba(249,246,242,0.1)',
                    }}
                  >
                    <div
                      style={{
                        width: '2rem',
                        height: '2px',
                        backgroundColor: '#B5813A',
                        opacity: 0.6,
                      }}
                    />
                    <div>
                      <span
                        style={{
                          fontFamily: 'Lato, sans-serif',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: '#F9F6F2',
                          opacity: 0.7,
                          letterSpacing: '0.06em',
                          display: 'block',
                        }}
                      >
                        {testimonials[current].name}
                      </span>
                      <span
                        style={{
                          fontFamily: 'Lato, sans-serif',
                          fontSize: '0.65rem',
                          color: '#F9F6F2',
                          opacity: 0.45,
                          letterSpacing: '0.04em',
                        }}
                      >
                        {testimonials[current].description}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress bars */}
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'center',
                marginTop: '1.75rem',
              }}
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: i === current ? '28px' : '8px',
                    height: '2px',
                    borderRadius: '1px',
                    backgroundColor: i === current ? '#B5813A' : 'rgba(249,246,242,0.25)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'width 0.3s ease, background-color 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Transition pull */}
        <FadeIn direction="up" delay={0.3}>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <div
              className="circuit-divider"
              style={{ maxWidth: '400px', margin: '0 auto 1.5rem' }}
            >
              <div className="circuit-node" />
              <div className="circuit-node" />
              <div className="circuit-node" />
            </div>
            <p
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize: '1rem',
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#F9F6F2',
                opacity: 0.6,
                lineHeight: 1.8,
              }}
            >
              Se uma parte de você ainda tem dúvidas, leia isso antes de decidir.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
