// DECISÃO CRIATIVA: 3 passos em cards conectados por linha horizontal gradient
// petróleo-to-caramelo — fluxo visual de jornada. Number circles 2.5rem em
// primary bg. Cards com asymmetric radius. Fundo off-white para respiração
// visual. Circuit dividers como separação elegante.
import { motion } from 'motion/react'
import { FadeIn } from './FadeIn'

const WA_LINK = 'https://wa.me/5585992729289?text=Ol%C3%A1%20Tereza%2C%20vi%20sua%20p%C3%A1gina%20e%20quero%20saber%20mais%20sobre%20a%20sess%C3%A3o%20de%20diagn%C3%B3stico.'

const steps = [
  {
    n: '01',
    title: 'Sessão de Diagnóstico Energético',
    body: 'Você conta o que está vivendo. Tereza mapeia os alarmes ativos no seu sistema. Medimos o SUD juntas: qual o seu nível de sofrimento hoje, de 0 a 10.',
  },
  {
    n: '02',
    title: 'Ativação dos Meridianos',
    body: 'Com o protocolo TFT, Tereza orienta os toques nos pontos específicos do seu corpo. Você faz em si mesma, guiada com precisão. Não precisa de presença física. O reequilíbrio acontece.',
  },
  {
    n: '03',
    title: 'Medição e Continuidade',
    body: 'Medimos o SUD novamente ao final. Você sente a diferença no corpo antes de sair da sessão. Um plano de continuidade é desenhado para consolidar o reequilíbrio.',
  },
]

export const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      style={{ backgroundColor: '#F9F6F2' }}
      className="section-padding-lg"
    >
      <div className="container-ultra">
        {/* Header */}
        <FadeIn direction="up" delay={0}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <span
              className="eyebrow-ultra"
              style={{ color: '#B5813A', display: 'block', marginBottom: '1rem' }}
            >
              COMO FUNCIONA
            </span>
            <h2
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 600,
                color: '#1C2B35',
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}
            >
              3 passos para religar seus{' '}
              <em style={{ color: '#1A5C6B', fontStyle: 'italic' }}>
                disjuntores emocionais
              </em>
            </h2>
            <div
              className="circuit-divider"
              style={{ maxWidth: '300px', margin: '1.5rem auto 3rem' }}
            >
              <div className="circuit-node" />
              <div className="circuit-node" />
              <div className="circuit-node" />
            </div>
          </div>
        </FadeIn>

        {/* Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            marginBottom: '4rem',
            position: 'relative',
          }}
          className="steps-grid"
        >
          {/* Connector line */}
          <div
            style={{
              position: 'absolute',
              top: '3rem',
              left: 'calc(16.66% + 1rem)',
              right: 'calc(16.66% + 1rem)',
              height: '1px',
              background: 'linear-gradient(90deg, #1A5C6B, #B5813A, #1A5C6B)',
              opacity: 0.3,
              pointerEvents: 'none',
            }}
            className="steps-connector"
          />

          {steps.map((step, i) => (
            <FadeIn key={step.n} direction="up" delay={0.1 + i * 0.15}>
              <div
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid rgba(26,92,107,0.1)',
                  borderRadius: '16px 4px 16px 4px',
                  padding: '2rem 1.75rem',
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                {/* Step number */}
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    backgroundColor: '#1A5C6B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.25rem',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Lato, sans-serif',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: '#F9F6F2',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {step.n}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: '#1C2B35',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    fontSize: '0.925rem',
                    color: '#374149',
                    opacity: 0.7,
                    lineHeight: 1.8,
                    flex: 1,
                  }}
                >
                  {step.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA secundário */}
        <FadeIn direction="up" delay={0.6}>
          <div style={{ textAlign: 'center' }}>
            <div
              className="circuit-divider"
              style={{ maxWidth: '300px', margin: '0 auto 2rem' }}
            >
              <div className="circuit-node" />
              <div className="circuit-node" />
              <div className="circuit-node" />
            </div>
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer-light"
              style={{
                display: 'inline-block',
                padding: '0.875rem 2rem',
                borderRadius: '2px 8px 2px 8px',
                fontFamily: 'Lato, sans-serif',
                fontSize: '0.9375rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textDecoration: 'none',
              }}
              whileHover={{ backgroundColor: 'rgba(26,92,107,0.06)', scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Quero agendar minha sessão de diagnóstico
            </motion.a>

            {/* Transition pull */}
            <p
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize: '1rem',
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#374149',
                opacity: 0.55,
                marginTop: '2rem',
                lineHeight: 1.8,
              }}
            >
              E o que acontece quando os disjuntores religam? Outras pessoas já sentiram.
            </p>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
          .steps-connector {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
