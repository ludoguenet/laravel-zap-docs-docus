<template>
  <div
    ref="target"
    :style="cssVars"
    :class="['rounded-[15px] p-[2px] shine', props.class || '']"
  >
    <div class="rounded-[13px] w-full h-full theme-card-content">
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
    300px circle at var(--x) var(--y),
    var(--amber-500) 0,
    transparent 100%
  );
}

.theme-card-content {
  background-color: var(--color-card);
  color: var(--color-text);
}

html.dark .theme-card-content {
  background-color: color-mix(in srgb, var(--color-card) 95%, transparent);
}
</style>
