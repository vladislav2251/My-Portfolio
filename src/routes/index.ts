import { createRouter, createWebHistory } from 'vue-router';

import About from '@/views/pages/about.vue';
import Contact from '@/views/pages/contact.vue';
import NotFound from '@/views/pages/404.vue';
import Work from '@/views/pages/work.vue';

const routes = [
    { path: '/about', name: 'about', component: About },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/', name: 'work', component: Work },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;