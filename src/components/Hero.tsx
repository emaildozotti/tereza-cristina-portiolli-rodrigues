// DECISÃO CRIATIVA: Split assimétrico 55/45 com aurora de 3 blobs em cores distintas
// (petróleo/caramelo/creme) sobre fundo Grafite Farmacêutico + hachura diagonal.
// Callout em caramelo ancora a dor do público antes do H1 em Fraunces display.
// Circuit divider (signature) entre H1 e subtítulo cria pausa visual técnica.
// Dois CTAs assimétricos: btn-shimmer sólido + btn-shimmer-light outline.
// Badge "Farmacêutica + TFT" flutua sobre a foto como credential de autoridade.
// Mobile: foto primeiro (order -1) para impacto imediato.
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { FadeIn } from './FadeIn'

const WA_LINK = 'https://wa.me/5585992729289?text=Ol%C3%A1%20Tereza%2C%20vi%20sua%20p%C3%A1gina%20e%20quero%20saber%20mais%20sobre%20a%20sess%C3%A3o%20de%20diagn%C3%B3stico.'


export const Hero = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Desktop sticky header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 2rem',
          transition: 'all 0.5s ease',
          backgroundColor: scrolled ? 'rgba(28,43,53,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.15)' : 'none',
        }}
        className="sticky-header"
      >
        <span
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: '1.1rem',
            fontWeight: 600,
            color: '#F9F6F2',
            letterSpacing: '0.02em',
          }}
        >
          Tereza Cristina
        </span>
        <motion.a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer"
          style={{
            backgroundColor: '#1A5C6B',
            color: '#F9F6F2',
            padding: '0.5rem 1.25rem',
            borderRadius: '8px 2px 8px 2px',
            border: 'none',
            fontFamily: 'Lato, sans-serif',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textDecoration: 'none',
            display: 'inline-block',
          }}
          whileHover={{ backgroundColor: '#0F3D48', scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Agendar sessão
        </motion.a>
      </header>

      <section
        id="hero"
        style={{
          backgroundColor: '#1C2B35',
          backgroundImage:
            'repeating-linear-gradient(-45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 12px)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Aurora blobs — 3 cores distintas com opacity pulsante */}
        <div
          className="blur-orb"
          style={{
            position: 'absolute',
            top: '10%',
            right: '-5%',
            width: '55vw',
            height: '55vw',
            background: 'radial-gradient(circle, rgba(26,92,107,0.40) 0%, transparent 70%)',
            animation: 'aurora-1 18s ease-in-out infinite',
          }}
        />
        <div
          className="blur-orb"
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '-8%',
            width: '40vw',
            height: '40vw',
            background: 'radial-gradient(circle, rgba(181,129,58,0.28) 0%, transparent 70%)',
            animation: 'aurora-2 22s ease-in-out infinite',
          }}
        />
        <div
          className="blur-orb"
          style={{
            position: 'absolute',
            top: '40%',
            left: '40%',
            width: '30vw',
            height: '30vw',
            background: 'radial-gradient(circle, rgba(249,246,242,0.18) 0%, transparent 70%)',
            animation: 'aurora-3 26s ease-in-out infinite',
          }}
        />

        {/* Content */}
        <div
          className="container-ultra section-padding-lg"
          style={{ position: 'relative', zIndex: 1, width: '100%' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'clamp(280px, 55%, 600px) 1fr',
              gap: '4rem',
              alignItems: 'center',
            }}
            className="hero-grid"
          >
            {/* Text column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Callout eyebrow */}
              <FadeIn direction="left" delay={0}>
                <span className="eyebrow-ultra" style={{ opacity: 0.8 }}>
                  Exausta de remédio sem resultado real
                </span>
              </FadeIn>

              {/* H1 */}
              <FadeIn direction="left" delay={0.15}>
                <h1
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontSize: 'clamp(2.25rem, 4vw, 3.75rem)',
                    fontWeight: 700,
                    color: '#F9F6F2',
                    lineHeight: 1.1,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Seu corpo tem um sistema de cura que nenhum remédio ativa.{' '}
                  <em style={{ color: '#1A5C6B', fontStyle: 'italic' }}>
                    Eu sei ativar.
                  </em>
                </h1>
              </FadeIn>

              {/* Circuit divider */}
              <FadeIn direction="left" delay={0.25}>
                <div className="circuit-divider" style={{ maxWidth: '280px' }}>
                  <div className="circuit-node" />
                  <div className="circuit-node" />
                  <div className="circuit-node" />
                </div>
              </FadeIn>

              {/* Subtitle */}
              <FadeIn direction="left" delay={0.30}>
                <p
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                    fontWeight: 300,
                    color: '#F9F6F2',
                    opacity: 0.75,
                    fontStyle: 'italic',
                    lineHeight: 1.7,
                  }}
                >
                  Sou farmacêutica. Entendo cada molécula do remédio que você toma. E escolhi te mostrar que seu corpo sabe se curar, quando os meridianos certos são ativados.
                </p>
              </FadeIn>

              {/* CTAs */}
              <FadeIn direction="left" delay={0.45}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  <motion.a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer"
                    style={{
                      backgroundColor: '#1A5C6B',
                      color: '#F9F6F2',
                      padding: '0.875rem 2rem',
                      borderRadius: '8px 2px 8px 2px',
                      border: 'none',
                      fontFamily: 'Lato, sans-serif',
                      fontSize: '0.9375rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                    whileHover={{ backgroundColor: '#0F3D48', scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Quero falar com Tereza
                  </motion.a>

                  <motion.button
                    onClick={() => {
                      const el = document.getElementById('pain-points')
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="btn-shimmer-light"
                    style={{
                      padding: '0.875rem 1.75rem',
                      borderRadius: '2px 8px 2px 8px',
                      fontFamily: 'Lato, sans-serif',
                      fontSize: '0.9375rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                    }}
                    whileHover={{ backgroundColor: 'rgba(26,92,107,0.08)', scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Entenda como funciona
                  </motion.button>
                </div>
              </FadeIn>
            </div>

            {/* Photo column */}
            <FadeIn direction="right" delay={0.2}>
              <div style={{ position: 'relative' }}>
                {/* Decorative frame behind photo */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '-12px',
                    border: '1px solid rgba(181,129,58,0.25)',
                    borderRadius: '4px 20px 4px 20px',
                    transform: 'rotate(-3deg)',
                    zIndex: 0,
                  }}
                />
                {/* Photo container */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: '16px 4px 16px 4px',
                    overflow: 'hidden',
                    aspectRatio: '3/4',
                    maxHeight: '560px',
                    backgroundColor: '#0F3D48',
                  }}
                  className="client-photo"
                >
                  <img src="/foto-tereza.jpg" alt="Tereza Cristina Portiolli Rodrigues" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
                  <div className="image-overlay" />
                </div>
                {/* Credential badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-1.5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'rgba(26,92,107,0.9)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(181,129,58,0.3)',
                    borderRadius: '4px 12px 4px 12px',
                    padding: '0.5rem 1.25rem',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    zIndex: 2,
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Lato, sans-serif',
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#B5813A',
                      opacity: 0.9,
                      marginBottom: '0.1rem',
                    }}
                  >
                    Formação Dupla
                  </p>
                  <p
                    style={{
                      fontFamily: 'Fraunces, serif',
                      fontSize: '0.85rem',
                      color: '#F9F6F2',
                      opacity: 0.95,
                    }}
                  >
                    Farmacêutica + TFT
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Responsive overrides */}
        <style>{`
          @media (max-width: 768px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
            .hero-grid > div:last-child {
              order: -1;
              max-width: 320px;
              margin: 0 auto;
            }
            .sticky-header {
              display: none !important;
            }
          }
        `}</style>
      </section>
    </>
  )
}
