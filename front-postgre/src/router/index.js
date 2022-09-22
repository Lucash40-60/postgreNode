import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllData from '../views/AllData.vue'
import CreateData from '../views/CreateData.vue'
import DeleteUser from '../views/DeleteUser.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/all',
    name: 'AllData',
    component: AllData
  }, 
  {
    path: '/create',
    name: 'CreateData',
    component: CreateData
  }, 
  {
    path: '/delete',
    name: 'DeleteUser',
    component: DeleteUser
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
