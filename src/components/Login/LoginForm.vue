<template>
  <div class="login-form">
      <div class="uname">
          <label for="uname">CardID:</label>
          <input id="uname" v-model="uname" type="text" />
      </div>
      <div class="pwd">
          <label for="pwd">PassWord:</label>
          <input id="pwd" type="password" v-model="upwd" />
      </div>
      <div class="btn" @click="ulogin">
          <p>登录</p>
      </div>
      <div class="error">
          错误信息提示
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

<style lang="less" scoped>
.login-form{
    display: flex;
    flex-direction: column;
    font-family: '像素脑洞';
    font-size: 1.3em;
    justify-content: center;
    height: 100%;
    &>div{
        margin: .5em 0;
        label{
            text-align: right;
        }
    }
    input{
        border: none;
        outline: none;
        // border-bottom: 1px solid black;
        height: 1.3em;
        font-size: 1.1em;
        width: 9em;
        font-family: '像素脑洞';
        margin-left: .5em;
    }
    .uname,.pwd{
        display: flex;
        justify-content: right;
        padding-right: 20%;
    }
    .btn{
        display: flex;
        justify-content: center;
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
        color: red;
    }

}

</style>