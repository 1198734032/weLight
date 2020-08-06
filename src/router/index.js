import Vue from 'vue'
import VueRouter from 'vue-router'

const index = () => import('@/views/index/index.vue')
const register = () => import('@/views/register/register.vue')

const admin = () => import('@/views/admin/admin.vue')
const adminLogin = () => import('@/views/adminLogin.vue')
const adminUpload = () => import('@/views/admin/childrenComponents/adminUpload.vue')
const adminHome = () => import('@/views/admin/childrenComponents/adminHome.vue')

const user = () => import('@/views/user/user.vue')
const userLogin = () => import('@/views/userLogin.vue')
const userHome = () => import('@/views/user/childrenComponents/userHome.vue')
const userCreate = () => import('@/views/user/childrenComponents/userCreate.vue')
const userPersonnal = () => import('@/views/user/childrenComponents/userPersonnal.vue')





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/adminLogin',
    component: adminLogin
  },
  {
    path: '/userLogin',
    component: userLogin
  },
  {
    path: '/admin',
    component: admin,
    children: [
      {
        path: '',
        redirect: 'adminHome'

      },
      {
        path: 'adminUpload',
        component: adminUpload
      },
      {
        path: 'adminHome',
        component: adminHome
      }
    ]
  },
  {
    path: '/user',
    component: user,
    children: [
      {
        path:'',
        redirect:'userHome'
      },
      {
        path: 'userHome',
        component: userHome
      },
      {
        path: 'userCreate',
        component: userCreate
      },
      {
        path: 'userPersonnal',
        component: userPersonnal
      }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
