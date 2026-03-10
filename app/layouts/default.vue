<template>
    <header class="w-full absolute flex items-center justify-between px-20">
        <img src="/img/logo.png" alt="logo do portfolio" class="w-24 h-auto object-cover">
        <nav  class="flex gap-5">        

        <!--v for vai ficar repetindo ate o vetor de links dica vazio, a chave é obrigatorio e -->
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" 
        class="px-4 py-1 text-cinza text-base font-bold border-2 border-transparent rounded-full transition-all hover:text-preto hover:bg-cinza hover:border-preto"
        active-class="bg-cinza text-preto border-preto">

        {{ link.label }}
      </NuxtLink>
     
        </nav>
    </header>

    <slot></slot>

    <!--<footer>@Matheus 27</footer>-->
</template>

<script setup>
const links = [
  { label: 'Sobre mim', to: '/' },
  { label: 'Projetos', to: '/projetos' },
  { label: 'Trajetória Profissional', to: '/trajetoria' },
  { label: 'Contato', to: '/contato' },
  { label: 'Linha do tempo', to: '/vida' }
]
</script>