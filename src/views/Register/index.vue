<template>
  <Top />
  <div class="register">
      <div class="register-left">
          <div>
            <div class="register-left-col">
                <p>论坛名称:</p>
                <input v-model="rule[2].value" type="text" placeholder="起一个独特的名字吧" />
            </div>
            <div class="register-left-col">
                <p>用户名:</p>
                <input v-model="rule[0].value" type="text" placeholder="登录论坛的凭证" />
            </div>
            <div class="register-left-col">
                <p>密码:</p>
                <input v-model="rule[1].value" type="text" placeholder="请输入密码" />
            </div>
            <div class="register-left-col">
                <p>再次输入密码:</p>
                <input v-model="passtwo" @blur="passagin" type="text" placeholder="请再次输入密码" />
            </div>
            <div class="register-left-col">
                <p>性别:</p>
                <div>
                    <label for="m">男</label>
                    <input type="radio" name="sex" value="m" v-model="sex" />
                    <label for="f">女</label>
                    <input type="radio" name="sex" value="f" v-model="sex" />
                </div>
            </div>
            <div class="register-left-col">
                <p>请选择头像:</p>
                <input type="file" ref="file" accept=".png,.jpg,.jpeg,image/png,image/jpg,image/jpeg" @change="updataimg()"/>
            </div>
            <div class="register-left-col">
                <p>头像预览:</p>
                <div>
                    <img :src="imgurl" alt="">
                </div>
            </div>
            <div @click="verexp" class="register-left-col2">
                <button>创建账号</button>
            </div>
          </div>
          <div>
              <p v-if="rule[2].v">该名称将作为论坛的显示名称</p>
              <p v-if="!rule[2].v" class="err">{{rule[2].err}}</p>
              <p v-if="rule[0].v">登录论坛唯一账号</p>
              <p v-if="!rule[0].v" class="err">{{rule[0].err}}</p>
              <p v-if="rule[1].v">登录论坛唯一密码</p>
              <p v-if="!rule[1].v" class="err">{{rule[1].err}}</p>
              <p v-if="pag">再次输入密码</p>
              <p v-if="!pag" class="err">请确保两次密码相同</p>
              <p>用户的性别标识，一旦确定不能再次更改</p>
              <p v-if="icon">用户的显示头像</p>
              <p v-if="!icon" class="err">请选择头像</p>
          </div>
      </div>
      <div class="register-right">
          <h4>已有账号?立即登录</h4>
          <div><p class="btn-login">立即登录论坛</p></div>  
      </div>
  </div>
</template>

<script>
import Top from "../../components/Universal/Top.vue";
import { reactive,toRefs,ref,watch } from "vue";
import verify from "../../hooks/verify";
import { register } from "../../request/apis";
export default {
    setup(){
        let info = reactive({
            ico:null
        })
        let file = ref(null);
        let imgurl = ref('');
        function updataimg(){
            let URL = window.URL || window.webkitURL;
            imgurl.value = URL.createObjectURL(file.value.files[0])
        }
        //创建验证规则
        let rule = reactive([
            {name:'username',value:'',reg:/[a-zA-z_]\w{5,15}/,err:'用户名必须以字母下划线开头,长度为6-16位',v:true},
            {name:'password',value:'',reg:/[a-zA-z_]\w{5,15}/,err:'密码必须必须以字母下划线开头,长度为6-16位',v:true},
            {name:'fname',value:'',reg:/[\w\u4e00-\u9fa5]{3,9}/,err:'论坛名称必须是字母数字下划线或中文，长度为3-9',v:true}
        ])
        let passtwo = ref('');
        let pag = ref(true);
        let sex = ref('m');
        let icon = ref(true);
        //二次密码验证
        function passagin(){
            if(rule[1].value != passtwo.value || passtwo.value ==''){
                pag.value = false;
            }else{
                pag.value = true;
            }
        }
        //检测是否选择头像
        function cheackico(){
            if(file.value?.files[0]){
                icon.value = true;
            }else{
                icon.value = false;
            }
        }
        //表单提交
        async function verexp(){
            //验证钩子进行正则匹配
            let rps = verify(rule);
            rule = rule.map((cur,index)=>{
               cur.v = rps.verobj[index].value;
               return cur; 
            });
            passagin();
            cheackico();
            if(rps.result&&pag.value&&icon.value){
                //验证成功可以提交数据
              let res = await register(rule[2].value,rule[0].value,rule[1].value,sex.value,file.value.files[0]);
                console.log(res.data)
            }else{
                //验证失败不可以提交数据
            }
        }
        return {...toRefs(info),updataimg,file,imgurl,verexp,rule
        ,passtwo,pag,passagin,sex,icon}
    },
    components:{Top}
}
</script>

<style lang="scss" scoped>
$inputfs :1.1em;
@mixin flex-row-center{
    display: flex;
    justify-content: center;
    align-items: center;
}

@mixin flex-row-center-rigth{
    display: flex;
    justify-content: right;
    align-items: center;
}
@mixin flex-row-top-rigth{
    display: flex;
    justify-content: right;
    align-items: flex-start;
}
@mixin flex-row-center-top{
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
@mixin flex-row-left{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
@mixin flex-col-center{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
@mixin flex-col-top-start{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
@mixin flex-col-start-center{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.register{
    @include flex-row-center-top;
    margin: 0 1.5em;
    margin-bottom: 1em;
    &>div:nth-of-type(1){
        border-right: solid #aaa 1px;
    }
    &-left{
        @include flex-row-center-top();
        width: 65em;
        &>div:nth-of-type(1){
            @include flex-col-start-center;
        }
        &>div:nth-of-type(2){
            // margin-top: .5em;
            width: 30%;
            p{
                padding: .5em .5em;
                margin: .6em 0;
                margin-bottom: 1.3em;
                color:#333;
                font-size: .8em;
            }
            .err{
                color: red;
            }
        }
        &-col{
            @include flex-row-top-rigth;
            margin: .5em 0;
            width: 30em;
            p{
                margin: 0 1em;
                font-size: $inputfs;
                color: #666
            }
            input{
                width: 16em;
                height: 2em;
            }
            input[type='input']{
                font-size: $inputfs;
                padding: .5em .5em;
                box-sizing: border-box;
            }
            input[type='radio']{
                width: 1em;
                height: 1em;
                margin: 0 1em;
            }
            div{
                width: 13.5em;
                &>img{
                    width: 10em;
                    height: 10em
                }
            }
        }
        &-col2{
            @include flex-row-center;
            margin-top: 2em;
            padding-left: 10em;
            button{
                border: none;
                padding: .5em 1em;
                background-color:#16a1d8;
                color: white;
                cursor: pointer;
                font-size: 1em;
                &:hover{
                    background-color: #2190bd;
                }
            }
        }
    }
    &-right{
        @include flex-col-top-start;
        padding: 0 1em;
        margin-top: 1em;
        flex-grow: 1;
        height: 100%;
        h4{
            color: #666;
        }
        &>div{
            @include flex-row-center;
            width: 100%;
            .btn-login{
                margin-top: 1em;
                padding: .5em 1em;
                cursor: pointer;
                font-size: 1.1em;
                background-color: #16a1d8;
                color: white;
                &:hover{
                    background-color: #2190bd;
                }
            }
        }
    }
}
</style>