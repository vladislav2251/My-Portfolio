<template>
    <Section id="skills" aria-labelledby="skills-heading" class="w-full">
        <Container>

            <div class="grid gap-[2rem] md:gap-[5rem]">

                <div class="max-md:flex-col flex gap-[2rem] md:gap-[5rem] md:items-center">
                    <Typography tag="p" bold="medium" class="text-[18px]">Main Stack</Typography>
                    <Typography tag="p" bold="normal" text-split letters-slide-down class="text-[18px]">Vue.js, Nuxt.js ,TypeScript, Express.js, GSAP, REST APIs, Prisma, Pinia, Tailwind CSS</Typography>
                </div>

                <div class="max-md:flex-col flex gap-[2rem] md:gap-[5rem] md:items-center">
                    <Typography tag="p" bold="medium" class="text-[18px]">Main Skills</Typography>
                    <Typography tag="p" bold="normal" text-split letters-slide-down class="text-[18px]">Experience with version control tools such as<br/> Gitlab, development of business logic for the<br/> frontend, team work, stress resistance.</Typography>
                </div>

            </div>

        </Container>
    </Section>
</template>
<script setup>
    import Section from '@/components/ui/section.vue';
    import Container from '@/components/ui/container.vue';
    import Typography from '@/components/ui/typography.vue';
    
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
            start: 'bottom 80%',
            onEnter: () => timeline.play(),
        });
        };

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
