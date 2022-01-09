<template>
    <div v-if="show" class="edit">
        <div class="container">
            <div class="open" @click="close" >
                <p>关闭</p>
            </div>
            <div class="head">
                <p @click="send">保存</p>
            </div>
            <div class="content">
                <input type="text" v-model="title" placeholder="请输入标题">
                <Editor id="tinymce1" v-model="tinymceHtml" :init="init" />
            </div>
        </div>
    </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver/theme'
import Editor from '@tinymce/tinymce-vue'
import "tinymce/plugins/image";
import "tinymce/plugins/link";
import "tinymce/plugins/code";
import "tinymce/plugins/table";
import "tinymce/plugins/lists";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/hr"
import "tinymce/plugins/emoticons"
import { reactive,toRefs } from 'vue';
import { getArticleById,editart } from '../../request/apis';
export default {
    props:["aid"],
    emits:["close"],
    setup(props,context){
        //初始化富文本
        let config = reactive({
            //文章内容
            tinymceHtml: '',
            //文章标题
            title:'',
            show:false,
            init: {
                selector: 'myeditablediv',
                language_url: '/js/zh_CN.js',
                language: 'zh_CN',
                skin_url: '/js/skins/ui/oxide',
                height: 300,
                width:"70%",
                images_upload_url: 'http://localhost:8080/api/upload/load',
                menubar:false,
                plugins:"image link hr emoticons",
                toolbar: " emoticons| image link | fontsizeselect bold italic underline strikethrough | forecolor backcolor blockquote | alignleft aligncenter alignright | hr subscript superscript", //引入插件
                branding: false,
                contextmenu: "bold forecolor",
                contextmenu_never_use_native: true,
                emoticons_database_url:'/js/emoji.js',
                placeholder:'请输入您要发表的内容',
                fixed_toolbar_container:'mytoolbar'
            }
        })
        //获取当前帖子的信息内容
        async function getdata(){
            let res = await getArticleById(props.aid);
            config.title = res.data.title;
            config.tinymceHtml = res.data.content;
            config.show = true;
        }
        async function send(){
            let res = await editart(props.aid,config.title,config.tinymceHtml);
            if(res.data?.Success){
                console.log("保存成功");
            }else{
                console.error(res.data.Error);
            }
            
        }
        function close(){
            context.emit("close");
        }
        return {...toRefs(config),getdata,send,close}
    },
    components:{Editor},
    created(){
        this.getdata();
    }
}
</script>

<style lang='scss' scoped>
.open{
    position: absolute;right: -3em;top: -2.5em;
    color: white;
}
.edit{
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;left: 0;right: 0;bottom: 0;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.459);
}
.container{
    position: relative;
    margin-top: 1em;
    background-color: white;
    width: 60%;
    .head{
        background: #2497c5;
        height: 1em;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        p{
            color: white;
            font-weight: bold;
            cursor: pointer;
        }
    }
    div{
        padding: 1em;
        input{
            border: none;
            outline: none;
            border-bottom: solid rgb(204, 204, 204);
            margin-bottom: 1em;
            padding: .3em;
            font-size: 1.3em;
        }
    }
}
.login-none{
    position: absolute;
    display: flex;
    left: 0;
    top: 1.5em;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.589);
    z-index: 10;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    color: white;
}
</style>