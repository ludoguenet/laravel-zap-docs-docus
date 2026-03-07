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

export default defineEventHandler(async (event) => {
  // Allow CDN/browser to cache for 1 hour so we don't hit Packagist on every request
  setHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=600')

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
