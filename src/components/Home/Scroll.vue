<template>
  <div class="scroll">
    <!-- 遮罩层 -->
    <div @click="jumpart" class="mask">

    </div>
    <!-- 滚动图片列表 -->
    <div class="scroll-list" >
        <img v-if="toggle(0)" src="./images/tgd.jpeg" alt="">
        <img v-if="toggle(1)" src="./images/topbg211229.jpeg" alt="">
        <img v-if="toggle(2)" src="./images/0ade3dfeea07c5deab80cf19a7bac274.jpeg" alt="">
    </div>
    <div class="tip">
        <p>{{title()}}</p>
    </div>
  </div>
</template>

<script>
import { reactive, ref,watchEffect } from "vue";
import { useRouter } from "vue-router";
export default {
    setup(){
        let router = useRouter();
        let curindex = ref(1);
        let titles = reactive([
            {aid:1,title:'Pixel像素脑洞论坛开放测试'},
            {aid:2,title:'勋章活动'},
            {aid:3,title:'测试标题3'}
        ])
        setInterval(()=>{
            curindex.value ++;
        },3000)
        let rindex = ref(1);
        watchEffect(()=>{
            let cindex = curindex.value%titles.length-1;
            if(cindex<0){
                rindex.value = titles.length-1;
            }else{
                rindex.value = cindex;
            }
           
        })
        function toggle(val){
            return rindex.value == val;
        }
        function title(){
            return titles[rindex.value].title;
        }
        //跳转至对应的帖子
        function jumpart(){
            router.push({name:'article',params:{"aid":titles[rindex.value].aid,page:1}}) 
        }
        return {toggle,title,jumpart}
    }
}
</script>

<style lang="scss" scoped>
.scroll{
    position: relative;
    height: 100%;
    &-list{
        img{
            position: absolute;
            top: 0;left: 0;
        }
    }
    .mask{
        position: absolute;
        cursor: pointer;
        top: 0;left: 0;right: 0;bottom: 0;
        z-index: 10;
        transition: .5s;
        &:hover{
            background-color: rgba(255, 255, 255, 0.267);
        }
    }
    img{
        width: 100%;
        height: 100%;
    }
    .tip{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 3em;
        background-color: rgba(0, 0, 0, 0.616);
        border-top: solid white 3px;
        display: flex;
        align-items: center;
        padding-left: 1em;
        color: white;
        font-size: 1.1em;
    }
}
</style>