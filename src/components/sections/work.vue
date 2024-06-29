<template>
    <section id="work" aria-labelledby="work-heading" class="w-full">

        <Container>

            <div class="lg:mt-[10rem] max-lg:mt-[8rem] max-md:mt-[4rem] md:mb-[4rem] grid lg:grid-cols-2">
                <Typography tag="h2" bold="medium" text-split words-rotate-in class="text-4xl md:text-7xl">Hello, I’m<br/> Vlad.</Typography>

                <Typography tag="p" bold="normal" text-split letters-slide-down class="my-4 text-xl md:text-3xl text-[#606060] md:mt-14">A Front-end Developer who is trying to<br/> specialize  Web Dev & Design.</Typography>
            </div>

            <Icons
                name="arrow-down"
                size="lg">
            </Icons>

        </Container>

    </section>
</template>
<script setup>
    import Container from '@/components/ui/container.vue';
    import Typography from '@/components/ui/typography.vue';
    import Icons from '@/components/ui/icons.vue';

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
    
        document.querySelectorAll('[words-rotate-in]').forEach((el) => {
        const tl = gsap.timeline({ paused: true });
        tl.set(el.querySelectorAll(".word"), { transformPerspective: 1000 });
        tl.from(el.querySelectorAll(".word"), { rotationX: -90, duration: 0.6, ease: "power2.out", stagger: { amount: 0.6 } });
        createScrollTrigger(el, tl);
        });

        document.querySelectorAll('[letters-slide-down]').forEach((el) => {
        const tl = gsap.timeline({ paused: true });
        tl.from(el.querySelectorAll(".char"), { yPercent: -120, duration: 0.3, ease: "power1.out", stagger: { amount: 0.7 } });
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
