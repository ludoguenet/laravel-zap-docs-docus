<script setup lang="ts">
const { data: installSnippet } = await useAsyncData('landing-install-snippet', () =>
  queryCollection('docs').path('/_snippets/install').first()
)
</script>

<template>
  <UPageSection
    id="install"
    headline="Go live faster"
    class="landing-section"
    :ui="{
      container: 'max-w-6xl py-0 sm:py-0 lg:py-0',
      header: 'max-w-3xl',
      headline: 'justify-start',
      title: 'text-left',
      description: 'text-left',
    }"
  >
    <template #title>
      From install to your first bookable calendar <span class="text-gradient">in minutes.</span>
    </template>

    <template #description>
      Add scheduling to your existing Laravel models without rebuilding your product architecture.
    </template>

    <template #body>
      <div class="grid gap-10 md:gap-14 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start">
        <!-- Three step mini-guide -->
        <ol class="step-list space-y-8 text-sm theme-text">
          <li class="flex items-start gap-3">
            <UBadge label="1" size="lg" variant="solid" color="primary" class="rounded-full size-8 shrink-0 justify-center p-0" />
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
            <UBadge label="2" size="lg" variant="solid" color="primary" class="rounded-full size-8 shrink-0 justify-center p-0" />
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
            <UBadge label="3" size="lg" variant="solid" color="primary" class="rounded-full size-8 shrink-0 justify-center p-0" />
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
    </template>
  </UPageSection>
</template>
