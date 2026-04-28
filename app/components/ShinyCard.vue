<template>
  <div :class="['glow-card', props.class || '']">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

<style scoped>
.glow-card {
  border-radius: 0.75rem;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.04), 0 8px 24px rgb(0 0 0 / 0.04);
  color: var(--color-text);
  transition:
    transform 260ms cubic-bezier(0.16, 1, 0.3, 1),
    border-color 260ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 260ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}

.glow-card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--amber-500) 55%, transparent);
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--amber-500) 12%, transparent),
    0 4px 16px color-mix(in srgb, var(--amber-500) 16%, transparent),
    0 20px 40px rgb(0 0 0 / 0.08);
}

html.dark .glow-card:hover {
  border-color: color-mix(in srgb, var(--amber-400) 50%, transparent);
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--amber-400) 10%, transparent),
    0 4px 16px color-mix(in srgb, var(--amber-400) 12%, transparent),
    0 20px 40px rgb(0 0 0 / 0.3);
}
</style>
