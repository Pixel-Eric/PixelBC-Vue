<template>
  <div class="art-top">
      <div class="art-top-left">
          <p>浏览量:0</p>
          <p>回复数:0</p>
      </div>
      <div class="art-top-right">
          <p>{{aTitle}}</p>
      </div>
  </div>
</template>

<script>
import { reactive,toRefs } from "vue"
export default {
    props:{config:Object},
    setup(props){
        let config = reactive({
            ...props.config
        })
        return {...toRefs(config)}
    }
}
</script>

<style lang="less" scoped>
.art-top{
    padding: 0 1.5em;
    display: flex;
    height: 3em;
    .art-top-left{
        width: 20em;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(213, 223, 231);;
        p{
            margin: 0 .5em;
            color: #333;
            font-size: .8em;
        }
    }
    .art-top-right{
        flex-grow: 1;
        background-color: white;
        display: flex;
        align-items: center;
        p{
            font-weight: bold;
            padding-left: 1em;
            font-size: 1.2em;
        }
    }
}
</style>