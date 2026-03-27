import { FadeIn } from './FadeIn'

const ArcSvg = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 32" fill="none" stroke="#B5813A" strokeWidth="2.5" strokeLinecap="round" className={className}>
    <path d="M8 24 Q24 4 40 24" />
    <path d="M13 27 Q24 11 35 27" />
    <path d="M18 30 Q24 18 30 30" />
  </svg>
)

const pillars = [
  {
    num: '01',
    title: 'Acupuntura sem agulhas',
    lines: [
      'O TFT trabalha nos mesmos meridianos que a acupuntura, reconhecida pelo SUS.',
      'Com toques precisos em pontos específicos, o sistema nervoso recebe o sinal para desativar a resposta de alarme.',
      'Você faz no próprio corpo. Sob orientação. Online ou presencial.',
    ],
  },
  {
    num: '02',
    title: 'Protocolo SUD mensurável',
    lines: [
      'Antes de cada sessão, medimos o SUD: seu nível subjetivo de sofrimento.',
      'Depois da sessão, medimos de novo.',
      'Os números mudam. O alívio é verificável. Não tem como inventar.',
    ],
  },
  {
    num: '03',
    title: 'Método cumulativo e irreversível',
    lines: [
      'Cada sessão desativa uma camada de sofrimento guardada no sistema energético.',
      'Emoções tratadas não voltam da mesma forma.',
      'O reequilíbrio se acumula. O alívio permanece.',
    ],
  },
  {
    num: '04',
    title: 'Reversão Psicológica',
    lines: [
      'O TFT identifica e corrige a Reversão Psicológica, o bloqueio inconsciente que impede o corpo de aceitar o alívio.',
      'Quando esse bloqueio é desativado, o organismo volta a responder ao processo de cura.',
    ],
  },
]

const naoPromete = [
  'Não promete cura milagrosa',
  'Não substitui seu tratamento médico atual',
  'Não promete resultado em prazo fixo',
  'Não pede que você abandone seus remédios',
]

export default function Method() {
  return (
    <section className="section-padding-lg" style={{ background: '#EBF4F6' }}>
      <div className="container-ultra">
        <FadeIn>
          <h2 className="font-display text-heading font-semibold text-3xl md:text-[2.5rem] md:leading-[1.2] text-center mb-4">
            TFT: a ciência do <span className="text-primary">reequilíbrio</span> que seu corpo já conhece
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-center text-text-main/80 text-base lg:text-[1.0625rem] max-w-lg mx-auto mb-14">
            Não é fé. Não é sugestão. É ativação neurológica com protocolo mensurável.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {pillars.map((p, i) => (
            <FadeIn key={p.num} delay={i * 0.1}>
              <div className="bg-off-white rounded-[1rem] p-10 border-l-[3px] border-primary shadow-[0_8px_32px_rgba(28,43,53,0.10),0_2px_8px_rgba(28,43,53,0.06)]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display font-bold italic text-primary text-2xl">{p.num}</span>
                  <ArcSvg className="w-6 h-4 opacity-60" />
                </div>
                <h3 className="font-display font-semibold text-heading text-xl mb-4">{p.title}</h3>
                <div className="space-y-2">
                  {p.lines.map((line, j) => (
                    <p key={j} className="text-text-main text-base leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* O que NÃO promete */}
        <FadeIn>
          <div className="max-w-lg mx-auto text-center">
            <h3 className="font-display text-heading font-semibold text-xl mb-6">
              O que Tereza <span className="text-primary">não</span> promete:
            </h3>
            <ul className="space-y-2 text-text-main text-base text-left inline-block">
              {naoPromete.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-secondary mt-1 flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <rect x="3" y="7" width="10" height="2" rx="1" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-sub italic text-text-main/70 text-sm">
              O TFT é complementar à medicina. Não concorrente.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-center mt-14 font-sub italic text-text-main/60 text-sm">
            Quer entender quem é a pessoa por trás desse método?
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
