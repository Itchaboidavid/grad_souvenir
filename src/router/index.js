import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Journey from '@/views/Journey.vue';
import Layout from '@/Layout/Layout.vue';

const routes = [
    {
        path: '/',
        redirect: '/home', // Redirect root to /home
    },
    {
        path: '/home',
        component: Layout,
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home,
            },
            {
                path: '/about',
                name: 'about',
                component: About,
            },
            {
                path: '/gradpic',
                name: 'gradpic',
                component: Journey,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
