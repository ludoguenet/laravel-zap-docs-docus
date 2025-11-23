<script setup lang="ts">
const { data: quickstartSnippet } = await useAsyncData(
  'landing-quickstart-snippet',
  () => queryCollection('docs').path('/_snippets/quickstart').first()
)
</script>

<template>
  <section
    id="api"
    class="bg-[#f9fafb] dark:bg-[#24123f] border-t border-gray-100 dark:border-[#552583]/40 py-16 md:py-20"
  >
    <div class="max-w-6xl mx-auto px-6">
      <div
        class="grid gap-10 md:gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start"
      >
        <!-- Quick start snippet rendered via @nuxt/content (Docus) -->
        <div class="rounded-xl overflow-hidden">
          <ContentRenderer
            v-if="quickstartSnippet"
            :value="quickstartSnippet"
          />
        </div>

        <!-- Explanation -->
        <div class="space-y-4 md:space-y-5 text-sm md:text-base">
          <p
            class="text-xs font-semibold tracking-[0.3em] uppercase text-[#552583]/80 dark:text-[#FDB927]/80"
          >
            API &amp; quick start
          </p>
          <h2
            class="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text:white"
          >
            A tiny API for real calendars.
          </h2>
          <p class="text-gray-600 dark:text-gray-200">
            Attach schedules to your models and let Zap answer what is available.
          </p>
          <ul
            class="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-200 list-none"
          >
            <li class="flex gap-2">
              <span
                class="mt-1 h-1.5 w-1.5 rounded-full bg-[#FDB927] flex-shrink-0"
              />
              <p>
                <code class="font-mono text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
                  Zap::for($model)
                </code>
                <span>&nbsp;attaches a schedule to any model.</span>
              </p>
            </li>
            <li class="flex gap-2">
              <span
                class="mt-1 h-1.5 w-1.5 rounded-full bg-[#FDB927] flex-shrink-0"
              />
              <p>
                <code class="font-mono text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
                  named('Office Hours')
                </code>
                <span>&nbsp;labels a schedule for later queries.</span>
              </p>
            </li>
            <li class="flex gap-2">
              <span
                class="mt-1 h-1.5 w-1.5 rounded-full bg-[#FDB927] flex-shrink-0"
              />
              <p>
                <code class="font-mono text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
                  availability()
                </code>
                <span>
                  &nbsp;defines where bookings are allowed;
                  <code class="font-mono text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                    appointment()
                  </code>
                  stores the bookings.
                </span>
              </p>
            </li>
            <li class="flex gap-2">
              <span
                class="mt-1 h-1.5 w-1.5 rounded-full bg-[#FDB927] flex-shrink-0"
              />
              <p>
                <code class="font-mono text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
                  save()
                </code>
                <span>&nbsp;persists schedules for conflict checks and slots.</span>
              </p>
            </li>
          </ul>
          <p class="text-xs text-gray-500 dark:text-gray-300">
            Zap handles time logic so your app can focus on UI and routes.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
