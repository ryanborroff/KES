import useReveal from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()
  return (
    <section id="about" className="border-b border-base-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div ref={ref} className="reveal max-w-2xl">
          <div className="font-mono-label text-xs uppercase text-base-muted mb-3">02 / About</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
            Small studio. No roadmap theater.
          </h2>
          <div className="flex flex-col gap-5 text-base-muted leading-relaxed">
            <p>
              JOMO is one person building software they actually want to use, then shipping it in case
              someone else does too. No investors, no growth targets, no quarterly OKRs.
            </p>
            <p>
              Each product stays small on purpose. Features get added when they earn their place, not
              because a competitor shipped them first. Bugs get fixed because they're bugs, not because
              a support ticket queue demanded it.
            </p>
            <p>
              The name is a bet: that software can be useful without being loud, and that doing less,
              carefully, beats doing everything, poorly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
