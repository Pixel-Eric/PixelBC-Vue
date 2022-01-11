<template>
    <div class="person">
        <Top />
        <PTop />
        <PNav />
        <PBody />
    </div>
</template>

<script>
import Top from "../../components/Universal/Top.vue"
import PTop from "../../components/Person/PTop.vue"
import PNav from "../../components/Person/PNav.vue"
import PBody from "../../components/Person/PBody.vue"
export default {
    components:{Top,PTop,PNav,PBody}
}
</script>

<style scoped lang='less'>
.person{
    background-color: #eee;
}
</style>