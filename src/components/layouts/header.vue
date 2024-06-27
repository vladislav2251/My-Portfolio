<template>
    <header aria-label="primary" class="fixed top-0 z-50 w-full items-center">
        <div class="bg-[#F3F3F3] md:py-8 py-3 -z-50">
       <Container>
            
            <div class="grid grid-cols-2 items-center">
                
                <div class="flex items-center lg:hidden">
                    <MobileNavigationToggle 
                            @click:toggle="toggleMobileMenu" 
                            :is-background-shown="isBackgroundShown.value"
                    />
                </div>

                <div class="flex items-center justify-end lg:justify-start">
                    <a href="/" title="Navigate home" class="text-[26px] md:text-[32px] font-bold">
                        VD.
                    </a>
                </div>

                <nav data-astro-prefetch aria-label="Primary"  class="ms-4 hidden items-center justify-end gap-x-6 lg:flex text-[21px] font-medium">
                        <a
                                :href="element.path" 
                                :key="i" 
                                v-for="(element, i) in links" 
                                class="h-full items-center"> 
                                
                                {{ element.label }} 
                        </a>
                </nav>

            </div>

       </Container>
    </div>
       <MobileNavigation :is-open="isMobileMenuOpen" :links="links" @close="closeMobileMenu"/>
    </header>
</template>
<script setup lang="ts">
    import { ref, computed, watch } from 'vue'; 

    import Container from '@/components/ui/container.vue';
    import MobileNavigation from '@/components/layouts/mobile_navigation.vue';
    import MobileNavigationToggle from '@/components/layouts/components/mobile_navigation_toggle.vue';
    
    import useLockBody from '@/hooks/use-body-lock';
    import useScrollThreshold from '@/hooks/use-scroll-treshold';

    const links = ref ([
        { label: 'Work', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
    ]);

    const isMobileMenuOpen = ref(false);
    const GRACE_THRESHOLD = ref<any>(12);

    const { isScrollThresholdPassed } = useScrollThreshold(GRACE_THRESHOLD.value);

    const isBackgroundShown = computed(() => isScrollThresholdPassed || isMobileMenuOpen.value);

    const toggleMobileMenu = () => {
            isMobileMenuOpen.value = !isMobileMenuOpen.value;
            isScrollThresholdPassed.value = !isScrollThresholdPassed.value;

            if (window.scrollY > 10)
                    isScrollThresholdPassed.value = true;
    };

    const closeMobileMenu = () => {
            isMobileMenuOpen.value = false;
    };

    watch(() => isMobileMenuOpen.value, (newValue) => {
            useLockBody(newValue);
    });

</script>