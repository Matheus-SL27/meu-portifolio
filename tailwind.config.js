/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts}",
    "./app/pages/**/*.{vue,js,ts}",
    "./app/app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': [ 'Oswald', 'sans-serif'], // Agora você usa class="font-bitcount" no seu HTML
        'montserrat':['Montserrat', 'sans-serif'],
      },
      colors:{
        'preto':'#000000',
        'cinza':'#d7d7d7',
        'cont':'#d3d3d3',
      },
    },
  },
  plugins: [],
}

