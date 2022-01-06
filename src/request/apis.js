import request from '../request'
//请求用户登录接口
export function login({uname,upwd}){
    return request({
        url:process.env.VUE_APP_BASE_USER+'login',
        method:'post',
        params:{
             uname,upwd
        }
     })
 }
 //请求用户自身信息
 export function getSelfInfo(){
     return request({
        url:process.env.VUE_APP_BASE_USER+'getSelfInfo',
     })
 }
 //请求板块推荐数据
 export function getRecommend(){
     return request({
         url:process.env.VUE_APP_BASE_PLATE+'getRecommend'
     })
 }
//根据pid请求获取版块数据
export function getSection(pid){
    return request({
        url:process.env.VUE_APP_BASE_PLATE+"get/"+pid
    })
}
//获取当前版块当前页的帖子数据
export function getSectionArticle(pid,page){
    return request({
        url:`${process.env.VUE_APP_BASE_ARTICLE}getbyplate/${pid}/${page}`
    })
}
//获取当前版块帖子的总数量
export function getArticleNum(pid){
    return request({
        url:`${process.env.VUE_APP_BASE_ARTICLE}getArticleNum/${pid}`
    })
}
//获取帖子信息
export function getArticle(aid){
    return request({
        url:`${process.env.VUE_APP_BASE_ARTICLE}getArticle/${aid}`
    })
}
//获取当前帖子的回复信息
export function getReply(aid){
    return request({
        url:`${process.env.VUE_APP_BASE_ARTICLE}getReply/${aid}`
    })
}
//回复当前帖子
export function reply(aid,content){
    return request({
        method:'post',
        url:`${process.env.VUE_APP_BASE_ARTICLE}reply`,
        params:{
            aid,content
        }
    })
}
//发布文章
export function release(pid,title,content){
    return request({
        method:'post',
        url:`${process.env.VUE_APP_BASE_ARTICLE}release`,
        params:{
            pid,title,content
        }
    })
}
//获取评论(带页数)
export function getReplyByPage(aid,page){
    return request({
        url:`${process.env.VUE_APP_BASE_ARTICLE}getReplybypage/${aid}/${page}`
    })
}
//获取当前帖子的回复数量
export function getReplyNum(aid){
    return request({
        url:`${process.env.VUE_APP_BASE_ARTICLE}getReplyNum/${aid}`
    })
}