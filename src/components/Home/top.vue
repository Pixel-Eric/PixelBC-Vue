<template>
    <div class="line"></div>
    <transition name="top">
          <div class="home-top" @click="jump" v-if="show">
            <article :style="{backgroundImage:`url(${info.cIcon})`}">
            </article>
          </div>
    </transition>
    <nav>
        <div>
            <topNavVue :config="index" />
            <topNavVue :config="bk" />
            <topNavVue :config="pb" />
            <topNavVue :config="activity" />
            <topNavVue :config="personl" />
        </div>
    </nav>
</template>

<script>
import { ref } from 'vue'
import topNavVue from './topNav.vue'
import { getHomeCur } from '../../request/apis';
import { useRouter } from 'vue-router';
export default {
    setup(){
        let router = useRouter();
        let index = {
            title:'首页',
            isNav:false,
        };
        let bk = {
            title:'板块',
            isNav:false
        }
        let pb = {
            title:'发布广场',
            isNav:false
        }
        let activity = {
            title:'活动',
            isNav:true,
            nav:[
                {name:'未开放'}
            ]
        }
        let personl = {
            title:'个人空间',
            isNav:false
        }
        let info = ref('');
        let show = ref(false);
        async function load(){
            let res = await getHomeCur();
            info.value = res.data;
            show.value = true;
        }
        function jump(){
            router.push({name:'article',params:{aid:info.value.cAid,page:1}})
        }
        return {index,bk,pb,activity,personl,show,info,load,jump}
    },
    created(){
        this.load();
    },
    components:{topNavVue}
}
</script>

<style lang="less">
.home-top{
    position: relative;
    // width: 100vw;
    height: 200px;
    overflow: hidden;
    article{
        position: absolute;
        cursor: pointer;
        top: 0;left: 0;right: 0;bottom: 0;
    }
}
.top-enter-active{
    transition: 2s;
    height: 180px;
}
.top-enter-from{
    height: 0px;
}
.top-enter-to{
    height: 200px;
}
nav{
    background-color: #28252b;
    
    height: 3.5em;
    display: flex;
    align-items: center;
    &>div{
        display: flex;
        margin-left: 6em;
    }
}
.line{
    height: 10px;
    background-color: #0080ff ;
}
</style>