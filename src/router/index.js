import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/hamburguesas' },
    { path: '/hamburguesas', component: { render: () => null } },
    { path: '/perros', component: { render: () => null } },
    { path: '/pizzas', component: { render: () => null } },
    { path: '/bebidas', component: { render: () => null } },
    { path: '/postres', component: { render: () => null } },
    { path: '/promociones', component: { render: () => null } },
    { path: '/nosotros', component: { render: () => null } },
    { path: '/:pathMatch(.*)*', redirect: '/hamburguesas' },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

export default router