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
  <div class="inline-flex items-center gap-2">
    <span
      v-if="!isLoading && formattedDownloads"
      class="text-sm text-neutral-600 font-mono mt-1.5"
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
    >
      <UIcon name="i-simple-icons-github" class="w-5 h-5" />
    </UButton>
  </div>
</template>
  </UHeader>
</template>
