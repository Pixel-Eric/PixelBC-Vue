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
//input框提示文字的大小
$f-s-input:1.3em;
// 登录框样式
.loginbox {
    width: 45em;
    height: 25em;
    border-radius: .5em;
    overflow: hidden;
    display: flex;
    .box-left {
        width: 15em;
        background-image: url(./images/loginleft.gif);
        @include content-center-col;
        p {
            font-family:'像素脑洞';
            color: white;
            font-weight: bold;
            text-shadow: 5px 5px 5px rgb(102, 81, 48);
        }
        p:nth-of-type(1) {
            letter-spacing: .6em;
            font-size: 1.8em;
            margin-bottom: .3em;
        }
        p:nth-of-type(3) {
            font-size: $f-s-input;
            margin-top: .3em;
        }
    }
    .box-right {
        flex-grow: 1;
        display: flex;
        height: 100%;
        justify-content: center;
        text-align: center;
    }
}
</style>