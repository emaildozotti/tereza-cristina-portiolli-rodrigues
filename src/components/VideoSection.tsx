// DECISÃO CRIATIVA: Container 9:16 vertical centralizado cria intimidade —
// como se você estivesse recebendo uma mensagem pessoal da terapeuta.
// Play button circular com glow caramelo em hover. Pre-texto em Fraunces itálico
// cria expectativa emocional. Fundo escuro + hachura mantém continuidade visual.
// Glow elíptico sob o vídeo para profundidade. Asymmetric border-radius.
import { useState } from 'react'
import { motion } from 'motion/react'
import { FadeIn } from './FadeIn'

const VIDEO_ID = 'sU9sjGrEXFM'

export const VideoSection = () => {
  const [playing, setPlaying] = useState(false)

  return (
    <section
      id="video"
      style={{
        backgroundColor: '#1C2B35',
        backgroundImage:
          'repeating-linear-gradient(-45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 12px)',
      }}
      className="section-padding"
    >
      <div className="container-ultra">
        {/* Eyebrow */}
        <FadeIn direction="up" delay={0}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow-ultra" style={{ display: 'block', marginBottom: '1rem' }}>
              ASSISTA ANTES DE DECIDIR
            </span>
            <div
              className="circuit-divider"
              style={{ maxWidth: '300px', margin: '0 auto 2rem' }}
            >
              <div className="circuit-node" />
              <div className="circuit-node" />
              <div className="circuit-node" />
            </div>
          </div>
        </FadeIn>

        {/* Pre-video text */}
        <FadeIn direction="up" delay={0.1}>
          <p
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
              fontStyle: 'italic',
              fontWeight: 300,
              color: '#F9F6F2',
              opacity: 0.7,
              maxWidth: '560px',
              margin: '0 auto 2.5rem',
              textAlign: 'center',
              lineHeight: 1.85,
            }}
          >
            Em menos de 3 minutos, Tereza explica o que acontece nos seus meridianos quando a ansiedade dispara. E por que o remédio sozinho não consegue chegar nessa raiz.
          </p>
        </FadeIn>

        {/* Video container 9:16 vertical */}
        <FadeIn direction="up" delay={0.2}>
          <div
            style={{
              maxWidth: '400px',
              margin: '0 auto',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: '16px 4px 16px 4px',
                overflow: 'hidden',
                aspectRatio: '9/16',
                backgroundColor: '#0F3D48',
                border: '1px solid rgba(181,129,58,0.2)',
                boxShadow: '0 32px 64px rgba(28,43,53,0.6)',
              }}
            >
              {playing && VIDEO_ID !== 'VIDEO_PLACEHOLDER' ? (
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                  title="Tereza Cristina — TFT e Reequilíbrio Energético"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                />
              ) : (
                <>
                  {/* Poster overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(28,43,53,0.2) 0%, rgba(26,92,107,0.4) 50%, rgba(28,43,53,0.85) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '1.5rem',
                    }}
                  >
                    {/* Poster background initials */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'Fraunces, serif',
                        fontSize: '8rem',
                        color: '#F9F6F2',
                        opacity: 0.05,
                        pointerEvents: 'none',
                        userSelect: 'none',
                      }}
                    >
                      TC
                    </div>

                    {/* Play button */}
                    <motion.button
                      onClick={() => setPlaying(true)}
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(26,92,107,0.85)',
                        border: '2px solid rgba(181,129,58,0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        position: 'relative',
                        zIndex: 1,
                      }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: '0 0 32px rgba(181,129,58,0.5)',
                        borderColor: 'rgba(181,129,58,1)',
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <polygon points="6,4 20,12 6,20" fill="#F9F6F2" />
                      </svg>
                    </motion.button>

                    {/* Video label */}
                    <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                      <p
                        style={{
                          fontFamily: 'Lato, sans-serif',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          color: '#B5813A',
                          opacity: 0.85,
                          marginBottom: '0.3rem',
                        }}
                      >
                        Tereza fala para você
                      </p>
                      <p
                        style={{
                          fontFamily: 'Fraunces, serif',
                          fontSize: '0.95rem',
                          color: '#F9F6F2',
                          opacity: 0.8,
                        }}
                      >
                        O que acontece nos seus meridianos
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Glow effect under video */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80%',
                height: '40px',
                background: 'radial-gradient(ellipse, rgba(26,92,107,0.4) 0%, transparent 70%)',
                filter: 'blur(12px)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </FadeIn>

        {/* Post-video text */}
        <FadeIn direction="up" delay={0.35}>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <div
              className="circuit-divider"
              style={{ maxWidth: '300px', margin: '0 auto 1.5rem' }}
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
                maxWidth: '480px',
                margin: '0 auto',
                lineHeight: 1.8,
              }}
            >
              "Seu corpo não precisa acreditar. Precisa de ativação."
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
