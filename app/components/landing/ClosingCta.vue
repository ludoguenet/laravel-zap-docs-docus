<template>
  <UPageCTA
    id="cta"
    variant="solid"
    title="Ready to ship your booking calendar?"
    description="Install Laravel Zap today and go from zero to a bookable calendar in minutes — no scheduling infrastructure to build from scratch."
    :links="[
      { label: 'Get Started', to: '#install', color: 'neutral', variant: 'solid', size: 'lg', trailingIcon: 'i-heroicons-arrow-right' },
      { label: 'Read the Docs', to: '/docs/getting-started/introduction', color: 'neutral', variant: 'outline', size: 'lg', class: 'bg-transparent ring-white/40 hover:bg-white/10 text-white' },
    ]"
    :ui="{
      root: 'bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700',
      title: 'text-white',
      description: 'text-white/80',
    }"
  />
</template>
