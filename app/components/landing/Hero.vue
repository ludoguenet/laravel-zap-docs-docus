<template>
  <section
    id="hero"
    class="bg-gradient-to-b from-[#fdf7e9] via-white to-white text-gray-800"
  >
    <div
      class="max-w-7xl mx-auto px-6 py-20 md:py-24 flex flex-col md:flex-row items-center gap-12 md:gap-20 lg:gap-24"
    >
      <!-- Calendar visual -->
      <div class="flex-1 flex justify-center md:justify-start w-full">
        <LandingCalendarPreview />
      </div>

      <!-- Copy -->
      <div class="flex-1 text-center md:text-left space-y-5">
        <div class="space-y-1">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 whitespace-nowrap"
          >
            ⚡ Laravel Zap
          </h1>
          <p
            class="text-xs font-semibold tracking-[0.3em] uppercase text-[#552583]/80 whitespace-nowrap"
          >
            Open-source schedule engine for Laravel
          </p>
        </div>
        <p
          class="text-lg md:text-xl text-gray-600 max-w-xl md:max-w-2xl mx-auto md:mx-0"
        >
          Flexible schedule management for modern Laravel applications.
        </p>

        <!-- CTAs -->
        <div
          class="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2"
        >
          <a
            href="#install"
            class="inline-flex items-center gap-2 bg-[#FDB927] text-[#552583] font-semibold px-6 py-3 rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:bg-[#FFC72C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FDB927] focus-visible:ring-offset-white transition transform"
            aria-label="Get started with Laravel Zap"
          >
            Get Started
          </a>
          <a
            href="/docs/getting-started/introduction"
            class="inline-flex items-center gap-2 border-2 border-[#552583] text-[#552583] px-6 py-3 rounded-lg font-semibold hover:-translate-y-0.5 hover:bg-[#552583] hover:text-white shadow-sm transition transform"
            aria-label="View Laravel Zap documentation"
          >
            View Docs
          </a>
        </div>

        <!-- Schedule stats -->
        <div
          class="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs font-medium pt-4"
        >
          <span
            class="inline-flex items-center rounded-full border border-[#FDB927]/40 bg-[#FDB927]/10 px-3 py-1 text-[#552583]"
          >
            <UIcon name="i-heroicons-bolt" class="w-3.5 h-3.5 mr-1.5" />
            Fast & Flexible
          </span>
          <span
            class="inline-flex items-center rounded-full border border-[#FDB927]/40 bg-[#FDB927]/10 px-3 py-1 text-[#552583]"
          >
            <UIcon name="i-heroicons-clock" class="w-3.5 h-3.5 mr-1.5" />
            Recurring Events
          </span>
          <span
            class="inline-flex items-center rounded-full border border-[#FDB927]/40 bg-[#FDB927]/10 px-3 py-1 text-[#552583]"
          >
            <UIcon name="i-heroicons-code-bracket" class="w-3.5 h-3.5 mr-1.5" />
            Laravel Native
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

