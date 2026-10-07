// Central product config — swap accent colors / copy here.
// Accents carry white text (icon tiles, vignettes) at WCAG AA. They don't
// reach AA as text on the dark background, so don't use them for body text.
export const products = [
  {
    id: 'kitchen-wizz',
    name: 'Kitchen Wizz',
    accent: '#006AAF',
    kind: 'Recipes & meal planning',
    platform: 'iOS',
    tagline: 'Your kitchen. Organised.',
    description:
      'Save recipes from anywhere. Paste a link, snap a photo, or copy and paste recipe text, and Kitchen Wizz turns it into a clean, searchable recipe card.',
    features: [
      { title: 'Recipes', detail: 'Save recipes from anywhere and keep them together in one searchable library.' },
      { title: 'Meal planning', detail: 'Plan your week, adjust servings and let your grocery list build itself.' },
      { title: 'Pantry & groceries', detail: 'Keep track of what you already have and shop for what you actually need.' },
    ],
    note: 'No ads. No recipe life stories. Just your recipes, organised.',
    website: 'https://kitchenwizz-marketing-production.up.railway.app/',
    websiteLabel: 'Explore Kitchen Wizz',
    status: 'TestFlight beta',
  },
  {
    id: 'boop',
    name: 'Boop',
    accent: '#C25405',
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
    status: 'TestFlight beta',
    screenshots: [
      { src: '/products/boop/setup.webp', width: 924, height: 2000, alt: 'Boop setup screen: enter your name, pick a game pack and a game length, then start or join a game' },
    ],
  },
  {
    id: 'eatlog',
    name: 'EatLog',
    accent: '#4F7154',
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
    status: 'TestFlight beta',
    screenshots: [
      { src: '/products/eatlog/onboarding.webp', width: 924, height: 2000, alt: 'EatLog onboarding: “Tell EatLog what you ate.”' },
      { src: '/products/eatlog/today.webp', width: 924, height: 2000, alt: 'EatLog Today screen with calories, macros, water and a logged breakfast' },
      { src: '/products/eatlog/insights.webp', width: 924, height: 2000, alt: 'EatLog Insights showing this week’s average daily calories, water and macros' },
      { src: '/products/eatlog/insights-week-chart.webp', width: 2000, height: 924, alt: 'EatLog weekly charts of protein, carbs, fat, fibre and water against targets' },
    ],
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
    status: 'Prototype',
  },
]
