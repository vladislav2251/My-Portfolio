<template>
    <div class="grid gap-1.5">
        <label class="text-xl text-[#606060]">{{  props.label  }}</label>
        <input 
            class="w-full h-[3rem] border border-solid bg-inherit border-[#606060] p-3 focus:outline-none"
            type="text" 
            v-bind="$attrs" 
            :value="props.modelValue" 
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" 
        />
    </div>
</template>

<script setup lang="ts">
    const emit = defineEmits();
    import type { IInputProps } from '@/interfaces/input.interface';

    const props = defineProps<IInputProps>();
</script>