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
      <UButton
        :to="githubUrl"
        target="_blank"
        rel="noopener"
        color="neutral"
        variant="ghost"
        class="inline-flex items-center gap-1.5"
      >
        <span
          v-if="!isLoading && formattedDownloads"
          class="inline-flex items-center text-sm text-neutral-600 font-mono"
        >
          {{ formattedDownloads }}
        </span>
        <UIcon name="i-simple-icons-github" class="w-5 h-5" />
      </UButton>
    </template>
  </UHeader>
</template>
