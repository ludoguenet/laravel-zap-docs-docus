<template>
  <section id="examples" class="landing-section landing-section--divider py-16 md:py-20">
    <div class="max-w-6xl mx-auto px-6">
      <header class="text-center max-w-3xl mx-auto">
        <p class="landing-eyebrow">
          Proven in real products
        </p>
        <h2 class="mt-4 text-2xl md:text-3xl section-title">
          One booking engine for healthcare, teams, and operations.
        </h2>
        <p class="mt-4 text-sm md:text-base section-subtext">
          Use the same calendar foundation across every scheduling use case in your app.
        </p>
      </header>

      <div class="mt-12 grid gap-6 md:gap-8 md:grid-cols-3 text-sm">
        <!-- Doctor appointments -->
        <ShinyCard>
          <article class="p-6 flex flex-col gap-4">
            <div class="flex items-center gap-3">
              <span class="icon-chip">
                <UIcon name="i-heroicons-heart" class="w-5 h-5" />
              </span>
              <div>
                <p class="label-secondary">
                  Doctor appointments
                </p>
                <h3 class="text-sm font-semibold theme-text">
                  Fill calendars, not admin queues
                </h3>
              </div>
            </div>
            <p class="theme-text-muted">
              Keep practitioner calendars accurate and show patients only slots they can actually book.
            </p>
          </article>
        </ShinyCard>

        <!-- Meeting rooms -->
        <ShinyCard>
          <article class="p-6 flex flex-col gap-4">
            <div class="flex items-center gap-3">
              <span class="icon-chip">
                <UIcon
                  name="i-heroicons-building-office-2"
                  class="w-5 h-5"
                />
              </span>
              <div>
                <p class="label-secondary">
                  Meeting rooms
                </p>
                <h3 class="text-sm font-semibold theme-text">
                  Reliable room utilization
                </h3>
              </div>
            </div>
            <p class="theme-text-muted">
              Coordinate shared spaces with confidence and eliminate scheduling collisions.
            </p>
          </article>
        </ShinyCard>

        <!-- Shift management -->
        <ShinyCard>
          <article class="p-6 flex flex-col gap-4">
            <div class="flex items-center gap-3">
              <span class="icon-chip">
                <UIcon name="i-heroicons-users" class="w-5 h-5" />
              </span>
              <div>
                <p class="label-secondary">
                  Shift management
                </p>
                <h3 class="text-sm font-semibold theme-text">
                  Clear shift coverage
                </h3>
              </div>
            </div>
            <p class="theme-text-muted">
              Plan rotations and time off once, then instantly check who is available.
            </p>
          </article>
        </ShinyCard>
      </div>
    </div>
  </section>
</template>
