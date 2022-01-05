<template>
    <div class="loginbox box-s">
        <div class="box-left">
            <p>像素脑洞</p>
            <p>Pixel Brain Cavity</p>
            <p>通行卡</p>
        </div>
        <div class="box-right">
            <LoginForm />
        </div>
    </div>
</template>

<script>
import LoginForm from "./LoginForm.vue"
export default {
    name:'LoginBox',
    components:{LoginForm}
}
</script>

<style lang="less" scoped>
    // 登录框样式
.loginbox{
    width: 45em;
    height: 25em;
    border-radius: .5em;
    overflow: hidden;
    display: flex;
    .box-left{
        width: 15em;
        background-image: url(./images/loginleft.gif);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p{
            font-family:'像素脑洞';
            color: white;
            font-weight: bold;
            text-shadow: 5px 5px 5px rgb(102, 81, 48);
        }
        p:nth-of-type(1){
            letter-spacing: .6em;
            font-size: 1.8em;
            margin-bottom: .3em;
        }
        p:nth-of-type(3){
            font-size: 1.3em;
            margin-top: .3em;
        }
    }
    .box-right{
        flex-grow: 1;
        text-align: center;
    }
}
</style>