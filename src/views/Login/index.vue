<template>
    <Top />
    <div class="login">
        <LoginBox />
    </div>
</template>

<script>
import {defineAsyncComponent} from 'vue';
import Top from '../../components/Universal/Top.vue';
const LoginBox  = defineAsyncComponent(()=>import('@/components/Login/LoginBox.vue'))
export default {
    name:'Login',
    components:{ LoginBox, Top }
}
</script>

<style lang="less" scoped>
.login{
    display: flex;
    padding: 2em 0;
    justify-content: center;
    align-items: center;
}

</style>