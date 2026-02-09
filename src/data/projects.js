export const projects = [
  {
    id: 1,
    title: 'StasisDrive',
    description:
      'A full-stack permament storage solution for files and documents making use of the Arweave blockchain. This app abstracts away the complexity of crypto world and provides a user-friendly interface for uploading and downloading files.',
    tech: ['Python', 'React', 'Postgres', 'Docker', 'AWS', 'Stripe'],
    github: 'https://github.com/jareddalessandro/StasisDrive',
    demo: null, // Set to null since domain expired
    images: [
      '/projects/comparefi/homepage.png',
      '/projects/comparefi/results1.png',
      '/projects/comparefi/results4.png'
    ],
    gradient: 'from-cyan-500/20 to-blue-500/20', // Fallback if no images
  },
  {
    id: 2,
    title: 'CompareFi',
    description:
      'A full-stack webapp enabling users to compare their financial metrics with that of their demographic and geographic peers, making use of the Federal Reserve API and the annual Census data.',
    tech: ['C#', "Blazor", 'MudBlazor', 'Azure', 'SQL Server'],
    github: 'https://github.com/jareddalessandro/CompareFi',
    demo: null,
    images: [],
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 3,
    title: 'RecipeMe',
    description:
      'A Flutter cross-platform mobile app that allow users to enter their favorite printed or online recipes and have them parsed and stored locally. ',
    tech: ['Flutter', 'Dart'],
    github: 'https://github.com/jareddalessandro/RecipeMe',
    demo: null,
    images: [],
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: 4,
    title: 'Stock Trading Bot',
    description:
      'An autonomous Bitcoin trading bot that uses technical indicators and a programmatic strategy to make trading decisions. Making use of the Alpaca API to trade on the exchange.',
    tech: ['Alpaca API', 'Python'],
    github: 'https://github.com/jareddalessandro/TradingBot',
    demo: null,
    images: [],
    gradient: 'from-orange-500/20 to-yellow-500/20',
  },
]
