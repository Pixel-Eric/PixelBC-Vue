<template>
  <div class="container">
      <div class="head">
          <p v-if="!islogin" @click="send">发帖</p>
      </div>
      <div class="content">
          <input type="text" v-model="title" placeholder="请输入标题">
          <div class="cbox">
            <div class="login-none" v-if="islogin">
            <p>请先登录</p>
            <router-link class="login" to="/login" >点击此处登录</router-link>
            </div>
            <Editor id="tinymce" v-model="tinymceHtml" :init="init" />
          </div>
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
import { useRouter } from 'vue-router';
export default {
    props:["pid","page"],
    setup(props){
        //获取路由组件
        const router = useRouter();
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

        //检测是否已经登录账号
        if(getSession2()==null){
            //还没有登录账号
            config.islogin = true;
            config.init.placeholder = '';
        }

        //发送文章
        function send(){
            if(props?.pid>0){
                if(getSession2()!==null){
                    if(config.title.length>8&&config.tinymceHtml.length>20){
                        release(props.pid,config.title,config.tinymceHtml).then(res=>{
                            if(res.data?.Success){
                                alert(res.data.Success);
                                window.scroll(0,0);
                                location.reload();
                                // router.push({name:"plate",params:{pid:props.pid,page:props.page}});
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
    position: relative;
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
            margin-left: 1em;
            border-bottom: solid rgb(204, 204, 204);
            margin-bottom: 1em;
            padding: .3em;
            font-size: 1.3em;
        }
    }
}
.cbox{
    position: relative;
}
.login{
    text-decoration: none;
    color: #2497c5;
    margin-left: 1em;
    &::before{
        color: #333;
        content: "|";
        margin-right: 1em;
    }
}
.login-none{
    position: absolute;
    display: flex;
    left: .75em;
    top: .5em;
    bottom: .7em;
    right: 18em;
    z-index: 10;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    color: #333;
}
</style>