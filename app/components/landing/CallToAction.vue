<script setup lang="ts">
const { data: quickstartSnippet } = await useAsyncData(
  'landing-quickstart-snippet',
  () => queryCollection('docs').path('/_snippets/quickstart').first()
)
</script>

<template>
  <section id="api" class="landing-section landing-section--divider">
    <div class="max-w-6xl mx-auto px-6">
      <div
        class="grid gap-10 md:gap-14 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start"
      >
        <!-- Quick start snippet rendered via @nuxt/content (Docus) -->
        <div class="rounded-xl overflow-hidden">
          <ContentRenderer
            v-if="quickstartSnippet"
            :value="quickstartSnippet"
          />
        </div>

        <!-- Explanation -->
        <div class="space-y-5 text-sm md:text-base theme-text">
          <p class="landing-eyebrow">
            Developer-friendly API
          </p>
          <h2 class="section-title">
            Ship calendar features, not calendar headaches.
          </h2>
          <p class="section-subtext">
            Connect schedules to your models and return accurate availability fast.
          </p>
          <p class="leading-relaxed text-sm md:text-base theme-text theme-text-muted">
            Zap gives you a <strong>clean, fluent API</strong> to <strong>enable booking on any model</strong>: define <strong>availability</strong>, add <strong>recurring rules</strong>, and return <strong>bookable slots</strong>.
          </p>
          <p class="leading-relaxed text-sm md:text-base theme-text theme-text-muted">
            Zap handles time logic so your team can focus on UX and growth.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
