// Central product config — swap accent colors / copy here.
// Accents are dark enough to carry white button text at WCAG AA.
export const products = [
  {
    id: 'kando',
    name: 'Kando',
    accent: '#3F7D4F',
    kind: 'Kanban board',
    platform: 'macOS',
    tagline: 'A kanban board with nothing to configure.',
    description:
      'Open it, add a card, drag it across. That is the whole manual. Kando is for people who want to see their work, not manage a tool that manages their work.',
    features: [
      { title: 'Ready in ten seconds', detail: 'No templates, no onboarding, no workspace to name.' },
      { title: 'Keyboard-first', detail: 'Every action has a shortcut. Your mouse can take the day off.' },
      { title: 'Works offline', detail: 'Local-first, syncs quietly when you are back online.' },
    ],
    cta: { label: 'Download for macOS', kind: 'download' },
  },
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
  {
    id: 'greg',
    name: 'Greg',
    accent: '#7456A3',
    kind: 'Task list',
    platform: 'macOS',
    tagline: 'One list. It stays out of your way.',
    description:
      'No projects, no tags, no priority matrix. Hit a shortcut, type the thing, hit enter. Greg remembers so you don’t have to.',
    features: [
      { title: 'Just a list', detail: 'Type a task, check it off. That’s it.' },
      { title: 'Capture from anywhere', detail: 'A global shortcut opens a blank line over whatever you are doing.' },
      { title: 'Clears itself', detail: 'Finished tasks fade at the end of the day. Nothing to archive.' },
    ],
    cta: { label: 'Download for macOS', kind: 'download' },
  },
]
