// Stylised, code-drawn previews of each product. They stand in for real
// screenshots and pick up the section's --accent color.

function Window({ title, children }) {
  return (
    <div className="bg-base-surface rounded-xl border shadow-[0_20px_40px_-24px_rgba(0,0,0,0.35)] overflow-hidden text-left">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b">
        <span className="w-2.5 h-2.5 rounded-full bg-base-line" />
        <span className="w-2.5 h-2.5 rounded-full bg-base-line" />
        <span className="w-2.5 h-2.5 rounded-full bg-base-line" />
        <span className="ml-3 text-xs font-medium text-base-muted">{title}</span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  )
}

function Phone({ children }) {
  return (
    <div className="mx-auto w-full max-w-[17rem] bg-base-surface rounded-[2rem] border p-3 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.35)] text-left">
      <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-base-line" />
      <div className="px-1 pb-2">{children}</div>
    </div>
  )
}

function Kando() {
  const columns = [
    { name: 'To do', cards: ['Write release notes', 'Reply to Sam'] },
    { name: 'Doing', cards: ['Fix sync on wake'], active: true },
    { name: 'Done', cards: ['Ship 1.4', 'Update icon'], done: true },
  ]
  return (
    <Window title="Kando — This week">
      <div className="grid grid-cols-3 gap-3">
        {columns.map((col) => (
          <div key={col.name} className="flex flex-col gap-2">
            <div className="text-[11px] font-semibold text-base-muted">
              {col.name} <span className="font-normal">{col.cards.length}</span>
            </div>
            {col.cards.map((card) => (
              <div
                key={card}
                className={`rounded-md border bg-base-bg px-2.5 py-2 text-[11px] sm:text-xs leading-snug ${
                  col.done ? 'text-base-muted line-through' : ''
                }`}
                style={col.active ? { borderColor: 'var(--accent)', boxShadow: '0 0 0 1px var(--accent)' } : undefined}
              >
                {card}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 text-[11px] text-base-muted">
        <kbd className="font-mono rounded border px-1.5 py-0.5">N</kbd> new card
        <kbd className="font-mono rounded border px-1.5 py-0.5 ml-2">→</kbd> move
      </div>
    </Window>
  )
}

function KitchenWizz() {
  const days = [
    ['Mon', 'Miso salmon'],
    ['Tue', 'Leftovers'],
    ['Wed', 'Lemon orzo'],
    ['Thu', 'Tacos'],
  ]
  return (
    <Phone>
      <div className="text-xs font-semibold mb-3">This week</div>
      <div className="flex flex-col gap-1.5 mb-4">
        {days.map(([day, meal], i) => (
          <div key={day} className="flex items-center gap-3 rounded-lg border bg-base-bg px-3 py-2">
            <span className="w-8 text-[11px] font-semibold text-base-muted">{day}</span>
            <span className="text-xs">{meal}</span>
            {i === 2 && (
              <span className="ml-auto h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
            )}
          </div>
        ))}
      </div>
      <div className="rounded-lg px-3 py-2.5 text-white" style={{ backgroundColor: 'var(--accent)' }}>
        <div className="text-[11px] font-semibold opacity-90">Shopping list</div>
        <div className="text-xs">14 items · 3 recipes</div>
      </div>
    </Phone>
  )
}

function Boop() {
  const cars = ['Red hatchback', 'Camper van', 'Yellow cab', 'Tow truck', 'Vintage Beetle', 'Fire engine']
  return (
    <Phone>
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-xs font-semibold">My garage</span>
        <span className="text-[11px] text-base-muted">🔥 6-day streak</span>
      </div>
      <div className="font-serif text-5xl leading-none mb-1">37</div>
      <div className="text-[11px] text-base-muted mb-4">cars spotted</div>
      <div className="grid grid-cols-3 gap-1.5 mb-4">
        {cars.map((car, i) => (
          <div
            key={car}
            className="aspect-square rounded-lg border bg-base-bg flex items-end p-1.5 text-[10px] leading-tight"
            style={i === 4 ? { borderColor: 'var(--accent)', boxShadow: '0 0 0 1px var(--accent)' } : undefined}
          >
            {car}
          </div>
        ))}
      </div>
      <div
        className="rounded-full py-3 text-center text-sm font-bold text-white"
        style={{ backgroundColor: 'var(--accent)' }}
      >
        Boop!
      </div>
    </Phone>
  )
}

function Chroma() {
  const markers = [18, 41, 44, 72]
  return (
    <Window title="Chroma — Final cut v3">
      <div
        className="aspect-video rounded-md mb-3 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1b2a3a 0%, #3b6fa0 55%, #d9a86c 100%)' }}
      >
        <span className="absolute bottom-2 left-2 font-mono text-[10px] text-white/85">01:12:08</span>
      </div>
      <div className="relative h-1.5 rounded-full bg-base-line mb-4">
        <div className="absolute inset-y-0 left-0 w-[44%] rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
        {markers.map((m) => (
          <span
            key={m}
            className="absolute -top-1 h-3.5 w-0.5 rounded"
            style={{ left: `${m}%`, backgroundColor: 'var(--color-fg)' }}
          />
        ))}
      </div>
      <div className="flex gap-3 rounded-md border bg-base-bg p-3">
        <span className="font-mono text-[10px] text-base-muted pt-0.5">01:12:08</span>
        <p className="text-xs leading-snug">
          <span className="font-semibold">Dana:</span> Can we lift the shadows a touch on this shot?
        </p>
      </div>
    </Window>
  )
}

function Greg() {
  const tasks = [
    ['Call the dentist', true],
    ['Renew passport', false],
    ['Buy birthday card', true],
    ['Book train for Friday', false],
  ]
  return (
    <div className="mx-auto max-w-sm">
      <Window title="Greg">
        <ul className="flex flex-col">
          {tasks.map(([task, done]) => (
            <li key={task} className="flex items-center gap-3 py-2 border-b last:border-b-0 text-sm">
              <span
                className="h-4 w-4 rounded-full border-2 flex items-center justify-center"
                style={done ? { borderColor: 'var(--accent)', backgroundColor: 'var(--accent)' } : undefined}
              >
                {done && (
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2.5 6.5l2.2 2L9.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className={done ? 'text-base-muted line-through' : ''}>{task}</span>
            </li>
          ))}
          <li className="flex items-center gap-3 pt-2 text-sm text-base-muted">
            <span className="h-4 w-4 rounded-full border-2 border-dashed" />
            <span>
              Type a task
              <span className="ml-0.5 inline-block h-4 w-px align-middle animate-pulse" style={{ backgroundColor: 'var(--accent)' }} />
            </span>
          </li>
        </ul>
      </Window>
      <p className="mt-3 text-center text-xs text-base-muted">Checked tasks clear at midnight.</p>
    </div>
  )
}

const VIGNETTES = {
  kando: Kando,
  'kitchen-wizz': KitchenWizz,
  boop: Boop,
  chroma: Chroma,
  greg: Greg,
}

export default function Vignette({ product }) {
  const Component = VIGNETTES[product.id]
  if (!Component) return null
  return (
    <div role="img" aria-label={`Illustration of ${product.name}`}>
      <Component />
    </div>
  )
}
