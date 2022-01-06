<template>
  <div class="all">
    <Top />
    <div class="loca">
        <Location :pid="pid" />
    </div>
    <div class="plate">
        <PlateTop v-if="topflag" :config="info" />
        <PageTurn 
        v-if="pagefalg" 
        :pageUp="pageUp" 
        :pageDown="pageDown" 
        :jumpPage="jumpPage" 
        :config="pageconfig" 
        :getAllpage="getPage" >
            <div class="release">
                <p @click="Jump">发帖</p>
            </div>
        </PageTurn>
        <PlateTable v-if="artflag" :config="article" />
        <PageTurn 
        type="rigth" 
        v-if="pagefalg" 
        :pageUp="pageUp" 
        :pageDown="pageDown" 
        :jumpPage="jumpPage" 
        :config="pageconfig"  />
        <div class="centent-box">
            <ContentBox :pid="pid" :page="page" />
        </div>
    </div>
  </div>
</template>

<script>
import PlateTop from "../../components/Plate/PlateTop.vue"
import PlateTable from "../../components/Plate/PlateTable.vue"
import PageTurn from "../../components/Universal/PageTurn.vue"
import Top from "../../components/Universal/Top.vue"
import ContentBox from "../../components/Universal/ContentBox.vue"
import Location from "../../components/Universal/Location.vue"
import { getSectionArticle,getSection,getArticleNum } from "../../request/apis"
import { reactive,ref, toRefs } from "vue"
import { useRouter } from "vue-router"
import { usePage } from "../../hooks/page"
export default {
    props:["pid","page"],
    setup(props){
        window.scroll(0,0);

        const router = useRouter();

        //板块信息和帖子信息
        let pid = props.pid;
        let page = props.page;
        // let article = reactive([""]);
        // let info = reactive({});

        let config = reactive({
            info:null,
            article:null
        })

        let allpage = ref(1);
        //数据显示的flag
        let topflag = ref(false);
        let artflag = ref(false);
        let pagefalg = ref(false);
        
        let routeJump = usePage(router,allpage,page,'Section',{pid});

        //翻页工具配置信息
        let pageconfig = reactive({
            //总数
            all:0,
            //一页显示多少数据
            total:30,
            //当前页数
            curpage:page
        })
        
        //移动到页面底端
        function Jump(){
            window.scroll(0,999999999);
        }

        function getSectionArt(page){
            //获取帖子数据
            getSectionArticle(pid,page).then(res=>{
                config.article =reactive( res.data);
                artflag.value = true;
            })
        }
        function getSec(){
            //获取板块数据
            getSection(pid).then(res=>{
                config.info = res.data;
                topflag.value = true;
            })
        }

        function getArtNum(){
            //获取帖子的总数量
            getArticleNum(pid).then(res=>{
                pageconfig.all = res.data.Success;
                pagefalg.value = true;
            })
        }
        


        return {Jump,...toRefs(config),topflag,artflag,pagefalg,pageconfig,pid,
        ...routeJump,allpage,getSectionArt,getSec,getArtNum}
    },
    created(){
        this.getSectionArt(this.page);
        this.getSec();
        this.getArtNum();
    },
    components:{PlateTop,PlateTable,Top,PageTurn,ContentBox,Location,}
}
</script>

<style lang="less" scoped>
.plate{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
}
.all{
    background-image: url(./images/bg4.jpeg);
    background-size: cover;
    background-attachment: fixed;
}
.centent-box{
    width: 100%;
}
.loca{
    padding: 0 1.5em;
}
.release{
    background-color: #2497c5;
    padding: 0 1em;
    display: flex;
    margin-top: 1em;
    justify-content: center;
    align-items: center;
    color: white;
    p{
        cursor: pointer;
    }
}
</style>