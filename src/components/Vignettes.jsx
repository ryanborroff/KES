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
      <div className="font-bold tracking-tight text-5xl leading-none mb-1">37</div>
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

function EatLog() {
  const items = [
    ['Scrambled eggs', '2 large', 182],
    ['Sourdough, buttered', '2 slices', 290],
    ['Flat white', 'large', 170],
  ]
  return (
    <Phone>
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-xs font-semibold">Breakfast</span>
        <span className="text-[11px] text-base-muted">1,248 / 2,100 kcal</span>
      </div>
      <div className="h-1.5 rounded-full bg-base-line mb-4 overflow-hidden">
        <div className="h-full w-[59%] rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
      </div>
      <div
        className="ml-auto mb-3 max-w-[85%] rounded-2xl rounded-br-md px-3 py-2 text-xs leading-snug text-white"
        style={{ backgroundColor: 'var(--accent)' }}
      >
        “Two scrambled eggs, two slices of sourdough with butter and a large flat white.”
      </div>
      <div className="flex flex-col gap-1.5 mb-4">
        {items.map(([name, qty, kcal]) => (
          <div key={name} className="flex items-center gap-3 rounded-lg border bg-base-bg px-3 py-2">
            <div className="min-w-0">
              <div className="text-xs truncate">{name}</div>
              <div className="text-[10px] text-base-muted">{qty}</div>
            </div>
            <span className="ml-auto text-xs font-semibold tabular-nums">{kcal}</span>
          </div>
        ))}
      </div>
      <div className="mx-auto h-12 w-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: 'var(--accent)' }}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" strokeLinecap="round" />
        </svg>
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

const VIGNETTES = {
  'kitchen-wizz': KitchenWizz,
  boop: Boop,
  eatlog: EatLog,
  chroma: Chroma,
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
