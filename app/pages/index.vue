<template>
  <div class="h-screen overflow-y-scroll snap-y snap-mandatory">
    
    <section class="relative snap-start h-screen w-full bg-[linear-gradient(105deg,_#d7d7d7_50%,_#000000_50%)]">
      
      <header class="w-full absolute flex items-center justify-between px-20 z-50">
        <img src="/img/logo.png" class="w-24 h-auto object-cover">
        <nav class="flex gap-4">
          <NuxtLink 
            v-for="link in links" 
            :key="link.to"
            :to="link.to"
            class="px-4 py-1 text-cinza text-base font-bold border-2 border-transparent rounded-full transition-all hover:text-preto hover:bg-cinza hover:border-preto"
            active-class="bg-cinza text-preto border-preto"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </header>

  <div class="grid grid-cols-2 h-full w-full px-20">
    
    <div class="flex flex-col justify-center gap-6">
      <div class="space-y-1 relative">
        <h2 class="pb-10 text-2xl font-bold">Bem Vindo! Me chamo</h2>
        <h1 class="text-7xl font-semibold font-oswald text-orange-500 uppercase leading-none drop-shadow-[0_1px_20px_rgba(0,0,0,0.5)] [text-stroke:1px_black] [-webkit-text-stroke:1px_black]">Matheus Silva Lima</h1>
        <p class="text-2xl font-bold text-preto uppercase ">Desenvolvedor em evolução</p>
        <p class="text-lg text-preto/70">Transformando ideias em código de alta performance.</p>
      </div>

      <div class="flex gap-4">
        <a href="" target="_blank" rel="noopener noreferrer" class="group bg-gray-300 p-3 border-2 rounded-xl  border-preto hover:bg-preto hover:text-white transition-all hover:-translate-y-1 shadow-lg shadow-black hover:shadow-violet-700">
          <img src="/img/github.png" alt="link para instagram" class="object-cover w-[25px] h-[25px] transition-all group-hover:invert">
        </a>
        <a href="https://www.instagram.com/math__27" target="_blank" rel="noopener noreferrer" class="group bg-gray-300 p-3 border-2 rounded-xl  border-preto hover:bg-preto hover:text-white transition-all hover:-translate-y-1 shadow-lg shadow-black hover:shadow-fuchsia-500">
          <img src="/img/instagram.png" alt="link para instagram" class="object-cover w-[25px] h-[25px] transition-all group-hover:invert">
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" class="group bg-gray-300 p-3 border-2 rounded-xl  border-preto hover:bg-preto hover:text-white transition-all hover:-translate-y-1 shadow-lg shadow-black hover:shadow-sky-500">
          <img src="/img/linkedin.png" alt="link para instagram" class="object-cover w-[25px] h-[25px] transition-all group-hover:invert">
        </a>
      </div>
    </div>

    <div class="flex items-center justify-center">
      <img src="/img/matheus_foto.png" alt="Foto do matheus" class="object-cover w-full h-auto drop-shadow-[0_1px_15px_rgba(249,115,22,0.9)]">
       </div>

  </div>
    </section>




    <section class="snap-start min-h-screen w-full bg-preto p-20 flex flex-col">
      
      <h2 class="text-white text-5xl font-oswald mb-12 uppercase text-center">Tecnologias & Ferramentas</h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start"> <!--div de todas-->

        <div class="flex justify-center flex-col border border-orange-500 rounded-xl pb-7">
          <h3 class="text-center text-white pb-1 font-oswald text-2xl">Stack Principal</h3>
          <p class="text-lg text-cinza/70 text-center pb-4">Ferramentas que mais uso atualmente</p>
            <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 items-start gap-9 justify-items-center">


              <div
              v-for="tech in stack"
              :key="tech.nome" 
              :class="[tech.sombraBase, tech.sombraHover]"
              class="flex flex-col flex-wrap items-center border-2 border-black w-24 h-auto rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-3">                
                  <div :class="tech.cor" 
                  class="flex justify-center items-center px-2 pt-2 shadow-lg">
                    <img :src="tech.img" :alt="tech.nome" class="w-full h-auto object-contain pb-2">
                  </div>
                  <div :class="tech.cor" class="w-full py-1 border-t-2 border-black">
                    <p class="text-black font-bold text-center text-[11px] uppercase py-1">{{ tech.nome }}</p>
                  </div>
              </div>

              

            </div>

            
        </div>



        <div class="flex justify-center flex-col border border-orange-500 rounded-xl pb-7">
          <h3 class="text-center text-white pb-1 font-oswald text-2xl">Linguagens & Outros Conhecimentos</h3>
          <p class="text-lg text-cinza/70 text-center pb-4">Habilidades que já usei e tenho conhecimento</p>
            <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 items-start gap-9 justify-items-center">


              <div
              v-for="tech in conhecimentos"
              :key="tech.nome" 
              :class="[tech.sombraBase, tech.sombraHover]"
              class="flex flex-col flex-wrap items-center border-2 border-black w-24 h-auto rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-3">                
                  <div :class="tech.cor" 
                  class="flex justify-center items-center px-2 pt-2 shadow-lg">
                    <img :src="tech.img" :alt="tech.nome" class="w-full h-auto object-contain pb-2">
                  </div>
                  <div :class="tech.cor" class="w-full py-1 border-t-2 border-black">
                    <p class="text-black font-bold text-center text-[11px] uppercase py-1">{{ tech.nome }}</p>
                  </div>
              </div>

              

            </div>

        </div>

        <div class="flex justify-center flex-col border border-orange-500 rounded-xl pb-7">
          <h3 class="text-center text-white pb-1 font-oswald text-2xl">No Radar</h3>
          <p class="text-lg text-cinza/70 text-center pb-4">Tenho um conhecimento básico e estou melhorando</p>
            <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 items-start gap-9 justify-items-center">


              <div
              v-for="tech in radar"
              :key="tech.nome" 
              :class="[tech.sombraBase, tech.sombraHover]"
              class="flex flex-col flex-wrap items-center border-2 border-black w-24 h-auto rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-3">                
                  <div :class="tech.cor" 
                  class="flex justify-center items-center px-2 pt-2 shadow-lg">
                    <img :src="tech.img" :alt="tech.nome" class="w-full h-auto object-contain pb-2">
                  </div>
                  <div :class="tech.cor" class="w-full py-1 border-t-2 border-black">
                    <p class="text-black font-bold text-center text-[11px] uppercase py-1">{{ tech.nome }}</p>
                  </div>
              </div>

              

            </div>

        </div>

      </div>
    </section>








    <section class="snap-start h-screen w-full bg-cinza flex items-center justify-center">
      <h2 class="text-preto text-5xl font-oswald">TRAJETÓRIA</h2>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

const links = [
  { label: 'Sobre mim', to: '/' },
  { label: 'Projetos', to: '/projetos' },
  { label: 'Trajetória Profissional', to: '/trajetoria' },
  { label: 'Contato', to: '/contato' },
  { label: 'Linha do tempo', to: '/vida' }
]

const stack = [
  {
    nome: 'JavaScript', 
    img: '/img/javascript.svg', 
    cor: 'bg-yellow-400', 
    sombraBase: 'shadow-yellow-400/20', 
    sombraHover: 'hover:shadow-yellow-400/90' 
  },
  {
    nome:'Nuxt',
    img:'/img/nuxt.svg',
    cor:'bg-green-400',
    sombraBase: 'shadow-green-400/20',
    sombraHover:'hover:shadow-green-300'
  },
  {
    nome:'Tailwind CSS',
    img:'/img/tailwind.svg',
    cor:'bg-cyan-800',
    sombraBase: 'shadow-cyan-600/20', 
    sombraHover:'hover:shadow-cyan-900'
  },
  {
    nome:'Vue',
    img:'/img/vue.svg',
    cor:'bg-green-600',
    sombraBase: 'shadow-green-400/20', 
    sombraHover:'hover:shadow-green-500'
  }
]

const conhecimentos = [
  {
    nome:'C',
    img:'/img/c.svg',
    cor:'bg-sky-500',
    sombraBase: 'shadow-blue-400/20', 
    sombraHover:'hover:shadow-blue-700'
  },
  {
    nome:'Java',
    img:'/img/java.svg',
    cor:'bg-gray-400',
    sombraBase: 'shadow-gray-400/20', 
    sombraHover:'hover:shadow-gray-300'
  },
  {
    nome:'Python',
    img:'/img/python.svg',
    cor:'bg-violet-600',
    sombraBase: 'shadow-violet-400/20', 
    sombraHover:'hover:shadow-violet-700'
  },
  {
    nome:'MySQL',
    img:'/img/mysql.svg',
    cor:'bg-blue-900',
    sombraBase: 'shadow-blue-700/20', 
    sombraHover:'hover:shadow-blue-900'
  },
  {
    nome:'Pacote Office',
    img:'/img/office.svg',
    cor:'bg-orange-900',
    sombraBase: 'shadow-orange-600/20', 
    sombraHover:'hover:shadow-orange-900'
  },
  {
    nome:'Kaizen',
    img:'/img/kaizen.svg',
    cor:'bg-orange-600',
    sombraBase: 'shadow-orange-400/20', 
    sombraHover:'hover:shadow-orange-700'
  },
  {
    nome:'PDCA',
    img:'/img/pdca.svg',
    cor:'bg-slate-400',
    sombraBase: 'shadow-slate-300/20', 
    sombraHover:'hover:shadow-slate-500'
  },
  {
    nome:'Scrum',
    img:'/img/scrum.svg',
    cor:'bg-slate-400',
    sombraBase: 'shadow-slate-300/20', 
    sombraHover:'hover:shadow-slate-500'
  },

]

const radar = [
    {
    nome:'NodeJs',
    img:'/img/nodejs.svg',
    cor:'bg-green-300',
    sombraBase: 'shadow-yellow-200/20', 
    sombraHover:'hover:shadow-yellow-500'
  },
  {
    nome:'Power BI',
    img:'/img/powerbi.svg',
    cor:'bg-yellow-300',
    sombraBase: 'shadow-yellow-200/20', 
    sombraHover:'hover:shadow-yellow-500'
  },
  {
    nome:'Inglês',
    img:'/img/english.svg',
    cor:'bg-slate-200',
    sombraBase: 'shadow-slate-100/20', 
    sombraHover:'hover:shadow-slate-300'
  }

]
</script>