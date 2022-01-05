<template>
  <div class="utop">
      <div class="u-info">
          <img src="https://pixelfile-1306262005.cos.ap-nanjing.myqcloud.com/Image/Logo.png" alt="">
          <div class="wdl">
              <div class="row">
                  <label for="account">账号:</label>
                  <input type="text" name="account" placeholder="请输入您的账号" id="">
              </div>
              <div class="row">
                  <label for="pass">密码:</label>
                  <input type="password" name="pass" placeholder="请输入您的密码" id="">
              </div>
              <div class="row">
                  <div>
                      <input type="checkbox" id="auto" />
                      <label for="auto">自动登录</label>
                  </div>
                  <div>
                      <span>找回密码</span>
                  </div>
              </div>
               <div class="row">
                  <p>登录</p>
                  <p>注册</p>
              </div>
          </div>
      </div>
      <div class="u-ul">
          <p class="u-li">全站搜索</p>
          <p class="u-li">像素广场</p>
          <p class="u-li">游戏发布</p>
          <p class="u-li">活动</p>
          <p class="u-li">签到板</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.utop{
    position: relative;
    padding: 1em 1.5em;
    .u-info{
        display: flex;
        justify-content: space-between;
        padding: 1em;
        img{
            height: 10em;
        }
        .wdl{
            width: 14em;
            .row{
                display: flex;
                align-items: center;
                margin: .5em 0;
                color: white;
                justify-content: center;
                label{
                    margin: 0 .5em;
                }
                input{
                    padding: .2em 0;
                    &::placeholder{
                        color: #888;
                        text-align: center;
                    }
                }
                p{
                    color: white;
                    background-color: #2497c5;
                    padding: .5em 1em;
                    font-size: .8em;
                    margin: 0 1em;
                }
            }
        }
    }
    .u-ul{
        background-color: #2497c5;
        width: 100%;
        height: 3.3em;
        display: flex;
        align-items: center;
        .u-li{
            color: white;
            font-weight: bold;
            padding: 1em;
            cursor: pointer;
        }
        .u-li:hover{
            text-decoration: underline;
        }
        .u-li:nth-last-of-type(1){
            color: rgb(250, 83, 17);
        }
    }
}
</style>