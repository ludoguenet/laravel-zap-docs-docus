<template>
  <footer class="bg-[#2b1750] text-white py-10 md:py-12">
    <div class="max-w-6xl mx-auto px-6">
      <div
        class="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8"
      >
        <div class="text-center md:text-left">
          <p
            class="text-xs font-semibold tracking-[0.3em] uppercase text-[#FDB927]"
          >
            Laravel Zap
          </p>
          <p class="mt-2 text-sm text-violet-100">
            Flexible schedule management for modern Laravel applications.
          </p>
        </div>
        <nav
          class="flex flex-wrap items-center justify-center gap-4 text-sm font-medium"
        >
          <NuxtLink
            to="/docs/getting-started/introduction"
            class="text-violet-100 hover:text-white transition-colors"
          >
            Docs
          </NuxtLink>
          <a
            href="https://github.com/ludoguenet/laravel-zap"
            target="_blank"
            rel="noopener"
            class="text-violet-100 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:ludo@epekta.com"
            class="text-violet-100 hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>

      <div
        class="mt-8 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-violet-100/90"
      >
        <p>
          &copy; {{ new Date().getFullYear() }} Laravel Jutsu. Made with 💛 by Ludovic Guénet.
        </p>
        <p>Laravel Zap is MIT licensed. Docs built with Nuxt.</p>
      </div>
    </div>
  </footer>
</template>
