import { createRouter, createWebHistory } from 'vue-router'
import Phone from '../pages/Phone-Input.vue'
import Otp from '../pages/Otp-Input.vue'
import Register from '../pages/Register-form.vue'
const routes = [
  {path: '/', name: 'Phone', component: Phone},
  {path: '/Otp',name: 'Otp', component: Otp},
  {path: '/Register',name: 'Register', component: Register},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
