<template>
  <top />
  <div id="home">
      <div class="home-left">
          <Suspense>
              <template v-slot:default>
                  <LoginHome />
              </template>
              <template v-slot:fallback>
                  <span>正在加载</span>
              </template>
          </Suspense>
          <!-- 移除部分 -->
          <!-- <Box>
             <template v-slot:default>
                  <div class="other">
                    <ul>
                        <li>游戏发布</li>
                        <li>我的好友</li>
                        <li>站内消息</li>
                    </ul>
                  </div>
             </template>
          </Box> -->
          <Box>
              <template v-slot:default>
                  <div class="tip">
                    <img src="https://pixelfile-1306262005.cos.ap-nanjing.myqcloud.com/Image/bqbg.gif" alt="">
                    <p>如有问题可以发送邮件至:pixel@163.com</p>
                  </div>
              </template>
          </Box>
      </div>
      <div class="home-right">
          <!-- 展示屏 -->
          <DisplayScreen />
          <!-- 板块工具栏 -->
          <div class="plate-row">
              <ToolBar title="板块推荐" >
                  <MiniSearch />
              </ToolBar>
          </div>
          <!-- 板块分组1 -->
          <Suspense>
              <template v-slot:default>
                  <rec />
              </template>
              <template v-slot:fallback>
                  <span>正在加载</span>
              </template>
          </Suspense>
          
          <!-- 热聊话题Bar -->
          <div class="plate-row">
              <ToolBar title="论坛弹幕" >
                  <p class="sendDm">发送弹幕</p>
              </ToolBar>
          </div>
          <!-- 热聊话题Box -->
          <div class="plate-row">
              <HotChatBox/>
          </div>
          <!-- 签到墙 -->
          <div class="plate-row">
              <ToolBar title="签到墙" >
                  <p class="sendDm">
                      签到
                  </p>
              </ToolBar>
          </div>
          <!-- 签到墙具体的面板 -->
          <div class="plate-row">
              <qdBox />
          </div>
      </div>
  </div>
</template>

<script>
import Box from "../../components/Home/Box.vue"
import DisplayScreen from "../../components/Home/DisplayScreen.vue"
import ShowBox from "../../components/Plate/ShowBox.vue"
import ToolBar from "../../components/Home/ToolBar.vue"
import MiniSearch from "../../components/Home/MiniSearch.vue"
import HotChatBox from "../../components/Home/HotChatBox.vue"
import qdBox from "../../components/Home/qdBox.vue"
import { defineAsyncComponent } from 'vue'
// @ts-ignore
const top = defineAsyncComponent(()=>import('@/components/Home/top.vue'))
const rec = defineAsyncComponent(()=>import('@/components/Home/Recom.vue'))
const LoginHome = defineAsyncComponent(()=>import('../../components/Home/LoginHome.vue'))
export default {
    name:'Pixel Home',
    setup(){
        window.scroll(0,0);
    },
    components:{
        LoginHome,Box,DisplayScreen,ShowBox,ToolBar,MiniSearch
        ,HotChatBox,qdBox,top,rec}
}
</script>

<style lang="less" scoped>
#home{
    display: flex;
    justify-content: center;
    background-color: aliceblue;
}
.home-left{
    display: flex;
    width: 22em;
    flex-direction: column;
}
.home-right{
    width: 66em;
    .plate-row{
        display: flex;
        justify-content: space-evenly;
        margin: 1em;
    }
}
.other{
    padding:1em 0;
    ul{
        list-style: none;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            li{
                width: 80%;
                font-size: 1.2em;
                color: #1578db;
                cursor: pointer;
                padding: .5em;
                border-radius: .3em;
                &:hover{
                    color: white;
                    background-color: #0080ff;
                    
                }
            }
    }
}
.tip{
    padding:1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 90%;
        padding: .5em;
    }
    p{
        font-size: .8em;
    }
}
.sendDm{
    padding: .5em .5em;
    background-color: #0080ff;
    color: white;
    border-radius: .3em;
    margin-right: 1em;
    font-size: .8em;
    cursor: pointer;
    &:hover{
        background-color: #176dc4;
    }
}
</style>