<template>
  <section id="features" class="landing-section landing-section--divider py-16 md:py-20">
    <div class="max-w-6xl mx-auto px-6">
      <header class="max-w-3xl">
        <p class="landing-eyebrow">
          Built for real scheduling problems
        </p>
        <h2 class="mt-4 section-title text-2xl md:text-3xl">
          A single engine for availabilities, conflicts and time slots.
        </h2>
        <p class="mt-4 text-sm md:text-base section-subtext">
          Zap keeps scheduling rules in one place so your app stays predictable.
        </p>
      </header>

      <!-- Feature grid -->
      <div
        class="mt-12 grid gap-6 md:gap-8 md:grid-cols-3 text-sm md:text-base"
      >
        <ShinyCard>
          <article class="p-6 flex flex-col gap-4">
            <div class="flex items-center gap-3">
              <span class="icon-chip">
                <UIcon name="i-heroicons-calendar-days" class="w-5 h-5" />
              </span>
              <h3 class="text-sm font-semibold flex items-center gap-2 theme-text">
                Availabilities &amp; Appointments
                <span class="accent-bar" aria-hidden="true" />
              </h3>
            </div>
            <p class="theme-text-muted text-sm">
              Describe working hours, blocked periods and bookings with a fluent API.
            </p>
          </article>
        </ShinyCard>

        <ShinyCard>
          <article class="p-6 flex flex-col gap-4">
            <div class="flex items-center gap-3">
              <span class="icon-chip">
                <UIcon name="i-heroicons-adjustments-horizontal" class="w-5 h-5" />
              </span>
              <h3 class="text-sm font-semibold flex items-center gap-2 theme-text">
                Overlap rules &amp; conflicts
                <span class="accent-bar" aria-hidden="true" />
              </h3>
            </div>
            <p class="theme-text-muted text-sm">
              Define which schedules may overlap and let Zap handle conflicts.
            </p>
          </article>
        </ShinyCard>

        <ShinyCard>
          <article class="p-6 flex flex-col gap-4">
            <div class="flex items-center gap-3">
              <span class="icon-chip">
                <UIcon name="i-heroicons-clock" class="w-5 h-5" />
              </span>
              <h3 class="text-sm font-semibold flex items-center gap-2 theme-text">
                Time slots &amp; buffers
                <span class="accent-bar" aria-hidden="true" />
              </h3>
            </div>
            <p class="theme-text-muted text-sm">
              Generate bookable slots with flexible durations, gaps and filters.
            </p>
          </article>
        </ShinyCard>
      </div>

      <!-- (Calendar demo removed for clarity) -->
    </div>
  </section>
</template>
