import { defineEventHandler } from 'h3'

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
    const response = await fetch('https://packagist.org/packages/laraveljutsu/zap.json')

    if (!response.ok) {
      return {
        total: null,
        monthly: null,
        daily: null,
      }
    }

    const data = (await response.json()) as PackagistResponse
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
