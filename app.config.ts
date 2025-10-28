export default defineAppConfig({
  ui: {
    colors: {
      primary: 'amber',
      neutral: 'slate'
    },
  },
  socials: {
    x: 'https://x.com/LaravelJutsu',
    linkedin: 'https://www.linkedin.com/in/ludoguenet',
  },
  github: {
    url: 'https://github.com/ludoguenet/zap-for-laravel',
    branch: 'main'
  },
  footer: {
    credits: {
      name: 'Zap for Laravel',
      to: 'https://ludovicguenet.dev',
      text: 'Created by Ludovic Guénet'
    },
    links: [
      {
        label: 'Documentation',
        to: '/getting-started/installation'
      },
      {
        label: 'Twitter',
        to: 'https://x.com/LaravelJutsu',
        target: '_blank'
      }
    ]
  }
})
