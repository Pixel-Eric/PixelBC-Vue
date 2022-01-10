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

const register = {
    path:'/register',
    name:'Register',
    component:()=>import('../views/Register')
}

const routes = [
    app,home,login,article,plate,register
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//重写VueRouter的push方法
//防止跳转当前相同路由时会报错

const originPush = router.options.push;
const originReplace = router.options.replace;

router.options.push = function(location,resolve,reject){
    if(resolve&&reject){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}

router.beforeEach((to,from,next)=>{
    if(to.name == 'login'){
        if(getToken()!=null){
            next({name:'home'})
        }
    }
    next();
});


export default router
