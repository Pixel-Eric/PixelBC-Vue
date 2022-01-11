<template>
  <div>
    <teleport to='body' >
        <div class="pull" @click="drawer = true">
            <p>打开</p>
        </div>
    </teleport>
    <el-drawer v-model="drawer" size="20%" title="I am the title" :with-header="false">
        <MsgList />
    </el-drawer>
  </div>
</template>

<script>
import {ref} from 'vue'
import MsgList from './MsgList.vue';
export default {
    setup(){
        let drawer = ref(false);
        
        return {drawer};
    },
    components:{MsgList}
}
</script>

<style scoped lang="scss">

.pull{
    position: fixed;
    display: flex;
    user-select: none;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    top: 3em;
    right: 0;
    background-color: white;
    width: 4em;
    height: 2em;
    box-shadow:3px 3px 10px #333;
    border-radius: 2em 0 0 2em;
}
</style>