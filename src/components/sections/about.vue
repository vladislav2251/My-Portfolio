<template>
    <section id="about" aria-labelledby="about-heading" class="w-full">

        <Container>

        <div class="lg:mt-[10rem] max-lg:mt-[8rem] max-md:mt-[4rem]  grid lg:grid-cols-2 lg:place-items-end  md:items-start">

            <div class="w-full max-lg:w-11/12 max-lg:max-w-7xl place-self-start">
                <Typography tag="h2" bold="medium" text-split words-slide-up class="mb-4 text-4xl md:text-7xl">I’m Vlad, Front-<br/>end developer &<br/> coffee destroyer</Typography>

                <Typography tag="p" bold="normal"text-split words-slide-from-right class="mb-4 text-xl md:text-3xl text-[#606060] mt-5 md:mt-14">Hi, I’m seeking a Front-end position in a product company. I value quality code, great colleagues, and established processes. I look forward to meeting you.</Typography>
            </div>

            <Image
                src="/img/MyPhoto.jpg"
                alt="me if you even care:3"
                class="justify-self-baseline flex object-cover"
                parallax-content
                section-parallax>
            </Image>

        </div>

    </Container>
    </section>
</template>
<script setup>
    import Container from '@/components/ui/container.vue';
    import Typography from '@/components/ui/typography.vue';
    import Image from '@/components/ui/image.vue';

    import { onMounted } from 'vue';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import SplitType from 'split-type';
    
    gsap.registerPlugin(ScrollTrigger);
    
    onMounted(() => {
        // Разделение текста на спаны
        new SplitType('[text-split]', {
        types: 'words, chars',
        tagName: 'span',
        });
    
        function createScrollTrigger(triggerElement, timeline) {
        ScrollTrigger.create({
            trigger: triggerElement,
            start: 'top bottom',
            onLeaveBack: () => {
            timeline.progress(0);
            timeline.pause();
            },
        });
        ScrollTrigger.create({
            trigger: triggerElement,
            start: 'top 60%',
            onEnter: () => timeline.play(),
        });
        }
    
        document.querySelectorAll('[words-slide-up]').forEach((el) => {
        const tl = gsap.timeline({ paused: true });
        tl.from(el.querySelectorAll('.word'), {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: 'back.out(2)',
            stagger: { amount: 0.5 },
        });
        createScrollTrigger(el, tl);
        });

        document.querySelectorAll('[words-slide-from-right]').forEach((el) => {
        const tl = gsap.timeline({ paused: true });
        tl.from(el.querySelectorAll('.word'), {
            opacity: 0,
            x: "1em",
            duration: 1.5,
            ease: "power2.out",
            stagger: { amount: 0.2 },
        });
        createScrollTrigger(el, tl);
        });
    });


  
</script>
<style>

.word {
overflow: hidden;
padding-bottom: 0.1em;
margin-bottom: -0.1em;
transform-origin: bottom;
}
</style>