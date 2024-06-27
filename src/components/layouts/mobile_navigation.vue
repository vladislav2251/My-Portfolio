<template>
    <transition>
         <div class="border-neutrals-600 py-4 lg:hidden" v-if="props.isOpen">
              <Container>
                   <nav class="flex flex-col justify-center divide-y divide-[#606060]">
                        <a
                             @click="toggleClose"
                             :href="element.path" 
                             :key="i" 
                             v-for="(element, i) in props.links" 
                             class="py-4 ps-2 uppercase text-[#181717] transition-[letter-spacing,color] hover:tracking-wider focus-visible:tracking-wider"
                        >
                        
                             {{ element.label }}
                        </a>
                   </nav>
              </Container>
         </div>
    </transition>
    
    <MobileNavigationOverlay :isOpen="props.isOpen"/>
</template>

<script setup lang="ts">

    import MobileNavigationOverlay from '@/components/layouts/components/mobile_navigation_overlay.vue';
    import Container from '@/components/ui/container.vue';
    import type { IMobileNavigationLinkProps } from '@/interfaces/mobile_navigation_link.iterface';

    const emits = defineEmits();
    const props = defineProps<IMobileNavigationLinkProps>();

    const toggleClose = () => {
         emits('close');
    };

</script>