<template>
  <div class="msg-li">
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="icon"></use>
    </svg>
    <p>{{name}}</p>
  </div>
</template>

<script>
import '@/assets/iconfont/iconfont.js'
export default {
    props:["icon","name"],
}
</script>

<style scoped lang="scss">
.msg-li{
    display: flex;
    align-items: center;
    height: 3em;
    width: 100%;
    transition: .3s;
    cursor: pointer;
    user-select: none;
    &:hover{
        background-color: #eee;
        padding-left: 1em;
    }
    svg{
        width: 2em;
        height: 2em;
        margin:0 1em;
    }
}
</style>