import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
    extends: ['docus'],
    modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/content", "@nuxt/eslint", "@nuxtjs/sitemap"],
    
    site: {
        url: 'https://laravel-zap.com',
    },
    
    sitemap: {
        strictNuxtContentPaths: true,
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
    },
    
    // Image optimization
    image: {
        quality: 80,
        format: ['webp', 'avif', 'png', 'jpg'],
    },
    app: {
        head: {
            link: [
                // Favicon
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
                { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
                // Apple Touch Icon
                { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
                // Web App Manifest
                { rel: 'manifest', href: '/site.webmanifest' }
            ],
            meta: [
                // Basic SEO
                {
                    name: 'description',
                    content:
                        'Laravel Zap: flexible calendar & scheduling for Laravel apps. Manage availabilities, appointments, blocked times and custom schedules.'
                },
                {
                    name: 'keywords',
                    content:
                        'Laravel Zap, Calendar Management, Scheduling, PHP, Appointment Booking, Availability, Laravel package'
                },
                { name: 'author', content: 'Ludovic Gu�net' },

                // Open Graph / Facebook
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'Laravel Zap  Flexible schedule management for Laravel' },
                {
                    property: 'og:description',
                    content:
                        'Laravel Zap: flexible calendar & scheduling for Laravel apps. Manage availabilities, appointments, blocked times and custom schedules.'
                },
                { property: 'og:image', content: 'https://laravel-zap.com/social-card.png' },
                { property: 'og:url', content: 'https://laravel-zap.com' },
                { property: 'og:site_name', content: 'Laravel Zap' },

                // Twitter Card
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'Laravel Zap  Flexible schedule management for Laravel' },
                {
                    name: 'twitter:description',
                    content:
                        'Laravel Zap: flexible calendar & scheduling for Laravel apps. Manage availabilities, appointments, blocked times and custom schedules.'
                },
                { name: 'twitter:image', content: 'https://laravel-zap.com/social-card.png' },
                { name: 'twitter:creator', content: '@LudovicGuenet' },
                { name: 'twitter:site', content: '@LudovicGuenet' },

                // Additional SEO
                { name: 'robots', content: 'index, follow' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'theme-color', content: '#7c3aed' },

                // PWA
                { name: 'mobile-web-app-capable', content: 'yes' },
                { name: 'apple-mobile-web-app-capable', content: 'yes' },
                { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
                { name: 'apple-mobile-web-app-title', content: 'Laravel Zap' }
            ]
        }
    },
    colorMode: {
        preference: 'light',
        fallback: 'light',
        classSuffix: ''
    },
    content: {
        build: {
            markdown: {
                highlight: {
                    theme: 'tokyo-night',
                    langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml', 'php']
                }
            }
        }
    }
})
