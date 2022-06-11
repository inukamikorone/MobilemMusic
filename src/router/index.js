import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component:index,
    children:[
      {
        path:'home',
        redirect:'/home/hot',
        component:()=>import('@/views/home'),
        children:[
          {
            path:'hot',
            component:()=>import('@/views/musicList/hotList')
          },
          {
            path:'new',
            component:()=>import('@/views/musicList/newList')
          },
          {
            path:'king',
            component:()=>import('@/views/musicList/kingList')
          }
        ]
      },
      {
        path:'singer',
        name:'singer',
        component:()=>import('@/views/singer')
      },
      {
        path:'listcate',
        name:'listcate',
        component:()=>import('@/views/listcate')
      },
      {
        path:'ucenter',
        name:'ucenter',
        component:()=>import('@/views/ucenter')
      },
      {
        path:'search',
        name:'search',
        component:()=>import('@/views/search')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
