<template>
  <div class="owner">
      <div class="owner-left">
          <div class="owner-left-top">
              <p>{{User.name}}</p>
          </div>
          <div class="owner-left-bottom">
              <div class="user-ico">
                  <img :src="User.ico" alt="">
              </div>
              <div class="user-info">
                  <p>Lv{{User.rank}}.当前等级称号</p>
                  <div class="row">
                      <p>注册时间</p>
                      <p>{{User.rtime}}</p>
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
                      <p>M</p>
                      <p>M</p>
                      <p>M</p>
                  </div>
              </div>
          </div>
      </div>
      <div class="owner-right">
            <div class="owner-right-top">
                <div>
                    <p>帖子发布时间:{{Article.aPtime}}</p>
                    <p>只看该作者</p>
                </div>
                <p>1楼</p>
            </div>
            <div class="owner-right-bottom">
                <div class="etime" v-if="isEdit">
                    <p>------------------------该帖子最后编辑与{{Article.aLastEditime}}------------------------</p>
                </div>
                <!-- 帖子的内容区域 -->
                <div class="content" v-html="Article.aContent">
                    
                </div>
                <!-- 点评该条评论 -->
                <div class="reviews">
                </div>
                <!-- 用户发帖的个性标签 -->
                <div class="personality-label">

                </div>
            </div>
      </div>

  </div>

</template>

<script>
import dayjs from 'dayjs'
import { computed } from 'vue';
export default {
    name:'Owner',
    props:["config"],
    setup(props){
        let config = props.config;
        config.User.rtime = dayjs(new Date(config.User.rtime)).format("YYYY-MM-DD")
        config.Article.aPtime = dayjs(new Date(config.Article.aPtime)).format("YYYY-MM-DD HH:mm")
        config.Article.aLastEditime = dayjs(new Date(config.Article.aLastEditime)).format("YYYY-MM-DD HH:mm");
        let isEdit = computed(()=>config.Article.aLastEditime!=null);
        return {...config,isEdit}
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
        width: 20em;
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
                    padding-left: 1em;
                }
                .medal{
                    display: flex;
                    justify-content: center;
                    padding: .3em 1em;
                    
                    //徽章占位符
                    p{
                        width: 2.5em;
                        height: 2.5em;
                        border-radius: .3em;
                        background-color: tomato;
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
                        width: 5em;
                    }
                }
            }
        }
    }
    .owner-right{
        width: 50em;
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
            .etime{
                padding: .5em;
                text-align: center;
                p{
                    color: #999;
                    font-size: .6em;
                }
            }
            .content{
                width: 90%;
                min-height: 60%;
                padding: 1em;
                overflow:auto;
                overflow-wrap:break-word;
            }
            .reviews{
                min-height: 20%;
            }
            .personality-label{
                 min-height: 20%;
                 border-top: dotted #333 1px;
            }
        }
    }
}
</style>