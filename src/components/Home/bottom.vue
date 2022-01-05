<template>
  <header>
      <div>
        <div class="partner">
          <h1>合作伙伴</h1>
          <a href="javascript:;">像素脑洞</a>
        </div>
        <div class="info">
            <img src="https://pixelfile-1306262005.cos.ap-nanjing.myqcloud.com/Image/Logo.png" alt="">
        </div>
      </div>
      <div class="other">
          <p>Copyright © 2021 Eric And Pixel Brain Cavity. All rights reserved.</p>
          <p>鲁ICP备2021024781号</p>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
header{
    height: 18em;
    background-color: #28252b;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &>div{
        display: flex;
        color: white;
    }
    .partner{
        color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        a{
            margin: 1em 0;
            color: white;
            text-decoration: none;
        }
    }
    .info{
        color: white;
        margin: 0 1em;
        text-align: center;
        img{
            width: 18em;

        }
    }
    .other{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>