<template>
  <div class="w-full max-w-2xl mx-auto">
    <div
      class="calendar-wrapper"
      aria-label="Calendar preview showing today's events"
    >
      <!-- Calendar card -->
      <div class="calendar-card">
        <!-- Header -->
        <div class="calendar-card__header">
          <div class="flex items-center justify-between">
            <div>
              <p class="calendar-header__label">
                Today
              </p>
              <div class="flex items-baseline gap-2 mt-1">
                <h2 class="calendar-card__date">
                  March 15
                </h2>
                <span class="calendar-card__year">2026</span>
              </div>
            </div>
            <div class="calendar-icon-wrapper">
              <UIcon
                name="i-heroicons-calendar-days"
                class="w-4 h-4"
              />
            </div>
          </div>
        </div>

        <!-- Events list -->
        <div class="calendar-events">
          <!-- Event 1 - Patient Appointment -->
          <div class="calendar-event">
            <div class="calendar-event__time">
              <span class="calendar-event__time-value">9:00</span>
              <span class="calendar-event__time-period">AM</span>
            </div>
            <div class="calendar-event__body calendar-event__body--primary">
              <div class="calendar-event__content">
                <h3 class="calendar-event__title">
                  Emma Thompson
                </h3>
                <p class="calendar-event__description">
                  Cleaning • 45 min
                </p>
                <div class="calendar-event__metadata">
                  <span class="calendar-event__meta-item">
                    <UIcon name="i-heroicons-map-pin" class="w-3 h-3" />
                    Room 2
                  </span>
                  <span class="calendar-event__meta-item">
                    <UIcon name="i-heroicons-user" class="w-3 h-3" />
                    Dr. Williams
                  </span>
                </div>
              </div>
              <div class="calendar-event__indicator calendar-event__indicator--primary" />
            </div>
          </div>

          <!-- Event 2 - Clean Up Room -->
          <div class="calendar-event">
            <div class="calendar-event__time">
              <span class="calendar-event__time-value">9:45</span>
              <span class="calendar-event__time-period">AM</span>
            </div>
            <div class="calendar-event__body calendar-event__body--secondary">
              <div class="calendar-event__content">
                <h3 class="calendar-event__title">
                  Clean Up Room 2
                </h3>
                <p class="calendar-event__description">
                  Sterilization • 15 min
                </p>
              </div>
              <div class="calendar-event__indicator calendar-event__indicator--secondary" />
            </div>
          </div>

          <!-- Event 3 - Next Patient -->
          <div class="calendar-event">
            <div class="calendar-event__time">
              <span class="calendar-event__time-value">10:00</span>
              <span class="calendar-event__time-period">AM</span>
            </div>
            <div class="calendar-event__body calendar-event__body--primary">
              <div class="calendar-event__content">
                <h3 class="calendar-event__title">
                  James Anderson
                </h3>
                <p class="calendar-event__description">
                  Root Canal • 1h 30min
                </p>
                <div class="calendar-event__metadata">
                  <span class="calendar-event__meta-item">
                    <UIcon name="i-heroicons-map-pin" class="w-3 h-3" />
                    Room 2
                  </span>
                  <span class="calendar-event__meta-item">
                    <UIcon name="i-heroicons-user" class="w-3 h-3" />
                    Dr. Williams
                  </span>
                </div>
              </div>
              <div class="calendar-event__indicator calendar-event__indicator--primary" />
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="calendar-footer">
          <div class="flex items-center justify-between">
            <span class="calendar-footer__text">
              3 events today
            </span>
            <button class="calendar-footer__link">
              View all
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Pure visual component - no interactive logic needed
</script>
