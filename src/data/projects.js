export const projects = [
  {
    id: 1,
    title: 'NominalFactor',
    description:
      'A full-stack web app that provides multi-factor stock intelligence and allows users to create custom algorithms for stock valuation and analysis. Provides fundamental, technical, earnings analysis and AI macro economic analysis for stocks.',
    tech: ['React', 'Python', 'Postgres', 'Docker', 'OpenAI API', 'Stripe API'],
    github: 'https://github.com/Nominal-Technologies-LLC/NominalFactor',
    demo: null,
    images: [
      '/nominalfactor/landingpageSmall.png',
      '/nominalfactor/earnings.png',
      '/nominalfactor/overview.png',
      '/nominalfactor/technicals.png',
      '/nominalfactor/fundamental.png'
    ],
    imageContain: true,
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: 2,
    title: 'StasisDrive',
    description:
      'A full-stack permament storage solution for files and documents making use of the Arweave blockchain. This app abstracts away the complexity of crypto world and provides a user-friendly interface for uploading and downloading files.',
    tech: ['Python', 'React', 'Postgres', 'Docker', 'AWS', 'Stripe'],
    github: 'https://github.com/jareddalessandro/StasisDrive',
    demo: null, // Set to null since domain expired
    images: [
      '/stasisdrive/launchpage1.png',
      '/stasisdrive/dashboard1.png',
      '/stasisdrive/launchpage2.png',
    ],
    gradient: 'from-cyan-500/20 to-blue-500/20', // Fallback if no images
  },
  {
    id: 3,
    title: 'CompareFi',
    description:
      'A full-stack webapp enabling users to compare their financial metrics with that of their demographic and geographic peers, making use of the Federal Reserve API and the annual Census data and a custom made ingestion engine to parse and store the data in a SQL Server database.',
    tech: ['C#', "Blazor", 'MudBlazor', 'Azure', 'SQL Server'],
    github: 'https://github.com/jareddalessandro/CompareFi',
    demo: null,
    images: [
      '/comparefi/homepage.png',
      '/comparefi/results1.png',
      '/comparefi/results4.png'
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
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
