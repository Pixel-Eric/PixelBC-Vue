<template>
    <div class="container">
      <div class="head">
          <p v-if="!islogin" @click="send">发帖</p>
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
import "tinymce/plugins/image";
import "tinymce/plugins/link";
import "tinymce/plugins/code";
import "tinymce/plugins/table";
import "tinymce/plugins/lists";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/hr"
import "tinymce/plugins/emoticons"
import { reactiv,toRefs } from 'vue';
export default {
    setup(){
                //初始化富文本
        let config = reactive({
            //文章内容
            tinymceHtml: '',
            //文章标题
            title:'',
            //标识用户是否登录(默认未登录)
            islogin:false,
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
        return {...toRefs(config)}
    }
}
</script>

<style lang='scss' scoped>

</style>