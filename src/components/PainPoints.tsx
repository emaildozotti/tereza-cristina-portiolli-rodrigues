import { FadeIn } from './FadeIn'

const pains = [
  {
    num: '01',
    label: 'Ansiedade',
    quote: 'Meu peito aperta do nada. Minha cabeça nunca desliga. Acordo já cansada sem saber por quê.',
  },
  {
    num: '02',
    label: 'Burnout',
    quote: 'Perdi a energia pra tudo. Trabalho me consome. Durmo, mas não descanso.',
  },
  {
    num: '03',
    label: 'Dores Psicossomáticas',
    quote: 'Meu corpo dói e nenhum exame acha nada. O médico diz que estou bem. Mas eu sei que não estou.',
  },
  {
    num: '04',
    label: 'Dependência Silenciosa',
    quote: 'Tomo remédio há anos e tenho vergonha de admitir que não melhorei de verdade. Só aprendi a funcionar dopada.',
  },
]

export default function PainPoints() {
  return (
    <section id="pain-points" className="section-padding-lg" style={{ background: '#F3EDE4' }}>
      <div className="container-ultra">
        <FadeIn>
          <p className="text-center text-text-main/60 text-sm tracking-widest uppercase mb-6">
            Mas antes de continuar, você precisa reconhecer algo.
          </p>
          <h2 className="font-display text-heading font-semibold text-3xl md:text-[2.5rem] md:leading-[1.2] text-center mb-16">
            Você reconhece alguma dessas <span className="text-primary">situações</span>?
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {pains.map((pain, i) => (
            <FadeIn key={pain.num} delay={i * 0.1}>
              <div className="relative bg-off-white rounded-[1rem] p-10 shadow-[0_8px_32px_rgba(28,43,53,0.10),0_2px_8px_rgba(28,43,53,0.06)]">
                <span className="absolute top-4 right-6 font-display text-6xl font-bold text-primary/10 select-none">
                  {pain.num}
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-secondary mb-3 block">
                  {pain.label}
                </span>
                <p className="font-sub italic text-text-main text-base leading-relaxed">
                  "{pain.quote}"
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="text-center mt-14 font-sub italic text-text-main/70 text-base max-w-md mx-auto">
            Se você se reconheceu em alguma dessas frases, o que você vai ler a seguir foi feito pra você.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
