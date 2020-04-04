import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeContainer from '../views/HomeContainer.vue'
import ClassContainer from '../views/ClassContainer.vue'
import LoginContainer from '../views/LoginContainer.vue'
import RegisterContainer from '../views/RegisterContainer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/home'
  },
  {
    path: '/home',
    component: HomeContainer
  },
  {
    path: '/class',
    component: ClassContainer
  },
  {
    path: '/login',
    component: LoginContainer
  },
  {
    path: '/register',
    component: RegisterContainer
  },
]

const router = new VueRouter({
  routes
})

export default router
