<script setup lang="ts">
import { computed } from 'vue'

const appConfig = useAppConfig()
const site = useSiteConfig()

const githubUrl = computed(() => {
  const repo = appConfig.docus?.github?.repo

  if (repo && typeof repo === 'string') {
    return `https://github.com/${repo}`
  }

  return 'https://github.com/ludoguenet/laravel-zap'
})

const colorMode = useColorMode()

const toggleColorMode = () => {
  // Cycle through: system → light → dark → system
  if (colorMode.preference === 'system') {
    colorMode.preference = 'light'
  } else if (colorMode.preference === 'light') {
    colorMode.preference = 'dark'
  } else {
    colorMode.preference = 'system'
  }
}

const colorModeIcon = computed(() => {
  if (colorMode.preference === 'system') {
    return 'i-heroicons-computer-desktop'
  } else if (colorMode.preference === 'light') {
    return 'i-heroicons-sun'
  } else {
    return 'i-heroicons-moon'
  }
})

const { formattedDownloads, isLoading } = useZapDownloads()
</script>

<template>
  <UHeader
    :ui="{ center: 'flex-1' }"
    to="/"
    :title="appConfig.header?.title || site.name"
  >
    <AppHeaderCenter />

    <template #title>
      <AppHeaderLogo />
    </template>

    <template #right>
      <div class="inline-flex items-center gap-2">
        <div
          v-if="!isLoading && formattedDownloads"
          class="header-downloads hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-gray-200/80 dark:border-gray-800/80 bg-white/70 dark:bg-white/5 text-xs font-medium"
        >
          <UIcon name="i-heroicons-arrow-down-tray" class="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          <span>{{ formattedDownloads }}</span>
        </div>

        <UButton
          :to="githubUrl"
          target="_blank"
          rel="noopener"
          color="neutral"
          variant="ghost"
          class="header-icon-button inline-flex items-center gap-2"
          aria-label="GitHub"
        >
          <UIcon name="i-simple-icons-github" class="w-4 h-4" />
        </UButton>

        <!-- Hidden on mobile/tablet, shown on desktop -->
        <UButton
          to="https://x.com/LudovicGuenet"
          target="_blank"
          rel="noopener"
          color="neutral"
          variant="ghost"
          class="header-icon-button hidden lg:inline-flex items-center gap-2"
          aria-label="X (Twitter)"
        >
          <UIcon name="i-simple-icons-x" class="w-4 h-4" />
        </UButton>

        <UButton
          color="neutral"
          variant="ghost"
          class="header-icon-button inline-flex items-center justify-center"
          :aria-label="`Color mode: ${colorMode.preference}`"
          @click="toggleColorMode"
        >
          <UIcon
            :name="colorModeIcon"
            class="w-4 h-4"
          />
        </UButton>
      </div>
    </template>

    <template #body>
      <AppHeaderBody />
    </template>
  </UHeader>
</template>
