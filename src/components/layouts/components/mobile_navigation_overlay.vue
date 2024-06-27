<template>
    <transition>
         <div class="fixed inset-0 -z-10 bg-[#f3f3f34f] backdrop-blur-lg lg:hidden" v-if="isOpen"></div>
    </transition>
</template>

<script setup lang="ts">
    import type { IMobileNavigationOverlayProps } from '@/interfaces/mobile_navigation_overlay.interface';
    const props = defineProps<IMobileNavigationOverlayProps>();
</script>