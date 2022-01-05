<template>
    <div class="page">
        <slot v-if="enableSlot"></slot>
        <div v-if="!enableSlot"></div>
        <div class="pageturn">
            <div>
                <span>跳转到</span>
                <input type="text" value="1" />
                <p>Go</p>
            </div>
            <p class="last-page">上一页</p>
            <!-- 正常显示 -->
            <p v-for="p in page" v-if="!Toolong" :class="{pageselect:p==curpage}" :key="p">{{p}}</p>
            <!-- 超出正常显示范围 -->
            <p v-for="p in plus" v-if="Toolong" :class="{pageselect:p==curpage}" :key="p">{{p}}</p>
            <span v-if="Toolong&&(curpage!==page)&&(page-curpage>4)">...</span>
            <p v-if="Toolong" :class="{pageselect:curpage==page}">{{page}}</p>
            <p class="next-page">下一页</p>
            </div>
    </div>
</template>

<script>
import {reactive,toRefs,ref} from 'vue'
export default {
    props:{
        type:String,
        config:Object
    },
    setup(props){
        let def = {
            //总数
            all:0,
            //一页显示多少数据
            total:30,
            //当前页数
            curpage:1
        };
        //初始化翻页的配置信息
        let config = reactive({
            //是否开启插槽
            enableSlot:true,
            //是否超出最大显示长度
            Toolong:false,
            //组件显示的页数
            plus:[],
            page:1,
            ...props.config !=null ? props.config : def
        })
        if(props.type == 'rigth'){
            config.enableSlot = false;
        }
        //判断条数是否为整数
        let regx = /(?<before>\d+).(?<last>\d+)$/;
        //初始化组件显示的页数
        if(regx.exec(config.all/config.total)?.groups.before !== 0){
            config.page = Math.round(config.all/config.total)+1;
        }else{
            config.page = Math.round(config.all/config.total);
        }
        if(config.page>=10){
            config.Toolong =true;
            //起始位置
            let start = parseInt(config.curpage)-3>0 ? parseInt(config.curpage)-3 : 1;
            //结束位置
            let end = (parseInt(config.curpage) +4 <=config.page) ? parseInt(config.curpage) +4 : config.page;
            //添加页面索引
            for(let i = start;i<end;i++){
                config.plus.push(i);
            }
        }
        
        return {...toRefs(config)}
    }
}
</script>

<style lang="less" scoped>
.page{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.pageturn{
    display: flex;
    margin-top: 1em;
    
    justify-content: flex-end;
    p{
        margin: 0 .5em;
        padding: .5em 1em;
        background-color: #2497c5;
        color: white;
        cursor: pointer;
    }
    &>div{
        display: flex;
        align-items: center;
        span{
            margin-right: .5em;
            background-color: #2497c5;
            padding: .5em 1em;
            color:white;
        }
        input{
            text-align: center;
            height: 2em;
            width: 2em;
        }
    }
    &>span{
        font-size: 1.2em;
        font-weight: bold;
    }
    .last-page{

    }
    .next-page{

    }
}
.pageselect{
    background-color: white !important;
    color: black !important;
}
</style>