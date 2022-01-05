<template>
  <div :style="{backgroundColor:info.bgcolor}" >
      <img src="http://pixelbc.cn//uploads/2021/6/949a524e6929110357bf0055229a13134c5.jpeg" alt="">
      <p :style="{color:info.color}">{{info.title}}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    props:{time:Number,info:Object},
    setup(props) {
        let info = props.info;
        return {info};
    }
}
</script>

<style lang='less' scoped>
div{
    height: 2em;
    padding: 0 .5em;
    display: flex;
    align-items: center;
    border-radius: .3em;
    background-color: rgba(253, 236, 180, 0.849);
    color: black;
}
img{
        height: 90%;
        border-radius: 50%;
}
p{
    margin-left: 1em;
    white-space: nowrap;
}
</style>