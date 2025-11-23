<script setup lang="ts">
import { ref } from 'vue'

const installCommand = 'composer require laraveljutsu/zap'

const isCopied = ref(false)

const copyInstallCommand = async () => {
  try {
    await navigator.clipboard.writeText(installCommand)
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
    id="install"
    class="bg-white border-t border-gray-100 py-16 md:py-20"
  >
    <div class="max-w-6xl mx-auto px-6">
      <div class="max-w-3xl">
        <p
          class="text-xs font-semibold tracking-[0.3em] uppercase text-[#552583]/80"
        >
          Install in seconds
        </p>
        <h2
          class="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900"
        >
          From composer install to bookable slots in three steps.
        </h2>
        <p class="mt-3 text-sm md:text-base text-gray-600">
          Laravel Zap ships as a focused calendar engine: install the package,
          publish the migrations, and start attaching schedules to your
          existing Eloquent models.
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
              <p class="font-semibold text-gray-900">
                Publish migrations
              </p>
              <p class="mt-1 text-xs text-gray-500 font-mono">
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
              <p class="font-semibold text-gray-900">
                Run the migrations
              </p>
              <p class="mt-1 text-xs text-gray-500 font-mono">
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
              <p class="font-semibold text-gray-900">
                Add the schedulable trait
              </p>
              <p class="mt-1 text-xs text-gray-500 font-mono">
                use Zap\\Concerns\\HasSchedules;
              </p>
            </div>
          </li>
        </ol>

        <!-- Install card with copy-to-clipboard -->
        <div
          class="relative rounded-xl bg-gray-900 text-gray-100 shadow-lg border border-gray-800 overflow-hidden"
        >
          <div
            class="flex items-center justify-between px-4 py-3 border-b border-gray-800"
          >
            <span class="text-xs font-mono text-gray-400">
              composer
            </span>
            <button
              type="button"
              class="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-gray-100 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDB927] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 transition"
              @click="copyInstallCommand"
              aria-label="Copy composer install command"
            >
              <UIcon name="i-heroicons-clipboard-document" class="w-3.5 h-3.5" />
              <span v-if="!isCopied">Copy</span>
              <span v-else>Copied</span>
            </button>
          </div>
          <pre class="px-4 pb-4 pt-3 text-sm font-mono overflow-x-auto">
<code class="language-bash">{{ installCommand }}</code>
          </pre>

          <div
            v-if="isCopied"
            class="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-[#FDB927] text-[#552583] px-3 py-1 text-xs font-semibold shadow-sm"
          >
            <span>Command copied</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
