<template>
  <div class="person-nav">
      <div class="nav-li">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhuye"></use>
          </svg>
          <p>主页</p>
      </div>
      <div class="nav-li">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bianji"></use>
          </svg>
          <p>编辑</p>
      </div>
      <div class="nav-li">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shoucang"></use>
          </svg>
          <p>收藏</p>
      </div>
      <div class="nav-li">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-guanzhu"></use>
          </svg>
          <p>关注</p>
      </div>
  </div>
</template>

<script>
import '@/assets/iconfont/iconfont.js'
export default {
    name:'person-nav'
}
</script>

<style lang='scss' scoped>
@mixin flex-row {
    display: flex;
}
.person-nav{
    @include flex-row();
    align-items: center;
    margin: 0 1.5em;
    height: 3.5em;
    background-color: white;
    .nav-li{
        @include flex-row;
        height: 100%;
        cursor: pointer;
        padding: 0em 1.5em;
        align-items: center;
        svg{
            width: 2em;
            height: 2em;
        }
        &:hover{
            background-color: #ddd;
        }
    }
}

</style>