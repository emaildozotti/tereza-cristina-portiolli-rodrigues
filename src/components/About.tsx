// DECISÃO CRIATIVA: Foto à esquerda com frame rotacionado -3deg cria a sensação
// de uma foto de álbum — pessoal, humana, não corporativa. Blockquote de virada
// em Fraunces itálico com border-left caramelo é o pico emocional da seção.
// Fundo Creme (bg-warm) contrasta com Névoa e Grafite das seções adjacentes.
// Credenciais em eyebrow opacity 0.3-0.45 — autoridade sem ostentação.
// Narrativa ANTES -> VIRADA -> HOJE estrutura a jornada de Tereza.
import { FadeIn } from './FadeIn'

const PhotoFallback = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #1A5C6B 0%, #0F3D48 60%, #1C2B35 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
    }}
  >
    <span
      style={{
        fontFamily: 'Fraunces, serif',
        fontSize: '4rem',
        color: '#F9F6F2',
        opacity: 0.9,
        lineHeight: 1,
      }}
    >
      TC
    </span>
    <span
      style={{
        fontFamily: 'Lato, sans-serif',
        fontSize: '0.65rem',
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#B5813A',
        opacity: 0.7,
      }}
    >
      Tereza Cristina
    </span>
  </div>
)

export const About = () => {
  return (
    <section
      id="about"
      style={{ backgroundColor: '#F3EDE4' }}
      className="section-padding-lg"
    >
      <div className="container-ultra">
        {/* Eyebrow */}
        <FadeIn direction="up" delay={0}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span
              className="eyebrow-ultra"
              style={{ color: '#B5813A', display: 'block', marginBottom: '1rem' }}
            >
              QUEM É TEREZA
            </span>
            <div
              className="circuit-divider"
              style={{ maxWidth: '260px', margin: '0 auto' }}
            >
              <div className="circuit-node" />
              <div className="circuit-node" />
              <div className="circuit-node" />
            </div>
          </div>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Photo column */}
          <FadeIn direction="right" delay={0.1}>
            <div style={{ position: 'relative' }}>
              {/* Decorative frame */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-14px',
                  border: '1px solid rgba(181,129,58,0.3)',
                  borderRadius: '20px 4px 20px 4px',
                  transform: 'rotate(-3deg)',
                  zIndex: 0,
                }}
              />
              {/* Photo */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: '16px 4px 16px 4px',
                  overflow: 'hidden',
                  aspectRatio: '3/4',
                  backgroundColor: '#0F3D48',
                }}
                className="client-photo"
              >
                <PhotoFallback />
                <div className="image-overlay" />
              </div>

              {/* Floating badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-1.5rem',
                  right: '-1rem',
                  backgroundColor: '#1A5C6B',
                  border: '1px solid rgba(181,129,58,0.4)',
                  borderRadius: '12px 4px 12px 4px',
                  padding: '0.75rem 1.25rem',
                  zIndex: 2,
                  maxWidth: '220px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontSize: '0.9rem',
                    fontWeight: 300,
                    color: '#F9F6F2',
                    opacity: 0.9,
                    fontStyle: 'italic',
                    lineHeight: 1.4,
                  }}
                >
                  "Ela não nega a ciência. Ela a expande."
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Text column */}
          <FadeIn direction="left" delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Headline */}
              <h2
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  fontWeight: 600,
                  color: '#1C2B35',
                  lineHeight: 1.2,
                }}
              >
                A farmacêutica que{' '}
                <em style={{ color: '#1A5C6B', fontStyle: 'italic' }}>
                  expandiu a ciência
                </em>
              </h2>

              {/* ANTES */}
              <div>
                <span
                  className="eyebrow-ultra"
                  style={{ opacity: 0.8, display: 'block', marginBottom: '0.75rem' }}
                >
                  Antes
                </span>
                <p
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    fontSize: '1rem',
                    color: '#374149',
                    opacity: 0.75,
                    lineHeight: 1.85,
                  }}
                >
                  Por anos, Tereza viveu dentro da lógica da medicina tradicional. Cada fórmula, cada mecanismo de ação, cada efeito colateral. Entendia os remédios melhor do que a maioria.
                </p>
              </div>

              {/* Blockquote — pergunta */}
              <blockquote
                style={{
                  borderLeft: '2px solid #B5813A',
                  paddingLeft: '1.5rem',
                  margin: '0.25rem 0',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontSize: '1.05rem',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    color: '#1A5C6B',
                    opacity: 0.9,
                    lineHeight: 1.85,
                  }}
                >
                  "Por que tantas pessoas tomam remédio há anos e continuam sofrendo igual?"
                </p>
              </blockquote>

              {/* VIRADA */}
              <div>
                <span
                  className="eyebrow-ultra"
                  style={{ opacity: 0.8, display: 'block', marginBottom: '0.75rem' }}
                >
                  Virada
                </span>
                <p
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    fontSize: '1rem',
                    color: '#374149',
                    opacity: 0.75,
                    lineHeight: 1.85,
                  }}
                >
                  A resposta não estava na farmacologia. Estava nos meridianos. Na ativação neurológica. Na raiz emocional que o medicamento não alcança. Tereza foi fundo. Estudou acupuntura, reconhecida pelo SUS. Aprofundou no TFT. Aprendeu a medir o sofrimento e a reduzi-lo sessão a sessão.
                </p>
              </div>

              {/* HOJE */}
              <div>
                <span
                  className="eyebrow-ultra"
                  style={{ opacity: 0.8, display: 'block', marginBottom: '0.75rem' }}
                >
                  Hoje
                </span>
                <p
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    fontSize: '1rem',
                    color: '#374149',
                    opacity: 0.75,
                    lineHeight: 1.85,
                  }}
                >
                  Tereza trabalha com quem está exausta de remédio sem resultado real. Com quem acorda já destruída. Com quem sente que há algo por dentro que a medicina ainda não nomeou. Ela não nega a ciência. Ela a expande. Com a solidez de quem estudou cada molécula. E a suavidade de quem aprendeu a cuidar da raiz.
                </p>
              </div>

              {/* Circuit divider */}
              <div className="circuit-divider" style={{ maxWidth: '200px' }}>
                <div className="circuit-node" />
                <div className="circuit-node" />
                <div className="circuit-node" />
              </div>

              {/* Credenciais */}
              <div
                style={{
                  borderTop: '1px solid rgba(26,92,107,0.15)',
                  paddingTop: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                }}
              >
                {[
                  'Farmacêutica de formação',
                  'Especialista em TFT (Thought Field Therapy)',
                  'Acupunturista reconhecida pelo SUS',
                  'Atendimento presencial e online',
                ].map((cred) => (
                  <span
                    key={cred}
                    className="eyebrow-ultra"
                    style={{ opacity: 0.45, fontSize: '0.625rem' }}
                  >
                    {cred}
                  </span>
                ))}
              </div>

              {/* Transition pull */}
              <p
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: '#374149',
                  opacity: 0.55,
                  lineHeight: 1.8,
                  marginTop: '0.5rem',
                }}
              >
                Agora, como funciona na prática?
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}
