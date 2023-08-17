import { createRouter, createWebHistory } from "vue-router";

import HomeInstagram from '../components/Home/HomeInstagram.vue'
import LoginInstagram from '../components/Login/LoginInstagram.vue'
import SignUp from '../components/SignUp/SignUp.vue'

const router = createRouter({
    history: createWebHistory(import.meta.url),
    routes: [
        {
            path: '/', 
            name: 'Login',
            component: LoginInstagram
        },
        {
            path: '/cadastro', 
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/home', 
            name: 'Home',
            component: HomeInstagram
        },
    ]
})