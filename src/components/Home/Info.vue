<template>
  <div class="info">
      <div class="info-top">
          <p :class="{'status-a':judge('hot'),'status-b':!judge('hot')}" @click="change('hot')">热门</p>
          <p :class="{'status-a':judge('new'),'status-b':!judge('new')}" @click="change('new')">最新帖子</p>
      </div>
      <div class="info-list-hot">
          <ul>
              <li v-if="load" v-for="cur in curdata" :key="cur.index">
                  <router-link :to="{name:'article',params:{aid:cur.aid,page:1}}"  >{{cur.title}}</router-link>
                  <p>{{timeformat(cur.time)}}</p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import { getAllNewArt,getHotArt } from "../../request/apis"
import { reactive,toRefs,watch } from "vue"
import dayjs from 'dayjs'
export default {
    setup(){
        let config = reactive({
            titleName:'hot',
            hotdata:[],
            newdata:[],
            curdata:[],
            load:false
        })
        //监视用户正处于哪一个选项面板
        watch(()=>config.titleName,(newValue)=>{
            if(newValue == 'hot'){
                config.curdata = config.hotdata;
            }
            if(newValue == 'new'){
                config.curdata = config.newdata;
            }
        })
        //获取帖子的数据
        async function getdata(){
            let newart = await getAllNewArt();
            let hotart = await getHotArt();
            config.newdata = newart.data;
            config.hotdata = hotart.data;
            config.curdata = hotart.data;
            config.load = true;
        }
        //切换选项卡
        function change(option){
            config.titleName = option;
        }
        //判断选项卡
        function judge(option){
            return option == config.titleName;
        }
        //格式化时间
        function timeformat(time){
            return dayjs(time).format("YYYY-MM-DD")
        }
        return {...toRefs(config),getdata,change,judge,timeformat}
    },
    created(){
        this.getdata();
    }
}
</script>

<style lang='scss' scoped>
$f-c:#0080ff ;
.info-top{
    display: flex;
    border-bottom:$f-c solid 1px;
    p{
        padding: .5em 1em;
        cursor: pointer;
    }
}
.info-list-hot{
    height: 20em;
    ul{
        list-style: none;
        li{
            display: flex;
            padding: .5em .3em;
            justify-content: space-between;
        }
        a{
            color: $f-c;
            text-decoration: none;
            &:hover{
                text-decoration: underline;
            }
        }
        p{
            color: #777;
        }
    }
}
.info-top{
    p{
        font-size: 1.1em;
        font-weight: bold;
    }
    .status-a{
        color: $f-c;
    }
    .status-b{
        color: #77a7d8;
    }
}
</style>