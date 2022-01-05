<template>
  <div class="Location">
      <p>当前位置:</p>
      <p>广场</p>
      <p>板块名称</p>
      <p>帖子名称</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.Location{
    display: flex;
    height: 2em;
    background-color: white;
    color: #666;
    align-items: center;
    padding-left: 1em;
    border-radius: .3em;
    &>p:nth-of-type(n+3)::before{
        content: ">";
    }
}
</style>