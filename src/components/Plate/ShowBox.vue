<template>
    <div class="shox">
        <div @click="jump" class="shox-title">
            <p>{{pName}}</p>
        </div>
        <div class="shox-content">
            <p>{{pIntro}}</p>
            <div class="shox-master">
                <p>版主:{{userName}}</p>
                <p v-if="!newart">最新动态:暂无</p>
                <p v-if="newart" @click="jumpArt" class="newart-a">最新动态:{{title}}</p>
            </div>
        </div>
        <div class="shox-ico">
            <img :src="pIco" alt="">
        </div>
        <div class="line">

        </div>
    </div>
</template>

<script>
import { reactive,toRefs,ref } from "vue"
import { useRouter } from "vue-router"; 
import { getNewArt,getUserName } from "../../request/apis";
export default {
    props:["config"],
     setup(props){
        let config = reactive(props.config);
        const router = useRouter();
        let artinfo = reactive({
            title:'null',
            aid:-1
        })
        let newart = ref(false);
        let userName = ref('');
        function jump(){
            router.push({name:'Section',params:{pid:config.pid,page:1}});
        }
        function jumpArt(){
            router.push({name:'article',params:{aid:artinfo.aid,page:1}});
        }
        async function getMasterName(){
            let name = await getUserName(config.pMid);
            userName.value = name.data;
        }
        return {...toRefs(config),jump,...toRefs(artinfo),newart,
        jumpArt,getMasterName,userName}
    },
    created(){
        //获取当前版块的最新文章信息
        getNewArt(this.pid).then(res=>{
            if(res.data?.Success){
                this.title = res.data.Success.title;
                this.aid = res.data.Success.aid;
                this.newart = true;
            }
        });
        //获取当前版块版主的名称
        this.getMasterName();
    }
}
</script>

<style lang='scss' scoped>
.shox{
    position: relative;
    width: 100%;
    margin: .3em;
    border-radius: .5em;
    overflow: hidden;
    box-shadow: 5px 5px 15px rgb(148, 148, 148);
    .shox-title{
        display: flex;
        align-items: center;
        background-color: rgb(40, 37, 43);
        height: 2.5em;
        font-size: 1.3em;
        cursor: pointer;
        p{
            color: white;
            margin-left: 1em;
        }
        &:hover{
            background-color: #0080ff;
        }
    }
    .shox-content{
        height: 12em;
        display: flex;
        flex-direction: column;
        &>p{
            color: #999;
            margin: 1em;
            width: 60%;
            height: 5em;
            word-wrap: break-word;
            word-break: break-all;
        }
        .shox-master{
            height: 5em;
            margin-left: 1em;
            color: #0080ff;
            p{
                cursor: pointer;
            }
        }
    }
    .shox-ico{
        width: 6em;
        height: 6em;
        top: 1em;
        right: 2em;
        position: absolute;
        overflow: hidden;
        border-radius: 50%;
        border: solid .3em white;
        img{
            width: 100%;
        }
    }
}
.line{
    height: .3em;
}
.newart-a{
    &:hover{
        text-decoration: underline;
    }
}
</style>