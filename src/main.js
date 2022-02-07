import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue';
// import the missing components


const routes = [
    { path: '/', component: Home }
    // add the missing routes
];

const router = createRouter({
    "history": createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');