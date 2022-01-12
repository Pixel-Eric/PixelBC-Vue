<template>
    <div v-if="show" class="edit">
        <div class="open" @click="close" >
            <p>关闭</p>
        </div>
        <div class="container">
            <div class="head">
                <p @click="send">保存</p>
            </div>
            <div class="content">
                <label for="">版块图标</label>
                <div>
                    <img class="icon" :src="icon" alt="">
                </div>
                <label for="pname">版块名称</label>
                <input type="text" name="pname" v-model="name" placeholder="请输入版块名称">
                <label for="pintro">版块简介</label>
                <textarea name="pintro" v-model="intro" placeholder="请输入版块简介内容"></textarea>
                <label for="">版块公告</label>
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
import { reactive,toRefs,inject } from 'vue';
import { getSection,editSection } from '../../request/apis';
export default {
    emits:["close"],
    setup(props,context){
        let pid = inject("pid");
        //初始化富文本
        let config = reactive({
            //版块公告
            tinymceHtml: '',
            //版块名称
            name:'',
            //版块签名
            intro:'',
            icon:'',
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
                placeholder:'请输入版块的公告',
                fixed_toolbar_container:'mytoolbar'
            }
        })
        //获取当前帖子的信息内容
        async function getdata(){
            let res = await getSection(pid);
            config.name = res.data.pName;
            config.icon = res.data.pIco;
            config.intro = res.data.pIntro;
            config.tinymceHtml = res.data.pNotice;
            config.show = true;
        }
        async function send(){
            console.log(pid)
            let res = await editSection(pid,config.tinymceHtml,config.intro,config.name,config.icon);
            if(res.data?.Success){
                alert("保存成功");
                window.scroll(0,0);
                location.reload();

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
.content{
    display: flex;
    flex-direction: column;
    .icon{
        width: 8em;
        height: 8em;
    }
    input{
        border: none;
        outline: none;
        border-bottom: solid rgb(204, 204, 204);
        margin-bottom: 1em;
        padding: .3em;
        font-size: 1.3em;
        width: 20em;
    }
    textarea{
        font-size: 1.3em;
        font-weight: bold;
        resize: none;
        width: 20em;
        height: 4em;
        border: solid rgb(204, 204, 204);
        outline: none;
        margin: 1em 0;
    }
}
.open{
    position: absolute;
    left: 50%;
    top: 8em;
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
    overflow: scroll;
    overflow-x: hidden;
    margin-top: 1em;
    background-color: white;
    width: 60%;
    height:60%;
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