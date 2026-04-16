import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
    extends: ['docus'],
    modules: [
        "@nuxt/ui",
        "@nuxt/image",
        "@nuxt/content",
        "@nuxt/eslint",
        "@nuxtjs/seo" // Includes Sitemap, Robots, Schema.org, OG Image, SEO Meta
    ],

    site: {
        url: 'https://laravel-zap.com',
        name: 'Laravel Zap',
        description: 'Flexible schedule management for modern Laravel applications.',
        defaultLocale: 'en',
        trailingSlash: false,
    },

    // Nuxt SEO module configuration
    robots: {
        credits: false,
        disallow: ['/api/**'],
        sitemap: ['https://laravel-zap.com/sitemap.xml'],
    },
    sitemap: {
        credits: false,
        autoLastmod: true,
        discoverImages: true,
    },
    schemaOrg: {
        identity: {
            type: 'Organization',
            name: 'Laravel Zap',
            url: 'https://laravel-zap.com',
            logo: 'https://laravel-zap.com/logo.png',
            sameAs: [
                'https://github.com/ludoguenet/laravel-zap',
                'https://twitter.com/LudovicGuenet',
            ],
        },
    },
    ogImage: {
        enabled: true,
    },

    // Use layer-relative alias so Nuxt resolves from /app
    css: ['~/assets/css/main.css'],

    // Production optimizations
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/'],
        },
        compressPublicAssets: true,
        minify: true,
    },

    // Build optimizations
    experimental: {
        payloadExtraction: true,
        serverAppConfig: false,
    },

    // Performance optimizations
    vite: {
        optimizeDeps: {
            include: [
                '@vue/devtools-core',
                '@vue/devtools-kit',
                '@unhead/schema-org/vue',
                '@vueuse/core',
            ]
        },
        build: {
            cssCodeSplit: true,
            rollupOptions: {
                output: {
                    manualChunks: {
                        'vue-vendor': ['vue'],
                    },
                },
            },
        },
    },

    // Image optimization
    image: {
        quality: 80,
        format: ['webp', 'avif', 'png', 'jpg'],
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            link: [
                // Favicon
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
                { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
                // Apple Touch Icon
                { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
                // Web App Manifest
                { rel: 'manifest', href: '/site.webmanifest' },
                // Preconnect to Google Fonts (if used by docus or UI)
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
            ],
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'theme-color', content: '#f59e0b' },

                // PWA
                { name: 'mobile-web-app-capable', content: 'yes' },
                { name: 'apple-mobile-web-app-capable', content: 'yes' },
                { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
                { name: 'apple-mobile-web-app-title', content: 'Laravel Zap' }
            ]
        }
    },
    colorMode: {
        preference: 'system',
        fallback: 'light',
        classSuffix: ''
    },
    content: {
        build: {
            markdown: {
                highlight: {
                    theme: {
                        light: 'material-theme-lighter',
                        dark: 'material-theme-palenight'
                    },
                    langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml', 'php']
                }
            }
        }
    }
})
