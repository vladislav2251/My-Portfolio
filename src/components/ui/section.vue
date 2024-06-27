<template>
     <section v-bind="$attrs" :class="[
          'relative z-10 w-full bg-[#f3f3f3] py-12 flex flex-col',]">
          <slot />
     </section>
</template>