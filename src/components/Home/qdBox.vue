<template>
  <div class="qdbox">
      <div v-for="n in 4" key="n" class="page">
          <div class="qd-info">
              <img src="http://pixelbc.cn//uploads/2021/6/949a524e6929110357bf0055229a13134c5.jpeg" alt="">
              <div>
                  <p>用户名:名称123</p>
                  <p>2021-12-30</p>
              </div>
          </div>
          <div class="qd-content">
              <p>这里你想说什么就说什么</p>
          </div>
          <div class="line"></div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.qdbox{
    width: 100%;
    height: 14em;
    display: flex;
    .page{
        width: 100%;
        height: 100%;
        flex-grow: 1;
        margin: 0 1em;
        box-shadow: 5px 5px 15px #999;
        overflow: hidden;
        border-radius: .3em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // border: #0080ff solid 1px;
        .qd-info{
            display: flex;
            img{
                width: 35%;
                border-radius: 50%;
                margin-left: 1em;
                margin-top: 1em;
            }
            div{
                display: flex;
                flex-grow: 1;
                flex-direction: column;
                justify-content: center;
                margin-left: .5em;
                p{
                    font-size: .8em;
                    
                }
            }
        }
        .qd-content{
            flex-grow: 1;
            padding: .3em;
            font-size: .8em;
            margin: .3em;
            background-color: rgba(230, 225, 225, 0.801);
            border-radius: .3em;
            p{
                word-wrap: break-word;
                word-break: break-all;
                height: 100%;
            }
            
        }
    }
}
.line{
    height: .3em;
}
</style>