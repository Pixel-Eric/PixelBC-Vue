<template>
  <div class="login-form">
      <div class="register">
          <p>没有账号?点击注册</p>
      </div>
      <div class="uname login-box">
          <label for="uname">CardID:</label>
          <input id="uname" v-model="uname" type="text" />
      </div>
      <div class="pwd login-box">
          <label for="pwd">PassWord:</label>
          <input id="pwd" type="password" v-model="upwd" />
      </div>
      <div class="btn" >
          <p @click="ulogin">登录</p>
      </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {reactive, toRefs} from 'vue'
import {login} from '../../request/apis'
import { setSession } from '../../session'
import { useRouter } from 'vue-router'
export default {
    name:'LoginForm',
    setup(){
        //获取状态管理器
        const store = useStore();
        //获取路由组件
        const router = useRouter();
        //构建用户登录参数
        let data = reactive({
            uname:'',
            upwd:''
        });
        //登录任务
        async function ulogin(){
            //开始处理异步任务
          let falg = await login(data).then(
                res=>{
                    if(res.data.hasOwnProperty('token')){
                        setSession(res.data);
                        return Promise.resolve(true);
                    }
                    return Promise.reject(res.data.Error);
                },
                err=>{
                    return Promise.reject("服务器连接出错");
                }
            )
          if(falg){
              alert("登录成功");
              router.push({name:'home'});
          }else{
              
          }
        }
        return {ulogin,...toRefs(data)}
    }
}
</script>

<style lang="scss" scoped>
//全局混入样式
@mixin content-center-row {
    display: flex;
    justify-content: center;
    align-items: center;
}

@mixin content-center-col {
    @include content-center-row;
    flex-direction: column;
}
.login-form{
    @include content-center-col;
    font: {
        family: '像素脑洞';
        size: 1.3em;
    }
    color: white;
    height: 100%;
    padding: 1em;
    &>div{
        width: 100%;
        margin: .5em 0;
        label{
            margin-left: 1.2em;
            text-align: right;
        }
    }
    input{
        border: none;
        outline: none;
        height: 1.3em;
        font-size: 1.1em;
        color: white;
        width: 9em;
        font-family: '像素脑洞';
        margin-left: .5em;
        background-color: rgba(0, 0, 0, 0);
    }
    .uname,.pwd{
        display: flex;
        justify-content: center;
        align-items: center;
        // background-color: red;
        height: 70px;
        width: 100%;
    }
    .login-box{
        padding: .3em;
        background-image: url(./images/登录框素材1.png);
        background-size: 100% 70px; 
    }
    .btn{
        display: flex;
        justify-content: center;
        color: #333;
        cursor: pointer;
        p{
            width: 3em;
            padding: .3em;
            &:hover{
                background-color: rgba(0, 0, 0, 0.151);
            }
        }
    }
    .error{
        text-align: right;
        color: rgb(110, 44, 44);
        font-size: .8em;
    }
    .register{
        text-align: right;
        color: #333;
        p {
            cursor: pointer;
            font: {
                size: .7em;
            }
            &:hover{
                text-decoration: underline;
            }
        }
    }

}

</style>