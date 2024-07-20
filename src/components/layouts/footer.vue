<template>
    <footer aria-label="primary" class="w-full">
        <Container>
            
            <hr class="mb-[2rem] md:mb-[5rem] border-[#181717]">

            <div class="grid max-md:gap-5 md:grid-cols-2 items-center">
                <div class="grid">
                    <Typography tag="h2" bold="medium" class="text-2xl md:text-3xl">I am thrilled to answer to</Typography>
                    
                    <div class="flex gap-5 items-center">
                        <Typography tag="h2" bold="medium" class="text-2xl md:text-3xl">your next project</Typography>
                        <Icons
                            name="arrow-right"
                            size="md">
                        </Icons>
                    </div>
                </div>

                <div class="grid gap-[1rem] md:place-self-end">
                    <a href="mailto:vladdidyk1985@gmail.com">
                        <Typography tag="h2" bold="medium" class="text-xl md:text-3xl">vladdidyk1985@gmail.com</Typography>
                    </a>
                    
                    <a href="/files/pdf/resume.pdf" download="resume" rel="noopener noreferrer" target="_blank">
                        <Typography tag="p" bold="normal" class="text-md md:text-lg">View Resume</Typography>
                    </a>

                </div>

            </div>

            <div class="grid md:grid-cols-2 items-center pt-[2rem] md:pt-[8rem] md:pb-8 pb-3">
                <Typography tag="h2" bold="medium" class="text-xl text-[#2429AF]">Vladyslav Didyk - 2024</Typography>

                <div class="max-md:flex-col flex gap-5 md:justify-end mt-5 md:mt-0">
                    <a 
                        :href="element.path"
                        :key="i"
                        v-for="(element, i) in links"
                        class="font-medium text-[21px]">
                        {{ element.label }}
                    </a>
                </div>
            </div>
            
        </Container>
    </footer>
</template>
<script setup lang="ts">
    import { ref } from 'vue';

    import Container from '@/components/ui/container.vue';
    import Typography from '@/components/ui/typography.vue';
    import Icons from '@/components/ui/icons.vue';

    const links = ref([
        { label: 'GitHub', path: 'https://github.com/vladislav2251' },
        { label: 'LinkedIn', path: 'https://www.linkedin.com/in/vlad-didyk-2842a8269/'},
        { label: 'Instagram', path: 'https://www.instagram.com/wavelength.v/'},
    ]);
</script>