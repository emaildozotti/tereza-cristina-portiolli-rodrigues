import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FadeIn } from './FadeIn'

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

function FaqItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-text-main/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
      >
        <span className="font-display font-semibold text-heading text-lg pr-4">{faq.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 text-primary"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 8l5 5 5-5" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-text-main text-base leading-relaxed pb-6">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding" style={{ background: '#F9F6F2' }}>
      <div className="container-ultra max-w-2xl">
        <FadeIn>
          <h2 className="font-display text-heading font-semibold text-3xl md:text-[2.5rem] md:leading-[1.2] text-center mb-14">
            Perguntas frequentes
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div>
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
