export default defineAppConfig({
  ui: {
    primary: 'violet',
    gray: 'slate',
    colors: {
      primary: 'violet',
      neutral: 'slate',
    },
  },
  docus: {
    title: 'Laravel Zap',
    description: 'Flexible schedule management for modern Laravel applications',
    image: '/social-card.png',
    socials: {
      twitter: 'LudovicGuenet',
      github: 'laraveljutsu/zap',
    },
    github: {
      repo: 'laraveljutsu/zap',
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: false,
      fluid: true,
    },
    header: {
      logo: {
        light: '/logo.png',
        dark: '/logo.png',
        alt: 'Laravel Zap',
      },
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Made with 💛 by Laravel Jutsu',
        href: 'https://www.youtube.com/@LaravelJutsu',
      },
    },
  },
})
