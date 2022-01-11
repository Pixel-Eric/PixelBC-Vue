<template>
  <div class="msg-list">
      <MsgLi icon="#icon-gerenkongjian1" name="个人空间" />
      <MsgLi icon="#icon-tianchongxing-" name="好友列表" />
      <MsgLi icon="#icon-luntanzhongxin" name="站内消息" />
      <MsgLi name="关于我的" />
      <MsgLi />
      <Quit />
  </div>
</template>

<script>
import MsgLi from "./MsgLi.vue"
import Quit from "./Quit.vue"
export default {
    components:{MsgLi,Quit}
}
</script>

<style scoped lang="scss">
.msg-list{
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>