<template>
    <Section id="about" aria-labelledby="about-heading" class="w-full">

        <Container>

        <div class="lg:mt-[10rem] py-[4rem] grid lg:grid-cols-2 lg:place-items-end  md:items-start">

            <div class="w-full max-lg:w-11/12 max-lg:max-w-7xl place-self-start">
                <Typography tag="h2" bold="medium" class="mb-4 text-4xl md:text-7xl">I’m Vlad, Front-<br/>end developer &<br/> coffee destroyer</Typography>

                <Typography tag="p" bold="normal" class="mb-4 text-xl md:text-3xl text-[#606060] mt-5 md:mt-14">Hi, I’m looking for a Front-end position in a product company. I appreciate at work good code, colleagues and established processes. I will be glad to meet you.</Typography>
            </div>

            <Image
                src="/img/MyPhoto.jpg"
                alt="me if you even care:3"
                class="h-full max-h-screen justify-self-baseline flex">
            </Image>

        </div>

    </Container>
    </Section>
</template>
<script setup lang="ts">
    import Section from '@/components/ui/section.vue';
    import Container from '@/components/ui/container.vue';
    import Typography from '@/components/ui/typography.vue';
    import Image from '@/components/ui/image.vue';
</script>