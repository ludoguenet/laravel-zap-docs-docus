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
    },
    
    // Performance optimizations
    vite: {
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
                // Basic SEO
                {
                    name: 'description',
                    content:
                        'Laravel Zap provides flexible calendar & scheduling for modern Laravel apps. Manage availabilities, appointments, blocked times and custom schedules effortlessly.'
                },
                {
                    name: 'keywords',
                    content:
                        'Laravel Zap, Laravel calendar, Laravel scheduling, PHP scheduling, Laravel appointments, availability management, bookable time slots, PHP package'
                },
                { name: 'author', content: 'Ludovic Guénet' },

                // Open Graph / Facebook
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'Laravel Zap - Flexible schedule management for Laravel' },
                {
                    property: 'og:description',
                    content:
                        'Laravel Zap provides flexible calendar & scheduling for modern Laravel apps. Manage availabilities, appointments, blocked times and custom schedules effortlessly.'
                },
                { property: 'og:image', content: 'https://laravel-zap.com/social-card.png' },
                { property: 'og:url', content: 'https://laravel-zap.com' },
                { property: 'og:site_name', content: 'Laravel Zap' },

                // Twitter Card
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'Laravel Zap - Flexible schedule management for Laravel' },
                {
                    name: 'twitter:description',
                    content:
                        'Laravel Zap provides flexible calendar & scheduling for modern Laravel apps. Manage availabilities, appointments, blocked times and custom schedules effortlessly.'
                },
                { name: 'twitter:image', content: 'https://laravel-zap.com/social-card.png' },
                { name: 'twitter:creator', content: '@LudovicGuenet' },
                { name: 'twitter:site', content: '@LudovicGuenet' },

                // Additional SEO
                { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
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
