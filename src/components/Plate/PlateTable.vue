<template>
  <div class="plate-table">
      <div class="p-th">
          <p class="p-td">标题</p>
          <p class="p-td">作者</p>
          <p class="p-td">热度</p>
          <p class="p-td">最后回复</p>
      </div>
      <div class="p-tr" v-for="d in data" :key="d">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wenzhang"></use>
          </svg>
          <div class="p-title">
            <p class="title-a" :class="{jht:d.aType.jh}" @click="jumpArticle(d.aid)">{{d.title}}</p>
            <el-tooltip
                v-if="d.aType.jh"
                class="box-item"
                effect="dark"
                content="精华"
                placement="bottom-start"
            >
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-jingpin"></use>
                    </svg>
                </div>
            </el-tooltip>
            <el-tooltip
                v-if="d.aType.hot"
                class="box-item"
                effect="dark"
                :content="`热度:${d.hot}`"
                placement="bottom-start"
            >
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-fire"></use>
                    </svg>
                </div>
            </el-tooltip>
            <el-tooltip
                v-if="d.aType.hd"
                class="box-item"
                effect="dark"
                content="活动"
                placement="bottom-start"
            >
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-remenhuodong"></use>
                    </svg>
                </div>
            </el-tooltip>
          </div>
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
import '@/assets/iconfont/iconfont.js'
import { useRouter } from "vue-router";
export default {
    props:{
        config:Array
    },
    setup(props){
       let data = props.config;
       data.forEach((cur)=>{
           cur.aType = JSON.parse(cur.aType);
       })
       console.log(data)
       const router = useRouter();
       function jumpArticle(aid){
           router.push({name:'article',params:{aid,page:1}})
       }
       return {data,jumpArticle}
    }
}
</script>

<style lang="scss" scoped>
.jht{
    font-family: "宋体";
    font-weight: bold;
    color: rgb(88, 179, 101);
    font-size: 1.1em;
}
.title-a{
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
}
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
        align-items: center;
        &:hover{
            background-color: rgb(223, 223, 223);
        }
        .p-td{
            padding-right: 1em;
        }
        &>svg{
            width: 1em;
            height: 1em;
            margin-left: 1em;
        }
        &>.p-title{
            width: 75%;
            padding-left: 0em;
            color: #333;
            font-size: 1.1em;
            display: flex;
            align-items: center;
            svg{
                width: 1em;
                height: 1em;
                padding: 0 .1em;
            }
            svg:nth-of-type(1){
                margin-left: .5em;
            }
            p{
                margin-left: 1em;
            }
        }
        &>.p-td{
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
        // background-color: rgb(229, 240, 236);
    }
    .p-tr-none{
        padding: 1em;
        text-align: center;
        background-color:white;
    }
}
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>