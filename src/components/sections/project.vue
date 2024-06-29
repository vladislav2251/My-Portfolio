<template>
    <Container>

        <ProjectCard :number="element.number" :label="element.label" :description="element.description" :detail="element.detail" :path="element.path" :link="element.link" :src="element.src" v-for="(element, i) in projects" :key="i"/>

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
            description: "About the project: I consistently communicated with clients, addressing project-related issues. I held the position of team lead, successfully managing my team. I oversaw projects from inception to launch, ensuring smooth execution.", 
            detail: "What I discovered: developed business logic for the frontend. Gained extensive experience with version control tools like Gitlab. Worked effectively in a team. new web development technologies, enhanced stress resistance.", 
            path: "https://github.com/vladislav2251/marganets-studios", 
            src: "/img/Block.jpg",
            link: "https://marganets-studios.vercel.app"
        }
    ]);
</script>