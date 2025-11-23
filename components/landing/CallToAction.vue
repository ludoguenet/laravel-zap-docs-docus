<script setup lang="ts">
import { ref } from 'vue'

const quickStartSnippet = `use Zap\\Facades\\Zap;

Zap::for($doctor)
    ->named('Office Hours')
    ->availability()
    ->forYear(2025)
    ->addPeriod('09:00', '12:00')
    ->addPeriod('14:00', '17:00')
    ->weekly(['monday', 'tuesday', 'wednesday', 'thursday', 'friday'])
    ->save();`

const isCopied = ref(false)

const copyQuickStart = async () => {
  try {
    await navigator.clipboard.writeText(quickStartSnippet)
    isCopied.value = true
    window.setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (error) {
    // Swallow clipboard errors – copying is a progressive enhancement
  }
}
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
        <!-- Code block -->
        <div
          class="relative rounded-xl bg-gray-900 text-gray-100 border border-gray-800 shadow-lg overflow-hidden"
        >
          <div
            class="flex items-center justify-between px-4 py-3 border-b border-gray-800"
          >
            <div class="flex items-center gap-2 text-xs text-gray-400">
              <span
                class="inline-flex h-2 w-2 rounded-full"
              />
              <span class="font-mono">quick-start.php</span>
            </div>
            <button
              type="button"
              class="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-gray-100 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDB927] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 transition"
              @click="copyQuickStart"
              aria-label="Copy Zap quick start snippet"
            >
              <UIcon name="i-heroicons-clipboard-document" class="w-3.5 h-3.5" />
              <span v-if="!isCopied">Copy</span>
              <span v-else>Copied</span>
            </button>
          </div>
          <pre class="px-4 pb-4 pt-3 text-sm font-mono leading-relaxed overflow-x-auto"><code class="language-php">{{ quickStartSnippet }}</code></pre>

          <div
            v-if="isCopied"
            class="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-[#FDB927] text-[#552583] px-3 py-1 text-xs font-semibold shadow-sm"
          >
            <span>Quick start copied</span>
          </div>
        </div>

        <!-- Explanation -->
        <div class="space-y-4 md:space-y-5 text-sm md:text-base">
          <p
            class="text-xs font-semibold tracking-[0.3em] uppercase text-[#552583]/80 dark:text-[#FDB927]/80"
          >
            API &amp; quick start
          </p>
          <h2
            class="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            A tiny, expressive API for real calendars.
          </h2>
          <p class="text-gray-600 dark:text-gray-200">
            Zap builds on concepts Laravel developers already know: fluent
            builders, expressive method names and powerful query scopes. You
            attach schedules to any model and ask Zap for what is available.
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
                <span>
                  &nbsp;attaches a schedule to any Eloquent model.
                </span>
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
                <span>
                  &nbsp;labels a schedule so you can query it later.
                </span>
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
                  &nbsp;declares where bookings are allowed; use
                  <code class="font-mono text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                    appointment()
                  </code>
                  for the bookings themselves.
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
                <span>
                  &nbsp;persists your schedule; Zap will then resolve
                  conflicts and compute slots on demand.
                </span>
              </p>
            </li>
          </ul>
          <p class="text-xs text-gray-500 dark:text-gray-300">
            You stay in control of routing and UI; Zap focuses purely on when a
            thing can or cannot happen.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
