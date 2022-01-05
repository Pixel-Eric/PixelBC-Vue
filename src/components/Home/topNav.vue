<template>
  <div class="nav-cop">
      <p  :class="{title:!isNav,title2:isNav}">{{title}}</p>
      <div class="child-nav" v-if="isNav">
          <p v-for="n in nav" :key="n.index">{{n.name}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name:'topNav',
    props:['config'],
    setup(props){
       let config = props.config;
        return {
            ...config
        }
    }
}
</script>

<style lang="less" >
.nav-cop{
    position: relative;
    margin: 0 1.2em;
    &:hover{
        &>p{
            background-color: white;
            color: #28252b;
        }
        &>div{
            display: block;
        }
    }
    
}
.title2{
    padding: .5em 1em;
    cursor: pointer;
    border-radius: .3em .3em 0 0;
    font-weight: bold;
    font-size: 1.1em;
    color: white;
}
.title{
    padding: .5em 1em;
    cursor: pointer;
    border-radius: .3em;
    color: white;
    font-size: 1.1em;
    font-weight: bold;
    
}
.child-nav{
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 100%;
    
    display: none;
    p{
        padding: 1em ;
        min-width: 100%;
        max-width: 200%;
        background-color: white;
        cursor: pointer;
        &:hover{
            background-color: #28252b;
            color: white;
        }
    }
}
</style>