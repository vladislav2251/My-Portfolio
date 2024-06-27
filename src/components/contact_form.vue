<template>
    <div class="basis-full mt-10">
      <form @submit.prevent="sendMessage">
        <fieldset class="group flex flex-col gap-y-6">
          <Input type="text" label="Name" maxlength="30" v-model="name" required />
          <Input type="email" label="Email" maxlength="30" v-model="email" required />
          <Textarea type="text" label="Tell me about your project" required :value="message" maxlength="340" v-model="message" />
        </fieldset>
        <button type="submit" class="btn my-[2rem] flex justify-center items-center border border-solid border-[#606060] bg-inherit w-[10rem] h-[3rem] hover:bg-[#181717] duration-250 transition-all hover:text-[#f3f3f3]">Send Message</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
    import { ref } from 'vue';
    
    import Input from '@/components/ui/input.vue';
    import Textarea from '@/components/ui/textarea.vue';
    import contactService from '@/service/contact.service';

    const name = ref<string>('');
    const email = ref<string>('');
    const message = ref<string>('');

    const loading = ref<boolean>(false);

    const sendMessage = async () => {

        loading.value = true;

        try {

              const fullMessage = `
                  Ім'я: ${name.value};\n                                                                                
                  Пошта: ${email.value};\n                                                                          
                  Повідомлення: ${message.value};\n                                                                  
              `;

              await contactService.sendContact(fullMessage);

        } catch (err) {

              throw err;

        } finally {

              name.value = '';
              email.value = '';
              message.value = '';

              loading.value = false;
              
        };
    };

  </script>
  