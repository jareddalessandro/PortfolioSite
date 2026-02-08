export const projects = [
  {
    id: 1,
    title: 'TaskFlow',
    description:
      'A full-stack project management app with real-time collaboration, drag-and-drop kanban boards, and team workspaces.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com',
    demo: null, // Set to null since domain expired
    images: [
      // Add your screenshot paths here, e.g.:
      // '/projects/taskflow-1.png',
      // '/projects/taskflow-2.png',
      // '/projects/taskflow-3.png',
    ],
    gradient: 'from-cyan-500/20 to-blue-500/20', // Fallback if no images
  },
  {
    id: 2,
    title: 'CryptoTracker',
    description:
      'Real-time cryptocurrency dashboard with portfolio tracking, price alerts, and interactive charts powered by live market data.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Chart.js'],
    github: 'https://github.com',
    demo: null,
    images: [],
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 3,
    title: 'DevBlog',
    description:
      'A performant developer blog with MDX support, syntax highlighting, full-text search, and an RSS feed.',
    tech: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com',
    demo: null,
    images: [],
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: 4,
    title: 'WeatherNow',
    description:
      'A weather application with location-based forecasts, interactive radar maps, and severe weather notifications.',
    tech: ['React', 'OpenWeather API', 'Mapbox', 'PWA'],
    github: 'https://github.com',
    demo: null,
    images: [],
    gradient: 'from-orange-500/20 to-yellow-500/20',
  },
]
