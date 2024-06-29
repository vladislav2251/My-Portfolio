<template>
    <section id="contact" aria-labelledby="contact-heading" class="w-full">
        <Container>

            <div class="lg:mt-[10rem] max-lg:mt-[8rem] max-md:mt-[2rem] grid md:grid-cols-2">

                <div class="w-full">
                    <Typography tag="h2" bold="medium" text-split words-slide-up class="text-4xl md:text-7xl mt-7 lg:mt-0">Contact me</Typography>

                    <Typography tag="p" bold="normal" text-split words-slide-from-right class="text-xl md:text-3xl text-[#606060] mt-5 md:mt-14">Got a project?<br/> I Have ideas.<br/>  Let`s talk</Typography>

                    <Icons
                        name="arrow-down"
                        alt="arrow-down"
                        size="lg"
                        class="mt-10">
                    </Icons>

                    <ContactForm></ContactForm>

                </div>

            </div>

        </Container>
    </section>
</template>
<script setup>
    import Container from '@/components/ui/container.vue';
    import Typography from '@/components/ui/typography.vue';
    import Icons from '@/components/ui/icons.vue';
    import ContactForm from '@/components/contact_form.vue'

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
