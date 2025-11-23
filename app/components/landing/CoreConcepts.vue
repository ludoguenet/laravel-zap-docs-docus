<script setup lang="ts">
const { data: installSnippet } = await useAsyncData('landing-install-snippet', () =>
  queryCollection('docs').path('/_snippets/install').first()
)
</script>

<template>
  <section
    id="install"
    class="bg-white dark:bg-[#2b1750] py-16 md:py-20"
  >
    <div class="max-w-6xl mx-auto px-6">
      <div class="max-w-3xl">
        <p
          class="text-xs font-semibold tracking-[0.3em] uppercase text-[#552583]/80 dark:text-[#FDB927]/80"
        >
          Install in seconds
        </p>
        <h2
          class="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text:white"
        >
          From composer install to bookable slots in three steps.
        </h2>
        <p class="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-200">
          Zap is a focused calendar engine for schedules on your existing models.
        </p>
      </div>

      <div
        class="mt-10 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start"
      >
        <!-- Three step mini-guide -->
        <ol class="space-y-6 text-sm">
          <li class="flex items-start gap-3">
            <span
              class="flex h-7 w-7 items-center justify-center rounded-full bg-[#552583] text-white text-xs font-semibold shadow-sm"
            >
              1
            </span>
            <div>
              <p class="font-semibold text-gray-900 dark:text-white">
                Publish migrations
              </p>
              <p class="mt-1 text-xs text-gray-500 dark:text-gray-300 font-mono">
                php artisan vendor:publish --tag="zap-migrations"
              </p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span
              class="flex h-7 w-7 items-center justify-center rounded-full bg-[#552583] text-white text-xs font-semibold shadow-sm"
            >
              2
            </span>
            <div>
              <p class="font-semibold text-gray-900 dark:text-white">
                Run the migrations
              </p>
              <p class="mt-1 text-xs text-gray-500 dark:text-gray-300 font-mono">
                php artisan migrate
              </p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span
              class="flex h-7 w-7 items-center justify-center rounded-full bg-[#552583] text-white text-xs font-semibold shadow-sm"
            >
              3
            </span>
            <div>
              <p class="font-semibold text-gray-900 dark:text-white">
                Add the schedulable trait
              </p>
              <p class="mt-1 text-xs text-gray-500 dark:text-gray-300 font-mono">
                use Zap\\Concerns\\HasSchedules;
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
