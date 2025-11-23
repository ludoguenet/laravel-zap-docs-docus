<template>
  <nav class="flex items-center gap-4">
    <div class="hidden md:flex items-center gap-6 text-sm font-medium">
      <NuxtLink
        to="/docs/getting-started/introduction"
        class="text-gray-700 hover:text-[#552583] transition-colors"
      >
        Documentation
      </NuxtLink>
      <a
        href="#install"
        class="text-gray-700 hover:text-[#552583] transition-colors"
      >
        Installation
      </a>
      <a
        href="#examples"
        class="text-gray-700 hover:text-[#552583] transition-colors"
      >
        Examples
      </a>
    </div>
    <a
      href="https://github.com/ludoguenet/laravel-zap"
      target="_blank"
      rel="noopener"
      aria-label="Open Laravel Zap on GitHub"
      class="inline-flex items-center gap-2 text-sm font-semibold bg-[#552583] text-white px-4 py-2 rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:bg-[#432069] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FDB927] focus-visible:ring-offset-white transition transform"
    >
      <UIcon name="i-simple-icons-github" class="w-4 h-4" />
      <span class="hidden sm:inline">GitHub</span>
    </a>
  </nav>
</template>
