<template>
  <section
    id="examples"
    class="bg-white border-t border-gray-100 py-16 md:py-20"
  >
    <div class="max-w-6xl mx-auto px-6">
      <header class="text-center max-w-3xl mx-auto">
        <p
          class="text-xs font-semibold tracking-[0.3em] uppercase text-[#552583]/80"
        >
          Real-world use cases
        </p>
        <h2
          class="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900"
        >
          From doctors to meeting rooms to shift planning.
        </h2>
        <p class="mt-3 text-sm md:text-base text-gray-600">
          Zap focuses on generating and validating time slots for your models.
        </p>
      </header>

      <div class="mt-10 grid gap-6 md:gap-8 md:grid-cols-3 text-sm">
        <!-- Doctor appointments -->
        <article
          class="rounded-xl bg-[#f9fafb] border border-[#552583]/10 p-6 flex flex-col gap-3 shadow-sm"
        >
          <div class="flex items-center gap-3">
            <span
              class="flex h-9 w-9 items-center justify-center rounded-xl bg-[#552583]/10 text-[#552583]"
            >
              <UIcon name="i-heroicons-heart" class="w-5 h-5" />
            </span>
            <div>
              <p class="text-xs font-semibold text-[#FDB927] uppercase">
                Doctor appointments
              </p>
              <h3 class="text-sm font-semibold text-gray-900">
                Clinic &amp; telehealth booking
              </h3>
            </div>
          </div>
          <p class="text-gray-600">
            Model office hours and blocked days so Zap returns only bookable slots.
          </p>
        </article>

        <!-- Meeting rooms -->
        <article
          class="rounded-xl bg-[#f9fafb] border border-[#552583]/10 p-6 flex flex-col gap-3 shadow-sm"
        >
          <div class="flex items-center gap-3">
            <span
              class="flex h-9 w-9 items-center justify-center rounded-xl bg-[#552583]/10 text-[#552583]"
            >
              <UIcon name="i-heroicons-building-office-2" class="w-5 h-5" />
            </span>
            <div>
              <p class="text-xs font-semibold text-[#FDB927] uppercase">
                Meeting rooms
              </p>
              <h3 class="text-sm font-semibold text-gray-900">
                Rooms, pods &amp; shared spaces
              </h3>
            </div>
          </div>
          <p class="text-gray-600">
            Keep meeting rooms and shared spaces conflict‑free by design.
          </p>
        </article>

        <!-- Shift management -->
        <article
          class="rounded-xl bg-[#f9fafb] border border-[#552583]/10 p-6 flex flex-col gap-3 shadow-sm"
        >
          <div class="flex items-center gap-3">
            <span
              class="flex h-9 w-9 items-center justify-center rounded-xl bg-[#552583]/10 text-[#552583]"
            >
              <UIcon name="i-heroicons-users" class="w-5 h-5" />
            </span>
            <div>
              <p class="text-xs font-semibold text-[#FDB927] uppercase">
                Shift management
              </p>
              <h3 class="text-sm font-semibold text-gray-900">
                Teams, call rotations &amp; support
              </h3>
            </div>
          </div>
          <p class="text-gray-600">
            Describe shifts and time off once, then query who is available.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
