import { FadeIn } from './FadeIn'

const pillars = [
  {
    numeral: 'I',
    title: 'Acupuntura sem agulhas',
    body: 'Os mesmos meridianos que a acupuntura usa (reconhecida pelo SUS) podem ser ativados sem nenhuma agulha. Com toques precisos em pontos específicos, o seu sistema nervoso recebe um sinal claro: "pode desligar o alarme." Você faz no seu próprio corpo, guiada por Tereza. Online ou presencial.',
  },
  {
    numeral: 'II',
    title: 'Protocolo SUD, seu alívio em números',
    body: 'Antes da sessão, medimos o SUD: o seu nível subjetivo de sofrimento, de 0 a 10. Depois da sessão, medimos de novo. Você vê o número cair. Sente no corpo. Não precisa acreditar na minha palavra. O próprio corpo confirma.',
  },
  {
    numeral: 'III',
    title: 'Método cumulativo e irreversível',
    body: 'Cada sessão desativa uma camada de sofrimento guardada no seu sistema energético. Emoções que foram tratadas não voltam da mesma forma. O reequilíbrio se acumula, sessão a sessão. O alívio permanece.',
  },
  {
    numeral: 'IV',
    title: 'Reversão Psicológica',
    body: 'Existe um bloqueio que o TFT identifica e corrige: a Reversão Psicológica. É quando o seu corpo, de forma inconsciente, impede o próprio alívio. Quando esse bloqueio é desativado, o organismo volta a responder ao processo de cura.',
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
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 600,
                color: '#1C2B35',
                lineHeight: 1.15,
                marginBottom: '1rem',
              }}
            >
              Por que o TFT faz o que o remédio{' '}
              <em style={{ color: '#1A5C6B', fontStyle: 'italic' }}>
                sozinho não consegue
              </em>
            </h2>
          </div>
        </FadeIn>

        {/* Intro */}
        <FadeIn direction="up" delay={0.1}>
          <div style={{ maxWidth: '680px', margin: '0 auto 4rem', textAlign: 'center' }}>
            <div className="circuit-divider" style={{ marginBottom: '1.5rem', opacity: 0.6 }}>
              <div className="circuit-node" />
            </div>
            <p
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize: '1.1rem',
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#374149',
                opacity: 0.8,
                lineHeight: 1.85,
              }}
            >
              Não é fé. Não é sugestão. É o seu próprio sistema nervoso respondendo a toques precisos.
            </p>
          </div>
        </FadeIn>

        {/* Pillar Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ 
            marginTop: '2rem' 
          }}
        >
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.numeral} direction="up" delay={0.1 + i * 0.1}>
              <div 
                className="method-card-hover"
                style={{
                  position: 'relative',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                  boxShadow: '0 12px 40px rgba(28,43,53,0.04)',
                  border: '1px solid rgba(181,129,58,0.15)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                {/* Giant Numeral background */}
                <span style={{
                  position: 'absolute',
                  top: '-1rem',
                  right: '-1rem',
                  fontFamily: 'Fraunces, serif',
                  fontSize: '12rem',
                  color: '#1A5C6B',
                  opacity: 0.03,
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none'
                }}>
                  {pillar.numeral}
                </span>
                
                <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span style={{ 
                      fontFamily: 'Fraunces, serif', 
                      fontSize: '1.2rem', 
                      color: '#B5813A',
                      fontStyle: 'italic',
                      fontWeight: 600,
                      lineHeight: 1.2,
                      marginTop: '0.1rem'
                    }}>
                      {pillar.numeral}.
                    </span>
                    <h3 style={{
                      fontFamily: 'Fraunces, serif',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: '#1C2B35',
                      lineHeight: 1.3
                    }}>
                      {pillar.title}
                    </h3>
                  </div>
                  
                  <p style={{
                    fontFamily: 'Lato, sans-serif',
                    fontSize: '0.925rem',
                    color: '#374149',
                    opacity: 0.85,
                    lineHeight: 1.6,
                    marginBottom: '0'
                  }}>
                    {pillar.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* "Não prometo" box */}
        <FadeIn direction="up" delay={0.6}>
          <div
            style={{
              marginTop: '5rem',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 12px 40px rgba(28,43,53,0.05)',
              borderBottom: '4px solid #B5813A',
              borderRadius: '16px',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              maxWidth: '850px',
              margin: '5rem auto 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span style={{ 
                fontFamily: 'Lato, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#1A5C6B',
                opacity: 0.8,
                display: 'block',
                marginBottom: '0.5rem'
              }}>
                Limites Éticos
              </span>
              <h3 style={{
                fontFamily: 'Fraunces, serif',
                fontSize: '1.75rem',
                fontWeight: 600,
                color: '#1C2B35'
              }}>
                O que Tereza <em style={{ color: '#B5813A', fontStyle: 'italic' }}>não</em> promete
              </h3>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1rem', 
              width: '100%' 
            }}>
              {naoPromete.map((item, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '1rem', 
                  backgroundColor: '#F9F6F2', 
                  padding: '1.25rem 1.5rem', 
                  borderRadius: '12px',
                  border: '1px solid rgba(28,43,53,0.03)'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D15555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.1rem' }}>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                  <p style={{ 
                    fontFamily: 'Lato, sans-serif', 
                    fontSize: '0.95rem', 
                    color: '#374149', 
                    fontWeight: 500,
                    lineHeight: 1.5
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '2.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(28,43,53,0.08)',
              width: '100%',
              textAlign: 'center'
            }}>
              <p style={{
                fontFamily: 'Fraunces, serif',
                fontSize: '1.05rem',
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#1A5C6B',
                lineHeight: 1.85,
              }}>
                "O TFT é complementar à medicina. Não concorrente. Tereza entende isso melhor do que ninguém, porque viveu dos dois lados."
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Transition pull */}
        <FadeIn direction="up" delay={0.7}>
          <p
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: '1.1rem',
              fontStyle: 'italic',
              fontWeight: 300,
              color: '#374149',
              opacity: 0.6,
              textAlign: 'center',
              marginTop: '4rem',
              lineHeight: 1.8,
            }}
          >
            Mas quem é essa mulher que escolheu sair da farmácia pra religar os disjuntores dos outros?
          </p>
        </FadeIn>
      </div>

      <style>{`
        .method-card-hover {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .method-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(28,43,53,0.08);
        }
      `}</style>
    </section>
  )
}
