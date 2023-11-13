import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Views/Home.vue'
import SearchView from '../Views/SearchView.vue'



const routes = [
  { path: '/',name:'home', component: Home},
  { path: '/search', name: 'searchview', component: SearchView}
  ]
  

  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  export default router