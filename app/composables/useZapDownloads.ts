import { useFetch } from 'nuxt/app'
import { computed } from 'vue'

interface ZapDownloadsResponse {
  total: number | null
  monthly?: number | null
  daily?: number | null
}

export function useZapDownloads() {
  // Client-only fetch so the count is fresh on each visit (no need to rebuild to update)
  const { data, pending } = useFetch<ZapDownloadsResponse>('/api/zap-downloads', {
    server: false,
    lazy: true,
    key: 'zap-downloads',
  })

  const downloadsTotal = computed<number | null>(() => data.value?.total ?? null)

  const formattedDownloads = computed(() => {
    if (downloadsTotal.value == null) {
      return ''
    }

    const total = downloadsTotal.value

    if (total >= 1_000_000) {
      return `${(total / 1_000_000).toFixed(1)}M`
    }

    if (total >= 1_000) {
      return `${(total / 1_000).toFixed(1)}k`
    }

    return total.toLocaleString()
  })

  return {
    downloadsTotal,
    formattedDownloads,
    isLoading: pending,
  }
}
