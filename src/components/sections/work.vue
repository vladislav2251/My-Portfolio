<template>
    <Section id="work" aria-labelledby="work-heading" class="w-full">

        <Container>

            <div class="lg:mt-[10rem] py-[4rem] grid lg:grid-cols-2">
                <Typography tag="h2" bold="medium" class="mb-4 text-4xl md:text-7xl">Hello, I’m<br/> Vlad.</Typography>

                <Typography tag="p" bold="regular" class="mb-4 text-xl md:text-3xl text-[#606060] mt-5 md:mt-14">A Front-end Developer who trying to<br/> specialize  Web Dev & Design.</Typography>
            </div>

            <Icons
                name="arrow-down"
                size="lg">
            </Icons>

        </Container>

    </Section>
</template>
<script setup lang="ts">
    import Section from '@/components/ui/section.vue';
    import Container from '@/components/ui/container.vue';
    import Icons from '@/components/ui/icons.vue';
</script>