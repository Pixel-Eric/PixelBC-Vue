<template>
    <div class="tbar">
        <div class="tbar-content">
            <div class="tbar-content-left">
                <p>{{title}}</p>
            </div>
            <div class="tbar-content-right">
                <slot></slot>
            </div>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
    name:'ToolBar',
    props:['title'],
    setup(props){
        let title = props.title;
        return{title}
    }
}
</script>

<style lang='less' scoped>
.tbar{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 3em;
    border-radius: .2em;
    overflow: hidden;
    margin: 1em .5em;
    box-shadow: 5px 5px 15px rgb(148, 148, 148);
    .tbar-content{
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .tbar-content-left{
            &>p:nth-of-type(1){
                margin-left: 1em;
                font-size: 1.2em;
                font-weight:500;
                color: #0080ff;
            }
        }
        
    }
}
.line{
    height: .3em;
}
</style>