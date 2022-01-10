<template>
  <div class="plate-top " :style="{height,borderRadius}">
      <div class="p-header">
        <div class="p-title">
            <p>{{Sname}}</p>
            <p>今日 {{Today}}</p>
            <p>主题 {{AllNum}}</p>
            <p>排名 {{Rank}}</p>
            <p>热度 {{Hot}}</p>
            <p>版主:{{Mname}}</p>
        </div>
        <div class="p-fun">
            <p>关注版块</p>
            <p @click="change(true)">{{text}}</p>
        </div>
      </div>
      <div class="p-img" v-html="Notice">
          
      </div>
  </div>
</template>

<script>
import {reactive,toRefs} from 'vue'
import { getSectionStatus,setSectionStatus } from '../../session';
export default {
    props:["config"],
    setup(props){
        console.log(props.config)
        let info = reactive({height:'',borderRadius:'',text:''});
        let config = props.config;
        //改变简介栏状态
        function change(option){
            let f = getSectionStatus(props.config.pid);
            if(option){
                setSectionStatus(props.config.pid,!f);
            }
            f = getSectionStatus(props.config.pid);
            info.height = f ? '3em' : '28em';
            info.borderRadius = f ? '.5em' : '.5em .5em 0 0' ;
            info.text = f ? '展开' : '收缩' ;
        }
        change(false);
        return {...toRefs(info),change,...toRefs(config)}
    }
}
</script>

<style lang="less" scoped>
.plate-top{
    border-radius: .5em;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: rgb(224, 240, 247);
    transition: 1s;
    .p-header{
       display: flex;
       justify-content: space-between;
       background-color: #2497c5;
       color: white;
        .p-title{
            margin: 0 .5em;
            display: flex;
            align-items: center;
            
            &>p:nth-of-type(1){
                    font-size: 1.1em;
                    font-weight: bold;
            }
            p{
                margin: 0 .5em;
                font-size: .8em;
            }
            &>p:nth-of-type(n+2)::before{
                content: '|';
                margin-right: .5em;
                color: rgb(209, 209, 209);
            }
        }
        .p-fun{
            display: flex;
            margin: 1em;
            align-items: center;
            &>p{
                font-size: .8em;
                margin: 0 .3em;
            }
            &>p:nth-of-type(2){
                cursor: pointer;
            }
        }
    }
    .p-info{
        padding: 0 1em;
        p{
            font-size: .8em;
        }
    }
    .p-img{
        flex-grow: 1;
        margin: .5em;
        display: flex;
        img{
            height: 22.5em;
        }
    }

}
</style>