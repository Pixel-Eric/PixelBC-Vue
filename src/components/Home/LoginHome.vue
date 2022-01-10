<template>
  <div class="login">
      <div class="login-top">
          <p>{{getName}}</p>
      </div>
      <div class="login-ico" @click="jumpLogin" :style="getIco">

      </div>
      <div class="login-bottom" v-if="!show">
          <ul>
              <li @click="jumpRegister">用户注册</li>
              <li>找回密码</li>
          </ul>
      </div>
      <div class="login-fun" v-if="show">
          <div>
              <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-luntanzhongxin"></use>
              </svg>
              <p>消息</p>
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gerenkongjian1"></use>
            </svg>
            <p>个人空间</p>
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tianchongxing-"></use>
            </svg>
            <p>好友</p>
          </div>
      </div>
      <div class="line"></div>
  </div>
</template>

<script>
import {reactive,toRefs} from 'vue'
import { getSelfInfo } from '../../request/apis';
import { useStore } from "vuex"
import { useRouter } from 'vue-router';
import { getSession2 } from '../../session';
export default {
    async setup(){
        const store = useStore();
        //通过状态管理器获取用户的信息
        let curUser = store.getters['user/getInfo'];
        //如果当前状态管理器中没有用户的信息且有token
        if(curUser==null&&getSession2()!=null){
           curUser = await new Promise((resolve)=>{
                getSelfInfo().then(res=>{
                    resolve(res.data);
                })
            })
        }
        //获取路由组件
        const router = useRouter();
        function jumpLogin(){
            router.push({name:'login'});
        }
        //未登录状态的初始信息
        let user = reactive({
            show:false,
            getIco:{},
            getName:'请登录',
            level:0
        })
        //开始判断用户的登录信息
        if(curUser!=null){
                import('../../assets/iconfont/iconfont')
                curUser = reactive(curUser);
                user.getIco = {backgroundImage:`url(${curUser.ico})`};
                user.show = true;
                user.getName = curUser.name;
                user.level = curUser.rank;
        }
        //跳转到注册
        function jumpRegister(){
            router.push({name:'Register'});
        }
        return {
            ...toRefs(user),jumpLogin,jumpRegister
        }
    }
}
</script>

<style lang='less' scoped>
.login{
    width: 20em;
    height: 28em;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 1em;
    margin: 1em;
    overflow: hidden;
    box-shadow: 5px 5px 15px rgb(146, 145, 145);
    .login-top{
        background-color: #0080ff;
        height: 12em;
        &>p{
            color: white;
            margin-left: 1em;
            margin-top: .5em;
        }
    }
    
    .login-bottom{
        flex-grow: 1;
        margin-top: 6em;
        background-color: white;
        ul{
            list-style: none;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            li{
                width: 50%;
                font-size: 1.2em;
                color: #1578db;
                cursor: pointer;
                padding: .5em;
                border-radius: .3em;
                &:hover{
                    color: white;
                    background-color: #0080ff;
                    
                }
            }
        }
    }
    .login-fun{
        flex-grow: 1;
        margin-top: 6em;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        div{
            text-align: center;
            p{
                    opacity: 0;
                    transition: .5s;
                }
            &:hover{
                p{
                    opacity: 1;
                }
            }
            svg{
                margin: 0 .5em;
                transition: .5s;
                cursor: pointer;
            }
            svg:nth-of-type(1){
                width: 2.5em;
                height: 2.5em;
                &:hover{
                    width: 3.5em;
                    height: 3.5em;
                }
            }
            svg:nth-of-type(2){
                width: 2.8em;
                height: 2.8em;
                &:hover{
                    width: 3.8em;
                    height: 3.8em;
                }
            }
            svg:nth-of-type(3){
                width: 2.8em;
                height: 2.8em;
                &:hover{
                    width: 3.8em;
                    height: 3.8em;
                }
            }
        }
    }
    .login-ico{
        position: absolute;
        width: 15em;
        height: 15em;
        top: 2.5em;
        left: 2.5em;
        background-color: white;
        border-radius: 50%;
        background-image: url(./images/defico.png);
        background-size: 100%;
    }
}
.line{
    height: .3em;
    background-color: #0080ff;
}
</style>