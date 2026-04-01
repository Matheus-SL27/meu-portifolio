import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss'
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura, // Usando o objeto direto em vez da função
        options: {
          darkModeSelector: 'none', // Força o modo claro para evitar conflitos iniciais
        }
      },
      ripple: true,
    },
    autoImport: true
  },
  css: [
    '~/assets/css/main.css', 
    'primeicons/primeicons.css'
  ]
})