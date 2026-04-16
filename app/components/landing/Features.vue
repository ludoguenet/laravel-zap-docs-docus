<template>
  <section id="features" class="landing-section landing-section--divider">
    <div class="max-w-6xl mx-auto px-6">
      <header class="max-w-3xl space-y-5">
        <p class="landing-eyebrow">
          Why teams choose Laravel Zap
        </p>
        <h2 class="section-title">
          Everything you need to run a premium booking calendar.
        </h2>
        <p class="section-subtext">
          Keep your scheduling logic in one reliable engine and deliver a smoother booking experience.
        </p>
      </header>

      <!-- Feature grid -->
      <div
        class="mt-16 grid gap-8 md:gap-10 md:grid-cols-3 text-sm md:text-base"
      >
        <ShinyCard>
          <article class="p-7 md:p-8 flex flex-col gap-5">
            <div class="flex items-center gap-3">
              <span class="icon-chip">
                <UIcon name="i-heroicons-calendar-days" class="w-5 h-5" />
              </span>
              <h3 class="text-sm font-semibold flex items-center gap-2 theme-text">
                Availability that converts
                <span class="accent-bar" aria-hidden="true" />
              </h3>
            </div>
            <p class="theme-text-muted text-sm">
              Turn working hours, blocked periods, and appointments into clear bookable slots your users can trust.
            </p>
          </article>
        </ShinyCard>

        <ShinyCard>
          <article class="p-7 md:p-8 flex flex-col gap-5">
            <div class="flex items-center gap-3">
              <span class="icon-chip">
                <UIcon name="i-heroicons-adjustments-horizontal" class="w-5 h-5" />
              </span>
              <h3 class="text-sm font-semibold flex items-center gap-2 theme-text">
                Conflict-free by default
                <span class="accent-bar" aria-hidden="true" />
              </h3>
            </div>
            <p class="theme-text-muted text-sm">
              Set overlap rules once and let Zap protect your calendar from double-bookings.
            </p>
          </article>
        </ShinyCard>

        <ShinyCard>
          <article class="p-7 md:p-8 flex flex-col gap-5">
            <div class="flex items-center gap-3">
              <span class="icon-chip">
                <UIcon name="i-heroicons-clock" class="w-5 h-5" />
              </span>
              <h3 class="text-sm font-semibold flex items-center gap-2 theme-text">
                Flexible slot strategy
                <span class="accent-bar" aria-hidden="true" />
              </h3>
            </div>
            <p class="theme-text-muted text-sm">
              Tailor durations, buffers, and filters to match how your business actually schedules.
            </p>
          </article>
        </ShinyCard>
      </div>

      <!-- (Calendar demo removed for clarity) -->
    </div>
  </section>
</template>
