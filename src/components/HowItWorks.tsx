import { FadeIn } from './FadeIn'

const steps = [
  {
    num: '1',
    title: 'Sessão de Diagnóstico Energético',
    lines: [
      'Você conta o que está vivendo. Tereza mapeia os alarmes ativos no seu sistema.',
      'Medimos o SUD juntas: qual o seu nível de sofrimento hoje, de 0 a 10.',
    ],
  },
  {
    num: '2',
    title: 'Ativação dos Meridianos',
    lines: [
      'Com o protocolo TFT, Tereza orienta os toques nos pontos específicos do seu corpo.',
      'Você faz em si mesma, guiada com precisão.',
      'Não precisa de presença física. O reequilíbrio acontece.',
    ],
  },
  {
    num: '3',
    title: 'Medição e Continuidade',
    lines: [
      'Medimos o SUD novamente ao final.',
      'Você sente a diferença no corpo antes de sair da sessão.',
      'Um plano de continuidade é desenhado para consolidar o reequilíbrio.',
    ],
  },
]

export default function HowItWorks() {
  return (
    <section className="section-padding-lg" style={{ background: '#F9F6F2' }}>
      <div className="container-ultra">
        <FadeIn>
          <h2 className="font-display text-heading font-semibold text-3xl md:text-[2.5rem] md:leading-[1.2] text-center mb-16">
            3 passos para religar seus <span className="text-primary">disjuntores</span> emocionais
          </h2>
        </FadeIn>

        <div className="space-y-12 max-w-2xl mx-auto">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.12}>
              <div className="relative pl-24 md:pl-32">
                <span
                  className="absolute left-0 top-0 font-display font-bold text-primary/15 select-none"
                  style={{ fontSize: '120px', lineHeight: '0.85' }}
                >
                  {step.num}
                </span>
                <h3 className="font-display font-semibold text-heading text-xl mb-4 relative z-10">
                  {step.title}
                </h3>
                <div className="space-y-2 relative z-10">
                  {step.lines.map((line, j) => (
                    <p key={j} className="text-text-main text-base leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="text-center mt-14 font-sub italic text-text-main/60 text-sm max-w-md mx-auto">
            E o que acontece quando os disjuntores religam? Outras pessoas já sentiram.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
