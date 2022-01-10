<template>
  <Top />
  <div class="register">
      <div class="register-left">
          <div>
            <div class="register-left-col">
                <p>论坛名称:</p>
                <input type="text" placeholder="起一个独特的名字吧" />
            </div>
            <div class="register-left-col">
                <p>用户名:</p>
                <input type="text" placeholder="登录论坛的凭证" />
            </div>
            <div class="register-left-col">
                <p>密码:</p>
                <input type="text" placeholder="请输入密码" />
            </div>
            <div class="register-left-col">
                <p>再次输入密码:</p>
                <input type="text" placeholder="请再次输入密码" />
            </div>
            <div class="register-left-col">
                <p>性别:</p>
                <div>
                    <label for="m">男</label>
                    <input type="radio" name="sex" id="m" />
                    <label for="f">女</label>
                    <input type="radio" name="sex" id="f" />
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
            <div class="register-left-col2">
                <button>创建账号</button>
            </div>
          </div>
          <div>
              <p>该名称将作为论坛的显示名称</p>
              <p>登录论坛时账号</p>
              <p>登录时的密码</p>
              <p>再次确认密码</p>
              <p>用户的性别标识，一旦确定不能再次更改</p>
              <p>用户的显示头像</p>
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
import { reactive,toRefs,ref } from "vue";
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
        return {...toRefs(info),updataimg,file,imgurl}
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
            p{
                padding: .5em .5em;
                margin: .6em 0;
                margin-bottom: 1.3em;
                color:#333;
                font-size: .8em;
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