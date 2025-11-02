<template>
    <div class="relative isolate bg-gradient-to-b from-white to-amber-50/30 overflow-hidden">
    <!-- Ambient background effects -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"></div>
    </div>

    <div class="flex flex-col lg:grid py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 gap-12 sm:gap-y-16">
      <div class="text-center max-w-6xl mx-auto">

        <!-- Main headline -->
        <h1 class="mx-auto max-w-5xl font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1]">
          <span class="inline-block">
            The
            <span class="relative inline-block whitespace-nowrap text-amber-500">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                class="absolute top-[70%] left-0 h-[0.58em] w-full fill-amber-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span class="relative">Missing</span>
            </span>
          </span>
          <br />
          <span class="inline-block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            Calendar Management
          </span>
          <br />
          <span class="inline-block text-slate-800">
            System For Laravel
          </span>
        </h1>

        <!-- Description -->
        <p class="mx-auto mt-6 max-w-3xl text-lg sm:text-xl text-slate-600 leading-relaxed font-light">
          A flexible, performant, and developer-friendly calendar management
          system with deep Laravel integration and intuitive APIs.
        </p>

        <!-- CTA buttons -->
        <div class="mt-8 sm:mt-10 flex flex-wrap gap-4 justify-center items-center">
          <a
            class="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-xl text-white bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 focus:ring-2 ring-amber-400 focus:outline-none transition-all duration-200 ease-out hover:scale-105 active:scale-100"
            href="/getting-started/installation"
          >
            <span>Get Started</span>
            <svg
              class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>

          <a
            class="group inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-xl text-slate-700 bg-white hover:bg-slate-50 shadow-md hover:shadow-lg border border-slate-200 focus:ring-2 ring-slate-300 focus:outline-none transition-all duration-200 ease-out"
            href="https://github.com/ludoguenet/zap-for-laravel"
            rel="noopener"
            target="_blank"
          >
            <svg
              class="mr-2.5 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>Star on GitHub</span>
          </a>
        </div>

        <!-- Social proof -->
        <div class="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span class="font-medium">MIT Licensed</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span class="font-medium">Laravel 10+ Compatible</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span class="font-medium">Production Ready</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
