import { computed } from 'vue'

export function useZapDownloads() {
  const downloadsTotal = useState<number | null>('zap-downloads-total', () => null)
  const isLoading = useState<boolean>('zap-downloads-loading', () => false)

  if (downloadsTotal.value === null && !isLoading.value) {
    isLoading.value = true

    $fetch<{ total: number | null }>('/api/zap-downloads')
      .then((response) => {
        if (typeof response?.total === 'number') {
          downloadsTotal.value = response.total
        }
      })
      .catch(() => {
        // Ignore errors; downloads are a nice-to-have UI detail.
      })
      .finally(() => {
        isLoading.value = false
      })
  }

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
    isLoading,
  }
}
