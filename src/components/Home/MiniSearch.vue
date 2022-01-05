<template>
  <div class="mini-search">
    <input type="text" placeholder="请输入板块名称或ID">
    <p>搜索</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.mini-search{
    display: flex;
    margin-right: 1em;
    align-items: center;
    input{
        // padding-top: .4em;
        height: 2em;
        border: none;
        outline: none;
        border: solid #0080ff 1px;
        &::placeholder{
            color: #999;
            text-align: center;
        }
    }
    p{
        padding: .4em .8em;
        border-radius: .3em;
        margin-left: .5em;
        cursor: pointer;
        background-color: #0080ff;
        color: white;
        &:hover{
            
            background-color: #1463b3;
        }
    }
}
</style>