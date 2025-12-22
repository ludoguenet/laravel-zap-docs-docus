<template>
  <section id="hero" class="landing-hero relative overflow-hidden">
    <!-- Animated gradient background -->
    <div class="hero-gradient-bg" />
    <div class="hero-gradient-orb hero-gradient-orb--1" />
    <div class="hero-gradient-orb hero-gradient-orb--2" />
    <div class="hero-gradient-orb hero-gradient-orb--3" />
    
    <div
      class="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20 lg:py-24 flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20"
    >
      <!-- Calendar visual -->
      <div class="flex-1 flex justify-center md:justify-start w-full max-[910px]:hidden">
        <LandingCalendarPreview />
      </div>

      <!-- Copy -->
      <div class="flex-1 text-center min-[911px]:text-left space-y-6 w-full min-w-0">
        <div class="space-y-2">
          <h1 class="landing-hero__title whitespace-normal sm:whitespace-nowrap">
            ⚡ Laravel Zap
          </h1>
          <p class="landing-eyebrow whitespace-normal break-words">
            Open-source schedule engine for Laravel
          </p>
        </div>
        <p class="landing-hero__subtitle max-w-xl min-[911px]:max-w-2xl mx-auto min-[911px]:mx-0">
          Flexible schedule management for modern Laravel applications.
        </p>

        <!-- CTAs -->
        <div
          class="flex flex-wrap items-center justify-center min-[911px]:justify-start gap-4"
        >
          <a href="#install" class="cta-primary" aria-label="Get started with Laravel Zap">
            Get Started
          </a>
          <a
            href="/docs/getting-started/introduction"
            class="cta-secondary"
            aria-label="View Laravel Zap documentation"
          >
            View Docs
          </a>
        </div>

        <!-- Schedule stats -->
        <div
          class="flex flex-wrap items-center justify-center min-[911px]:justify-start gap-3 text-xs font-medium"
        >
          <span class="stat-chip">
            <UIcon name="i-heroicons-bolt" class="w-3.5 h-3.5" />
            Fast & Flexible
          </span>
          <span class="stat-chip">
            <UIcon name="i-heroicons-clock" class="w-3.5 h-3.5" />
            Recurring Events
          </span>
          <span class="stat-chip">
            <UIcon name="i-heroicons-code-bracket" class="w-3.5 h-3.5" />
            Laravel Native
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

