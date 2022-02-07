import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue';
import CreateProduct from './components/CreateProduct.vue';
import ProductList from './components/ProductList.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/createproduct', component: CreateProduct },
    { path: '/products', component: ProductList },
];

const router = createRouter({
    "history": createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');