import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const Category= () => import('../views/category/Category');
const Cart = () => import('../views/cart/Cart');
const Profile = () => import('../views/profile/Profile');

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/home',
    name: '',
    component: Home
  },
  {
    path: '/category',
    name: '',
    component: Category
  },
  {
    path: '/cart',
    name: '',
    component: Cart
  },
  {
    path: '/profile',
    name: '',
    component: Profile
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
