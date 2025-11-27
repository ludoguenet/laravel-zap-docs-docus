<template>
  <footer class="footer-shell py-12 md:py-16">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Two column layout: Content left, Logo right -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-10 md:mb-12">
        <!-- Left: Logo, text and links -->
        <div>
          <!-- Logo and tagline -->
          <div class="mb-8">
            <div class="flex items-center mb-4">
              <img
                src="/logo.png"
                class="footer-logo-left"
                alt="Laravel Zap logo"
              >
            </div>
            <p class="text-sm theme-text-muted leading-relaxed mb-8">
              Developers report 42% fewer headaches after switching to Laravel Zap. Side effects may include cleaner code and random high fives.
            </p>
          </div>

          <!-- Three column navigation -->
          <div class="grid grid-cols-3 gap-6 md:gap-8">
            <!-- Learn -->
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

            <!-- Discuss -->
            <div>
              <h3 class="text-sm font-semibold theme-text mb-4 uppercase tracking-wider">
                Discuss
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
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <!-- Social -->
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

        <!-- Right: Decorative elements spreading from left to right -->
        <div class="hidden md:block relative" style="min-height: 220px;">
          <div class="footer-logo-wrapper relative h-full">
            <!-- Decorative gradient circles spreading from left to right -->
            <div class="footer-decoration footer-decoration--1" />
            <div class="footer-decoration footer-decoration--2" />
            <div class="footer-decoration footer-decoration--3" />
          </div>
        </div>
      </div>

      <!-- Bottom copyright -->
      <div class="border-t theme-border pt-6">
        <p class="text-xs theme-text-muted text-center">
          &copy; Laravel Zap {{ new Date().getFullYear() }}. All rights reserved. Powered by Nuxt.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-logo-left {
  height: 140px;
  width: auto;
  opacity: 1;
  filter: drop-shadow(0 8px 24px rgba(167, 139, 250, 0.3)) drop-shadow(0 4px 16px rgba(251, 146, 60, 0.2));
}

html.dark .footer-logo-left {
  filter: drop-shadow(0 10px 30px rgba(167, 139, 250, 0.5)) drop-shadow(0 6px 20px rgba(251, 146, 60, 0.4));
  opacity: 1;
}

.footer-logo-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 220px;
}

/* Fancy decorative elements */
.footer-decoration {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

.footer-decoration--1 {
  width: 220px;
  height: 220px;
  background: radial-gradient(
    circle,
    rgba(167, 139, 250, 0.5) 0%,
    rgba(167, 139, 250, 0.35) 25%,
    rgba(167, 139, 250, 0.2) 50%,
    rgba(167, 139, 250, 0.1) 70%,
    transparent 85%
  );
  top: -25%;
  left: 0%;
  filter: blur(45px);
  animation: footer-float-1 6s ease-in-out infinite;
  opacity: 0.85;
}

.footer-decoration--2 {
  width: 180px;
  height: 180px;
  background: radial-gradient(
    circle,
    rgba(251, 146, 60, 0.6) 0%,
    rgba(251, 146, 60, 0.4) 25%,
    rgba(251, 146, 60, 0.25) 50%,
    rgba(251, 146, 60, 0.15) 70%,
    transparent 85%
  );
  bottom: -20%;
  left: 50%;
  transform: translateX(-50%);
  filter: blur(40px);
  animation: footer-float-2 5s ease-in-out infinite 1s;
  opacity: 0.8;
}

.footer-decoration--3 {
  width: 160px;
  height: 160px;
  background: radial-gradient(
    circle,
    rgba(167, 139, 250, 0.45) 0%,
    rgba(251, 146, 60, 0.35) 30%,
    rgba(167, 139, 250, 0.25) 50%,
    rgba(251, 146, 60, 0.15) 70%,
    transparent 85%
  );
  top: 50%;
  right: 0%;
  transform: translateY(-50%);
  filter: blur(38px);
  animation: footer-float-3 7s ease-in-out infinite 0.5s;
  opacity: 0.75;
}

html.dark .footer-decoration--1 {
  background: radial-gradient(
    circle,
    rgba(167, 139, 250, 0.6) 0%,
    rgba(167, 139, 250, 0.45) 25%,
    rgba(167, 139, 250, 0.3) 50%,
    rgba(167, 139, 250, 0.2) 70%,
    transparent 85%
  );
  opacity: 0.95;
  filter: blur(50px);
}

html.dark .footer-decoration--2 {
  background: radial-gradient(
    circle,
    rgba(251, 146, 60, 0.7) 0%,
    rgba(251, 146, 60, 0.55) 25%,
    rgba(251, 146, 60, 0.4) 50%,
    rgba(251, 146, 60, 0.25) 70%,
    transparent 85%
  );
  opacity: 0.9;
  filter: blur(45px);
}

html.dark .footer-decoration--3 {
  background: radial-gradient(
    circle,
    rgba(167, 139, 250, 0.55) 0%,
    rgba(251, 146, 60, 0.45) 30%,
    rgba(167, 139, 250, 0.35) 50%,
    rgba(251, 146, 60, 0.25) 70%,
    transparent 85%
  );
  opacity: 0.85;
  filter: blur(43px);
}

@keyframes footer-float-1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translate(-10px, -15px) scale(1.1);
    opacity: 0.8;
  }
}

@keyframes footer-float-2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(15px, -10px) scale(1.15);
    opacity: 0.7;
  }
}

@keyframes footer-float-3 {
  0%, 100% {
    transform: translateY(-50%) translateX(0) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-60%) translateX(-8px) scale(1.2);
    opacity: 0.6;
  }
}
</style>
