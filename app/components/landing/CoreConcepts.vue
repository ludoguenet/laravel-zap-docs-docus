<script setup lang="ts">
const { data: installSnippet } = await useAsyncData('landing-install-snippet', () =>
  queryCollection('docs').path('/_snippets/install').first()
)
</script>

<template>
  <section id="install" class="landing-section">
    <div class="max-w-6xl mx-auto px-6">
      <div class="max-w-3xl space-y-5">
        <p class="landing-eyebrow">
          Go live faster
        </p>
        <h2 class="section-title">
          From install to your first bookable calendar in minutes.
        </h2>
        <p class="section-subtext">
          Add scheduling to your existing Laravel models without rebuilding your product architecture.
        </p>
      </div>

      <div
        class="mt-16 grid gap-10 md:gap-14 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start"
      >
        <!-- Three step mini-guide -->
        <ol class="space-y-8 text-sm theme-text">
          <li class="flex items-start gap-3">
            <span
              class="step-marker text-xs"
            >
              1
            </span>
            <div>
              <p class="font-semibold theme-text">
                Set up the schema
              </p>
              <p class="mt-2 text-xs theme-text-muted font-mono">
                php artisan vendor:publish --tag="zap-migrations"
              </p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span
              class="step-marker text-xs"
            >
              2
            </span>
            <div>
              <p class="font-semibold theme-text">
                Apply and launch
              </p>
              <p class="mt-2 text-xs theme-text-muted font-mono">
                php artisan migrate
              </p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span
              class="step-marker text-xs"
            >
              3
            </span>
            <div>
              <p class="font-semibold theme-text">
                Activate scheduling
              </p>
              <p class="mt-2 text-xs theme-text-muted font-mono">
                use HasSchedules
              </p>
            </div>
          </li>
        </ol>

        <!-- Install snippet rendered via @nuxt/content (Docus) -->
        <div class="rounded-xl overflow-hidden">
          <ContentRenderer
            v-if="installSnippet"
            :value="installSnippet"
          />
        </div>
      </div>
    </div>
  </section>
</template>
