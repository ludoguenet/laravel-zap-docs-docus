<template>
  <footer class="footer-shell py-10 md:py-12">
    <div class="max-w-6xl mx-auto px-6">
      <div
        class="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 theme-text"
      >
        <div class="text-center md:text-left">
          <p class="landing-eyebrow text-[0.7rem]">
            Laravel Zap
          </p>
          <p class="mt-2 text-sm theme-text-muted">
            Flexible schedule management for modern Laravel applications.
          </p>
        </div>
        <nav
          class="flex flex-wrap items-center justify-center gap-4 text-sm font-medium"
        >
          <NuxtLink
            to="/docs/getting-started/introduction"
            class="footer-link transition-colors"
          >
            Docs
          </NuxtLink>
          <a
            href="https://github.com/ludoguenet/laravel-zap"
            target="_blank"
            rel="noopener"
            class="footer-link transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:ludo@epekta.com"
            class="footer-link transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>

      <div
        class="mt-8 border-t theme-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] theme-text-muted"
      >
        <p>
          &copy; {{ new Date().getFullYear() }} Laravel Jutsu. Made with 💛 by Ludovic Guénet.
        </p>
        <p>Laravel Zap is MIT licensed. Docs built with Nuxt.</p>
      </div>
    </div>
  </footer>
</template>
