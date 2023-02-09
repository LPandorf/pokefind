import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from "../components/HomePage";
import PokemonPage from "../components/PokemonPage";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: PokemonPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
