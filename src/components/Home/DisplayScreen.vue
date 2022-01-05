<template>
  <BoxVue>
      <div class="disc">
          <div class="disc-left">
              <InfoVue />
          </div> 
          <div class="disc-rigth">
              <img src="./images/tgd.jpeg" alt="">
              <div class="tip">
                  <p>标题栏</p>
              </div>
          </div>     
      </div>
  </BoxVue>
</template>

<script>
import BoxVue from "./Box.vue"
import InfoVue from "./Info.vue"
export default {
    components:{BoxVue,InfoVue}
}
</script>

<style lang='less' scoped>
.disc{
    display: flex;
    height: 23em;
    .disc-left{
        width: 45%;
        margin: 1em;
    }
    .disc-rigth{
        position: relative;
        width: 55%;
        img{
            height: 100%;
        }
        .tip{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            padding: .8em;
            background-color: rgba(0, 0, 0, 0.534);
            p{
                color: white;
                font-size: 1.3em;
                font-weight:500;
            }
        }
    }
}

</style>