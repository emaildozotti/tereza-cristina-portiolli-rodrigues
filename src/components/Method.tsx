// DECISÃO CRIATIVA: Timeline alternada esq/dir cria ritmo visual dinâmico —
// o leitor sente o movimento de um protocolo estruturado. Numerais romanos
// gigantes em opacity 0.1 criam profundidade sem poluir. Fundo Névoa de
// Meridiano (bg-light) para contexto clínico-científico. Box "Não prometo"
// com border-left caramelo marca o limite ético. Circuit dividers entre pillars.
// Pilar 4 (Reversão Psicológica) adicionado como card final.
import { FadeIn } from './FadeIn'

const pillars = [
  {
    numeral: 'I',
    title: 'Acupuntura sem agulhas',
    body: 'O TFT trabalha nos mesmos meridianos que a acupuntura, reconhecida pelo SUS. Com toques precisos em pontos específicos, o sistema nervoso recebe o sinal para desativar a resposta de alarme. Você faz no próprio corpo. Sob orientação. Online ou presencial.',
    reverse: false,
  },
  {
    numeral: 'II',
    title: 'Protocolo SUD mensurável',
    body: 'Antes de cada sessão, medimos o SUD: seu nível subjetivo de sofrimento. Depois da sessão, medimos de novo. Os números mudam. O alívio é verificável. Não tem como inventar.',
    reverse: true,
  },
  {
    numeral: 'III',
    title: 'Método cumulativo e irreversível',
    body: 'Cada sessão desativa uma camada de sofrimento guardada no sistema energético. Emoções tratadas não voltam da mesma forma. O reequilíbrio se acumula. O alívio permanece.',
    reverse: false,
  },
]

const naoPromete = [
  'Não promete cura milagrosa',
  'Não substitui seu tratamento médico atual',
  'Não promete resultado em prazo fixo',
  'Não pede que você abandone seus remédios',
]

export const Method = () => {
  return (
    <section
      id="method"
      style={{ backgroundColor: '#EBF4F6' }}
      className="section-padding-lg"
    >
      <div className="container-ultra">
        {/* Header */}
        <FadeIn direction="up" delay={0}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <span className="eyebrow-ultra" style={{ color: '#B5813A', display: 'block', marginBottom: '1rem' }}>
              O MÉTODO
            </span>
            <h2
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 600,
                color: '#1C2B35',
                lineHeight: 1.2,
                marginBottom: '0.75rem',
              }}
            >
              TFT: a ciência do reequilíbrio que{' '}
              <em style={{ color: '#1A5C6B', fontStyle: 'italic' }}>
                seu corpo já conhece
              </em>
            </h2>
          </div>
        </FadeIn>

        {/* Intro */}
        <FadeIn direction="up" delay={0.1}>
          <div style={{ maxWidth: '680px', margin: '0 auto 4rem', textAlign: 'center' }}>
            <div className="circuit-divider" style={{ marginBottom: '1.5rem' }}>
              <div className="circuit-node" />
              <div className="circuit-node" />
              <div className="circuit-node" />
            </div>
            <p
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize: '1.05rem',
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#374149',
                opacity: 0.7,
                lineHeight: 1.85,
              }}
            >
              Não é fé. Não é sugestão. É ativação neurológica com protocolo mensurável.
            </p>
          </div>
        </FadeIn>

        {/* Pillar timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {pillars.map((pillar, i) => (
            <div key={pillar.numeral}>
              <FadeIn direction="up" delay={0.1 + i * 0.15}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center',
                    padding: '3rem 0',
                  }}
                  className={`method-row ${pillar.reverse ? 'method-row-reverse' : ''}`}
                >
                  {/* Content side */}
                  <div style={{ order: pillar.reverse ? 2 : 1 }}>
                    <div style={{ position: 'relative' }}>
                      {/* Numeral decorativo */}
                      <span
                        style={{
                          position: 'absolute',
                          top: '-1.5rem',
                          left: '-1rem',
                          fontFamily: 'Fraunces, serif',
                          fontSize: '8rem',
                          lineHeight: 1,
                          color: '#1A5C6B',
                          opacity: 0.1,
                          pointerEvents: 'none',
                          userSelect: 'none',
                        }}
                      >
                        {pillar.numeral}
                      </span>
                      <div style={{ position: 'relative', zIndex: 1 }}>
                        <h3
                          style={{
                            fontFamily: 'Fraunces, serif',
                            fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                            fontWeight: 600,
                            color: '#1C2B35',
                            lineHeight: 1.25,
                            marginBottom: '1rem',
                          }}
                        >
                          {pillar.title}
                        </h3>
                        <p
                          style={{
                            fontFamily: 'Lato, sans-serif',
                            fontSize: '0.975rem',
                            color: '#374149',
                            opacity: 0.75,
                            lineHeight: 1.85,
                          }}
                        >
                          {pillar.body}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Visual side */}
                  <div
                    style={{
                      order: pillar.reverse ? 1 : 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        maxWidth: '320px',
                        aspectRatio: '4/3',
                        backgroundColor: '#1A5C6B',
                        borderRadius: pillar.reverse ? '4px 16px 4px 16px' : '16px 4px 16px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Fraunces, serif',
                          fontSize: '5rem',
                          color: '#F9F6F2',
                          opacity: 0.15,
                          userSelect: 'none',
                        }}
                      >
                        {pillar.numeral}
                      </span>
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundImage:
                            'repeating-linear-gradient(-45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 12px)',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '1.25rem',
                          left: '1.25rem',
                          right: '1.25rem',
                        }}
                      >
                        <div className="circuit-divider">
                          <div className="circuit-node" />
                          <div className="circuit-node" />
                          <div className="circuit-node" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Circuit divider between pillars */}
              {i < pillars.length - 1 && (
                <FadeIn direction="up" delay={0.2 + i * 0.15}>
                  <div className="circuit-divider" style={{ opacity: 0.5 }}>
                    <div className="circuit-node" />
                    <div className="circuit-node" />
                    <div className="circuit-node" />
                  </div>
                </FadeIn>
              )}
            </div>
          ))}
        </div>

        {/* Pilar 4 — Reversão Psicológica (card especial) */}
        <FadeIn direction="up" delay={0.55}>
          <div
            style={{
              marginTop: '2rem',
              backgroundColor: 'rgba(26,92,107,0.08)',
              borderLeft: '3px solid #1A5C6B',
              borderRadius: '4px 16px 4px 16px',
              padding: '2rem 2.5rem',
              maxWidth: '720px',
              margin: '2rem auto 0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  color: '#1A5C6B',
                  opacity: 0.6,
                }}
              >
                IV
              </span>
              <h3
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#1C2B35',
                }}
              >
                Reversão Psicológica
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: '0.975rem',
                color: '#374149',
                opacity: 0.75,
                lineHeight: 1.85,
              }}
            >
              O TFT identifica e corrige a Reversão Psicológica, o bloqueio inconsciente que impede o corpo de aceitar o alívio. Quando esse bloqueio é desativado, o organismo volta a responder ao processo de cura.
            </p>
          </div>
        </FadeIn>

        {/* "Não prometo" box */}
        <FadeIn direction="up" delay={0.6}>
          <div
            style={{
              marginTop: '3rem',
              backgroundColor: 'rgba(26,92,107,0.06)',
              borderLeft: '2px solid #B5813A',
              borderRadius: '4px 16px 4px 16px',
              padding: '1.75rem 2rem',
              maxWidth: '720px',
              margin: '3rem auto 0',
            }}
          >
            <p
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#B5813A',
                opacity: 0.8,
                marginBottom: '1rem',
              }}
            >
              O que Tereza não promete:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {naoPromete.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: '#B5813A', fontSize: '0.8rem', flexShrink: 0, marginTop: '0.15rem' }}>
                    —
                  </span>
                  <p
                    style={{
                      fontFamily: 'Lato, sans-serif',
                      fontSize: '0.95rem',
                      color: '#374149',
                      opacity: 0.75,
                      lineHeight: 1.7,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize: '0.95rem',
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#1A5C6B',
                opacity: 0.85,
                lineHeight: 1.85,
                marginTop: '1rem',
              }}
            >
              O TFT é complementar à medicina. Não concorrente.
            </p>
          </div>
        </FadeIn>

        {/* Transition pull */}
        <FadeIn direction="up" delay={0.7}>
          <p
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: '1rem',
              fontStyle: 'italic',
              fontWeight: 300,
              color: '#374149',
              opacity: 0.55,
              textAlign: 'center',
              marginTop: '3rem',
              lineHeight: 1.8,
            }}
          >
            Quer entender quem é a pessoa por trás desse método?
          </p>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .method-row {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .method-row > div {
            order: unset !important;
          }
          .method-row-reverse > div:last-child {
            order: -1 !important;
          }
        }
      `}</style>
    </section>
  )
}
