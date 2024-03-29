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
          component:()=> import('../views/Input.vue'),
          props:true
        },
        {
          path:'/tablelist',
          name:'tablelist',
          component:()=> import('../views/TableList.vue')
        },
        {
          path:'/view/:employeeId',
          name:'view',
          component:()=> import('../views/View.vue')
        },
      ]
    },
    
  ]
})

export default router
