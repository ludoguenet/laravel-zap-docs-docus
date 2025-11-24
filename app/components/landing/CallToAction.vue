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
          <ul
            class="mt-2 space-y-2 text-sm theme-text list-none"
          >
            <li class="flex gap-2">
              <span class="accent-dot flex-shrink-0" />
              <p>
                <code class="inline-callout text-xs">
                  Zap::for($model)
                </code>
                <span>&nbsp;attaches a schedule to any model.</span>
              </p>
            </li>
            <li class="flex gap-2">
              <span class="accent-dot flex-shrink-0" />
              <p>
                <code class="inline-callout text-xs">
                  named('Office Hours')
                </code>
                <span>&nbsp;labels a schedule for later queries.</span>
              </p>
            </li>
            <li class="flex gap-2">
              <span class="accent-dot flex-shrink-0" />
              <p>
                <code class="inline-callout text-xs">
                  availability()
                </code>
                <span>
                  &nbsp;defines where bookings are allowed;
                  <code class="inline-callout text-xs">
                    appointment()
                  </code>
                  stores the bookings.
                </span>
              </p>
            </li>
            <li class="flex gap-2">
              <span class="accent-dot flex-shrink-0" />
              <p>
                <code class="inline-callout text-xs">
                  save()
                </code>
                <span>&nbsp;persists schedules for conflict checks and slots.</span>
              </p>
            </li>
          </ul>
          <p class="text-xs theme-text-muted">
            Zap handles time logic so your app can focus on UI and routes.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
