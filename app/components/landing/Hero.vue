<template>
  <UPageHero
    id="hero"
    orientation="horizontal"
    reverse
    class="landing-hero"
    :ui="{
      container: 'relative z-10 py-20 md:py-24 lg:py-32',
      wrapper: 'text-center min-[911px]:text-left',
      title: 'landing-hero__title whitespace-normal',
      description: 'landing-hero__subtitle max-w-xl min-[911px]:max-w-2xl mx-auto min-[911px]:mx-0 mt-5',
    }"
  >
    <template #top>
      <div class="hero-gradient-bg" />
      <div class="hero-gradient-orb hero-gradient-orb--1" />
      <div class="hero-gradient-orb hero-gradient-orb--2" />
      <div class="hero-gradient-orb hero-gradient-orb--3" />
    </template>

    <template #headline>
      <span class="landing-eyebrow whitespace-normal break-words">
        Power your booking experience
      </span>
    </template>

    <template #title>
      Launch a booking calendar your users <span class="text-gradient">trust</span> from day one.
    </template>

    <template #description>
      From availability to appointments, Laravel Zap helps you ship a smooth scheduling flow with less custom code and fewer surprises.
    </template>

    <template #footer>
      <div class="flex flex-wrap items-center justify-center min-[911px]:justify-start gap-3.5">
        <UButton
          to="#install"
          color="primary"
          variant="solid"
          size="lg"
          aria-label="Get started with Laravel Zap"
        >
          Get Started
        </UButton>
        <UButton
          to="/docs/getting-started/introduction"
          color="neutral"
          variant="outline"
          size="lg"
          aria-label="View Laravel Zap documentation"
        >
          View Docs
        </UButton>
      </div>

      <p class="mt-6 text-sm theme-text-muted max-w-xl min-[911px]:max-w-2xl mx-auto min-[911px]:mx-0 leading-relaxed">
        Open source, Laravel-native, and ready for products where booking quality drives growth.
      </p>

      <div class="mt-6 flex flex-wrap items-center justify-center min-[911px]:justify-start gap-3.5">
        <UBadge variant="subtle" color="neutral" size="lg" icon="i-heroicons-bolt">
          Fast &amp; Flexible
        </UBadge>
        <UBadge variant="subtle" color="neutral" size="lg" icon="i-heroicons-clock">
          Recurring Events
        </UBadge>
        <UBadge variant="subtle" color="neutral" size="lg" icon="i-heroicons-code-bracket">
          Laravel Native
        </UBadge>
      </div>
    </template>

    <div class="hidden min-[911px]:flex justify-center w-full">
      <LandingCalendarPreview />
    </div>
  </UPageHero>
</template>
