<template>
  <section id="examples" class="landing-section landing-section--divider py-16 md:py-20">
    <div class="max-w-6xl mx-auto px-6">
      <header class="text-center max-w-3xl mx-auto">
        <p class="landing-eyebrow">
          Real-world use cases
        </p>
        <h2 class="mt-4 text-2xl md:text-3xl section-title">
          From doctors to meeting rooms to shift planning.
        </h2>
        <p class="mt-4 text-sm md:text-base section-subtext">
          Zap focuses on generating and validating time slots for your models.
        </p>
      </header>

      <div class="mt-12 grid gap-6 md:gap-8 md:grid-cols-3 text-sm">
        <!-- Doctor appointments -->
        <article class="example-card p-6 flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <span class="icon-chip">
              <UIcon name="i-heroicons-heart" class="w-5 h-5" />
            </span>
            <div>
              <p class="label-secondary">
                Doctor appointments
              </p>
              <h3 class="text-sm font-semibold theme-text">
                Clinic &amp; telehealth booking
              </h3>
            </div>
          </div>
          <p class="theme-text-muted">
            Model office hours and blocked days so Zap returns only bookable slots.
          </p>
        </article>

        <!-- Meeting rooms -->
        <article class="example-card p-6 flex flex-col gap-4">
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
                Rooms, pods &amp; shared spaces
              </h3>
            </div>
          </div>
          <p class="theme-text-muted">
            Keep meeting rooms and shared spaces conflict‑free by design.
          </p>
        </article>

        <!-- Shift management -->
        <article class="example-card p-6 flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <span class="icon-chip">
              <UIcon name="i-heroicons-users" class="w-5 h-5" />
            </span>
            <div>
              <p class="label-secondary">
                Shift management
              </p>
              <h3 class="text-sm font-semibold theme-text">
                Teams, call rotations &amp; support
              </h3>
            </div>
          </div>
          <p class="theme-text-muted">
            Describe shifts and time off once, then query who is available.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
