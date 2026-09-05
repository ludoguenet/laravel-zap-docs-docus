<template>
  <UPageSection
    id="features"
    headline="Why teams choose Laravel Zap"
    class="landing-section landing-section--divider landing-section--highlight"
    :ui="{
      container: 'max-w-6xl py-0 sm:py-0 lg:py-0',
      header: 'max-w-3xl',
      headline: 'justify-start',
      title: 'text-left',
      description: 'text-left',
    }"
  >
    <template #title>
      Everything you need to run a <span class="text-gradient">premium</span> booking calendar.
    </template>

    <template #description>
      Keep your scheduling logic in one reliable engine and deliver a smoother booking experience.
    </template>

    <template #body>
      <UPageGrid>
        <UPageCard variant="subtle" spotlight spotlight-color="primary" title="Availability that converts" description="Turn working hours, blocked periods, and appointments into clear bookable slots your users can trust.">
          <template #leading>
            <span class="icon-chip">
              <UIcon name="i-heroicons-calendar-days" class="w-5 h-5" />
            </span>
          </template>
        </UPageCard>

        <UPageCard variant="subtle" spotlight spotlight-color="primary" title="Conflict-free by default" description="Set overlap rules once and let Zap protect your calendar from double-bookings.">
          <template #leading>
            <span class="icon-chip icon-chip--blue">
              <UIcon name="i-heroicons-adjustments-horizontal" class="w-5 h-5" />
            </span>
          </template>
        </UPageCard>

        <UPageCard variant="subtle" spotlight spotlight-color="primary" title="Flexible slot strategy" description="Tailor durations, buffers, and filters to match how your business actually schedules.">
          <template #leading>
            <span class="icon-chip icon-chip--green">
              <UIcon name="i-heroicons-clock" class="w-5 h-5" />
            </span>
          </template>
        </UPageCard>
      </UPageGrid>
    </template>
  </UPageSection>
</template>
