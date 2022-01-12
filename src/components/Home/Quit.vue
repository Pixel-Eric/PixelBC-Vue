<template>
  <div class="quit" @click="quit">
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tuichu"></use>
    </svg>
    <p>退出</p>
  </div>
</template>

<script>
import '@/assets/iconfont/iconfont.js'
import { clearSessions } from '../../session'
export default {
    setup(){
        function quit() {
            clearSessions();
            location.reload();
        }
        return {quit}
    }
}
</script>

<style scoped lang="scss">
.quit{
    position: absolute;
    bottom: 2em;
    right: 2em;
    svg{
        width: 2em;
        height: 2em;
    }
}
</style>