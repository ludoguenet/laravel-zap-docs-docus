<script setup lang="ts">
const { data: installSnippet } = await useAsyncData('landing-install-snippet', () =>
  queryCollection('docs').path('/_snippets/install').first()
)
</script>

<template>
  <section id="install" class="landing-section py-16 md:py-20">
    <div class="max-w-6xl mx-auto px-6">
      <div class="max-w-3xl">
        <p class="landing-eyebrow">
          Install in seconds
        </p>
        <h2 class="mt-3 text-2xl md:text-3xl section-title">
          From composer install to bookable slots in three steps.
        </h2>
        <p class="mt-3 text-sm md:text-base section-subtext">
          Zap is a focused calendar engine for schedules on your existing models.
        </p>
      </div>

      <div
        class="mt-10 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start"
      >
        <!-- Three step mini-guide -->
        <ol class="space-y-6 text-sm theme-text">
          <li class="flex items-start gap-3">
            <span
              class="step-marker text-xs"
            >
              1
            </span>
            <div>
              <p class="font-semibold theme-text">
                Publish migrations
              </p>
              <p class="mt-1 text-xs theme-text-muted font-mono">
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
                Run the migrations
              </p>
              <p class="mt-1 text-xs theme-text-muted font-mono">
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
                Add the schedulable trait
              </p>
              <p class="mt-1 text-xs theme-text-muted font-mono">
                use Zap\\Concerns\\HasSchedules;
              </p>
            </div>
          </li>
        </ol>

        <!-- Install snippet rendered via @nuxt/content (Docus) -->
        <div class="rounded-xl overflow-hidden theme-card theme-border landing-snippet">
          <ContentRenderer
            v-if="installSnippet"
            :value="installSnippet"
          />
        </div>
      </div>
    </div>
  </section>
</template>
