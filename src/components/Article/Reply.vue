<template>
  <div class="owner">
      <div class="owner-left">
          <div class="owner-left-top">
              <p>{{name}}</p>
          </div>
          <div class="owner-left-bottom">
              <div class="user-ico">
                  <img :src="ico" alt="">
              </div>
              <div class="user-info">
                  <p>Lv{{rank}}.当前等级称号</p>
                  <div class="row">
                      <p>注册时间</p>
                      <p>{{rtime}}</p>
                  </div>
                  <div class="row">
                      <p>脑洞值</p>
                      <p>0</p>
                  </div>
                  <div class="row">
                      <p>帖子数量</p>
                      <p>0</p>
                  </div>
                  <div class="row">
                      <p>粉丝数</p>
                      <p>0</p>
                  </div>
                  <div class="row">
                      <p>持有勋章数</p>
                      <p>0</p>
                  </div>
                  <div class="medal">
                    <el-tooltip
                        v-for="m in medal" :key="m.index"
                        class="box-item"
                        effect="dark"
                        :content="m.mName"
                        placement="bottom-start"
                        >
                      <img :src="m.mIco" alt="">
                    </el-tooltip>
                  </div>
              </div>
          </div>
      </div>
      <div class="owner-right">
            <div class="owner-right-top">
                <div>
                    <p>帖子发布时间:{{time}}</p>
                    <p>只看该作者</p>
                </div>
                <p>1楼</p>
            </div>
            <div class="owner-right-bottom">
                <!-- 帖子的内容区域 -->
                <div class="content" v-html="content">
                    
                </div>
                <!-- 用户发帖的个性标签 -->
                <div class="personality-label" v-html="sign">

                </div>
            </div>
      </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { useStore } from 'vuex';
import { getMedal } from '../../request/apis';
import { ref } from 'vue';
export default {
    name:'Reply',
    props:["config"],
    setup(props){
        let config = props.config;
        let medal = ref([]);
        let store = useStore();
        console.log(config)
        //更新徽章信息
        function pushmedal(info){
            for(let i = 1;i<4;i++){
                let key = 'm'+i;
                if(info[key]!=-1){
                    let mid = info[key];
                    store.getters["medal/getMedal"].forEach(cur=>{
                        if(cur.mId == mid ){
                            medal.value.push(cur);
                        }
                    })
                } 
            }
        }
        async function loadmedal(){
            if(store.getters["medal/getMedalInfo"]==null||store.getters["medal/getMedalInfo"][config.uid]==undefined){
                let res = await getMedal(config.uid);
                //给状态管理器做一个备份
                store.commit("medal/SAVEMEDALUSER",{uid:config.uid,data:res.data});
                pushmedal(res.data);
            }else{
                pushmedal(store.getters["medal/getMedalInfo"][config.uid]);
            }
        }
        

        config.rtime = dayjs(new Date(config.rtime)).format("YYYY-MM-DD")
        config.time = dayjs(new Date(config.time)).format("YYYY-MM-DD HH:mm")
        return {...config,medal,loadmedal}
    },
    created(){
        this.loadmedal();
    }
}
</script>

<style lang="less" scoped>
.owner{
    padding: .1em 1.5em;
    display: flex;
    // height: 10em;
    .owner-left,.owner-right{
        
        &>div:nth-of-type(1){
            display: flex;
            align-items: center;
            height: 3em;
            border-bottom: dotted 1px rgb(51, 51, 51);
        }
        &>div:nth-of-type(2){

        }
    }
    .owner-left{
        width: 18em;
        background-color: rgb(213, 223, 231);
        .owner-left-top{
            padding-left: 1em;
            font-weight: 500;
        }
        .owner-left-bottom{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            .user-ico{
                height: 10em;
                padding: 2em;
                img{
                    height: 100%;
                }
            }
            .user-info{
                flex-grow: 1;
                width: 100%;
                margin-bottom: 1em;
                // font-size: .8em;
                color: #333;
                &>p{
                    text-align: center;
                    margin-bottom: 1em;
                }
                .medal{
                    position: relative;
                    display: flex;
                    justify-content: center;
                    height:8em;
                    background-image: url(./images/背景板\ 拷贝.png);
                    background-size: 100% 100%;
                    border-radius: .5em;
                    padding: 2.5em 0;
                    box-sizing: border-box;
                    margin: 1em .5em;
                    &::before{
                        content: "Wearing Medal";
                        position: absolute;
                        top: 0em;
                        font-weight: bold;
                        left: 1em;
                        color: rgb(207, 17, 17);
                        font-size: .8em;
                    }
                    //徽章占位符
                    img{
                        width: 3.5em;
                        height: 3.5em;
                        border-radius: .3em;
                        // background-color: tomato;
                        cursor: pointer;
                        margin: 0 .5em;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: white;
                    }
                }
                .row{
                    display: flex;
                    padding: .3em 1em;
                    justify-content: space-between;
                    &>p:nth-of-type(1){
                        text-align: right;
                        margin-left: 2em;
                        width: 5em;
                    }
                     &>p:nth-of-type(2){
                         margin-right: 2em;
                     }
                }
            }
        }
    }
    .owner-right{
        flex-grow: 1;
        background-color: white;
        display: flex;
        flex-direction: column;
        .owner-right-top{
            display: flex;
            justify-content: space-between;
            div{
                display: flex;
            }
            p{
                margin-left: 1em;
                font-size: .8em;
                color: #333;
                margin: 0 1em;
            }
        }
        .owner-right-bottom{
            flex-grow: 1;
            .content{
                min-height: 20em;
                padding: 1em;
                :deep(img){
                    max-width: 800px;
                }
            }
            .reviews{
                min-height: 20%;
            }
            .personality-label{
                position: relative;
                padding: 1em;
                 min-height: 12em;
                 max-height: 30em;
                 border-top: dotted #333 1px;
            }
        }
    }
}
.personality-label::before{
    content: "Personality Profile";
    color: rgb(35, 182, 182);
    font-size: .8em;
    background-color: white;
    padding: 0 1em;
    position: absolute;
    top: -.8em;
    left: 0;
}
</style>