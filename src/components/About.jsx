import useReveal from '../hooks/useReveal'

const PRINCIPLES = [
  {
    title: 'Small on purpose',
    body: 'Features get added when they earn their place, not because a competitor shipped them first.',
  },
  {
    title: 'Sensible by default',
    body: 'Sensible defaults over settings screens. If something needs explaining, it probably needs simplifying.',
  },
  {
    title: 'No dark patterns',
    body: 'No guilt notifications, no engagement tricks, no selling your attention to anyone.',
  },
  {
    title: 'Answerable to users',
    body: 'No investors, no growth targets. Bugs get fixed because they’re bugs.',
  },
]

export default function About() {
  const ref = useReveal()
  return (
    <section id="about" className="border-t bg-base-surface">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-sm font-medium text-base-muted mb-4">About</p>
          <h2 className="font-bold tracking-tight text-5xl md:text-6xl leading-none mb-8">
            One person. No roadmap theatrics.
          </h2>
          <div className="flex flex-col gap-5 text-base-muted leading-relaxed max-w-md">
            <p>
              Kind Enough Studio is one person building software I actually want to use, then shipping it in case someone
              else does too.
            </p>
            <p>
              It’s a bet that software can be useful without being loud, and that doing less, carefully, beats doing everything, poorly.
            </p>
          </div>
        </div>

        <ol className="lg:col-span-6 lg:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 self-end">
          {PRINCIPLES.map((p, i) => (
            <li key={p.title} className="border-t pt-5">
              <span className="font-mono text-xs text-base-muted">0{i + 1}</span>
              <h3 className="font-bold tracking-tight text-2xl mt-2 mb-2">{p.title}</h3>
              <p className="text-base-muted leading-relaxed">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
