<template>
  <div
    ref="target"
    :style="cssVars"
    :class="['rounded-xl p-[1.5px] shine', props.class || '']"
  >
    <div class="rounded-[calc(0.75rem-1.5px)] w-full h-full theme-card-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const props = defineProps<{
  class?: string
}>()

const target = ref<HTMLElement | null>(null)
const { elementX, elementY } = useMouseInElement(target)

const cssVars = computed(() => ({
  '--x': `${target.value ? elementX.value : -1000}px`,
  '--y': `${target.value ? elementY.value : -1000}px`,
}))
</script>

<style scoped>
.shine {
  background-image: radial-gradient(
    360px circle at var(--x) var(--y),
    color-mix(in srgb, var(--amber-500) 14%, transparent) 0,
    transparent 70%
  );
  border: 1px solid color-mix(in srgb, var(--color-border) 52%, transparent);
  box-shadow: 0 1px 2px rgb(15 23 42 / 0.02), 0 12px 28px rgb(15 23 42 / 0.06);
  transition: border-color 200ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-card-content {
  background-color: var(--color-card);
  color: var(--color-text);
  border: 1px solid color-mix(in srgb, var(--color-surface-elevated) 45%, transparent);
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.shine:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--color-border-strong) 62%, transparent);
  box-shadow: 0 2px 8px rgb(15 23 42 / 0.03), 0 18px 36px rgb(15 23 42 / 0.1);
}

html.dark .theme-card-content {
  background-color: color-mix(in srgb, var(--color-card) 98%, transparent);
}

html.dark .shine {
  background-image: radial-gradient(
    360px circle at var(--x) var(--y),
    color-mix(in srgb, var(--amber-500) 12%, transparent) 0,
    transparent 70%
  );
}
</style>
