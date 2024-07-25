<template>
    <Section id="project" aria-labelledby="project-heading" class="w-full">
      <div class="grid md:grid-cols-2">
        <div class="flex flex-col gap-5 justify-between">
          <div class="gap-3 flex flex-col md:mr-[5rem]">
            <Typography tag="h2" bold="bold" class="text-[#181717] text-md">
              {{ props.number }} / {{ props.label }}
            </Typography>

            <Typography
                tag="h2"
                bold="bold"
                class="text-[#181717] text-md">
                About the project:
            </Typography>
  
            <Typography tag="p" bold="normal" class="text-[#181717] text-lg">
              {{ props.description }}
            </Typography>

            <Typography
                tag="h2"
                bold="bold"
                class="text-[#181717] text-md">
                Responsibilities:
            </Typography>
  
            <Typography tag="p" bold="normal" class="text-[#606060] text-md whitespace-pre-line">
              {{ props.detail }}
            </Typography>
          </div>
  
          <Typography
            tag="h2"
            bold="bold"
            class="text-[#181717] underline text-2xl mb-4 md:mb-0"
            v-if="props.path.length"
          >
            <a :href="props.path">This project on GitHub ↗</a>
          </Typography>
          <Typography
            tag="h2"
            bold="bold"
            class="text-[#181717] underline text-2xl mb-4 md:mb-0"
            v-if="props.link.length"
          >
            <a :href="props.link">Explore the website ↗</a>
          </Typography>
        </div>
  
        <div class="overflow-hidden block relative">
          <Image :src="props.src" :alt="props.label"></Image>
        </div>
      </div>
    </Section>
  </template>
  
  <script setup lang="ts">
  import Section from '@/components/ui/section.vue';
  import Typography from '@/components/ui/typography.vue';
  import Image from '@/components/ui/image.vue';
  
  interface IProjectCard {
    number: string;
    label: string;
    description: string;
    detail: string;
    path: string;
    link: string;
    src: string;
  }
  
  const props = defineProps<IProjectCard>();
  </script>
  