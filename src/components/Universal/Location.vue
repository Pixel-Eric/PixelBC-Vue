<template>
  <div class="Location">
      <p>当前位置:</p>
      <p @click="gohome">广场</p>
      <p @click="gosection">{{sname}}</p>
      <p v-if="artfalg">{{aname}}</p>
  </div>
</template>

<script>
import { useRouter } from "vue-router"
import { reactive,toRefs } from "vue";
import { getPalteName } from "../../request/apis";
export default {
    props:["pid","aname"],
    setup(props){
        const router = useRouter();
        let pid = props.pid;
        let config = reactive({
            sname:'版块名称',
            aname:props?.aname !==undefined ? props.aname :'帖子名称'
        })
        let show = reactive({
            artfalg:props?.aname ? true : false
        })
        function gohome(){
            router.push({name:'home'})
        }
        function gosection(){
            router.push({name:'Section',params:{pid,page:1}})
        }
        // function goarticle(){
        //     router.push({name:'goarticle'})
        // }
        return {gohome,gosection,...toRefs(config),pid,...toRefs(show)}
    },
    created(){
        if(this.pid!==null){
            getPalteName(this.pid).then(res=>{
                this.sname = res.data.Success;
            })
        }
    }
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
    p{
        cursor: pointer;
    }
    &>p:nth-of-type(n+3)::before{
        content: ">";
    }
}
</style>