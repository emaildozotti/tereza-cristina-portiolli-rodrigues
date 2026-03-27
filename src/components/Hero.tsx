import { useState, useEffect } from 'react'
import { FadeIn } from './FadeIn'

const ArcSvg = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 32" fill="none" stroke="#B5813A" strokeWidth="2.5" strokeLinecap="round" className={className}>
    <path d="M8 24 Q24 4 40 24" />
    <path d="M13 27 Q24 11 35 27" />
    <path d="M18 30 Q24 18 30 30" />
  </svg>
)

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToPain = () => {
    document.getElementById('pain-points')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Desktop sticky header */}
      <header
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-8 py-4 transition-all duration-500 ${
          scrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <span className="font-display text-lg font-semibold text-off-white tracking-wide">
          Tereza Cristina
        </span>
        <a
          href="https://wa.me/5585992729289?text=Ol%C3%A1%20Tereza%2C%20vi%20sua%20p%C3%A1gina%20e%20quero%20saber%20mais%20sobre%20a%20sess%C3%A3o%20de%20diagn%C3%B3stico."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer bg-primary text-off-white text-sm font-bold tracking-wider rounded-md hover:bg-primary-dark hover:shadow-[0_8px_24px_rgba(26,92,107,0.35)] transition-all duration-300"
          style={{ padding: '0.625rem 1.5rem' }}
        >
          Agendar sessão
        </a>
      </header>

      <section className="relative min-h-screen bg-dark overflow-hidden flex items-center">
        {/* Aurora blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-20 -right-20 rounded-full mix-blend-screen blur-3xl"
            style={{
              width: '55vw', height: '55vw',
              background: 'radial-gradient(circle, rgba(26,92,107,0.40) 0%, transparent 70%)',
              animation: 'aurora-1 18s ease-in-out infinite',
            }}
          />
          <div
            className="absolute -bottom-20 -left-20 rounded-full mix-blend-screen blur-3xl"
            style={{
              width: '40vw', height: '40vw',
              background: 'radial-gradient(circle, rgba(181,129,58,0.28) 0%, transparent 70%)',
              animation: 'aurora-2 22s ease-in-out infinite',
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen blur-3xl"
            style={{
              width: '30vw', height: '30vw',
              background: 'radial-gradient(circle, rgba(249,246,242,0.18) 0%, transparent 70%)',
              animation: 'aurora-3 15s ease-in-out infinite',
            }}
          />
        </div>

        <div className="container-ultra relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-32 md:py-40">
          {/* Copy side */}
          <div className="order-2 lg:order-1">
            <FadeIn delay={0}>
              <div className="flex items-center gap-2 mb-6">
                <ArcSvg className="w-5 h-3.5" />
                <span className="text-secondary text-xs font-bold uppercase tracking-[0.12em]">
                  Para quem está exausta de remédio e sem melhora real
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="font-display text-off-white font-bold leading-[1.15] text-4xl md:text-5xl lg:text-[3.75rem] lg:leading-[1.1] mb-6">
                O seu corpo tem os <span className="text-primary">disjuntores certos</span>. Só precisa religar.
              </h1>
            </FadeIn>

            <FadeIn delay={0.30}>
              <p className="text-off-white/80 text-base lg:text-[1.0625rem] leading-relaxed mb-8 max-w-lg">
                TFT: a abordagem que trabalha nos meridianos do corpo para desativar os alarmes da ansiedade, do burnout e da dor que nenhum exame explica. Com base científica, resultado mensurável e acolhimento de quem entende cada molécula do remédio que você toma.
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="https://wa.me/5585992729289?text=Ol%C3%A1%20Tereza%2C%20vi%20sua%20p%C3%A1gina%20e%20quero%20saber%20mais%20sobre%20a%20sess%C3%A3o%20de%20diagn%C3%B3stico."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer bg-primary text-off-white font-bold text-[0.9375rem] tracking-[0.04em] rounded-md hover:bg-primary-dark hover:shadow-[0_8px_24px_rgba(26,92,107,0.35)] transition-all duration-300"
                >
                  Quero agendar minha sessão de diagnóstico
                </a>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-secondary text-xs font-bold tracking-wide"
                  style={{ background: 'rgba(181,129,58,0.18)', border: '1px solid rgba(181,129,58,0.4)' }}
                >
                  Farmacêutica + TFT
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Photo side */}
          <FadeIn delay={0.15} className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&h=1000&fit=crop&q=80"
                alt="Tereza Cristina Portiolli Rodrigues"
                className="relative z-10 w-64 md:w-72 lg:w-80 rounded-[1.25rem] object-cover aspect-[4/5]"
                style={{
                  border: '1px solid rgba(26,92,107,0.5)',
                  filter: 'drop-shadow(0 20px 60px rgba(26,92,107,0.18))',
                }}
              />
              <ArcSvg className="absolute -bottom-4 -right-4 w-10 h-7 z-20 opacity-80" />
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator - desktop only */}
        <button
          onClick={scrollToPain}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-off-white/50 hover:text-off-white/80 transition-colors cursor-pointer"
          aria-label="Rolar para baixo"
        >
          <span className="text-xs tracking-widest uppercase">Rolar</span>
          <svg width="16" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 4v16m0 0l-4-4m4 4l4-4" />
          </svg>
        </button>
      </section>
    </>
  )
}
