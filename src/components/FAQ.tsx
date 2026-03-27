// DECISÃO CRIATIVA: Sticky sidebar emocional segura o leitor enquanto ele
// navega nas perguntas — a pergunta "continua presente" como âncora psicológica.
// Accordion com AnimatePresence tem abertura suave. CTA intermediário
// btn-shimmer-light antecipa a decisão antes do footer. Fundo off-white
// alterna com Petróleo anterior, criando respiração visual. Respostas em
// Fraunces itálico conferem tom de autoridade técnica acolhedora.
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'

const WA_LINK = 'https://wa.me/5585992729289?text=Ol%C3%A1%20Tereza%2C%20vi%20sua%20p%C3%A1gina%20e%20quero%20saber%20mais%20sobre%20a%20sess%C3%A3o%20de%20diagn%C3%B3stico.'

const faqs = [
  {
    q: 'TFT funciona online?',
    a: 'Sim. O TFT é realizado pelo próprio paciente sob orientação precisa. A ativação dos meridianos acontece no seu próprio corpo. A rede energética não tem fronteiras geográficas. Dezenas de sessões online já produziram resultado mensurável.',
  },
  {
    q: 'Preciso parar meu tratamento médico para fazer TFT?',
    a: 'Não. O TFT é complementar, nunca substituto. Tereza tem background farmacêutico e compreende profundamente os tratamentos convencionais. O método trabalha em camadas que a medicação não alcança, sem interferir no que você já faz.',
  },
  {
    q: 'Isso entra em conflito com minha fé ou crenças religiosas?',
    a: 'Não. O TFT trabalha com a rede energética do corpo, a mesma base da acupuntura reconhecida pelo SUS. Não é prática espiritual nem religiosa. É ativação neurológica com protocolo clínico. Você não precisa acreditar em nada. Só precisa fazer os toques.',
  },
  {
    q: 'Qual o investimento em uma sessão?',
    a: 'O valor de uma sessão é compatível com serviços especializados de saúde integrativa. Pense assim: o que você já gastou em remédios, consultas e exames que não chegaram na raiz? Uma sessão de diagnóstico energético é o primeiro passo para entender se o TFT faz sentido pra você. Fale diretamente comigo para saber os valores e formas de pagamento.',
  },
  {
    q: 'Quanto tempo leva para sentir resultado?',
    a: 'Muitas pessoas sentem alívio já na primeira sessão. O protocolo SUD mede o sofrimento antes e depois: você verifica o resultado no próprio corpo. Para questões mais complexas, o processo é cumulativo e os resultados se aprofundam com o tempo.',
  },
  {
    q: 'Como funciona a primeira sessão?',
    a: 'A primeira sessão é de diagnóstico e ativação. Você conta o que está vivendo. Medimos o SUD juntas. Aplicamos o protocolo. Você sente a diferença. E saímos com clareza sobre o próximo passo.',
  },
]

const AccordionItem = ({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0]
  isOpen: boolean
  onToggle: () => void
}) => (
  <div
    style={{
      borderBottom: '1px solid rgba(26,92,107,0.12)',
    }}
  >
    <button
      onClick={onToggle}
      style={{
        width: '100%',
        textAlign: 'left',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '1.25rem 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '1rem',
      }}
    >
      <span
        style={{
          fontFamily: 'Fraunces, serif',
          fontSize: '1.05rem',
          fontWeight: 600,
          color: '#1C2B35',
          opacity: 0.9,
          lineHeight: 1.4,
          flex: 1,
        }}
      >
        {faq.q}
      </span>
      <motion.span
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          color: '#B5813A',
          fontSize: '1.25rem',
          fontWeight: 300,
          flexShrink: 0,
          marginTop: '0.125rem',
          display: 'inline-block',
        }}
      >
        +
      </motion.span>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ overflow: 'hidden' }}
        >
          <p
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: '0.95rem',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#374149',
              opacity: 0.7,
              lineHeight: 1.85,
              paddingBottom: '1.25rem',
            }}
          >
            {faq.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section
      id="faq"
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
              PERGUNTAS FREQUENTES
            </span>
            <div
              className="circuit-divider"
              style={{ maxWidth: '300px', margin: '0 auto 3rem' }}
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
            gridTemplateColumns: '1fr 1.6fr',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="faq-grid"
        >
          {/* Sticky sidebar */}
          <FadeIn direction="left" delay={0.1}>
            <div style={{ position: 'sticky', top: '8rem' }}>
              <h2
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                  fontWeight: 600,
                  color: '#1C2B35',
                  lineHeight: 1.25,
                  marginBottom: '1.25rem',
                }}
              >
                Perguntas{' '}
                <em style={{ color: '#1A5C6B', fontStyle: 'italic' }}>
                  frequentes
                </em>
              </h2>
              <div
                className="circuit-divider"
                style={{ maxWidth: '160px', marginBottom: '1.25rem' }}
              >
                <div className="circuit-node" />
                <div className="circuit-node" />
                <div className="circuit-node" />
              </div>
              <p
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: '#374149',
                  opacity: 0.6,
                  lineHeight: 1.8,
                  marginBottom: '2rem',
                }}
              >
                Se você chegou até aqui, algo dentro de você reconheceu que precisa de mais do que o que está tendo.
              </p>

              {/* CTA intermediário */}
              <div
                style={{
                  backgroundColor: 'rgba(26,92,107,0.06)',
                  border: '1px solid rgba(26,92,107,0.15)',
                  borderRadius: '4px 16px 4px 16px',
                  padding: '1.5rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    fontSize: '0.85rem',
                    color: '#374149',
                    opacity: 0.7,
                    lineHeight: 1.7,
                    marginBottom: '1rem',
                  }}
                >
                  A próxima conversa é só entre você e Tereza. Sem compromisso.
                </p>
                <motion.a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer-light"
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '4px 10px 4px 10px',
                    fontFamily: 'Lato, sans-serif',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textDecoration: 'none',
                    textAlign: 'center',
                  }}
                  whileHover={{ backgroundColor: 'rgba(26,92,107,0.06)', scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Falar com a Tereza
                </motion.a>
              </div>
            </div>
          </FadeIn>

          {/* Accordion */}
          <FadeIn direction="up" delay={0.15}>
            <div>
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  faq={faq}
                  isOpen={openIdx === i}
                  onToggle={() => setOpenIdx(openIdx === i ? null : i)}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .faq-grid > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  )
}
