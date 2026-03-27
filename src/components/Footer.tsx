// DECISÃO CRIATIVA: Footer em dois momentos distintos — CTA section emocional
// com headline split captura quem ainda hesita, e bottom bar minimalista com
// opacity whisper 0.25 encerra sem poluição visual. Aurora suave de 2 blobs
// centra o CTA. Fundo Abismo Clínico + hachura diagonal. Border-top em
// caramelo opacity 0.15 separa o chamado da assinatura. Circuit divider
// como assinatura final da identidade.
import { motion } from 'motion/react'
import { FadeIn } from './FadeIn'

const WA_LINK = 'https://wa.me/5585992729289?text=Ol%C3%A1%20Tereza%2C%20li%20sua%20p%C3%A1gina%20e%20quero%20agendar%20minha%20sess%C3%A3o%20de%20diagn%C3%B3stico%20energ%C3%A9tico.'

export const Footer = () => {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: '#0F3D48',
        backgroundImage:
          'repeating-linear-gradient(-45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 12px)',
      }}
    >
      {/* CTA Section */}
      <section className="section-padding-lg" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Aurora blobs */}
        <div
          className="blur-orb"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            height: '60%',
            background: 'radial-gradient(circle, rgba(26,92,107,0.30) 0%, transparent 70%)',
            animation: 'aurora-1 18s ease-in-out infinite',
          }}
        />
        <div
          className="blur-orb"
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            width: '35%',
            height: '35%',
            background: 'radial-gradient(circle, rgba(181,129,58,0.20) 0%, transparent 70%)',
            animation: 'aurora-2 22s ease-in-out infinite',
          }}
        />

        <div
          className="container-ultra"
          style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
        >
          {/* Eyebrow */}
          <FadeIn direction="up" delay={0}>
            <span
              className="eyebrow-ultra"
              style={{ display: 'block', marginBottom: '1.5rem', opacity: 0.8 }}
            >
              Mas se continuar adiando, o alarme continua ligado
            </span>
          </FadeIn>

          {/* Headline */}
          <FadeIn direction="up" delay={0.1}>
            <h2
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#F9F6F2',
                lineHeight: 1.2,
                marginBottom: '1.5rem',
                maxWidth: '760px',
                margin: '0 auto 1.5rem',
              }}
            >
              Seu sistema de cura está pronto.{' '}
              <em style={{ color: '#B5813A', fontStyle: 'italic' }}>
                Falta ativar.
              </em>
            </h2>
          </FadeIn>

          {/* Circuit divider */}
          <FadeIn direction="up" delay={0.2}>
            <div
              className="circuit-divider"
              style={{ maxWidth: '260px', margin: '0 auto 1.5rem' }}
            >
              <div className="circuit-node" />
              <div className="circuit-node" />
              <div className="circuit-node" />
            </div>
          </FadeIn>

          {/* Subtítulo */}
          <FadeIn direction="up" delay={0.25}>
            <p
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#F9F6F2',
                opacity: 0.65,
                maxWidth: '520px',
                margin: '0 auto 2.5rem',
                lineHeight: 1.85,
              }}
            >
              Você não precisa resolver tudo hoje. Não precisa ter certeza. Não precisa "estar pronta". A próxima conversa é entre você e Tereza. Só pra entender se faz sentido. Se fizer, você vai sentir. Se não fizer, você não perde nada.
            </p>
          </FadeIn>

          {/* CTA Button */}
          <FadeIn direction="up" delay={0.35}>
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer"
              style={{
                display: 'inline-block',
                backgroundColor: '#1A5C6B',
                color: '#F9F6F2',
                padding: '1rem 2.5rem',
                borderRadius: '8px 2px 8px 2px',
                fontFamily: 'Lato, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                border: 'none',
              }}
              whileHover={{ backgroundColor: '#0F3D48', scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Falar com Tereza no WhatsApp
            </motion.a>
          </FadeIn>

          {/* Supporting text */}
          <FadeIn direction="up" delay={0.45}>
            <p
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: '0.75rem',
                color: '#F9F6F2',
                opacity: 0.4,
                marginTop: '1rem',
                letterSpacing: '0.04em',
              }}
            >
              Conversa pelo WhatsApp · Sem compromisso
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(181,129,58,0.15)',
          padding: '1.5rem 0',
        }}
      >
        <div
          className="container-ultra"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          {/* Name + specialty */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            <span
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize: '0.9rem',
                fontStyle: 'italic',
                color: '#F9F6F2',
                opacity: 0.25,
              }}
            >
              Tereza Cristina Portiolli Rodrigues
            </span>
            <span
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#B5813A',
                opacity: 0.25,
              }}
            >
              Terapeuta Integrativa Especialista em TFT
            </span>
          </div>

          {/* CRF placeholder */}
          <span
            style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '0.65rem',
              color: '#F9F6F2',
              opacity: 0.25,
              letterSpacing: '0.08em',
            }}
          >
            CRF [NÚMERO]
          </span>
        </div>
      </div>
    </footer>
  )
}
