<template>
    <Container>
      <ProjectCard
        :number="element.number"
        :label="element.label"
        :description="element.description"
        :detail="element.detail"
        :path="element.path"
        :link="element.link"
        :src="element.src"
        v-for="(element, i) in projects"
        :key="i"
      />
    </Container>
  </template>
  
  <script setup lang="ts">
  import Container from '@/components/ui/container.vue';
  import ProjectCard from '@/components/project_card.vue';
  
  import { ref } from 'vue';
  
  const projects = ref([
    { 
      number: "01",
      label: "MARGANETS_STUDIOS", 
      description: "I consistently communicated with clients, addressing project-related issues. I oversaw projects from inception to launch, ensuring smooth execution.", 
      detail: `
        - New web development technologies such as Nuxt.js, Docker, Prisma REST APIs, and more.
        - Developed and maintained user interfaces using Vue.js.
        - Conducted code reviews and participated in architectural discussions.
        - Fixed bugs and resolved issues identified during testing.
        - Mentored and trained junior developers.`,
      path: "https://github.com/vladislav2251/marganets-studios", 
      src: "/img/Block.jpg",
      link: "https://marganets-studios.vercel.app"
    },
  ]);
  </script>
  