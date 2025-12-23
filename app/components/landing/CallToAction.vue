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
        class="grid gap-8 md:gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start"
      >
        <!-- Quick start snippet rendered via @nuxt/content (Docus) -->
        <div class="rounded-xl overflow-hidden">
          <ContentRenderer
            v-if="quickstartSnippet"
            :value="quickstartSnippet"
          />
        </div>

        <!-- Explanation -->
        <div class="space-y-4 text-sm md:text-base theme-text">
          <p class="landing-eyebrow">
            API &amp; quick start
          </p>
          <h2 class="section-title text-2xl md:text-3xl">
            A tiny API for real calendars.
          </h2>
          <p class="section-subtext">
            Attach schedules to your models and let Zap answer what is available.
          </p>
          <p class="leading-relaxed text-sm md:text-base theme-text theme-text-muted">
            Zap provides a <strong>simple, fluent API</strong> to <strong>attach schedules to any model</strong> in your application. You can define <strong>availability periods</strong>, set <strong>recurring weekly patterns</strong>, and <strong>query available time slots</strong> with just a few method calls.
          </p>
          <p class="leading-relaxed text-sm md:text-base theme-text theme-text-muted">
            Zap handles all the <strong>complex time logic</strong> behind the scenes, so you can focus on <strong>building your UI and routes</strong>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
