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
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

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
        <UButton
          color="neutral"
          variant="ghost"
          class="inline-flex items-center justify-center rounded-full"
          aria-label="Toggle color mode"
          @click="toggleColorMode"
        >
          <UIcon
            :name="colorMode.value === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'"
            class="w-5 h-5"
          />
        </UButton>

        <span
          v-if="!isLoading && formattedDownloads"
          class="text-sm font-mono text-neutral-600 dark:text-neutral-300"
        >
          {{ formattedDownloads }}
        </span>

        <UButton
          :to="githubUrl"
          target="_blank"
          rel="noopener"
          color="neutral"
          variant="ghost"
          class="inline-flex items-center gap-1.5"
          aria-label="GitHub"
        >
          <UIcon name="i-simple-icons-github" class="w-5 h-5" />
        </UButton>

        <UButton
          to="https://x.com/LudovicGuenet"
          target="_blank"
          rel="noopener"
          color="neutral"
          variant="ghost"
          class="inline-flex items-center gap-1.5"
          aria-label="X (Twitter)"
        >
          <UIcon name="i-simple-icons-x" class="w-5 h-5" />
        </UButton>

        <UButton
          to="mailto:ludo@epekta.com"
          color="neutral"
          variant="ghost"
          class="inline-flex items-center gap-1.5"
          aria-label="Contact"
        >
          <UIcon name="i-heroicons-envelope" class="w-5 h-5" />
        </UButton>

        <UButton
          to="/docs/getting-started/introduction"
          color="primary"
          variant="soft"
          class="inline-flex items-center gap-1.5"
          aria-label="Documentation"
        >
          <span class="text-sm font-medium">Documentation</span>
        </UButton>
      </div>
    </template>

    <template #body>
      <AppHeaderBody />
    </template>
  </UHeader>
</template>
