<template>
        <main id="main">
                <Header />
                        <RouterView />
                <Footer />
        </main>
</template>
<script setup>
        import Header from '@/components/layouts/header.vue';
        import Footer from '@/components/layouts/footer.vue';

        import Lenis from 'lenis';

        const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        })
        
        lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
        console.log({ scroll, limit, velocity, direction, progress })
        })

        function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
</script>