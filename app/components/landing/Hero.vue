<template>
  <section
    id="hero"
    class="bg-gradient-to-b from-[#fdf7e9] via-white to-white dark:from-[#201039] dark:via-[#2b1750] dark:to-[#2b1750] text-gray-800 dark:text-white"
  >
    <div
      class="max-w-6xl mx-auto px-6 py-20 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-20 lg:gap-28"
    >
      <!-- Animated schedule visual -->
      <div class="flex-1 flex justify-center md:justify-start">
        <div
          class="relative w-full max-w-md md:max-w-lg group"
          aria-hidden="true"
        >
          <div
            class="pointer-events-none absolute -inset-6 rounded-3xl bg-[#FDB927]/40 blur-3xl opacity-60"
          />
          <div
            class="relative rounded-3xl bg-white dark:bg-[#3a235f] border border-[#552583]/10 dark:border-[#FDB927]/25 shadow-xl p-6 md:p-7 transition-colors duration-200 group-hover:border-[#FDB927]/40"
          >
            <div
              class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-200"
            >
              <div class="flex flex-col">
                <span class="font-semibold">Today · Dr. Smith</span>
                <span class="text-[10px] text-gray-400 dark:text-gray-300">
                  Tuesday · 30 min consultations + 5 min buffer
                </span>
              </div>
              <span
                class="inline-flex items-center gap-1 rounded-full bg-[#FDB927]/20 text-[#552583] dark:bg-[#FDB927]/25 dark:text-[#2b1750] px-2.5 py-0.5 text-[10px] font-semibold"
              >
                Dr. Smith
              </span>
            </div>

            <div class="mt-5 space-y-3.5 text-xs md:text-[13px]">
              <div
                class="flex items-center gap-3.5 rounded-xl px-2 py-1 transition-colors duration-150 group-hover:bg-[#FDB927]/5"
              >
                <div
                  class="w-10 text-right text-gray-400 dark:text-gray-300"
                >
                  09:00
                </div>
                <div
                  class="flex-1 h-2.5 rounded-full bg-[#FDB927]/20 overflow-hidden"
                >
                  <div
                    class="h-2.5 rounded-full bg-[#FDB927] animate-pulse group-hover:animate-none"
                    style="width: 60%"
                  />
                </div>
                <span class="text-[11px] text-gray-600 dark:text-gray-100">
                  Consultation · New patient (09:00–09:30)
                </span>
              </div>

              <div
                class="flex items-center gap-3.5 rounded-xl px-2 py-1 transition-colors duration-150 group-hover:bg-[#552583]/5"
              >
                <div
                  class="w-10 text-right text-gray-400 dark:text-gray-300"
                >
                  09:30
                </div>
                <div
                  class="flex-1 h-2.5 rounded-full bg-[#552583]/15 dark:bg-[#552583]/40 overflow-hidden"
                >
                  <div
                    class="h-2.5 rounded-full bg-[#552583]"
                    style="width: 25%"
                  />
                </div>
                <span class="text-[11px] text-gray-600 dark:text-gray-100">
                  Buffer · Room clean‑up (5 min)
                </span>
              </div>

              <div
                class="flex items-center gap-3.5 rounded-xl px-2 py-1 transition-colors duration-150 group-hover:bg-[#FDB927]/5"
              >
                <div
                  class="w-10 text-right text-gray-400 dark:text-gray-300"
                >
                  09:35
                </div>
                <div
                  class="flex-1 h-2.5 rounded-full bg-[#FDB927]/20 overflow-hidden"
                >
                  <div
                    class="h-2.5 rounded-full bg-[#FDB927]"
                    style="width: 60%"
                  />
                </div>
                <span class="text-[11px] text-gray-600 dark:text-gray-100">
                  Consultation · Jane Doe (follow‑up)
                </span>
              </div>

              <div
                class="flex items-center gap-3.5 rounded-xl px-2 py-1 transition-colors duration-150 group-hover:bg-gray-100/60 group-hover:dark:bg-white/5"
              >
                <div
                  class="w-10 text-right text-gray-400 dark:text-gray-300"
                >
                  12:00
                </div>
                <div
                  class="flex-1 h-2.5 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden"
                >
                  <div
                    class="h-2.5 rounded-full bg-gray-300 dark:bg-white/30"
                    style="width: 100%"
                  />
                </div>
                <span class="text-[11px] text-gray-600 dark:text-gray-100">
                  Lunch break · Blocked
                </span>
              </div>
            </div>

            <div
              class="mt-4 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-200"
            >
              <span class="inline-flex items-center gap-1">
                <span class="h-2 w-2 rounded-full bg-[#FDB927]" />
                <span>Consultation</span>
              </span>
              <span class="inline-flex items-center gap-1">
                <span class="h-2 w-2 rounded-full bg-[#552583]" />
                <span>Buffer</span>
              </span>
              <span class="inline-flex items-center gap-1">
                <span
                  class="h-2 w-2 rounded-full bg-gray-300 dark:bg-white/60"
                />
                <span>Blocked</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Copy -->
      <div class="flex-1 text-center md:text-left space-y-6">
        <p
          class="text-xs font-semibold tracking-[0.3em] uppercase text-[#552583]/80 dark:text-[#FDB927]/80"
        >
          Open-source schedule engine for Laravel
        </p>
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white"
        >
          <span class="block">⚡ Laravel Zap</span>
        </h1>
        <p
          class="text-lg md:text-xl text-gray-600 dark:text-gray-200 max-w-xl md:max-w-2xl mx-auto md:mx-0"
        >
          Flexible schedule management for modern Laravel applications.
        </p>

        <!-- CTAs -->
        <div
          class="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2"
        >
          <a
            href="#install"
            class="inline-flex items-center gap-2 bg-[#FDB927] text-[#552583] font-semibold px-6 py-3 rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:bg-[#FFC72C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FDB927] focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#2b1750] transition transform"
            aria-label="Get started with Laravel Zap"
          >
            Get Started
          </a>
          <a
            href="/docs/getting-started/introduction"
            class="inline-flex items-center gap-2 border-2 border-[#552583] text-[#552583] dark:border-[#FDB927] dark:text-[#FDB927] px-6 py-3 rounded-lg font-semibold hover:-translate-y-0.5 hover:bg-[#552583] hover:text-white dark:hover:bg-[#FDB927] dark:hover:text-[#2b1750] shadow-sm transition transform"
            aria-label="View Laravel Zap documentation"
          >
            View Docs
          </a>
        </div>

        <!-- Tech badges -->
        <div
          class="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs font-medium pt-4"
        >
          <span
            class="inline-flex items-center rounded-full border border-[#FDB927]/40 bg-[#FDB927]/10 px-3 py-1 text-[#552583] dark:border-[#FDB927]/60 dark:bg-[#FDB927]/20 dark:text-[#2b1750]"
          >
            PHP 8.2+
          </span>
          <span
            class="inline-flex items-center rounded-full border border-[#FDB927]/40 bg-[#FDB927]/10 px-3 py-1 text-[#552583] dark:border-[#FDB927]/60 dark:bg-[#FDB927]/20 dark:text-[#2b1750]"
          >
            Laravel 11+
          </span>
          <span
            class="inline-flex items-center rounded-full border border-[#FDB927]/40 bg-[#FDB927]/10 px-3 py-1 text-[#552583] dark:border-[#FDB927]/60 dark:bg-[#FDB927]/20 dark:text-[#2b1750]"
          >
            MIT License
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
