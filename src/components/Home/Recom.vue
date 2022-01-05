<template>
   <div v-if="flag" >
        <div  class="plate-row">
            <ShowBox :config="recom[0]" />
            <ShowBox :config="recom[1]" />
        </div>
        <!-- 板块分组2 -->
        <div  class="plate-row">
            <ShowBox :config="recom[2]" />
            <ShowBox :config="recom[3]" />
        </div>
   </div>
</template>

<script>
import ShowBox from "../Plate/ShowBox.vue"
import { getRecommend } from "../../request/apis";
import { computed, reactive,ref } from "vue";
export default {
    async setup(){
        let flag = ref(false)
        let recom = reactive([""]);
        //请求板块推荐数据
        await new Promise((resolve)=>{
            getRecommend().then(res=>{
                recom = reactive(res.data)
                flag.value = true;
                resolve();
            });
        })
        return {recom,flag}
    },
    components:{ShowBox}
}
</script>

<style lang="less" scoped>
.plate-row{
        display: flex;
        justify-content: space-evenly;
        margin: 1em;
    }
</style>