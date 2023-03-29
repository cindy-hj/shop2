import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView.vue'
import AddMember from '../views/AddMember.vue'
import ItemListView from '../views/ItemListView.vue'
import ItemView from '../views/ItemView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, {
    path: '/login',
    name: 'login',
    component: LoginView
  }, {
    path: '/main',
    name: 'main',
    component: MainView
  }, {
    path: '/join',
    name: 'join',
    component: AddMember
  }, {
    path: '/itemlist',
    name: 'itemlist',
    component: ItemListView
  }, {
    path: '/itemview',
    name: 'itemview',
    component: ItemView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
