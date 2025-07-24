import { createRouter, createWebHistory } from 'vue-router'
import AdminPage from '../views/AdminPage.vue'
import AdminStats from '../views/AdminStats.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: AdminPage },
  { path: '/stats', name: 'Stats', component: AdminStats },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
