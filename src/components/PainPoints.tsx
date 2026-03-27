// DECISÃO CRIATIVA: Fundo Petróleo Meridiano com sticky sidebar — o título fica
// ancorado enquanto as dores rolam, criando tensão narrativa. Numerais caramelo
// funcionam como alarmes numerados do sistema. Cada card com border-radius
// assimétrico e hover que acende a borda em caramelo (como um disjuntor ativando).
// Hachura diagonal reforça textura científica. Circuit dividers top/bottom.
import { FadeIn } from './FadeIn'

const pains = [
  {
    n: '01',
    text: 'Você está no trânsito, 7h da manhã. O peito aperta. A saliva não desce. O ar não entra direito. Você segura o volante com força e pensa: "Será que estou tendo um infarto ou é minha cabeça de novo?" Chega no trabalho, ninguém percebe. Você sorri. Mas por dentro o alarme não desligou.',
  },
  {
    n: '02',
    text: 'Fim de semana. Dois dias "livres". Você dorme 10 horas e acorda mais cansada do que quando deitou. Seu corpo pesa como se tivesse trabalhado a noite inteira dormindo. Olha pra casa, pros filhos, pra lista de coisas. E sente uma tristeza muda que não tem nome. Não é preguiça. Você sabe disso. Mas não consegue explicar pra ninguém.',
  },
  {
    n: '03',
    text: 'Você já fez exame de sangue, ressonância, ultrassom, eletro. Tudo normal. O médico olha pra você com aquele sorriso educado e diz: "Seus exames estão ótimos." Mas você sabe que não está. Porque dói. Dói no estômago, na lombar, na nuca. Dói sem explicação. E dói mais quando alguém diz que é "da sua cabeça".',
  },
  {
    n: '04',
    text: 'Você abre a gaveta do banheiro. Olha pras caixas de remédio. Duas, três, quatro. Toma há anos. E sabe, no fundo, que não melhorou de verdade. Só aprendeu a funcionar dopada. Vai no médico, ele renova a receita, aumenta a dose. E você não tem coragem de dizer pra ninguém: "Eu tomo tudo isso e continuo me sentindo um lixo por dentro." Essa vergonha, você carrega sozinha.',
  },
]

export const PainPoints = () => {
  return (
    <section
      id="pain-points"
      style={{
        backgroundColor: '#1A5C6B',
        backgroundImage:
          'repeating-linear-gradient(-45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 12px)',
      }}
      className="section-padding-lg"
    >
      <div className="container-ultra">
        {/* Circuit divider top */}
        <FadeIn direction="up" delay={0}>
          <div className="circuit-divider" style={{ marginBottom: '3rem' }}>
            <div className="circuit-node" />
            <div className="circuit-node" />
            <div className="circuit-node" />
          </div>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="pain-grid"
        >
          {/* Sticky sidebar */}
          <FadeIn direction="left" delay={0.1}>
            <div style={{ position: 'sticky', top: '8rem' }}>
              <span className="eyebrow-ultra" style={{ color: '#B5813A', opacity: 0.8, display: 'block', marginBottom: '1.25rem' }}>
                Você reconhece?
              </span>
              <h2
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 600,
                  color: '#F9F6F2',
                  lineHeight: 1.2,
                  marginBottom: '1.5rem',
                }}
              >
                Isso acontece{' '}
                <em style={{ color: '#B5813A', fontStyle: 'italic' }}>
                  com você?
                </em>
              </h2>
              <div className="circuit-divider" style={{ maxWidth: '200px', marginBottom: '1.5rem' }}>
                <div className="circuit-node" />
                <div className="circuit-node" />
                <div className="circuit-node" />
              </div>
              <p
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  color: '#F9F6F2',
                  opacity: 0.6,
                  fontStyle: 'italic',
                  lineHeight: 1.8,
                }}
              >
                Antes de continuar, preciso te perguntar uma coisa.
              </p>
            </div>
          </FadeIn>

          {/* Pain cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {pains.map((pain, i) => (
              <FadeIn key={pain.n} direction="up" delay={0.1 + i * 0.12}>
                <div
                  style={{
                    backgroundColor: 'rgba(28, 43, 53, 0.35)',
                    border: '1px solid rgba(249, 246, 242, 0.1)',
                    borderRadius: '16px 4px 16px 4px',
                    padding: '1.75rem',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'border-color 0.3s ease, background-color 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'rgba(181,129,58,0.3)'
                    el.style.backgroundColor = 'rgba(28, 43, 53, 0.5)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'rgba(249, 246, 242, 0.1)'
                    el.style.backgroundColor = 'rgba(28, 43, 53, 0.35)'
                  }}
                >
                  {/* Number */}
                  <span
                    style={{
                      fontFamily: 'Fraunces, serif',
                      fontSize: '0.7rem',
                      fontWeight: 400,
                      color: '#B5813A',
                      opacity: 0.9,
                      letterSpacing: '0.1em',
                      display: 'block',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {pain.n}
                  </span>
                  <p
                    style={{
                      fontFamily: 'Fraunces, serif',
                      fontSize: '1rem',
                      fontWeight: 300,
                      fontStyle: 'italic',
                      color: '#F9F6F2',
                      opacity: 0.85,
                      lineHeight: 1.75,
                    }}
                  >
                    {pain.text}
                  </p>
                </div>
              </FadeIn>
            ))}

            {/* Transition pull */}
            <FadeIn direction="up" delay={0.6}>
              <p
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: '#F9F6F2',
                  opacity: 0.6,
                  paddingTop: '0.5rem',
                  paddingLeft: '0.25rem',
                  lineHeight: 1.8,
                }}
              >
                Se alguma dessas cenas fez seu estômago apertar, o que vem a seguir foi escrito pra você.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Circuit divider bottom */}
        <FadeIn direction="up" delay={0.7}>
          <div className="circuit-divider" style={{ marginTop: '3rem' }}>
            <div className="circuit-node" />
            <div className="circuit-node" />
            <div className="circuit-node" />
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pain-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .pain-grid > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  )
}
