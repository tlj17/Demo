import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Main.vue'),
      redirect:'/input',
      children:[
        {
          path:'/input',
          name:'input',
          component:()=> import('../views/Input.vue')
        },
        {
          path:'/tablelist',
          name:'tablelist',
          component:()=> import('../views/TableList.vue')
        },
      ]
    },
    
  ]
})

export default router
