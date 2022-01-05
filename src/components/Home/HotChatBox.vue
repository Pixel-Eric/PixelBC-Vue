<template>
    <div  class="hcb">
        <template v-for="n in bubble.length" key='n'>
            <div v-for="d in bubble[n-1]" :key="d.id" :class="`td${n}`">
                <Dm :info="d" />
            </div>
        </template>
        
        <!-- <transition-group v-for="n in bubble.length" key='n.index' name="dub1"> -->
            
        <!-- </transition-group> -->
    </div>
</template>

<script>
import {reactive,ref,onMounted} from 'vue'
import Dm from './Dm.vue';
import {uuid} from 'vue-uuid'
export default {
    name:'Hot Chat Box',
    setup(){
        let bubble = reactive([[],[],[],[],[]]);
        let t = reactive({})
        
        let data = [
            {title:'欢迎来到像素脑洞'},{title:'打卡'},
            {title:'666'},{title:'测试弹幕'},
            {title:'这个话题名称有点长'},{title:'不知道聊点什么'},
            {title:'这个话题名称有点长'},{title:'不知道聊点什么'},
            {title:'这个话题名称有点长'},{title:'不知道聊点什么'},
            {title:'这个话题名称有点长'},{title:'不知道聊点什么'}
        ];
        let newdata = JSON.parse(JSON.stringify(data));

        onMounted(()=>{
                    //填装弹幕
        setInterval(()=>{
            let td = parseInt(Math.random()*5+'');
            if(newdata.length>0)
            {
                let ele = newdata.shift();
                ele.id = uuid.v1();
                bubble[td].push(ele);
            }else{
                newdata = JSON.parse(JSON.stringify(data));
            }
            //销毁弹幕
            setTimeout(()=>{
                if(bubble[td].length>0)
                    bubble[td].shift();
            },30000)
        },1000)
        })
        function getFlag(){
            let t = new Date().getMilliseconds();
            console.log(t);
            return t;
        }
        
        return {bubble,getFlag}
    },
    components:{Dm}
}
</script>

<style lang="less" scoped>
.hcb{
    position: relative;
    width: 100%;
    height: 12em;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    // background-color: aliceblue;
}

div[class^='td']{
    // width: 100%;
    height: 2em;
    padding: 0 .5em;
    display: flex;
    position: absolute;
    align-items: center;
    margin: .2em 0;
    left: 120%;
    animation:dm 15s linear;
    cursor: pointer;
    &:hover{
        animation-play-state: paused;
        z-index: 30;
    }
    img{
        height: 90%;
        border-radius: 50%;
    }
    p{
        margin-left: 1em;
        white-space: nowrap;
    }
}
.td1{
    top: 0em;
}
.td2{
    top: 2em;
}
.td3{
    top: 4em;
}
.td4{
    top: 6em;
}
.td5{
    top: 8em;
}
.dub1-enter-active{
    animation:dm 15s linear;
}
@keyframes dm {
    from{
        left:-20%;
    }
    to{
        left: 120%;
    }
}
</style>