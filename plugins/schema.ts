export default defineNuxtPlugin(() => {
  const route = useRoute()
  const appConfig = useAppConfig()
  const siteUrl = 'https://laravel-zap.com'

  // Base Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Laravel Zap',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Flexible schedule management for modern Laravel applications',
    sameAs: [
      'https://twitter.com/LudovicGuenet',
      'https://github.com/ludoguenet/laravel-zap',
    ],
  }

  // Website Schema with Search Action
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Laravel Zap',
    url: siteUrl,
    description: 'Flexible schedule management for modern Laravel applications',
    publisher: {
      '@type': 'Organization',
      name: 'Laravel Zap',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/docs?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  // Software Application Schema for Laravel Zap Package
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Laravel Zap',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'Laravel Zap: flexible calendar & scheduling for Laravel apps. Manage availabilities, appointments, blocked times and custom schedules.',
    url: siteUrl,
    codeRepository: 'https://github.com/ludoguenet/laravel-zap',
    programmingLanguage: 'PHP',
    runtimePlatform: 'Laravel',
    softwareVersion: 'Latest',
    author: {
      '@type': 'Person',
      name: 'Ludovic Guénet',
      url: 'https://twitter.com/LudovicGuenet',
    },
  }

  // Create documentation article schema for doc pages
  const createDocumentationSchema = (page: Record<string, unknown>) => {
    if (!page) return null

    const isDocPage = route.path.startsWith('/docs')
    if (!isDocPage) return null

    return {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: page.title || 'Laravel Zap Documentation',
      description: page.description || appConfig.docus.description,
      author: {
        '@type': 'Person',
        name: 'Ludovic Guénet',
        url: 'https://twitter.com/LudovicGuenet',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Laravel Zap',
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/logo.png`,
        },
      },
      datePublished: page._created || new Date().toISOString(),
      dateModified: page._modified || new Date().toISOString(),
      url: `${siteUrl}${route.path}`,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${siteUrl}${route.path}`,
      },
      articleSection: 'Documentation',
      inLanguage: 'en',
    }
  }

  // Create breadcrumb schema
  const createBreadcrumbSchema = () => {
    const pathSegments = route.path.split('/').filter(Boolean)

    if (pathSegments.length === 0) return null

    const items = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
    ]

    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      items.push({
        '@type': 'ListItem',
        position: index + 2,
        name: segment
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
        item: `${siteUrl}${currentPath}`,
      })
    })

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    }
  }

  // Watch route changes and update schema
  watch(
    () => route.path,
    () => {
      const schemas = [organizationSchema, websiteSchema, softwareSchema]

      // Add breadcrumb schema if not on homepage
      if (route.path !== '/') {
        const breadcrumbSchema = createBreadcrumbSchema()
        if (breadcrumbSchema) {
          schemas.push(breadcrumbSchema)
        }
      }

      useHead({
        script: schemas.map((schema) => ({
          type: 'application/ld+json',
          children: JSON.stringify(schema),
        })),
      })
    },
    { immediate: true },
  )

  // For documentation pages, we need to access page data
  // This will be updated in the page component
  return {
    provide: {
      addPageSchema: (page: Record<string, unknown>) => {
        const docSchema = createDocumentationSchema(page)
        if (docSchema) {
          useHead({
            script: [
              {
                type: 'application/ld+json',
                children: JSON.stringify(docSchema),
              },
            ],
          })
        }
      },
    },
  }
})
