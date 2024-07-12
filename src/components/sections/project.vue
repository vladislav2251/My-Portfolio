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
            description: "About the project: I consistently communicated with clients, addressing project-related issues. I oversaw projects from inception to launch, ensuring smooth execution.", 
            detail: "Responsibilities: New web development technologies as Nuxt.js, Docker, Prisma REST APIs and more. Developed and maintained user interfaces using Vue.js. Integrated and worked with RESTful APIs for data fetching and submission. Refactored existing code to improve performance and readability. Developed complex forms and validation using Vue.js. Conducted code reviews and participated in architectural discussions. Fixed bugs and resolved issues identified during testing. Mentored and trained junior developers.",
            path: "https://github.com/vladislav2251/marganets-studios", 
            src: "/img/Block.jpg",
            link: "https://marganets-studios.vercel.app"
        },
        { 
            number: "02",
            label: "Twitter Clone",
            description: "A web application replicating Twitter's key features including user authentication, tweet posting, chronological timelines, replies, retweets, user profiles, hashtags, and mentions. Developed using Vue.js with Vuex for state management, integrated with RESTful APIs, and optimized for responsive design and cross-browser compatibility.", 
            detail: "Wrote and optimized Vue.js components for reusability. Developed complex forms and data validation using Vue.js. Participated in architectural discussions and conducted code reviews. Configured routing using Vue Router for the project. Worked with version control tools like Git and GitHub.",
            path: "https://github.com/vladislav2251/Twitter-Clone.git", 
            src: "/img/Block3.jpg",
            link: ""
        },
        { 
            number: "03",
            label: "SHOPR", 
            description: "A trendy and stylish store combining online shopping with a personal touch. Offering a wide selection of products from top brands, with fast delivery. Our goal is to simplify shopping so everyone can enjoy decorating their home without leaving it.", 
            detail: "Developing expertise in new web development technologies like Nuxt.js, Docker, Prisma REST APIs, and other tools. Creating and maintaining user interfaces using Vue.js. Integrating and working with RESTful APIs for data retrieval and submission. Optimizing existing code to enhance performance and readability. Designing complex forms and validating them using Vue.js.",
            path: "https://github.com/vladislav2251/SHOPR-E-Commerce-Website.git", 
            src: "/img/Block2.jpg",
            link: ""
        },
    ]);
</script>