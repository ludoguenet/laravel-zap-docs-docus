export default defineNuxtConfig({
    extends: ['docus'],
    modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxt/eslint"
    ],
    css: ['~/assets/css/main.css'],
    colorMode: {
        preference: 'light',
        fallback: 'light',
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
                { name: 'description', content: 'A flexible, performant, and developer-friendly calendar management system for Laravel. Created by Ludovic Guénet.' },
                { name: 'keywords', content: 'Laravel, Calendar Management, PHP, Appointment Booking, Availability, Zap for Laravel' },
                { name: 'author', content: 'Ludovic Guénet' },

                // Open Graph / Facebook
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'Zap for Laravel - The Missing Calendar Management System For Laravel' },
                { property: 'og:description', content: 'A flexible, performant, and developer-friendly calendar management system for Laravel. Created by Ludovic Guénet.' },
                { property: 'og:image', content: '/social-card.png' },
                { property: 'og:url', content: 'https://zap-for-laravel.com' },
                { property: 'og:site_name', content: 'Zap for Laravel' },

                // Twitter Card
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'Zap for Laravel - The Missing Calendar Management System For Laravel' },
                { name: 'twitter:description', content: 'A flexible, performant, and developer-friendly calendar management system for Laravel. Created by Ludovic Guénet.' },
                { name: 'twitter:image', content: '/social-card.png' },
                { name: 'twitter:creator', content: '@LaravelJutsu' },
                { name: 'twitter:site', content: '@LaravelJutsu' },

                // Additional SEO
                { name: 'robots', content: 'index, follow' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'theme-color', content: '#f59e0b' },

                // PWA
                { name: 'mobile-web-app-capable', content: 'yes' },
                { name: 'apple-mobile-web-app-capable', content: 'yes' },
                { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
                { name: 'apple-mobile-web-app-title', content: 'Zap for Laravel' }
            ]
        }
    },
    content: {
        build: {
            markdown: {
            highlight: {
                    langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml', 'php']
                }
            }
        }
    }
})
