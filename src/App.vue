<template>
    <router-view  :key="$route.fullPath" />
    <bottom />
    <MsgLeft />
</template>
<script>
import {defineAsyncComponent} from 'vue'
import { initAll } from './init'
import MsgLeft from './components/Home/MsgLeft.vue'
const utop = defineAsyncComponent(()=>import('@/components/Universal/Top.vue'))
const bottom = defineAsyncComponent(()=>import('@/components/Home/bottom.vue'))
export default{
    setup() {
        initAll();
    },
    components:{top,bottom,utop,MsgLeft}
}
</script>

<style lang="scss">

.box-s{
    box-shadow: 5px 5px 15px rgb(146, 145, 145);
}
</style>
