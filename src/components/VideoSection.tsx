import { FadeIn } from './FadeIn'

export default function VideoSection() {
  return (
    <section className="section-padding" style={{ background: '#EBF4F6' }}>
      <div className="container-ultra flex flex-col items-center text-center">
        <FadeIn>
          <p className="text-text-main text-base lg:text-[1.0625rem] leading-relaxed max-w-lg mb-10">
            Em menos de 3 minutos, Tereza explica por que o seu corpo reage diferente com o TFT, e o que acontece nos seus meridianos durante uma sessão.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div
            className="relative rounded-[1.25rem] ring-1 ring-primary shadow-2xl overflow-hidden mx-auto"
            style={{ maxWidth: '300px', aspectRatio: '9/16' }}
          >
            <div className="absolute inset-0 bg-dark/80 flex flex-col items-center justify-center gap-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-off-white/70">
                <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2" />
                <path d="M20 16l14 8-14 8V16z" fill="currentColor" />
              </svg>
              <span className="text-off-white/50 text-sm font-bold uppercase tracking-widest">Vídeo em breve</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-10 font-sub italic text-text-main/70 text-base max-w-md">
            "Seu corpo não precisa acreditar para reagir. Precisa de ativação."
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="mt-8 font-sub italic text-text-main/60 text-sm">
            Agora que você entendeu o mecanismo, deixa eu te explicar como isso funciona na prática.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
