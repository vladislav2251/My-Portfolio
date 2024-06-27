<template>
    <section id="work" aria-labelledby="work-heading" class="w-full">

        <Container>

            <div class="lg:mt-[10rem] max-md:mt-[4rem] md:mb-[4rem] grid lg:grid-cols-2">
                <Typography tag="h2" bold="medium" class="text-4xl md:text-7xl">Hello, I’m<br/> Vlad.</Typography>

                <Typography tag="p" bold="normal" class="my-4 text-xl md:text-3xl text-[#606060] md:mt-14">A Front-end Developer who trying to<br/> specialize  Web Dev & Design.</Typography>
            </div>

            <Icons
                name="arrow-down"
                size="lg">
            </Icons>

        </Container>

    </section>
</template>
<script setup lang="ts">
    import Container from '@/components/ui/container.vue';
    import Typography from '@/components/ui/typography.vue';
    import Icons from '@/components/ui/icons.vue';
</script>