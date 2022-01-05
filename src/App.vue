<template>
    <router-view />
    <bottom />
</template>
<script>
import {defineAsyncComponent,inject,ref} from 'vue'
import { initAll } from './init'
import {useRoute} from 'vue-router'
const utop = defineAsyncComponent(()=>import('@/components/Universal/Top.vue'))
const bottom = defineAsyncComponent(()=>import('@/components/Home/bottom.vue'))
export default{
    setup() {
        initAll();
        const route = useRoute();
        let showHomeTip = ref(route.name == 'home');
        return {showHomeTip}
    },
    components:{top,bottom,utop}
}
</script>

<style lang="less">
.box-s{
    box-shadow: 5px 5px 15px rgb(146, 145, 145);
}
</style>
