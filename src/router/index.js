import Vue from 'vue'
import VueRouter from 'vue-router'

const index = ()=>import('@/views/index/index.vue')
const register = ()=>import('@/views/register/register.vue')

const admin = ()=>import('@/views/admin/admin.vue')
const adminUpload = ()=>import('@/views/admin/childrenComponents/adminUpload.vue')
const adminHome = ()=>import('@/views/admin/childrenComponents/adminHome.vue')



Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/index'
  },
  {
    path:'/index',
    component:index
  },
  {
    path:'/register',
    component:register
  },
  {
    path:'/admin',
    component:admin,
    children:[
      {
        path:'adminUpload',
        component:adminUpload
      },
      {
        path:'adminHome',
        component:adminHome
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
