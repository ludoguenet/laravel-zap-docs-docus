import { defineEventHandler } from 'h3'
import { $fetch } from 'ofetch'

interface PackagistDownloads {
  total?: number
  monthly?: number
  daily?: number
}

interface PackagistResponse {
  package?: {
    downloads?: PackagistDownloads
  }
}

export default defineEventHandler(async () => {
  try {
    const data = (await $fetch<PackagistResponse>(
      'https://packagist.org/packages/laraveljutsu/zap.json',
      {
        method: 'GET',
      }
    )) as PackagistResponse
    const downloads = data.package?.downloads ?? {}

    return {
      total: downloads.total ?? null,
      monthly: downloads.monthly ?? null,
      daily: downloads.daily ?? null,
    }
  } catch {
    return {
      total: null,
      monthly: null,
      daily: null,
    }
  }
})
