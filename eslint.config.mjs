// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'link-checker/valid-route': 'off',
      'link-checker/valid-sitemap-link': 'off',
    },
  },
)
