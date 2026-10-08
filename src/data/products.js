// Central product config — swap accent colors / copy here.
// Accents are dark enough to carry white button text at WCAG AA.
export const products = [
  {
    id: 'kitchen-wizz',
    name: 'Kitchen Wizz',
    accent: '#006AAF',
    kind: 'Recipes & meal planning',
    platform: 'iOS',
    tagline: 'Your kitchen. Organised.',
    description:
      'Save recipes from anywhere. Paste a link, snap a photo or copy and paste text. Kitchen Wizz turns it into a clean, searchable recipe card. Convert measurements, adjust servings, plan your meals and build your grocery list automatically. Everything you need to cook, without the clutter.',
    features: [
      { title: 'Recipes', detail: 'Save recipes from websites, photos or text. Find what you need without scrolling through someone else’s life story.' },
      { title: 'Meal planning', detail: 'Decide what you’re cooking, adjust the portions and let Kitchen Wizz work out what you need.' },
      { title: 'Pantry & groceries', detail: 'See what you’ve got, find recipes you can make and avoid buying ingredients twice.' },
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
      'Everyone joins on their own phone. Spot a Mini, shout “Boop!” and tap to score. The rarer the car, the more points you earn. Whoever has the most points when time runs out wins.',
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
      'A food diary you can talk to. Just say what you’ve eaten and EatLog estimates the calories, protein, carbs and fat. No searching through food databases or entering every ingredient by hand. Review your meals, track your progress and ask questions about what you’ve eaten.',
    features: [
      { title: 'Just say it', detail: '“Two eggs, sourdough with butter and a flat white.” Logged in seconds.' },
      { title: 'Fix it by talking', detail: 'Say “actually it was tuna” to correct an entry. No delete and re-log.' },
      { title: 'Ask your diary', detail: 'Ask how much protein you’ve eaten and get answers from your own food log.' },
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
    tagline: 'A better way to review and deliver films.',
    description:
      'Chroma is a prototype for filmmakers to review cuts, collect frame-specific feedback and deliver films to clients. The aim is high-quality playback, clear feedback and control over access.',
    features: [
      { title: 'Frame-accurate notes', detail: 'Planned: comments on specific frames and feedback organised across versions.' },
      { title: 'High-bitrate playback', detail: 'Planned: high-quality streaming designed to preserve visual detail.' },
      { title: 'Access you control', detail: 'Planned: private sharing and control over client access and downloads.' },
    ],
    status: 'Prototype',
  },
]
