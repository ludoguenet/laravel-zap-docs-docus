import LandingHero from '../components/landing/Hero.vue'
import LandingCoreConcepts from '../components/landing/CoreConcepts.vue'
import LandingFeatures from '../components/landing/Features.vue'
import LandingRealWorldExamples from '../components/landing/RealWorldExamples.vue'
import LandingCallToAction from '../components/landing/CallToAction.vue'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.dev) {
    // Helps verify in browser console that landing components plugin is loaded
    // and that MDC "::::Landing*" blocks can resolve correctly.
    // This only runs in development.
     
    console.debug('[landing-components] plugin loaded')
  }

  const { vueApp } = nuxtApp

  vueApp.component('LandingHero', LandingHero)
  vueApp.component('LandingCoreConcepts', LandingCoreConcepts)
  vueApp.component('LandingFeatures', LandingFeatures)
  vueApp.component('LandingRealWorldExamples', LandingRealWorldExamples)
  vueApp.component('LandingCallToAction', LandingCallToAction)
})
