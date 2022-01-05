<template>
    <div class="shox">
        <div @click="jump" class="shox-title">
            <p>{{pName}}</p>
        </div>
        <div class="shox-content">
            <p>板块的宣传标语或自我介绍</p>
            <div class="shox-master">
                <p>版主:论坛名称</p>
                <p>最新动态:NUll</p>
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
import { reactive,toRefs } from "vue"
// import { jumpPlate } from "../../hooks/jump";
import { useRouter } from "vue-router"; 
export default {
    props:["config"],
     setup(props){
         
        let config = reactive(props.config);
        const router = useRouter()
        function jump(){
            console.log(config.pid)
            router.push({name:'Section',params:{pid:config.pid,page:1}});
        }
        return {...toRefs(config),jump}
    }
}
</script>

<style lang='less' scoped>
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
</style>