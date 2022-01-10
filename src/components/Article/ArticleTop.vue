<template>
  <div class="art-top">
      <div class="art-top-left">
          <p>浏览量:{{click}}</p>
          <p>回复数:{{all}}</p>
      </div>
      <div class="art-top-right">
          <p>{{aTitle}}</p>
          
          <p v-if="isMaster" @click="change" class="edit">编辑</p>
      </div>
  </div>
    <teleport to="body">
        <EditBox @close="change" :aid="aid" v-if="open"/>
    </teleport>
</template>

<script>
import { reactive,toRefs,ref } from "vue"
import EditBox from '../Universal/EditBox.vue';
import '@/assets/iconfont/iconfont.js'
export default {
    props:{config:Object,other:Object,all:Number,isMaster:Boolean},
    setup(props){
        let open = ref(false);
        let config = reactive({
            ...props.config,
            ...props.other,
            all:props.all,
            isMaster:props.isMaster
        })
        function change(){
            open.value = !open.value;
        }
        return {...toRefs(config),change,open}
    },
    components:{EditBox}
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