<template>
    <router-view :key="$route.fullPath" />
    <bottom />
</template>
<script>
import {defineAsyncComponent,watch} from 'vue'
import { initAll } from './init'
import {useRouter} from 'vue-router'
const utop = defineAsyncComponent(()=>import('@/components/Universal/Top.vue'))
const bottom = defineAsyncComponent(()=>import('@/components/Home/bottom.vue'))
import EditBoxVue from './components/Universal/EditBox.vue'
export default{
    setup() {
        initAll();
        const router = useRouter();
    },
    components:{top,bottom,utop}
}
</script>

<style lang="less">
.box-s{
    box-shadow: 5px 5px 15px rgb(146, 145, 145);
}
</style>
