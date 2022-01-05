// @ts-nocheck
import { createRouter, createWebHistory } from 'vue-router'
import { getToken } from '../session' 

const app = {
    path:'/',
    name:'app',
    component:()=>import('../App.vue'),
    redirect: '/home'
}
const home = {
    path:'/home',
    name:'home',
    meta:{homeTop:true},
    component:()=>import('../views/Home')
}
const login = {
    path:'/login',
    name:'login',
    component:()=>import('../views/Login')
}
const article = {
    path:'/article/:aid/:page',
    name:'article',
    props:true,
    component:()=>import('../views/Article')
}
const plate = {
    path:'/Section/:pid/:page',
    name:'Section',
    props:true,
    component:()=>import('../views/Plate')
}

const routes = [
    app,home,login,article,plate
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
    if(to.name == 'login'){
        if(getToken()!=null){
            next({name:'home'})
        }
    }
    next();
});
   

export default router
