<script setup lang="ts">
const { data: quickstartSnippet } = await useAsyncData(
  'landing-quickstart-snippet',
  () => queryCollection('docs').path('/_snippets/quickstart').first()
)
</script>

<template>
  <section id="api" class="landing-section landing-section--divider py-16 md:py-20">
    <div class="max-w-6xl mx-auto px-6">
      <div
        class="grid gap-10 md:gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start"
      >
        <!-- Quick start snippet rendered via @nuxt/content (Docus) -->
        <div class="rounded-xl overflow-hidden theme-card theme-border landing-snippet">
          <ContentRenderer
            v-if="quickstartSnippet"
            :value="quickstartSnippet"
          />
        </div>

        <!-- Explanation -->
        <div class="space-y-4 md:space-y-5 text-sm md:text-base theme-text">
          <p class="landing-eyebrow">
            API &amp; quick start
          </p>
          <h2 class="section-title text-2xl md:text-3xl">
            A tiny API for real calendars.
          </h2>
          <p class="section-subtext">
            Attach schedules to your models and let Zap answer what is available.
          </p>
          <div class="mt-4 space-y-4 text-sm theme-text">
            <p>
              <code>Zap::for($doctor)</code> attaches a schedule to any model.
            </p>
            <p>
              <code>availability()</code> defines where bookings are allowed.
            </p>
            <p>
              <code>forYear(2025)</code> sets the year for the schedule.
            </p>
            <p>
              <code>addPeriod('09:00', '12:00')</code> adds time periods when bookings are available.
            </p>
            <p>
              <code>weekly(['monday', 'tuesday', ...])</code> repeats the schedule weekly on specified days.
            </p>
            <p>
              <code>save()</code> persists the schedule for conflict checks and slots.
            </p>
            <p>
              <code>getBookableSlots()</code> retrieves available time slots for a given date.
            </p>
            <p>
              <code>isBookableAt()</code> checks if a specific time is available for booking.
            </p>
          </div>
          <p class="text-xs theme-text-muted">
            Zap handles time logic so your app can focus on UI and routes.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
