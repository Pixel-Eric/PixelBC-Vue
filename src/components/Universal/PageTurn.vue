<template>
    <div class="page">
        <slot v-if="enableSlot"></slot>
        <div v-if="!enableSlot"></div>
        <div class="pageturn">
            <div>
                <span>跳转到</span>
                <input v-model="gopage" type="text"  />
                <p @click="goPage">Go</p>
            </div>
            <p class="last-page" @click="beforePage">上一页</p>
            <!-- 正常显示 -->
            <p v-for="p in page" v-if="!Toolong" @click="jumpPage(p)" :class="{pageselect:p==curpage}" :key="p">{{p}}</p>
            <!-- 超出正常显示范围 -->
            <p v-for="p in plus" v-if="Toolong" :class="{pageselect:p==curpage}" :key="p">{{p}}</p>
            <span v-if="Toolong&&(curpage!==page)&&(page-curpage>4)">...</span>
            <p v-if="Toolong" :class="{pageselect:curpage==page}">{{page}}</p>
            <p class="next-page" @click="nextPage">下一页</p>
            </div>
    </div>
</template>

<script>
import {reactive,toRefs} from 'vue'
export default {
    props:{
        type:String,
        config:Object,
        pageUp:Function,
        pageDown:Function,
        jumpPage:Function,
        getAllpage:Function
    },
    setup(props){
        //#region 参数列表
        let pageUp = props.pageUp;
        let pageDown = props.pageDown;
        let jumpPages = props.jumpPage;
        let getAllpage = props.getAllpage;
        let def = {
            //总数
            all:0,
            //一页显示多少数据
            total:30,
            //当前页数
            curpage:1
        };
        //#endregion

        //初始化翻页的配置信息
        let config = reactive({
            //是否开启插槽
            enableSlot:true,
            //是否超出最大显示长度
            Toolong:false,
            //组件显示的页数
            plus:[],
            page:1,
            gopage:props.config?.curpage ? props.config.curpage : 1,
            ...props.config !=null ? props.config : def
        })
        if(props.type == 'rigth'){
            config.enableSlot = false;
        }
        //#region 页面计算函数
        //判断条数是否为整数
        let regx = /(?<before>\d+).(?<last>\d{1})/;
        //初始化组件显示的页数
        if(parseInt(regx.exec(config.all/config.total)?.groups.last) < 5){
            config.page = Math.round(config.all/config.total)+1;
        }else{
            config.page = Math.round(config.all/config.total);
        }
        //#endregion
        
        //是否超出标准最大显示长度
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
        //#region 废弃代码段
        // //判断是否传入上一页的回调方法
        // if(props.pageUp ==null){
        //     throw Error("pageUP function is null");
        // }
        // //判断是否传入下一页的回调方法
        // if(props.pageDown ==null){
        //     throw Error("pageDown function is null");
        // }
        // //判断是否传入跳转页面的回调方法
        // if(props.jumpPage == null){
        //     throw Error("jumpPage function is null");
        // }
        //#endregion
        
        //#region 功能函数

        function beforePage(){
            // context.emit("pageUp");
            pageUp();
        }
        function nextPage(){
            pageDown();
        }
        function jumpPage(page){
            // context.emit("jumpPage",{page});
            jumpPages(page);
        }
        //#endregion

        //如果父组件使用了getAllpage事件，就将计算后的总页数返回给父组件
        if(getAllpage !== undefined){
            getAllpage(config.page);
        }
        function goPage(){
            jumpPages(config.gopage);
        }
        return {...toRefs(config),beforePage,nextPage,jumpPage,goPage}
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