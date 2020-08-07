import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Admin from '../views/admin.vue'
import Welcome from '../views/admin/welcome.vue'
import Pwds from '../views/admin/pwds.vue'
import ModifyPwd from '../views/admin/modifyPwd.vue'
import AddPwd from '../views/admin/addPwd'
import Register from '../views/register.vue'
import Profile from '../views/admin/profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/',
    name: 'admin',
    component: Admin,
    meta: {
      loginRequire: true
    },
    children: [{
      path: 'welcome',
      name: 'welcome',
      component: Welcome
    },
    {
      path: 'password/list',
      name: 'password/list',
      component: Pwds
    },
    {
      path: 'password/modify',
      name: 'password/modify',
      component: ModifyPwd
    },
    {
      path: 'password/add',
      name: 'password/add',
      component: AddPwd
    },
    {
      path: 'user/profile',
      name: 'user/profile',
      component: Profile
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
