<template>
  <footer class="footer-shell py-12 md:py-16">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mb-12 items-start">
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <img
              src="/logo.png"
              class="h-14 w-auto"
              alt="Laravel Zap logo"
            >
            <div>
              <p class="text-sm font-semibold text-amber-600">Laravel Zap</p>
              <p class="text-sm theme-text-muted">Scheduling made calm and consistent.</p>
            </div>
          </div>
          <p class="text-sm theme-text-muted leading-relaxed">
            Build predictable schedules with minimal fuss. Zap stays out of your way while keeping your calendar logic reliable.
          </p>
          <div class="inline-flex items-center gap-2 px-3 py-2 rounded-full border theme-border bg-white/70 dark:bg-white/5 text-sm font-medium">
            <span class="h-2 w-2 rounded-full bg-amber-500" />
            <span>Production-ready & actively maintained</span>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold theme-text mb-4 uppercase tracking-wider">
              Learn
            </h3>
            <ul class="space-y-3">
              <li>
                <NuxtLink
                  to="/docs/getting-started/introduction"
                  class="footer-link text-sm block"
                >
                  Docs
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/docs/getting-started/quick-start"
                  class="footer-link text-sm block"
                >
                  Quickstart
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/docs/guides/schedule-patterns"
                  class="footer-link text-sm block"
                >
                  Guides
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/docs/guides/query-check"
                  class="footer-link text-sm block"
                >
                  API
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-sm font-semibold theme-text mb-4 uppercase tracking-wider">
              Support
            </h3>
            <ul class="space-y-3">
              <li>
                <a
                  href="https://github.com/ludoguenet/laravel-zap/issues"
                  target="_blank"
                  rel="noopener"
                  class="footer-link text-sm block"
                >
                  Issues
                </a>
              </li>
              <li>
                <a
                  href="mailto:ludo@epekta.com"
                  class="footer-link text-sm block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-sm font-semibold theme-text mb-4 uppercase tracking-wider">
              Social
            </h3>
            <ul class="space-y-3">
              <li>
                <a
                  href="https://x.com/LudovicGuenet"
                  target="_blank"
                  rel="noopener"
                  class="footer-link text-sm block"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ludoguenet/laravel-zap"
                  target="_blank"
                  rel="noopener"
                  class="footer-link text-sm block"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@LaravelJutsu"
                  target="_blank"
                  rel="noopener"
                  class="footer-link text-sm block"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t theme-border pt-8">
        <p class="text-xs theme-text-muted text-center">
          &copy; Laravel Zap {{ new Date().getFullYear() }}. All rights reserved. Powered by Nuxt.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Minimal footer */
</style>
