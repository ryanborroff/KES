// Central product config — swap accent colors / copy here.
// Accents are dark enough to carry white button text at WCAG AA.
export const products = [
  {
    id: 'kitchen-wizz',
    name: 'Kitchen Wizz',
    accent: '#B35C24',
    kind: 'Recipes & meal planning',
    platform: 'iOS',
    tagline: 'Every recipe you’ve saved, minus the life story.',
    description:
      'Paste a link from anywhere and get a clean recipe card. Drop recipes onto the week, and the shopping list writes itself.',
    features: [
      { title: 'Save from any site', detail: 'Just the ingredients and the steps. No ads, no scrolling.' },
      { title: 'Plan the week', detail: 'Drag recipes onto days, get one combined shopping list.' },
      { title: 'Cook without signal', detail: 'Your recipe box lives on your phone, not only in the cloud.' },
    ],
    cta: { label: 'Get the app', kind: 'appstore' },
  },
  {
    id: 'boop',
    name: 'Boop',
    accent: '#B8446A',
    kind: 'Car-spotting game',
    platform: 'iOS',
    tagline: 'Spot it. Boop it. Collect every car on the road.',
    description:
      'A backseat game for kids who would otherwise ask “are we there yet?” See a car, tap to log it, and build a collection one road trip at a time.',
    features: [
      { title: 'Spot & log', detail: 'One tap per car. No camera, no typing.' },
      { title: 'Collect & compare', detail: 'Rare finds, streaks and badges to share with the family.' },
      { title: 'Made for small hands', detail: 'Big targets, works one-handed, and no ads aimed at kids.' },
    ],
    cta: { label: 'Get the app', kind: 'appstore' },
  },
  {
    id: 'eatlog',
    name: 'EatLog',
    accent: '#0F7A4F',
    kind: 'Food diary',
    platform: 'iOS',
    tagline: 'Say it. We’ll log it.',
    description:
      'A voice-first food diary. Tap the mic, say what you ate in your own words, and EatLog works out the calories and macros. No database searching, no weighing, no typing.',
    features: [
      { title: 'Just say it', detail: '“Two eggs, sourdough with butter and a flat white.” Logged in seconds.' },
      { title: 'Fix it by talking', detail: 'Say “actually it was tuna” to correct an entry. No delete and re-log.' },
      { title: 'Ask your diary', detail: '“How much protein have I had today?” Answers from your own log.' },
    ],
    cta: { label: 'Get the app', kind: 'appstore' },
  },
  {
    id: 'chroma',
    name: 'Chroma',
    accent: '#3B6FA0',
    kind: 'Video review & delivery',
    platform: 'Web',
    tagline: 'Client review for filmmakers, at full quality.',
    description:
      'Share cuts that look the way you graded them. Clients leave notes on the exact frame, and you stay in control of who sees and downloads what.',
    features: [
      { title: 'Frame-accurate notes', detail: 'Timecoded comments and stacked versions. No re-uploads for one note.' },
      { title: 'High-bitrate playback', detail: 'Streaming tuned for color-critical review, not just watching.' },
      { title: 'Access you control', detail: 'Expiring links, watermarks and download rights per client.' },
    ],
    cta: { label: 'Start a project', kind: 'signup' },
  },
]
