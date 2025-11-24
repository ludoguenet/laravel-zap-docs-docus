export default defineAppConfig({
  ui: {
    colors: {
      primary: 'amber',
      neutral: 'zinc',
    },
    page: {
      aside: {
        left: {
          wrapper: 'lg:block md:block overflow-y-auto lg:max-h-[calc(100vh-var(--ui-header-height))] lg:sticky lg:top-(--ui-header-height) py-8 lg:ps-4 lg:-ms-4 lg:pe-6.5 lg:col-span-2',
        },
      },
    },
  },
  docus: {
    title: 'Laravel Zap',
    description: 'Flexible schedule management for modern Laravel applications',
    image: '/social-card.png',
    socials: {
      twitter: 'LudovicGuenet',
      github: 'ludoguenet/laravel-zap',
    },
    github: {
      repo: 'ludoguenet/laravel-zap',
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
