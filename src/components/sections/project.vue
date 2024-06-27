<template>
    <Container>

        <ProjectCard :number="element.number" :label="element.label" :description="element.description" :detail="element.detail" :path="element.path" :src="element.src" v-for="(element, i) in projects" :key="i"/>

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
            description: "About the project: Constantly communicated with clients, discussed issues related to the project, had the position of timlid in his team and clearly coped with it, completely followed the projects from their beginning to their launch.", 
            detail: "what discovered for himself: New Web Dev technologies. Stress resistance. Understanding of SOLID principles.", 
            path: "https://github.com/vladislav2251/marganets-studios", 
            src: "/public/img/Block.jpg" 
        },  
    ]);
</script>