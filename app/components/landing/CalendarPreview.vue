<template>
  <div class="w-full max-w-2xl mx-auto">
    <div
      ref="calendarWrapper"
      class="relative group calendar-wrapper"
      aria-label="Calendar preview showing today's events"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <!-- Enhanced glow effects -->
      <div class="pointer-events-none calendar-glow calendar-glow--primary" />
      <div class="pointer-events-none calendar-glow calendar-glow--secondary" />
      
      <!-- Explosion particles -->
      <div
        v-for="particle in explosionParticles"
        :key="particle.id"
        class="explosion-particle"
        :style="{
          left: particle.x + '%',
          top: particle.y + '%',
          '--angle': particle.angle + 'deg',
          animationDelay: particle.delay + 's'
        }"
      />
      
      <!-- Lightning bolt ZAP effect - GIGA EXPLOSION -->
      <div
        v-if="isExploding"
        class="zap-lightning zap-lightning--giga"
      >
        <!-- Main lightning bolts -->
        <div class="zap-lightning__bolt zap-lightning__bolt--1" />
        <div class="zap-lightning__bolt zap-lightning__bolt--2" />
        <div class="zap-lightning__bolt zap-lightning__bolt--3" />
        <div class="zap-lightning__bolt zap-lightning__bolt--4" />
        <div class="zap-lightning__bolt zap-lightning__bolt--5" />
        <!-- Explosion ring -->
        <div class="zap-explosion-ring zap-explosion-ring--1" />
        <div class="zap-explosion-ring zap-explosion-ring--2" />
        <div class="zap-explosion-ring zap-explosion-ring--3" />
        <!-- ZAP text -->
        <div class="zap-lightning__text">⚡ ZAP ⚡</div>
      </div>

      <!-- Calendar card -->
      <div
        class="relative calendar-card overflow-hidden"
      >
        <!-- Enhanced Header -->
        <div class="calendar-card__header px-6 py-5 relative overflow-hidden">
          <!-- Animated background pattern -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent" />
            <div class="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-white/10 blur-3xl" />
          </div>
          
          <div class="flex items-center justify-between relative z-10">
            <div>
              <p class="label-secondary tracking-wide">
                Today
              </p>
              <div class="flex items-baseline gap-2 mt-1">
                <h2 class="calendar-card__date">
                  November 24
                </h2>
                <span class="text-sm font-medium opacity-75">2025</span>
              </div>
            </div>
            <div
              ref="calendarIcon"
              class="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border-2 border-white/25 shadow-lg calendar-icon-wrapper cursor-pointer transition-all duration-300"
              @click="handleIconClick"
            >
              <!-- Icon sparkles -->
              <div
                v-for="i in 6"
                :key="'icon-sparkle-' + i"
                class="icon-sparkle"
                :style="{
                  '--angle': (i * 60) + 'deg',
                  animationDelay: (i * 0.1) + 's'
                }"
              />
              <UIcon
                name="i-heroicons-calendar-days"
                class="relative z-10 w-8 h-8 text-white transition-transform duration-300"
                :class="{ 'rotate-12 scale-110': iconClicked }"
              />
            </div>
          </div>
        </div>

        <!-- Events list -->
        <div class="p-6 space-y-3">
          <!-- Event 1 - Patient Appointment -->
          <div class="calendar-event calendar-event--primary">
            <div class="calendar-event__time calendar-event__time--primary">
              <div class="flex flex-col items-center">
                <span class="text-xs font-bold uppercase leading-tight">
                  9:00
                </span>
                <span class="text-[10px] opacity-75 mt-0.5">AM</span>
              </div>
            </div>
            <div class="calendar-event__body calendar-event__body--primary">
              <div class="flex items-start justify-between gap-2">
                <div class="flex-1">
                  <h3 class="font-bold text-base flex items-center gap-2 theme-text">
                    <span class="text-lg">🦷</span>
                    Sarah Johnson
                  </h3>
                  <p class="text-xs font-medium theme-text-muted mt-1">
                    Cleaning • 45 min
                  </p>
                  <div class="flex items-center gap-2 mt-1.5 text-xs theme-text-muted">
                    <span class="flex items-center gap-1">
                      <UIcon name="i-heroicons-map-pin" class="w-3 h-3" />
                      Room 2
                    </span>
                    <span class="flex items-center gap-1">
                      <UIcon name="i-heroicons-user" class="w-3 h-3" />
                      Dr. Smith
                    </span>
                  </div>
                </div>
                <div class="flex-shrink-0">
                  <div class="w-2 h-2 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 shadow-lg shadow-violet-500/50" />
                </div>
              </div>
            </div>
          </div>

          <!-- Event 2 - Clean Up Room (highlighted differently) -->
          <div class="calendar-event calendar-event--secondary">
            <div class="calendar-event__time calendar-event__time--secondary">
              <div class="flex flex-col items-center">
                <span class="text-xs font-bold uppercase leading-tight">
                  9:45
                </span>
                <span class="text-[10px] opacity-75 mt-0.5">AM</span>
              </div>
            </div>
            <div class="calendar-event__body calendar-event__body--secondary">
              <div class="flex items-start justify-between gap-2">
                <div class="flex-1">
                  <h3 class="font-bold text-base flex items-center gap-2 theme-text">
                    <span class="text-lg">🧹</span>
                    Clean Up Room 2
                  </h3>
                  <p class="text-xs font-medium theme-text-muted mt-1">
                    Sterilization • 15 min
                  </p>
                </div>
                <div class="flex-shrink-0">
                  <div class="w-2 h-2 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg shadow-orange-500/50" />
                </div>
              </div>
            </div>
          </div>

          <!-- Event 3 - Next Patient -->
          <div class="calendar-event calendar-event--primary">
            <div class="calendar-event__time calendar-event__time--primary">
              <div class="flex flex-col items-center">
                <span class="text-xs font-bold uppercase leading-tight">
                  10:00
                </span>
                <span class="text-[10px] opacity-75 mt-0.5">AM</span>
              </div>
            </div>
            <div class="calendar-event__body calendar-event__body--primary">
              <div class="flex items-start justify-between gap-2">
                <div class="flex-1">
                  <h3 class="font-bold text-base flex items-center gap-2 theme-text">
                    <span class="text-lg">🦷</span>
                    Mike Chen
                  </h3>
                  <p class="text-xs font-medium theme-text-muted mt-1">
                    Root Canal • 1h 30min
                  </p>
                  <div class="flex items-center gap-2 mt-1.5 text-xs theme-text-muted">
                    <span class="flex items-center gap-1">
                      <UIcon name="i-heroicons-map-pin" class="w-3 h-3" />
                      Room 2
                    </span>
                    <span class="flex items-center gap-1">
                      <UIcon name="i-heroicons-user" class="w-3 h-3" />
                      Dr. Smith
                    </span>
                  </div>
                </div>
                <div class="flex-shrink-0">
                  <div class="w-2 h-2 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 shadow-lg shadow-violet-500/50" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced Footer -->
        <div class="calendar-footer px-6 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="flex -space-x-1">
                <div class="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 border-2 border-white dark:border-zinc-900" />
                <div class="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 border-2 border-white dark:border-zinc-900" />
                <div class="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 border-2 border-white dark:border-zinc-900" />
              </div>
              <span class="text-sm font-semibold theme-text">
                3 events today
              </span>
            </div>
            <button class="link-button group/btn">
              View all
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const calendarWrapper = ref<HTMLElement | null>(null)
const calendarCard = ref<HTMLElement | null>(null)
const calendarIcon = ref<HTMLElement | null>(null)
const iconClicked = ref(false)
const clickCount = ref(0)
const isExploding = ref(false)

// Generate explosion particles
const explosionParticles = ref<Array<{id: number, x: number, y: number, angle: number, delay: number}>>([])

let mouseX = 0
let mouseY = 0
let currentX = 0
let currentY = 0
let animationFrame: number | null = null

const handleMouseMove = (e: MouseEvent) => {
  if (!calendarWrapper.value) return
  
  const rect = calendarWrapper.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  
  mouseX = (e.clientX - centerX) / rect.width
  mouseY = (e.clientY - centerY) / rect.height
  
  if (!animationFrame) {
    animationFrame = requestAnimationFrame(updatePosition)
  }
}

const updatePosition = () => {
  currentX += (mouseX - currentX) * 0.1
  currentY += (mouseY - currentY) * 0.1
  
  if (calendarCard.value) {
    const maxMove = 8
    const x = currentX * maxMove
    const y = currentY * maxMove
    
    calendarCard.value.style.transform = `translate(${x}px, ${y}px)`
  }
  
  if (Math.abs(mouseX - currentX) > 0.01 || Math.abs(mouseY - currentY) > 0.01) {
    animationFrame = requestAnimationFrame(updatePosition)
  } else {
    animationFrame = null
  }
}

const handleMouseLeave = () => {
  mouseX = 0
  mouseY = 0
  
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
    animationFrame = null
  }
  
  if (calendarCard.value) {
    const resetAnimation = () => {
      currentX += (0 - currentX) * 0.1
      currentY += (0 - currentY) * 0.1
      
      if (calendarCard.value) {
        const maxMove = 8
        const x = currentX * maxMove
        const y = currentY * maxMove
        
        calendarCard.value.style.transform = `translate(${x}px, ${y}px)`
      }
      
      if (Math.abs(currentX) > 0.01 || Math.abs(currentY) > 0.01) {
        requestAnimationFrame(resetAnimation)
      } else if (calendarCard.value) {
        calendarCard.value.style.transform = 'translate(0, 0)'
      }
    }
    requestAnimationFrame(resetAnimation)
  }
}

const handleIconClick = () => {
  iconClicked.value = true
  setTimeout(() => {
    iconClicked.value = false
  }, 300)
  
  clickCount.value++
  
  // Reset click count after 2 seconds if not reached 3
  setTimeout(() => {
    if (clickCount.value < 3) {
      clickCount.value = 0
    }
  }, 2000)
  
  // Trigger explosion on 3rd click
  if (clickCount.value === 3) {
    triggerExplosion()
    clickCount.value = 0
  }
}

const triggerExplosion = () => {
  if (isExploding.value) return
  
  isExploding.value = true
  
  // Generate 100 explosion particles for GIGA explosion
  const particles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: 50, // Start from center
    y: 50,
    angle: (i / 100) * 360 + Math.random() * 30 - 15, // Spread in all directions
    delay: Math.random() * 0.3
  }))
  
  explosionParticles.value = particles
  
  // Add shake effect to calendar wrapper
  if (calendarWrapper.value) {
    calendarWrapper.value.classList.add('exploding')
  }
  
  // Reset after animation
  setTimeout(() => {
    isExploding.value = false
    if (calendarWrapper.value) {
      calendarWrapper.value.classList.remove('exploding')
    }
    setTimeout(() => {
      explosionParticles.value = []
    }, 3000)
  }, 2000)
}

onMounted(() => {
  if (calendarWrapper.value) {
    const card = calendarWrapper.value.querySelector('.calendar-card') as HTMLElement
    if (card) {
      calendarCard.value = card
    }
  }
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>
