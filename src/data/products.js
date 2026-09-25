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
      { title: 'Save from the web', detail: 'Just the ingredients and the steps. No ads, no scrolling.' },
      { title: 'Plan the week', detail: 'Drag recipes onto days, get one combined shopping list.' },
      { title: 'Cook offline', detail: 'Your recipe box lives on your phone, not just in the cloud.' },
    ],
    cta: { label: 'Get the app', kind: 'appstore' },
  },
  {
    id: 'boop',
    name: 'Boop',
    accent: '#B8446A',
    kind: 'Road trip game',
    platform: 'iOS',
    tagline: 'The car-spotting game for road trips.',
    description:
      'Everyone joins on their own phone. Spot a Mini, shout “Boop!” and tap to score. Rarer cars are worth more, and whoever’s ahead when the timer runs out wins.',
    features: [
      { title: 'Play together', detail: 'Join with a game code, one phone each. No signal? It plays offline solo.' },
      { title: 'Rarer cars score more', detail: 'A Mini is worth 1 point. A Nissan Cube is worth 10.' },
      { title: 'More to spot', detail: 'Classic is free. Farm, City and Vacation packs add tractors, fire engines and campers.' },
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
      'A voice-first food diary. Tap the mic, say what you ate in your own words, and EatLog works out the calories and macros. No database searching, weighing every ingredient or typing it all out.',
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
      { title: 'High-bitrate playback', detail: 'Streaming tuned for grade-critical review, not just watching.' },
      { title: 'Access you control', detail: 'Expiring links, watermarks and download rights per client.' },
    ],
    cta: { label: 'Start a project', kind: 'signup' },
  },
]
