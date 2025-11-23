<template>
  <section
    id="features"
    class="bg-[#f9fafb] dark:bg-[#24123f] border-t border-gray-100 dark:border-[#552583]/40 py-16 md:py-20"
  >
    <div class="max-w-6xl mx-auto px-6">
      <header class="max-w-3xl">
        <p
          class="text-xs font-semibold tracking-[0.3em] uppercase text-[#552583]/80 dark:text-[#FDB927]/80"
        >
          Built for real scheduling problems
        </p>
        <h2
          class="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text:white"
        >
          A single engine for availabilities, conflicts and time slots.
        </h2>
        <p class="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-200">
          Zap keeps scheduling rules in one place so your app stays predictable.
        </p>
      </header>

      <!-- Feature grid -->
      <div
        class="mt-10 grid gap-6 md:gap-8 md:grid-cols-3 text-sm md:text-base"
      >
        <article
          class="rounded-xl bg-white dark:bg-[#321a57] shadow-lg border border-[#552583]/10 dark:border-[#FDB927]/20 p-6 flex flex-col gap-3"
        >
          <div class="flex items-center gap-3">
            <span
              class="flex h-9 w-9 items-center justify-center rounded-xl bg-[#552583]/10 text-[#552583] dark:bg-[#FDB927]/15 dark:text-[#FDB927]"
            >
              <UIcon name="i-heroicons-calendar-days" class="w-5 h-5" />
            </span>
            <h3
              class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2"
            >
              Availabilities &amp; Appointments
              <span
                class="h-1 w-6 rounded-full bg-[#FDB927] inline-block"
                aria-hidden="true"
              />
            </h3>
          </div>
          <p class="text-gray-600 dark:text-gray-200 text-sm">
            Describe working hours, blocked periods and bookings with a fluent API.
          </p>
        </article>

        <article
          class="rounded-xl bg-white dark:bg-[#321a57] shadow-lg border border-[#552583]/10 dark:border-[#FDB927]/20 p-6 flex flex-col gap-3"
        >
          <div class="flex items-center gap-3">
            <span
              class="flex h-9 w-9 items-center justify-center rounded-xl bg-[#552583]/10 text-[#552583] dark:bg-[#FDB927]/15 dark:text-[#FDB927]"
            >
              <UIcon name="i-heroicons-adjustments-horizontal" class="w-5 h-5" />
            </span>
            <h3
              class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2"
            >
              Overlap rules &amp; conflicts
              <span
                class="h-1 w-6 rounded-full bg-[#FDB927] inline-block"
                aria-hidden="true"
              />
            </h3>
          </div>
          <p class="text-gray-600 dark:text-gray-200 text-sm">
            Define which schedules may overlap and let Zap handle conflicts.
          </p>
        </article>

        <article
          class="rounded-xl bg-white dark:bg-[#321a57] shadow-lg border border-[#552583]/10 dark:border-[#FDB927]/20 p-6 flex flex-col gap-3"
        >
          <div class="flex items-center gap-3">
            <span
              class="flex h-9 w-9 items-center justify-center rounded-xl bg-[#552583]/10 text-[#552583] dark:bg-[#FDB927]/15 dark:text-[#FDB927]"
            >
              <UIcon name="i-heroicons-clock" class="w-5 h-5" />
            </span>
            <h3
              class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2"
            >
              Time slots &amp; buffers
              <span
                class="h-1 w-6 rounded-full bg-[#FDB927] inline-block"
                aria-hidden="true"
              />
            </h3>
          </div>
          <p class="text-gray-600 dark:text-gray-200 text-sm">
            Generate bookable slots with flexible durations, gaps and filters.
          </p>
        </article>
      </div>

      <!-- (Calendar demo removed for clarity) -->
    </div>
  </section>
</template>
