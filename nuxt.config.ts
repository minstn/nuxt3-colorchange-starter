import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  srcDir: 'src',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],

  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
      },
    },
  },
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'color-mode',
  },
  vite: {
    logLevel: 'info',
  },
})
