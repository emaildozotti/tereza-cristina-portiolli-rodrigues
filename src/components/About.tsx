import { FadeIn } from './FadeIn'

const ArcSvg = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 32" fill="none" stroke="#B5813A" strokeWidth="2.5" strokeLinecap="round" className={className}>
    <path d="M8 24 Q24 4 40 24" />
    <path d="M13 27 Q24 11 35 27" />
    <path d="M18 30 Q24 18 30 30" />
  </svg>
)

export default function About() {
  return (
    <section className="section-padding-lg" style={{ background: '#1C2B35' }}>
      <div className="container-ultra">
        <FadeIn>
          <h2 className="font-display text-off-white font-semibold text-3xl md:text-[2.5rem] md:leading-[1.2] text-center mb-16">
            A farmacêutica que <span className="text-primary">expandiu a ciência</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text - appears first on mobile */}
          <div className="order-1">
            <FadeIn delay={0.1}>
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-secondary mb-3 block">Antes</span>
                <p className="text-off-white/85 text-base leading-relaxed mb-3">
                  Por anos, Tereza viveu dentro da lógica da medicina tradicional.
                  Cada fórmula, cada mecanismo de ação, cada efeito colateral.
                  Entendia os remédios melhor do que a maioria.
                </p>
                <p className="text-off-white/85 text-base leading-relaxed">
                  Mas a pergunta não saía da cabeça:
                </p>
                <blockquote className="border-l-2 border-primary pl-4 mt-3">
                  <p className="font-sub italic text-secondary/90 text-base leading-relaxed">
                    "Por que tantas pessoas tomam remédio há anos e continuam sofrendo igual?"
                  </p>
                </blockquote>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-secondary mb-3 block">Virada</span>
                <p className="text-off-white/85 text-base leading-relaxed mb-3">
                  A resposta não estava na farmacologia.
                  Estava nos meridianos. Na ativação neurológica. Na raiz emocional que o medicamento não alcança.
                </p>
                <p className="text-off-white/85 text-base leading-relaxed">
                  Tereza foi fundo. Estudou acupuntura, reconhecida pelo SUS.
                  Aprofundou no TFT. Aprendeu a medir o sofrimento e a reduzi-lo sessão a sessão.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-secondary mb-3 block">Hoje</span>
                <p className="text-off-white/85 text-base leading-relaxed mb-3">
                  Tereza trabalha com quem está exausta de remédio sem resultado real.
                  Com quem acorda já destruída.
                  Com quem sente que há algo por dentro que a medicina ainda não nomeou.
                </p>
                <p className="text-off-white/85 text-base leading-relaxed">
                  Ela não nega a ciência. Ela a expande.
                  Com a solidez de quem estudou cada molécula. E a <strong className="text-off-white">suavidade de quem aprendeu a cuidar da raiz</strong>.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Photo - appears second on mobile */}
          <FadeIn delay={0.15} className="order-2 flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop&q=80"
                alt="Tereza Cristina Portiolli Rodrigues"
                className="w-64 md:w-72 lg:w-80 rounded-[1.25rem] object-cover aspect-[3/4] lg:translate-y-4"
                style={{
                  boxShadow: '0 20px 60px rgba(26,92,107,0.18), 0 4px 16px rgba(26,92,107,0.10)',
                }}
              />
              <ArcSvg className="absolute -bottom-4 -right-4 w-10 h-7 opacity-80" />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <p className="text-center mt-14 font-sub italic text-off-white/50 text-sm">
            Agora, como funciona na prática?
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
