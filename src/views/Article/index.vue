<template>
  <div class="all">
    <Top />
    <div class="cur">
        <Location />
    </div>
    <div class="page-btn">
        <PageTurn 
        v-if="numflag" 
        :config="pageconfig"
        :pageDown="pageDown"
        :pageUp="pageUp"
        :jumpPage="jumpPage"
        :getAllpage="getPage"  >
            <div class="ht">
                <p @click="Jump">回帖</p>
            </div>
        </PageTurn>
    </div>
    <div class="article">
        <ArticleTop v-if="artflag" :config="data.Article" />
        <!-- 帖子发布者 -->
        <Owner v-if="artflag&&page==1" :config="data" />
        <!-- 帖子的评论 -->
        <Reply v-if="repflag" v-for="d in repdata" :key="d.repid" :config="d" />
    </div>
    <div class="page-btn">
        <PageTurn 
        type="rigth" 
        v-if="numflag" 
        :config="pageconfig"
        :pageDown="pageDown"
        :pageUp="pageUp"
        :jumpPage="jumpPage"
        :getAllpage="getPage"  />
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
import { getArticle,getReplyByPage,getReplyNum } from "../../request/apis"
import { reactive,toRefs,ref } from "vue"
import Reply from "../../components/Article/Reply.vue"
import { usePage } from "../../hooks/page"
import { useRouter } from "vue-router"
export default {
    name:'ArticleIndex',
    props:['aid','page'],
    setup(props){
        window.scroll(0,0);
        let router = useRouter();
        let config = reactive({
            aid:props.aid,
            page:props.page,
            data:{},
            repdata:{}
        })
        let flag = reactive({
            artflag:false,
            repflag:false,
            numflag:false
        })
        function Jump(){
            window.scrollTo(0,999999);
        }
        let allpage = ref(1);
        let routeJump = usePage(router,allpage,props.page,'article',{aid:props.aid});

        let pageconfig = reactive({
            all:0,
            total:10,
            curpage:props.page
        })
        return{Jump,...toRefs(config),...toRefs(flag),pageconfig,...routeJump}
    },
    created(){
        //获取文章的信息
        getArticle(this.aid).then(res=>{
            this.data = res.data;
            this.artflag = true;
        })
        //获取文章的回复信息
        getReplyByPage(this.aid,this.page).then(res=>{
            this.repdata = res.data;
            this.pageconfig.all = res.data.length;
            this.repflag =true;
        })
        //获取当前文章的总回复数量
        getReplyNum(this.aid).then(res=>{
            this.pageconfig.all = res.data.Success;
            this.numflag = true;
        });
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