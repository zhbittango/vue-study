import Vue from 'vue'
import vueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')


Vue.use(vueRouter)

// const originalPush = vueRouter.prototype.push
// vueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/cart',
    component: Cart
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
    path: '/category',
    component: Category
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
]
const router = new vueRouter({
  routes,
  mode: 'history',
})

export default router