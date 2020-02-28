import Vue from  'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home/Home'
// import Car from '../views/car/Car'
// import Profile from '../views/profile/Profile'
// import Network from '../views/network/Network'
const Home = () => import( '../views/home/Home')
const Car = () => import( '../views/car/Car')
const Profile = () => import( '../views/profile/Profile')
const Network = () => import( '../views/network/Network')


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/car',
    component: Car
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/network',
    component: Network
  }
]
const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router;