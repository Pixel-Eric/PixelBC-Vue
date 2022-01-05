<template>
  <div class="all">
    <Top />
    <div class="cur">
        <Location />
    </div>
    <div class="page-btn">
        <PageTurn>
            <div class="ht">
                <p @click="Jump">回帖</p>
            </div>
        </PageTurn>
    </div>
    <div class="article">
        <ArticleTop v-if="artflag" :config="data.Article" />
        <!-- 帖子发布者 -->
        <Owner v-if="artflag" :config="data" />
        <!-- 帖子的评论 -->
        <Reply v-if="repflag" v-for="d in repdata" :key="d.repid" :config="d" />
        <!-- <Owner />
        <Owner />
        <Owner />
        <Owner />
        <Owner />
        <Owner />
        <Owner />
        <Owner />
        <Owner /> -->
    </div>
    <div class="page-btn">
        <PageTurn type="rigth" />
    </div>
    <div class="reply">
        <ReplyBox :aid="aid" />
    </div>
  </div>
</template>

<script>
import Top from "../../components/Universal/Top.vue"
import Owner from "../../components/Article/Owner.vue"
import ReplyBox from "../../components/Universal/ReplyBox.vue"
import PageTurn from "../../components/Universal/PageTurn.vue"
import ArticleTop from "../../components/Article/ArticleTop.vue"
import Location from "../../components/Universal/Location.vue"
import { getArticle,getReply } from "../../request/apis"
import { reactive,toRefs } from "vue"
import Reply from "../../components/Article/Reply.vue"
export default {
    name:'ArticleIndex',
    props:['aid','page'],
    setup(props){
        window.scroll(0,0);
        let config = reactive({
            aid:props.aid,
            page:props.page,
            data:{},
            repdata:{}
        })
        let flag = reactive({
            artflag:false,
            repflag:false
        })
        function Jump(){
            window.scrollTo(0,999999);
        }
        return{Jump,...toRefs(config),...toRefs(flag)}
    },
    created(){
        //获取文章的信息
        getArticle(this.aid).then(res=>{
            this.data = res.data;
            this.artflag = true;
        })
        //获取文章的回复信息
        getReply(this.aid).then(res=>{
            this.repdata = res.data;
            this.repflag =true;
        })
    },
    components:{ Top, Owner, ReplyBox, PageTurn, ArticleTop, Location, Reply }
}
</script>

<style lang="less" scoped>
.all{
    // background-color: rgb(95, 108, 117);
    background-image: url(./images/bg2.jpeg);
    background-size: cover;
    background-attachment: fixed;
    
}
.article{
    
}
.ht{
    margin-top: 1em;
    padding: 0 1em;
    color: white;
    background-color: #2497c5;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        cursor: pointer;
    }
}
.reply{
    padding: 1em 1.5em;
}
.page-btn{
    display: flex;
    padding: 0 1.5em;
    margin-bottom: 1em;
    p{
        width: 2em;
    }
}
.cur{
    padding: 0 1.5em;
    
}
</style>