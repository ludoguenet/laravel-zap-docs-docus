<template>
  <UPageSection
    id="examples"
    headline="Proven in real products"
    class="landing-section landing-section--divider py-16 md:py-20"
    :ui="{
      container: 'max-w-6xl py-0 sm:py-0 lg:py-0',
      header: 'max-w-3xl mx-auto',
    }"
  >
    <template #title>
      One booking engine for <span class="text-gradient">every</span> scheduling use case.
    </template>

    <template #description>
      Use the same calendar foundation across healthcare, teams, and operations.
    </template>

    <template #body>
      <UPageGrid>
        <UPageCard variant="subtle" spotlight spotlight-color="secondary">
          <template #header>
            <p class="label-secondary">
              Doctor appointments
            </p>
          </template>
          <template #leading>
            <span class="icon-chip" style="background-color: color-mix(in srgb, #ef4444 8%, transparent); border-color: color-mix(in srgb, #ef4444 22%, transparent); color: #ef4444;">
              <UIcon name="i-heroicons-heart" class="w-5 h-5" />
            </span>
          </template>
          <template #title>
            Fill calendars, not admin queues
          </template>
          <template #description>
            Keep practitioner calendars accurate and show patients only slots they can actually book.
          </template>
        </UPageCard>

        <UPageCard variant="subtle" spotlight spotlight-color="secondary">
          <template #header>
            <p class="label-secondary">
              Meeting rooms
            </p>
          </template>
          <template #leading>
            <span class="icon-chip icon-chip--blue">
              <UIcon name="i-heroicons-building-office-2" class="w-5 h-5" />
            </span>
          </template>
          <template #title>
            Reliable room utilization
          </template>
          <template #description>
            Coordinate shared spaces with confidence and eliminate scheduling collisions.
          </template>
        </UPageCard>

        <UPageCard variant="subtle" spotlight spotlight-color="secondary">
          <template #header>
            <p class="label-secondary">
              Shift management
            </p>
          </template>
          <template #leading>
            <span class="icon-chip icon-chip--green">
              <UIcon name="i-heroicons-users" class="w-5 h-5" />
            </span>
          </template>
          <template #title>
            Clear shift coverage
          </template>
          <template #description>
            Plan rotations and time off once, then instantly check who is available.
          </template>
        </UPageCard>
      </UPageGrid>
    </template>
  </UPageSection>
</template>
