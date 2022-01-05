<template>
  <div class="box box-s">
      <slot>
          
      </slot>
      <div class="line">

      </div>
  </div>
</template>

<style lang="less" scoped>
.box{
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 1em;
    margin: 1em;
    overflow: hidden;
    background-color: white;
}
.line{
    height: .3em;
    background-color: #0080ff;
}
</style>