<template>
  <div class="container">
      <div class="head">
          <p @click="send">发帖</p>
      </div>
      <div class="content">
          <input type="text" v-model="title" placeholder="请输入标题">
          <Editor id="tinymce" v-model="tinymceHtml" :init="init" />
      </div>
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver/theme'
import Editor from '@tinymce/tinymce-vue'
import { reactive,toRefs } from "vue"
import "tinymce/plugins/image";
import "tinymce/plugins/link";
import "tinymce/plugins/code";
import "tinymce/plugins/table";
import "tinymce/plugins/lists";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/hr"
import "tinymce/plugins/emoticons"
import { release } from '../../request/apis';
import { getSession2 } from '../../session'
export default {
    props:["pid"],
    setup(props){
        //初始化富文本
        let config = reactive({
            tinymceHtml: '',
            title:'',
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
        //发送文章
        function send(){
            if(props?.pid>0){
                if(getSession2()!==null){
                    if(config.title.length>8&&config.tinymceHtml.length>20){
                        release(props.pid,config.title,config.tinymceHtml).then(res=>{
                            if(res.data?.Success){
                                alert(res.data.Success);
                            }else{
                                console.error(res.data.Error);
                            }
                        })
                    }else{
                        alert("文章标题必须大于8个文字，且文章内容必须大于20个文字");
                    }
                }else{
                    alert("请先登录");
                }
            }else{
                console.error("发布文章异常");
            }
        }
        return {...toRefs(config),send}
    },
    components:{Editor}
}
</script>

<style lang="less" scoped>
.container{
    margin-top: 1em;
    background-color: white;
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
</style>