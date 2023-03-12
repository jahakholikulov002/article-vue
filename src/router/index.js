import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Magazines from '../pages/Magazines.vue'
import News from '../pages/News.vue'
import Login from '../pages/Login.vue'

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/magazines',
            name: 'magazines',
            component: Magazines
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
    ],
    history: createWebHistory(import.meta.env.BASE_URL),
})

export default router
