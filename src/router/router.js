import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';  // Подставьте свой путь к компоненту Home.vue

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Добавьте другие маршруты, если необходимо
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
