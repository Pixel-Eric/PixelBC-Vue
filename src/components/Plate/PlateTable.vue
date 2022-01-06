<template>
  <div class="plate-table">
      <div class="p-th">
          <p class="p-td">标题</p>
          <p class="p-td">作者</p>
          <p class="p-td">热度</p>
          <p class="p-td">最后回复</p>
      </div>
      <div class="p-tr" v-for="d in data" :key="d">
          <p class="p-td" @click="jumpArticle(d.aid)">{{d.title}}</p>
          <p class="p-td">{{d.name}}</p>
          <p class="p-td">null</p>
          <p class="p-td">2021-10</p>
      </div>
      <div class="p-tr-none" v-if="data.length==0"> 
          <p>该版块暂时没有人发布文章</p>
      </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
    props:{
        config:Array
    },
    setup(props){
       let data = props.config;
       const router = useRouter();
       function jumpArticle(aid){
           router.push({name:'article',params:{aid,page:1}})
       }
       return {data,jumpArticle}
    }
}
</script>

<style lang="less" scoped>
.plate-table{
    width: 100%;
    margin-top: 1em;
    .p-th{
        display: flex;
        padding: .5em 0;
        background-color: #2497c5;
        color: white;
        font-weight: bold;
        .p-td{
            padding-right: 1em;
        }
        &>.p-td:nth-of-type(1){
            width: 75%;
            padding-left: 1em;
        }
        &>.p-td:nth-of-type(n+2){
            flex-grow: 1;
            text-align: left;
        }
        
    }
    .p-tr{
        display: flex;
        padding: .5em 0;
        .p-td{
            padding-right: 1em;
        }
        &>.p-td:nth-of-type(1){
            width: 75%;
            padding-left: 1em;
        }
        &>.p-td:nth-of-type(n+2){
            flex-grow: 1;
            text-align: left;
            font-size: .8em;
            color: #333;
        }
    }
    .p-tr:nth-of-type(n){
        border-bottom: #2497c5 solid 1px;
    }
    .p-tr:nth-last-of-type(1){
        border: none;
    }
    .p-tr{
        background-color: white;
    }
    .p-tr:nth-of-type(2n){
        background-color: rgb(229, 240, 236);
    }
    .p-tr-none{
        padding: 1em;
        text-align: center;
        background-color:white;
    }
}
</style>