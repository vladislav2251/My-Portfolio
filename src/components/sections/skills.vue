<template>
    <Section id="skills" aria-labelledby="skills-heading" class="w-full">
        <Container>

            <div class="grid gap-[2rem] md:gap-[5rem]">

                <div class="max-md:flex-col flex gap-[2rem] md:gap-[5rem] md:items-center">
                    <Typography tag="p" bold="medium" class="text-[18px] underline">Main Stack</Typography>
                    <Typography tag="p" bold="normal" class="text-[18px]">Vue.js, TypeScript, Express.js, HTML, CSS, SCSS</Typography>
                </div>

                <div class="max-md:flex-col flex gap-[2rem] md:gap-[5rem] md:items-center">
                    <Typography tag="p" bold="medium" class="text-[18px] underline">Main Skills</Typography>
                    <Typography tag="p" bold="normal" class="text-[18px]">Experience with version control tools such as<br/> Github, development of business logic for the<br/> frontend, work in a team, stress resistance.</Typography>
                </div>

            </div>

        </Container>
    </Section>
</template>
<script setup lang="ts">
    import Section from '@/components/ui/section.vue';
    import Container from '@/components/ui/container.vue';
    import Typography from '@/components/ui/typography.vue';
</script>