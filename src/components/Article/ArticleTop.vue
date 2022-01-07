<template>
  <div class="art-top">
      <div class="art-top-left">
          <p>浏览量:{{click}}</p>
          <p>回复数:{{all}}</p>
      </div>
      <div class="art-top-right">
          <p>{{aTitle}}</p>
          <p v-if="isMaster" class="edit">编辑</p>
      </div>
  </div>
</template>

<script>
import { reactive,toRefs } from "vue"

export default {
    props:{config:Object,other:Object,all:Number,isMaster:Boolean},
    setup(props){
        let config = reactive({
            ...props.config,
            ...props.other,
            all:props.all,
            isMaster:props.isMaster
        })
        
        return {...toRefs(config)}
    }
}
</script>

<style lang="scss" scoped>
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
        justify-content: space-between;
        p{
            font-weight: bold;
            padding-left: 1em;
            font-size: 1.2em;
        }
        .edit{
            cursor: pointer;
            font: {
                size:.8em;
                weight:normal
            }
            margin-right: 1em;
            &:hover{
                text-decoration: underline;
            }
        }
    }
}
</style>