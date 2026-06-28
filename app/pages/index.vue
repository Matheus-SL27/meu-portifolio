<template>
  <div class="h-screen overflow-y-scroll snap-y ">
    
<section id="hero" class="relative snap-start h-screen w-full 
  bg-black 
  md:bg-[linear-gradient(105deg,_#FFFFFF_50%,_#000000_50%)]">

  <header class="w-full absolute flex items-center justify-between px-6 md:px-20 pt-4 z-50">
    <img src="/img/logo.png" class="w-16 md:w-24 h-auto object-cover">
    
    <!-- Menu desktop -->
<nav class="hidden md:flex gap-4">
  <a 
    v-for="link in links"
    :key="link.href"
    :href="link.href"
    class="relative px-4 py-1 text-cinza text-base font-bold border-2 border-transparent rounded-lg transition-all hover:text-preto hover:bg-cinza hover:border-preto group overflow-hidden"
  >
    <span class="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
    {{ link.label }}
  </a>
</nav>

    <!-- Menu mobile -->
    <button @click="menuAberto = !menuAberto" class="md:hidden text-white p-2">
      <i :class="menuAberto ? 'pi pi-times' : 'pi pi-bars'" style="font-size: 1.5rem"></i>
    </button>
  </header>

  <!-- Dropdown mobile -->
<div v-if="menuAberto" class="absolute top-16 left-0 w-full bg-zinc-900 border-b border-orange-500 z-40 flex flex-col md:hidden">
  <a 
    v-for="link in links"
    :key="link.href"
    :href="link.href"
    @click="menuAberto = false"
    class="px-6 py-4 text-white font-bold border-b border-zinc-800 hover:text-orange-500 transition-colors"
  >
    {{ link.label }}
  </a>
</div>

  <!-- Conteúdo -->
  <div class="h-full w-full px-6 md:px-20 flex flex-col justify-center md:grid md:grid-cols-2">

    <!-- Lado esquerdo -->
    <div class="flex flex-col justify-center gap-6 pt-24 md:pt-0">
      <div class="space-y-1">
        <h2 class="pb-4 md:pb-10 text-lg md:text-2xl font-bold text-white md:text-preto">Bem Vindo! Me chamo</h2>
        <h1 class="text-5xl md:text-7xl font-semibold font-oswald text-orange-500 uppercase leading-none drop-shadow-[0_1px_20px_rgba(0,0,0,0.5)] [-webkit-text-stroke:1px_black]">
          Matheus Silva Lima
        </h1>
        <p class="text-xl md:text-2xl font-bold text-white md:text-preto uppercase">Desenvolvedor Frontend em Evolução</p>
        <p class="text-base md:text-lg text-white/70 md:text-preto/70">Transformando ideias em código de alta performance.</p>
      </div>

      <div class="flex gap-4">
        <a href="https://github.com/Matheus-SL27" target="_blank" rel="noopener noreferrer" class="group bg-violet-600 p-3 border-2 rounded-xl border-preto hover:bg-preto hover:text-white transition-all hover:-translate-y-1 shadow-lg shadow-black hover:shadow-violet-700">
          <img src="/img/github.png" alt="github" class="object-cover w-[25px] h-[25px] transition-all group-hover:invert">
        </a>
        <a href="https://www.instagram.com/math__27" target="_blank" rel="noopener noreferrer" class="group bg-fuchsia-500 p-3 border-2 rounded-xl border-preto hover:bg-preto hover:text-white transition-all hover:-translate-y-1 shadow-lg shadow-black hover:shadow-fuchsia-500">
          <img src="/img/instagram.png" alt="instagram" class="object-cover w-[25px] h-[25px] transition-all group-hover:invert">
        </a>
        <a href="https://www.linkedin.com/in/matheus-silva-lima-204543286/" target="_blank" rel="noopener noreferrer" class="group bg-sky-400 p-3 border-2 rounded-xl border-preto hover:bg-preto hover:text-white transition-all hover:-translate-y-1 shadow-lg shadow-black hover:shadow-sky-500">
          <img src="/img/linkedin.png" alt="linkedin" class="object-cover w-[25px] h-[25px] transition-all group-hover:invert">
        </a>
      </div>
    </div>

    <!-- Foto -->
    <div class="hidden md:flex items-center justify-center">
      <img src="/img/matheus_foto.png" alt="Foto do matheus" class="object-cover w-full h-auto drop-shadow-[0_1px_15px_rgba(249,115,22,0.9)]">
    </div>

  </div>
</section>


<!-- SOBRE MIM -->
<section id="sobre" class="snap-start min-h-screen w-full bg-zinc-950 flex flex-col items-center justify-center px-6 md:px-20 py-10">
  <div class="w-full max-w-6xl border border-orange-500 rounded-2xl px-6 md:px-12 py-10 bg-zinc-900 shadow-xl">
    <h2 class="text-orange-500 font-bold text-3xl text-center pb-8 uppercase tracking-widest font-oswald">Sobre mim</h2>
    
    <div class="flex flex-col gap-10">
      <div class="text-center md:text-left">
        <p class="text-white leading-relaxed text-lg">
          Minha jornada profissional começou na linha de produção da Mercedes-Benz, onde, durante dois anos, aprendi que a precisão técnica e a disciplina são as bases para qualquer sistema complexo. Essa mentalidade analítica, moldada em um dos ambientes fabris mais rigorosos do mundo, é o que hoje aplico no desenvolvimento de software.
          Atualmente, curso Ciência da Computação e atuo como desenvolvedor focado em entregar soluções robustas e escaláveis. Tenho paixão por transformar lógica em interfaces intuitivas com Vue.js e Nuxt, enquanto construo back-ends eficientes com Node.js e FastAPI. Meu objetivo é unir a agilidade do desenvolvimento moderno com o rigor técnico que a indústria me ensinou.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div class="flex flex-col h-full">
          <h4 class="text-cyan-200 text-2xl font-oswald uppercase mb-6 border-b border-cyan-200/30 pb-2">Soft Skills</h4>
          <div class="grid grid-cols-1 gap-4">
            <div v-for="skill in ['Resiliência', 'Adaptabilidade', 'Trabalho em Equipe', 'Disciplina', 'Pensamento Analítico', 'Comunicação Assertiva', 'Organização']" 
                 :key="skill"
                 class="flex items-center gap-3 bg-zinc-800/50 p-3 rounded-lg border border-zinc-700 hover:border-cyan-200 transition-colors group">
              <i class="pi pi-check-circle text-cyan-200 group-hover:scale-110 transition-transform"></i>
              <span class="text-zinc-100 font-medium tracking-wide">{{ skill }}</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center">
          <h4 class="text-red-500 text-2xl font-oswald uppercase mb-6 border-b border-red-500/30 pb-2 w-full text-center md:text-left">Hard Skills</h4>
          <div class="w-full flex justify-center">
            <Chart type="radar" :data="grafico1" :options="grafico11" class="w-full max-w-[28rem]" />
          </div>
        </div>

      </div>
    </div>
  </div>  
</section>

<section id="conhecimentos" class="snap-start min-h-screen w-full bg-[#27272a] p-6 md:p-20 flex flex-col items-center">
  
  <h2 class="text-white text-3xl md:text-5xl font-oswald mb-12 uppercase text-center tracking-tight">
    Meus Conhecimentos
  </h2>

  <!-- Principais Stacks -->
  <div class="w-full max-w-[1200px] border border-orange-500 rounded-2xl pb-8 bg-zinc-900 shadow-xl mb-8">
    <h3 class="text-center text-white pb-6 pt-5 font-oswald text-2xl uppercase tracking-wider">Principais Stacks</h3>
    
    <div class="flex justify-center gap-6 md:gap-10 px-4 flex-wrap">
      <div v-for="tech in principaisStacks"
           :key="tech.nome" 
           :class="[tech.sombraBase, tech.sombraHover]"
           class="flex flex-col items-center w-full max-w-[100px] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 group shadow-lg bg-zinc-800 border border-zinc-700/50">
        
        <div :class="tech.cor" class="flex justify-center items-center p-3 w-full aspect-square">
          <img :src="tech.img" :alt="tech.nome" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300">
        </div>
        
        <div class="w-full py-2 border-t border-zinc-700 bg-zinc-900/50">
          <p class="text-zinc-100 font-bold text-center text-[10px] md:text-xs uppercase leading-none px-1 tracking-wider">
            {{ tech.nome }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Grade com os 4 quadrantes -->
  <div class="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

    <div v-for="(lista, titulo) in { Frontend: frontend, Backend: backend, Dados: dados, 'Ferramentas e Metodologias': ferramentas }" 
         :key="titulo"
         class="flex justify-center flex-col border border-orange-500 rounded-2xl pb-8 bg-zinc-900 shadow-xl w-full">
      
      <h3 class="text-center text-white pb-6 pt-5 font-oswald text-2xl uppercase tracking-wider">{{ titulo }}</h3>
      
      <div class="grid grid-cols-2 min-[400px]:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6 justify-items-center">

        <div v-for="tech in lista"
             :key="tech.nome" 
             :class="[tech.sombraBase, tech.sombraHover]"
             class="flex flex-col items-center w-full max-w-[100px] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 group shadow-lg bg-zinc-800 border border-zinc-700/50">
          
          <div :class="tech.cor" class="flex justify-center items-center p-3 w-full aspect-square">
            <img :src="tech.img" :alt="tech.nome" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300">
          </div>
          
          <div class="w-full py-2 border-t border-zinc-700 bg-zinc-900/50">
            <p class="text-zinc-100 font-bold text-center text-[10px] md:text-xs uppercase leading-none px-1 tracking-wider">
              {{ tech.nome }}
            </p>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>

<!-- FORMAÇÃO, CERTIFICADOS E IDIOMAS -->
<section id="formacao" class="snap-start min-h-screen w-full bg-[#18181b] flex flex-col items-center justify-center px-6 md:px-20 py-16 gap-6">

  <h2 class="text-orange-500 font-bold text-2xl md:text-4xl font-oswald uppercase tracking-wider text-center">Formação & Certificados</h2>

  <!-- IDIOMAS - largura total -->
  <div class="w-full border border-orange-500 rounded-2xl bg-zinc-800 p-4 md:p-6">
    <h3 class="text-white text-xl md:text-2xl font-oswald uppercase tracking-wider mb-4">Idiomas</h3>
    <h4 class="text-white font-bold">Inglês</h4>
    <ProgressBar :value="45"></ProgressBar>
    <p class="text-gray-400 text-xs md:text-sm pt-2">*Considere 1 à 50 para conhecimento básico - 50 à 79 para conhecimento intermediário - +80 para conhecimento avançado</p>
  </div>

  <!-- 4 COLUNAS → 1 coluna no mobile, 2 no tablet, 4 no desktop -->
  <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

    <!-- FORMAÇÃO ACADÊMICA -->
    <div class="border border-orange-500 rounded-2xl bg-zinc-800 p-5 flex flex-col gap-3">
      <div class="bg-blue-500 w-full h-16 rounded-lg"
        style="-webkit-mask-image: url('/img/formacoes.svg'); mask-image: url('/img/formacoes.svg'); -webkit-mask-size: contain; mask-size: contain; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; -webkit-mask-position: center; mask-position: center;">
      </div>
      <h3 class="text-orange-500 text-lg font-bold uppercase tracking-wider text-center">Formação</h3>
      <div v-for="f in formacao" :key="f.curso" class="text-white border-b border-zinc-700 pb-2">
        <p class="font-bold text-sm">{{ f.curso }}</p>
        <p class="text-zinc-400 text-xs">{{ f.instituicao }}</p>
        <p class="text-zinc-500 text-xs">{{ f.periodo }}</p>
      </div>
    </div>

    <!-- DANKI CODE -->
    <div class="border border-orange-500 rounded-2xl bg-zinc-800 p-5 flex flex-col gap-3">
      <div class="bg-purple-500 w-full h-16 rounded-lg"
        style="-webkit-mask-image: url('/img/dankicode.svg'); mask-image: url('/img/dankicode.svg'); -webkit-mask-size: contain; mask-size: contain; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; -webkit-mask-position: center; mask-position: center;">
      </div>
      <h3 class="text-orange-500 text-lg font-bold uppercase tracking-wider text-center">Danki Code</h3>
      <ul class="flex flex-col gap-2">
        <li v-for="d in dankicode" :key="d.curso" class="text-white text-sm border-b border-zinc-700 pb-2">{{ d.curso }}</li>
      </ul>
    </div>

    <!-- UDEMY -->
    <div class="border border-orange-500 rounded-2xl bg-zinc-800 p-5 flex flex-col gap-3">
      <div class="bg-pink-500 w-full h-16 rounded-lg"
        style="-webkit-mask-image: url('/img/udemy.svg'); mask-image: url('/img/udemy.svg'); -webkit-mask-size: contain; mask-size: contain; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; -webkit-mask-position: center; mask-position: center;">
      </div>
      <h3 class="text-orange-500 text-lg font-bold uppercase tracking-wider text-center">Udemy</h3>
      <ul class="flex flex-col gap-2">
        <li v-for="u in udemy" :key="u.curso" class="text-white text-sm border-b border-zinc-700 pb-2">{{ u.curso }}</li>
      </ul>
    </div>

    <!-- DIVERSOS -->
    <div class="border border-orange-500 rounded-2xl bg-zinc-800 p-5 flex flex-col gap-3">
      <div class="bg-red-500 w-full h-16 rounded-lg"
        style="-webkit-mask-image: url('/img/diversos.svg'); mask-image: url('/img/diversos.svg'); -webkit-mask-size: contain; mask-size: contain; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; -webkit-mask-position: center; mask-position: center;">
      </div>
      <h3 class="text-orange-500 text-lg font-bold uppercase tracking-wider text-center">Diversos</h3>
      <ul class="flex flex-col gap-2">
        <li v-for="d in diversos" :key="d.curso" class="text-white text-sm border-b border-zinc-700 pb-2">{{ d.curso }}</li>
      </ul>
    </div>

  </div>
</section>


 <!-- PROJETOS -->
<section id="projetos" class="snap-start min-h-screen w-full bg-[#27272a] flex flex-col items-center justify-center px-6 md:px-10 py-16 gap-6">
  
  <h2 class="text-2xl md:text-4xl font-bold text-white">Meus projetos</h2>

  <div class="w-full flex flex-col items-center gap-5">

    <Paginator 
      v-model:first="first" 
      :rows="projetosPorPagina" 
      :totalRecords="projetos.length" 
      template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" 
    />

    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      <Card 
        v-for="projeto in projetos.slice(first, first + projetosPorPagina)" 
        :key="projeto.titulo"
        class="border-4 border-orange-500 w-full max-w-[25rem]"
        style="overflow: hidden"
      >
        <template #header>
          <img :src="projeto.imagem" :alt="projeto.titulo" class="w-full h-48 object-cover" />
        </template>
        <template #title>{{ projeto.titulo }}</template>
        <template #subtitle>
          <div class="flex gap-2 flex-wrap">
            <div 
              v-for="tech in projeto.subtitulo" 
              :key="tech.nome"
              class="flex items-center gap-1 bg-zinc-100 rounded-full px-2 py-1"
            >
              <img :src="tech.img" :alt="tech.nome" class="w-4 h-4 object-contain" />
              <span class="text-xs font-medium">{{ tech.nome }}</span>
            </div>
          </div>
        </template>
        <template #content>
          <p class="m-0 text-sm">{{ projeto.descricao }}</p>
        </template>
        <template #footer>
          <div class="flex gap-4 mt-1">
            <a v-if="projeto.github" :href="projeto.github" target="_blank" class="w-full">
              <Button label="GitHub" class="w-full !bg-violet-600 !border-violet-600 hover:!bg-violet-700" />
            </a>
            <a v-if="projeto.demo" :href="projeto.demo" target="_blank" class="w-full">
              <Button label="Ver Online" class="w-full !bg-blue-500 !border-blue-500 hover:!bg-blue-600" />
            </a>
          </div>
        </template>
      </Card>
    </div>

  </div>
</section>

<!-- TRAJETÓRIA -->
<section id="trajetoria" class="snap-start min-h-screen w-full bg-[#fafafa] flex flex-col py-16 px-4 md:px-8">
  <h2 class="text-preto text-3xl md:text-5xl font-oswald text-center uppercase mb-8">TRAJETÓRIA PROFISSIONAL</h2>

  <Stepper v-model:value="stepAtivo" class="px-2 md:px-5">

    <StepItem value="1">
      <Step @click.stop="toggleStep('1')">
        <h4 class="text-black text-sm md:text-base">Mercedes-Benz (2024-2025)</h4>
      </Step>
      <StepPanel>
        <div class="rounded bg-zinc-100 p-4 md:p-6">
          <section class="flex flex-col gap-3 w-full">
            <h3 class="text-base md:text-lg w-full font-bold">Mecânico de Produção Veicular</h3>
            <p class="w-full text-sm md:text-base">
              Durante dois anos, atuei em um dos ambientes fabris mais avançados do mundo. 
              Minha passagem pela Mercedes-Benz foi marcada pelo desenvolvimento de uma mentalidade analítica e resiliente. 
              Embora focado em Mecânica, aprendi a lidar com sistemas complexos e fluxos de trabalho rigorosos. 
              Essa experiência me deu a base de disciplina necessária para migrar para o desenvolvimento de software, onde aplico a 
              mesma precisão técnica e foco em eficiência que utilizava na linha de produção.
            </p>
            <Galleria
              :value="images"
              :numVisible="5"
              :showThumbnails="false"
              :showIndicators="true"
              :changeItemOnIndicatorHover="true"
              containerClass="w-full"
            >
              <template #item="slotProps">
                <div class="flex justify-center items-center bg-black/5 rounded-lg overflow-hidden h-[250px] md:h-[450px] w-full">
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
      </StepPanel>
    </StepItem>

    <StepItem value="2">
      <Step @click.stop="toggleStep('2')">
        <h4 class="text-black text-sm md:text-base">FSA Soluções e Tecnologias (2026-atual)</h4>
      </Step>
      <StepPanel>
        <div class="rounded bg-zinc-100 p-4 md:p-6">
          <section class="flex flex-col gap-3 w-full">
            <h3 class="text-base md:text-lg w-full font-bold">Desenvolvedor</h3>
            <p class="w-full text-sm md:text-base">
              Na FSA Soluções, atuo no desenvolvimento de interfaces modernas e performáticas utilizando Nuxt.js, 
              focando na criação de componentes reutilizáveis e na experiência do usuário. Paralelamente, estou em um 
              processo intensivo de capacitação em FastAPI, visando a construção de APIs ágeis e escaláveis. 
              Essa transição consolida minha atuação como desenvolvedor Full-Stack, unindo a agilidade do ecossistema 
              JavaScript no front-end com a robustez e alta performance do Python no back-end.
            </p>
<!--          <Galleria
              :value="images"
              :numVisible="5"
              :showThumbnails="false"
              :showIndicators="true"
              :changeItemOnIndicatorHover="true"
              containerClass="w-full"
            >
              <template #item="slotProps">
                <div class="flex justify-center items-center bg-black/5 rounded-lg overflow-hidden h-[250px] md:h-[450px] w-full">
                  <img
                    :src="slotProps.item.itemImageSrc"
                    :alt="slotProps.item.alt"
                    class="h-full w-auto object-contain border-2 border-black rounded-lg"
                  />
                </div>
              </template>
            </Galleria>-->
          </section>
        </div>
      </StepPanel>
    </StepItem>

  </Stepper>
</section>

<!-- CONTATO -->
<section id="contato" class="snap-start min-h-screen w-full bg-[#18181b] flex items-center justify-center px-6 py-16">
  <div class="w-full max-w-[560px] bg-zinc-800 border border-orange-500 rounded-2xl p-6 md:p-10">

    <div class="mb-8">
      <span class="inline-block bg-orange-500/10 text-orange-500 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">Contato</span>
      <h2 class="text-white text-2xl md:text-3xl font-bold mb-1">Vamos conversar?</h2>
      <p class="text-zinc-400 text-sm">Preencha o formulário e eu retorno em breve.</p>
    </div>

    <form @submit.prevent="enviarEmail" class="flex flex-col gap-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="flex flex-col gap-1">
          <label class="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Nome</label>
          <InputText v-model="form.from_name" placeholder="Seu nome" required
            class="!bg-zinc-700 !border-zinc-600 !text-white placeholder:!text-zinc-500 focus:!border-orange-500 !rounded-xl" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-xs font-semibold text-zinc-400 uppercase tracking-wider">E-mail</label>
          <InputText v-model="form.reply_to" type="email" placeholder="seu@email.com" required
            class="!bg-zinc-700 !border-zinc-600 !text-white placeholder:!text-zinc-500 focus:!border-orange-500 !rounded-xl" />
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <label class="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Mensagem</label>
        <Textarea v-model="form.message" rows="4" placeholder="Como posso te ajudar?" required
          class="!bg-zinc-700 !border-zinc-600 !text-white placeholder:!text-zinc-500 focus:!border-orange-500 !rounded-xl" />
      </div>

      <Button
        type="submit"
        label="Enviar mensagem"
        icon="pi pi-send"
        :loading="carregando"
        class="w-full !bg-orange-500 !border-orange-500 hover:!bg-orange-600 !rounded-xl !font-semibold mt-2"
      />
    </form>

    <hr class="border-zinc-700 my-7" />

    <div class="flex gap-3 justify-center flex-wrap">
      <a href="https://github.com/Matheus-SL27" target="_blank"
        class="flex items-center gap-2 bg-zinc-700 border border-zinc-600 hover:border-orange-500 hover:text-orange-500 text-zinc-400 text-sm px-4 py-2 rounded-lg transition-all">
        <i class="pi pi-github" style="font-size: 15px"></i> GitHub
      </a>
      <a href="https://www.linkedin.com/in/matheus-silva-lima-204543286/" target="_blank"
        class="flex items-center gap-2 bg-zinc-700 border border-zinc-600 hover:border-orange-500 hover:text-orange-500 text-zinc-400 text-sm px-4 py-2 rounded-lg transition-all">
        <i class="pi pi-linkedin" style="font-size: 15px"></i> LinkedIn
      </a>
    </div>

  </div>
</section>

  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})
import Chart from 'primevue/chart';
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const carregando = ref(false);
const form = ref({
  from_name: '',
  reply_to: '',
  message: ''
});


const stepAtivo = ref(null)

const toggleStep = (valor) => {
  stepAtivo.value = stepAtivo.value === valor ? null : valor
}

const enviarEmail = async () => {
  carregando.value = true;
  
  try {
    await emailjs.send(
      'service_fspzru6', 
      'template_3q6g2st', 
      form.value,
      'Yb7N2Yr1BEu61gutH'   
    );
    
    alert('Mensagem enviada com sucesso! Em breve te respondo.');
    form.value = { from_name: '', reply_to: '', message: '' }; 
  } catch (error) {
    console.error('Erro ao enviar:', error);
    alert('Ops! Algo deu errado ao enviar. Tente novamente mais tarde.');
  } finally {
    carregando.value = false;
  }
};

const grafico1 = ref({
  labels: ['Front-end', 'Back-end', 'Lógica e Algoritmos', 'Engenharia de Software', 'Metodologias Ágeis', 'Inglês',],
  datasets: [
    {
      label: 'Minhas habilidades',
      data: [85, 70, 80, 75, 85, 45],
      backgroundColor: 'rgba(249, 115, 22, 0.2)',  // laranja transparente
      borderColor: '#f97316',                        // laranja sólido
      pointBackgroundColor: '#f97316',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#f97316'
    }
  ]
})

const grafico11 = ref({
  plugins: {
    legend: {
      display:false
    }
  },
  scales: {
    r: {
      grid: {
        color: 'rgba(255,255,255,0.2)'  // cor das linhas da teia
      },
      pointLabels: {
        color: '#ffffff',  // cor dos labels (Comunicação, etc)
        font: {
          size: 13
        }
      },
      ticks: {
        color: '#ffffff',   // cor dos números (20, 40, 60...)
        backdropColor: 'transparent'
      },
      min: 0,
      max: 100
    }
  }
})

const grafico2 = ref({
  labels: ['Resiliência', 'Adaptabilidade', 'Disciplina', 'Comunicação', 'Pensamento Analítico', 'Trabalho em Equipe', 'Organização'],
  datasets: [
    {
      label: 'Minhas habilidades',
      data: [100, 90, 87, 79, 85, 90, 90],
      backgroundColor: 'rgba(249, 115, 22, 0.2)',  // laranja transparente
      borderColor: '#f97316',                        // laranja sólido
      pointBackgroundColor: '#f97316',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#f97316'
    }
  ]
})

const grafico22 = ref({
  plugins: {
    legend: {
      display:false
    }
  },
  scales: {
    r: {
      grid: {
        color: 'rgba(255,255,255,0.2)'  // cor das linhas da teia
      },
      pointLabels: {
        color: '#ffffff',  // cor dos labels (Comunicação, etc)
        font: {
          size: 13
        }
      },
      ticks: {
        color: '#ffffff',   // cor dos números (20, 40, 60...)
        backdropColor: 'transparent'
      },
      min: 0,
      max: 100
    }
  }
})
const menuAberto = ref(false)
const links = [
  { label: 'Sobre mim',    href: '#sobre' },
  { label: 'Conhecimentos', href: '#conhecimentos' },
  { label: 'Formação',     href: '#formacao' },
  { label: 'Projetos',     href: '#projetos' },
  { label: 'Trajetória',   href: '#trajetoria' },
  { label: 'Contato',      href: '#contato' },
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
  },
  {
    nome:'PrimeVue',
    img:'/img/primevue.svg',
    cor:'bg-green-200',
    sombraBase: 'shadow-green-400/20', 
    sombraHover:'hover:shadow-green-500'
  },
  {
    nome:'Bulma',
    img:'/img/bulma.svg',
    cor:'bg-emerald-500',
    sombraBase: 'shadow-emerald-400/20', 
    sombraHover:'hover:shadow-emerald-500'
  }
]
const backend = [
  {
   nome:'NodeJs',
   img:'/img/nodejs.svg',
   cor:'bg-green-300',
   sombraBase: 'shadow-green-200/20', 
   sombraHover:'hover:shadow-green-500'
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
    nome:'FastAPI',
    img:'/img/fastapi.svg',
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
  },
  {
    nome:'PHP',
    img:'/img/php.svg',
    cor:'bg-pink-500',
    sombraBase: 'shadow-pink-400/20', 
    sombraHover:'hover:shadow-pink-700'
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
  nome:'Mongo',
  img:'/img/mongo.svg',
  cor:'bg-green-300',
  sombraBase: 'shadow-green-700/20', 
  sombraHover:'hover:shadow-green-900'
  },
  {
  nome:'Excel',
  img:'/img/excel.svg',
  cor:'bg-emerald-500',
  sombraBase: 'shadow-emerald-200/20', 
  sombraHover:'hover:shadow-emerald-800'
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

const principaisStacks = [
  {
    nome:'Nuxt',
    img:'/img/nuxt.svg',
    cor:'bg-green-400',
    sombraBase: 'shadow-green-400/20',
    sombraHover:'hover:shadow-green-300'
  },
  {
   nome:'NodeJs',
   img:'/img/nodejs.svg',
   cor:'bg-green-300',
   sombraBase: 'shadow-green-200/20', 
   sombraHover:'hover:shadow-green-500'
  },
  {
    nome:'Tailwind CSS',
    img:'/img/tailwind.svg',
    cor:'bg-cyan-800',
    sombraBase: 'shadow-cyan-600/20', 
    sombraHover:'hover:shadow-cyan-900'
  },
]

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

const dankicode = [
  {
    curso: "Vue.js",
  },
  {
    curso: "Linguagem C",
  },
  {
    curso: "Excel",
  },
  {
  curso: "MySQL"
  },
  {curso: "Em desenvolvimento"}
]

const udemy=[
  {
    curso: "Pacote Office"
  },
  {
    curso: "Em desenvolvimento"
  }
]

const diversos =[
  {curso: "Blockchain "},
  {curso: "Desvendando o 5G"},
  {curso: "Economia Circular"},
  {curso: "Privacidade e Proteção de Dados (LGPD)"},
  {curso: "Desvendando a Descarnonização"},
  {curso: "Empreender"},
  {curso: "Ética na Inteligência Artificial"},
  {curso: "Por Dentro da Segurança Cibernética"},
  {curso: "Web 3.0"},
  {curso: "Em desenvolvimento"}
]

const images = ref([
  {
    itemImageSrc: '/img/mercedes/m1.jpeg', // Caminho da imagem grande
    alt: 'foto do primeiro emprego'
  },
  {
    itemImageSrc: '/img/mercedes/m2.jpeg', // Caminho da imagem grande
    alt: 'foto do primeiro emprego'
  },
  {
    itemImageSrc: '/img/mercedes/m3.jpeg', // Caminho da imagem grande
    alt: 'foto do primeiro emprego'
  },  
  {
    itemImageSrc: '/img/mercedes/m4.png',
    alt: 'foto do primeiro emprego'
  },
 {
    itemImageSrc: '/img/mercedes/m5.jpeg', // Caminho da imagem grande
    alt: 'foto do primeiro emprego'
  },
  {
    itemImageSrc: '/img/mercedes/m6.jpeg', // Caminho da imagem grande
    alt: 'foto do primeiro emprego'
  },
  {
    itemImageSrc: '/img/mercedes/m7.jpeg', // Caminho da imagem grande
    alt: 'foto do primeiro emprego'
  },
  {
    itemImageSrc: '/img/mercedes/m8.jpeg', // Caminho da imagem grande
    alt: 'foto do primeiro emprego'
  },
  {
    itemImageSrc: '/img/mercedes/m9.jpeg', // Caminho da imagem grande
    alt: 'foto do primeiro emprego'
  },
  {
    itemImageSrc: '/img/mercedes/m10.jpeg', // Caminho da imagem grande
    alt: 'foto do primeiro emprego'
  },
  {
    itemImageSrc: '/img/mercedes/m11.jpeg', // Caminho da imagem grande
    alt: 'foto do primeiro emprego'
  },
  {
    itemImageSrc: '/img/mercedes/m12.jpeg', // Caminho da imagem grande
    alt: 'foto do primeiro emprego'
  },
  {
    itemImageSrc: '/img/mercedes/m13.jpeg', // Caminho da imagem grande
    alt: 'foto do primeiro emprego'
  },
  {
    itemImageSrc: '/img/mercedes/m14.jpeg', // Caminho da imagem grande
    alt: 'foto do primeiro emprego'
  },
  {
    itemImageSrc: '/img/mercedes/m15.jpeg', // Caminho da imagem grande
    alt: 'foto do primeiro emprego'
  },
  {
    itemImageSrc: '/img/mercedes/m16.jpeg', // Caminho da imagem grande
    alt: 'foto do primeiro emprego'
  },
  {
    itemImageSrc: '/img/mercedes/m17.jpeg', // Caminho da imagem grande
    alt: 'foto do primeiro emprego'
  },
  {
    itemImageSrc: '/img/mercedes/m18.jpeg', // Caminho da imagem grande
    alt: 'foto do primeiro emprego'
  },
  {
    itemImageSrc: '/img/mercedes/m19.jpeg', // Caminho da imagem grande
    alt: 'foto do primeiro emprego'
  },
  {
    itemImageSrc: '/img/mercedes/m20.jpeg', // Caminho da imagem grande
    alt: 'foto do primeiro emprego'
  },
]);

const first = ref(0)

const projetos = [
  {
    titulo: 'Ingressos Full-Stack',
    subtitulo: [
      { nome: 'Nuxt', img: '/img/nuxt.svg' },
      { nome: 'NodeJs', img: '/img/nodejs.svg' },
      { nome: 'Tailwind CSS', img: '/img/tailwind.svg' },
    ],
    descricao: 'Esse projeto tem o objetivo de desenvolver meus conhecimentos sobre arquitetura de software, usando o NodeJs como Backend, o Nuxt como Frontend e o banco NoSQL MongoDB',
    imagem: '/img/projetos/show.png',
    github: 'https://github.com/Matheus-SL27/projeto-ingressos',
    demo: ''
  },
  {
    titulo: 'Pokédex',
    subtitulo: [
      { nome: 'Vue', img: '/img/vue.svg' },
      { nome: 'Bulma', img: '/img/bulma.svg' },
    ],
    descricao: 'Site desenvolvido com o objetivo de treinar o desenvolvimento reativo do framework Vue.js com o tratamento de erros try/catch, consulmo de api com axios e a utilização de css "pre" feito com o Bulma.',
    imagem: '/img/projetos/pokedex.png',
    github: 'https://github.com/...',
    demo:''
  },
  {
    titulo: 'Portfolio Pessoal',
    subtitulo: [
      { nome: 'Nuxt', img: '/img/nuxt.svg' },
      { nome: 'Tailwind CSS', img: '/img/tailwind.svg' },
      { nome: 'PrimeVue', img: '/img/primevue.svg' },
    ],
    descricao: 'Site de portfólio desenvolvido com Nuxt e PrimeVue com o objetivo de mostrar meus principais projetos, experiências e sobre mim.',
    imagem: '/img/projetos/portfolio.png',
    github: 'https://github.com/Matheus-SL27/meu-portifolio',
    demo: 'https://meu-portfolio-five-sigma.vercel.app/'
  },
  {
    titulo: 'Landing Page StarBucks',
    subtitulo: [
      { nome: 'HTML', img: '/img/htmll.svg' },
      { nome: 'CSS', img: '/img/csss.svg' },
    ],
    descricao: 'Desenvolvida usando apenas html e css com o objetivo de treinar estilização.',
    imagem: '/img/projetos/starbucks.png',
    github: 'https://github.com/Matheus-SL27/Landing-Page_Starbucks',
    demo: ''
  },
  {
    titulo: 'Salus Odonto',
    subtitulo: [
      { nome: 'HTML', img: '/img/htmll.svg' },
      { nome: 'CSS', img: '/img/csss.svg' },
    ],
    descricao: 'Visual simples de um site de dentista feito para um trabalho da faculdade, o principal objetivo do trabalho era usar o Trello e o Scrum',
    imagem: '/img/projetos/salus.png',
    github: 'https://github.com/Matheus-SL27/Salus_Odonto',
    demo: ''
  },
]

const projetosPorPagina = computed(() => {
  if (process.client) {
    if (window.innerWidth < 768) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }
  return 3
})

</script>

<style scoped>

:deep(.p-stepper-separator) {
  background-color: #000000 !important;
}

:deep(.p-step-number) {
  background-color: #000000 !important;
  color: #ffffff !important;
  border-color: #000000 !important;
}

:deep(.p-step-title) {
  color: #000000 !important;
  font-weight: bold;
}

:deep(.p-step-header.p-highlight .p-step-number) {
  background-color: #f97316 !important; /* laranja, sua cor tema */
  border-color: #f97316 !important;
}


</style>