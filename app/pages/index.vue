<template>
  <div class="h-screen overflow-y-scroll snap-y ">
    
    <section class="relative snap-start h-screen w-full bg-[linear-gradient(105deg,_#FFFFFF_50%,_#000000_50%)]">
      
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




    <section class="min-h-screen w-full bg-preto p-10 md:p-20 flex flex-col items-center"> 
  
  <h2 class="text-white text-4xl md:text-5xl font-oswald mb-12 uppercase text-center">Tecnologias & Ferramentas</h2>
  
  <div class="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

    <div v-for="(lista, titulo) in { Frontend: frontend, Backend: backend, Dados: dados, 'Ferramentas e Metodologias': ferramentas }" 
         :key="titulo"
         class="flex justify-center flex-col border border-orange-500 rounded-2xl pb-8 bg-zinc-900 shadow-xl">
      
      <h3 class="text-center text-white pb-6 pt-5 font-oswald text-2xl uppercase tracking-wider">{{ titulo }}</h3>
      
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 px-6 justify-items-center">

        <div v-for="tech in lista"
             :key="tech.nome" 
             :class="[tech.sombraBase, tech.sombraHover]"
             class="flex flex-col items-center w-24 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 group shadow-lg bg-zinc-800 border border-zinc-700/50">
          
          <div :class="tech.cor" class="flex justify-center items-center p-3 w-full aspect-square">
            <img :src="tech.img" :alt="tech.nome" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300">
          </div>
          
          <div class="w-full py-2 border-t border-zinc-700 bg-zinc-900/50">
            <p class="text-zinc-100 font-bold text-center text-[10px] uppercase leading-none px-1 tracking-wider">
              {{ tech.nome }}
            </p>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>







    <section class="h-screen w-full bg-white"> <!-- trajetoria -->
        <div>
            <h2 class="text-preto text-5xl font-oswald cente flex justify-center pt-16">TRAJETÓRIA PROFISSIONAL</h2>
                <Stepper value="Mercedes-Benz (2024 - 2025)" class="pl-5">
                    <StepItem value="1">
                        <Step><h4 class="text-black">Mercedes-Benz (2024-2025)</h4></Step>
                        <StepPanel v-slot="{ activateCallback }">
                            <div class="flex flex-col min-h-fit pb-10">
                                <div class="rounded  bg-zinc-100 flex-none flex justify-center items-center font-medium">
                                  <section class="flex flex-col items-center gap-3 w-full p-4">
                                    <h3 class="text-lg w-full">Mecânico de Produção Veicular!</h3>
                                    <p class="w-full">
                                      Durante dois anos, atuei em um dos ambientes fabris mais avançados do mundo. 
                                      Minha passagem pela Mercedes-Benz foi marcada pelo desenvolvimento de uma mentalidade analítica e resiliente. 
                                      Embora focado em Mecânica, aprendi a lidar com sistemas complexos e fluxos de trabalho rigorosos. 
                                      Essa experiência me deu a base de disciplina necessária para migrar para o desenvolvimento de software, onde aplico a 
                                      mesma precisão técnica e foco em eficiência que utilizava na linha de produção.
                                    </p>
                                    <Galleria 
                                      :value="images" 
                                      :numVisible="5" 
                                      containerStyle="max-width: 40%"
                                      :showThumbnails="false" 
                                      :showIndicators="true" 
                                      :changeItemOnIndicatorHover="true"
                                    >
                                      <template #item="slotProps">
                                        <div class="flex justify-center items-center bg-black/5 rounded-lg overflow-hidden h-[450px] md:h-[600px] w-full">
                                          <img 
                                            :src="slotProps.item.itemImageSrc" 
                                            :alt="slotProps.item.alt" 
                                            class="h-full w-auto object-contain border-2 border-black rounded-lg" 
                                          />
                                        </div>
                                      </template>
                                    </Galleria>
                                  </section>
                                </div>
                            </div>
                        </StepPanel>
                    </StepItem>
                    <StepItem value="2">
                        <Step>FSA Soluções e Tecnologias (2026-atual)</Step>
                        <StepPanel v-slot="{ activateCallback }">
                            <div class="flex flex-col min-h-fit pb-10">
                                <div class="rounded bg-zinc-100 flex-none flex justify-center items-center font-medium">
                                  <section class="flex flex-col items-center gap-3 w-full p-4">
                                    <h3 class="text-lg w-full">Mecânico de Produção Veicular!</h3>
                                    <p class="w-full">
                                      Durante dois anos, atuei em um dos ambientes fabris mais avançados do mundo. 
                                      Minha passagem pela Mercedes-Benz foi marcada pelo desenvolvimento de uma mentalidade analítica e resiliente. 
                                      Embora focado em Mecânica, aprendi a lidar com sistemas complexos e fluxos de trabalho rigorosos. 
                                      Essa experiência me deu a base de disciplina necessária para migrar para o desenvolvimento de software, onde aplico a 
                                      mesma precisão técnica e foco em eficiência que utilizava na linha de produção.
                                    </p>
                                    <Galleria 
                                      :value="images" 
                                      :numVisible="5" 
                                      containerStyle="max-width: 40%"
                                      :showThumbnails="false" 
                                      :showIndicators="true" 
                                      :changeItemOnIndicatorHover="true"
                                    >
                                      <template #item="slotProps">
                                        <div class="flex justify-center items-center bg-black/5 rounded-lg overflow-hidden h-[450px] md:h-[600px] w-full">
                                          <img 
                                            :src="slotProps.item.itemImageSrc" 
                                            :alt="slotProps.item.alt" 
                                            class="h-full w-auto object-contain border-2 border-black rounded-lg" 
                                          />
                                        </div>
                                      </template>
                                    </Galleria>
                                  </section>
                                </div>
                            </div>
                        </StepPanel>

                    </StepItem>
                </Stepper>
          </div>
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

const frontend = [
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

const backend = [
  {
   nome:'NodeJs',
   img:'/img/nodejs.svg',
   cor:'bg-green-300',
   sombraBase: 'shadow-yellow-200/20', 
   sombraHover:'hover:shadow-yellow-500'
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
    nome:'C',
    img:'/img/c.svg',
    cor:'bg-sky-500',
    sombraBase: 'shadow-blue-400/20', 
    sombraHover:'hover:shadow-blue-700'
  }
]

const dados = [
  {
  nome:'MySQL',
  img:'/img/mysql.svg',
  cor:'bg-blue-900',
  sombraBase: 'shadow-blue-700/20', 
  sombraHover:'hover:shadow-blue-900'
  },
  {
  nome:'Power BI',
  img:'/img/powerbi.svg',
  cor:'bg-yellow-300',
  sombraBase: 'shadow-yellow-200/20', 
  sombraHover:'hover:shadow-yellow-500'
  },
]

const ferramentas =[
  {
    nome: "GitHub",
    img:'/img/github.svg',
    cor:'shadow-violet-700',
    sombraBase: 'shadow-violet-400/20', 
    sombraHover:'hover:shadow-violet-700'
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
] //Ferramentas & Ágil

const formacao = [
  {
    curso: "Eletroeletrônica",
    instituicao: "Senai Frederico Jacob",
    duracao: "2 anos",
    periodo: "2022 - 2023"
  },
  {
    curso: "Mecânico de Produção Veicular",
    instituicao: "Senai",
    duracao: "2 anos",
    periodo: "2024 - 2025"
  },
  {
    curso: "Ciência da Computação",
    instituicao: "UNICID - Univesidade Cidade de São Paulo",
    duracao: "4 anos",
    periodo: "2024 - 2027"
  },
]//formação academica


const images = ref([
  {
    itemImageSrc: '/img/mercedes/IMG1.jpg', // Caminho da imagem grande
    thumbnailImageSrc: '/img/mercedes/IMG1.jpg', // Caminho da miniatura
    alt: 'Descrição do Projeto 1'
  },
  {
    itemImageSrc: '/img/mercedes/IMG2.jpg',
    thumbnailImageSrc: '/img/mercedes/IMG2.jpg',
    alt: 'Descrição do Projeto 2'
  }
]);



</script>

<style scoped>
/* Linha conectora do Stepper */
:deep(.p-stepper-separator) {
  background-color: #000000 !important;
}

/* Número/ícone do Step */
:deep(.p-step-number) {
  background-color: #000000 !important;
  color: #ffffff !important;
  border-color: #000000 !important;
}

/* Texto do Step */
:deep(.p-step-title) {
  color: #000000 !important;
  font-weight: bold;
}

/* Step ativo */
:deep(.p-step-header.p-highlight .p-step-number) {
  background-color: #f97316 !important; /* laranja, sua cor tema */
  border-color: #f97316 !important;
}
</style>