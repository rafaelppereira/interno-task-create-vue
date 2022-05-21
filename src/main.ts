import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import Home from './views/Home.vue';
import Task from './views/Task.vue';

import store from './store';

import './styles/global.scss';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/tasks', name: 'Task', component: Task},
  ]
})

createApp(App)
.use(router)
.use(store)
.mount('#app')
