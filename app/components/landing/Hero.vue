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
          class="flex flex-wrap items-center justify-center min-[911px]:justify-start gap-3"
        >
          <a
            href="#install"
            class="inline-flex items-center gap-2 px-5 py-2.5 text-base font-bold text-center no-underline border-2 border-black dark:border-white rounded-lg shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff] bg-amber-500 text-[#09090b] dark:text-[#09090b] transition-all duration-200 cursor-pointer hover:bg-white hover:text-amber-500 hover:border-amber-500 hover:shadow-[4px_4px_0px_#f59e0b] dark:hover:bg-white dark:hover:text-amber-500 active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
            aria-label="Get started with Laravel Zap"
          >
            Get Started
          </a>
          <a
            href="/docs/getting-started/introduction"
            class="inline-flex items-center gap-2 px-5 py-2.5 text-base font-semibold text-center no-underline border border-black/10 dark:border-white/10 rounded-lg bg-white/80 dark:bg-white/5 backdrop-blur-sm text-gray-900 dark:text-gray-200 transition-all duration-200 cursor-pointer hover:bg-white hover:border-black/20 dark:hover:bg-white/10 dark:hover:border-white/20 hover:shadow-sm active:shadow-none active:translate-y-[1px]"
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

