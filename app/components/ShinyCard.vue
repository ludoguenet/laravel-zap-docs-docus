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
    400px circle at var(--x) var(--y),
    color-mix(in srgb, var(--amber-500) 25%, transparent) 0,
    transparent 70%
  );
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-card-content {
  background-color: var(--color-card);
  color: var(--color-text);
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

html.dark .theme-card-content {
  background-color: color-mix(in srgb, var(--color-card) 98%, transparent);
}

html.dark .shine {
  background-image: radial-gradient(
    400px circle at var(--x) var(--y),
    color-mix(in srgb, var(--amber-500) 20%, transparent) 0,
    transparent 70%
  );
}
</style>
