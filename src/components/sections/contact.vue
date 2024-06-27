<template>
    <section id="contact" aria-labelledby="contact-heading" class="w-full">
        <Container>

            <div class="lg:mt-[10rem] pt-[4rem] md:pt-0 md:py-[4rem] grid md:grid-cols-2">

                <Image 
                    src="/img/Moon.jpg"
                    alt="The moon is living in your dark hair"
                    class="">
                    
                </Image>
                
                <div class="w-full">
                    <Typography tag="h2" bold="medium" class="text-4xl md:text-7xl mt-7 lg:mt-0">Contact me</Typography>

                    <Typography tag="p" bold="normal" class="text-xl md:text-3xl text-[#606060] mt-5 md:mt-14">Got a project?<br/> I Have ideas.<br/>  Let`s talk</Typography>

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
<script setup lang="ts">
    import Container from '@/components/ui/container.vue';
    import Image from '@/components/ui/image.vue';
    import Typography from '@/components/ui/typography.vue';
    import Icons from '@/components/ui/icons.vue';
    import ContactForm from '@/components/contact_form.vue'
</script>
