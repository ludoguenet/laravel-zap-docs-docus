<template>
  <div class="w-full max-w-2xl mx-auto">
    <div
      class="relative group"
      aria-label="Calendar preview showing today's events"
    >
      <!-- Glow effect -->
      <div
        class="pointer-events-none absolute -inset-4 rounded-2xl bg-[#FDB927]/30 blur-2xl opacity-60"
      />
      
      <!-- Calendar card -->
      <div class="relative rounded-2xl bg-white border border-[#552583]/10 shadow-xl overflow-hidden">
        <!-- Header -->
        <div class="bg-gradient-to-r from-[#552583] to-[#6d47a0] px-6 py-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-[#FDB927] text-sm font-semibold uppercase tracking-wide">
                Today
              </p>
              <h2 class="text-white text-2xl font-bold mt-1">
                November 24
              </h2>
            </div>
            <div class="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 border-2 border-white/20">
              <UIcon name="i-heroicons-calendar-days" class="w-7 h-7 text-white" />
            </div>
          </div>
        </div>

        <!-- Events list -->
        <div class="p-6 space-y-4">
          <!-- Event 1 - Patient Appointment -->
          <div class="flex gap-4 group/item hover:scale-[1.02] transition-transform">
            <div class="flex flex-col items-center justify-center min-w-[60px] rounded-lg bg-amber-100 border border-amber-400 px-3 py-2">
              <span class="text-xs font-medium text-amber-800 uppercase">
                9:00
              </span>
              <span class="text-xs text-amber-700">AM</span>
            </div>
            <div class="flex-1 p-3 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-300">
              <h3 class="font-semibold text-amber-900 text-base flex items-center gap-2">
                🦷 Sarah Johnson - Cleaning
              </h3>
              <p class="text-sm text-amber-700 mt-0.5">
                45 minutes • Room 2 • Dr. Smith
              </p>
            </div>
          </div>

          <!-- Event 2 - Clean Up Room (highlighted differently) -->
          <div class="flex gap-4 group/item hover:scale-[1.02] transition-transform">
            <div class="flex flex-col items-center justify-center min-w-[60px] rounded-lg bg-slate-100 border border-slate-300 px-3 py-2">
              <span class="text-xs font-medium text-slate-700 uppercase">
                9:45
              </span>
              <span class="text-xs text-slate-600">AM</span>
            </div>
            <div class="flex-1 p-3 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-300">
              <h3 class="font-semibold text-slate-800 text-base flex items-center gap-2">
                🧹 Clean Up Room 2
              </h3>
              <p class="text-sm text-slate-600 mt-0.5">
                15 minutes • Sterilization
              </p>
            </div>
          </div>

          <!-- Event 3 - Next Patient -->
          <div class="flex gap-4 group/item hover:scale-[1.02] transition-transform">
            <div class="flex flex-col items-center justify-center min-w-[60px] rounded-lg bg-amber-100 border border-amber-400 px-3 py-2">
              <span class="text-xs font-medium text-amber-800 uppercase">
                10:00
              </span>
              <span class="text-xs text-amber-700">AM</span>
            </div>
            <div class="flex-1 p-3 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-300">
              <h3 class="font-semibold text-amber-900 text-base flex items-center gap-2">
                🦷 Mike Chen - Root Canal
              </h3>
              <p class="text-sm text-amber-700 mt-0.5">
                1 hour 30 min • Room 2 • Dr. Smith
              </p>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="border-t border-[#552583]/10 px-6 py-3 bg-gray-50/50">
          <div class="flex items-center justify-between text-sm">
            <span class="text-[#552583]/60 font-medium">
              3 events today
            </span>
            <button class="text-[#552583] font-semibold hover:text-[#FDB927] transition-colors inline-flex items-center gap-1">
              View all
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
