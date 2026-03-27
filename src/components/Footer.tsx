import { FadeIn } from './FadeIn'

export default function Footer() {
  return (
    <footer className="section-padding" style={{ background: '#0F3D48' }}>
      <div className="container-ultra text-center">
        <FadeIn>
          <p className="text-off-white/70 text-base leading-relaxed max-w-lg mx-auto mb-6">
            Se você chegou até aqui, algo dentro de você reconheceu que precisa de mais do que o que está tendo.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-off-white/50 text-sm max-w-md mx-auto mb-10">
            Esse reconhecimento importa. A próxima conversa é só entre você e Tereza. Sem compromisso. Sem pressão. Só para entender se faz sentido caminhar juntas.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="font-display text-off-white font-bold text-3xl md:text-[2.5rem] md:leading-[1.2] mb-8">
            Seus disjuntores estão <span className="text-primary">prontos</span>. Falta religar.
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <a
            href="https://wa.me/5585992729289?text=Ol%C3%A1%20Tereza%2C%20li%20sua%20p%C3%A1gina%20e%20quero%20agendar%20minha%20sess%C3%A3o%20de%20diagn%C3%B3stico%20energ%C3%A9tico."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer bg-primary text-off-white font-bold text-[0.9375rem] tracking-[0.04em] rounded-md hover:bg-primary-dark hover:shadow-[0_8px_24px_rgba(26,92,107,0.35)] transition-all duration-300 mb-12"
          >
            Agendar sessão de diagnóstico energético
          </a>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="pt-10 border-t border-off-white/10">
            <span className="font-display text-2xl italic text-off-white/60">
              Tereza Cristina
            </span>
            <p className="text-off-white/30 text-xs mt-3">
              Terapeuta Integrativa Especialista em TFT
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
