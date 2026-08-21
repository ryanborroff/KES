// Central product config — swap accent colors / copy here.
export const products = [
  {
    id: 'kando',
    name: 'Kando',
    accent: '#4ADE80',
    accentClass: 'kando',
    tagline: 'A kanban board with nothing to configure.',
    description: 'Everything you need, nothing you don\'t.',
    category: 'Productivity',
    features: [
      {
        title: 'Zero setup',
        detail: 'Create a board and start moving cards in under ten seconds. No templates, no onboarding flow.',
      },
      {
        title: 'Keyboard-first',
        detail: 'Every action has a shortcut. Built for people who don\'t want to touch a mouse.',
      },
      {
        title: 'Local-first sync',
        detail: 'Works offline, syncs when you\'re back online. No spinners, no lag.',
      },
    ],
    cta: { label: 'Download for macOS', kind: 'download' },
    icon: 'kando',
  },
  {
    id: 'kitchen-wizz',
    name: 'Kitchen Wizz',
    accent: '#F59E0B',
    accentClass: 'kitchen',
    tagline: 'Save recipes from anywhere. Plan the week in minutes.',
    description: 'One place for every recipe you\'ve ever saved.',
    category: 'Home',
    features: [
      {
        title: 'Save from any site',
        detail: 'Paste a link, get a clean recipe card. No ads, no life story, no scrolling.',
      },
      {
        title: 'Weekly planner',
        detail: 'Drag recipes onto a calendar. Auto-generate a shopping list from what you picked.',
      },
      {
        title: 'Works offline',
        detail: 'Your recipe box is on your phone, not just in the cloud. Cook without signal.',
      },
    ],
    cta: { label: 'Get the app', kind: 'appstore' },
    icon: 'kitchen',
  },
  {
    id: 'boop',
    name: 'Boop',
    accent: '#F472B6',
    accentClass: 'boop',
    tagline: 'Spot it. Boop it. Track every car you\'ve ever found.',
    description: 'A car-spotting game for the backseat.',
    category: 'Kids',
    features: [
      {
        title: 'Spot & log',
        detail: 'See a car in the wild, tap to log it. Builds a collection over time, no camera required.',
      },
      {
        title: 'Collect & compare',
        detail: 'Track rare finds against friends and family. Streaks, badges, no ads aimed at kids.',
      },
      {
        title: 'Built for the car',
        detail: 'Big tap targets, fast animations, works one-handed from a car seat.',
      },
    ],
    cta: { label: 'Get the app', kind: 'appstore' },
    icon: 'boop',
  },
  {
    id: 'chroma',
    name: 'Chroma',
    accent: '#60A5FA',
    accentClass: 'chroma',
    tagline: 'Secure hosting and review for working filmmakers.',
    description: 'Client-ready delivery, without the compression artifacts.',
    category: 'Professional',
    features: [
      {
        title: 'Frame-accurate review',
        detail: 'Timecoded comments, version stacking, no re-uploads for a single note.',
      },
      {
        title: 'High-bitrate streaming',
        detail: 'Adaptive delivery tuned for color-critical review, not just playback.',
      },
      {
        title: 'Access control',
        detail: 'Expiring links, watermarking, and download permissions per client, per project.',
      },
    ],
    cta: { label: 'Sign up', kind: 'signup' },
    icon: 'chroma',
  },
]
