<script setup lang="ts">
const { data: quickstartSnippet } = await useAsyncData(
  'landing-quickstart-snippet',
  () => queryCollection('docs').path('/_snippets/quickstart').first()
)
</script>

<template>
  <UPageSection
    id="api"
    orientation="horizontal"
    reverse
    headline="Developer-friendly API"
    class="landing-section landing-section--divider"
    :ui="{
      container: 'max-w-6xl py-0 sm:py-0 lg:py-0',
      headline: 'justify-start',
      title: 'text-left',
      description: 'text-left',
    }"
  >
    <template #title>
      Ship calendar <span class="text-gradient">features</span>, not calendar headaches.
    </template>

    <template #description>
      Connect schedules to your models and return accurate availability fast.
    </template>

    <template #body>
      <p class="leading-relaxed text-sm md:text-base theme-text-muted">
        Zap gives you a <strong>clean, fluent API</strong> to <strong>enable booking on any model</strong>: define <strong>availability</strong>, add <strong>recurring rules</strong>, and return <strong>bookable slots</strong>.
      </p>
      <p class="mt-4 leading-relaxed text-sm md:text-base theme-text-muted">
        Zap handles time logic so your team can focus on UX and growth.
      </p>
    </template>

    <!-- Quick start snippet rendered via @nuxt/content (Docus) -->
    <div class="rounded-xl overflow-hidden">
      <ContentRenderer
        v-if="quickstartSnippet"
        :value="quickstartSnippet"
      />
    </div>
  </UPageSection>
</template>
