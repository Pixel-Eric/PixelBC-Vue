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
//获取当前帖子的回复数量(带分页)
export function getReplyNum(aid){
    return request({
        url:`${process.env.VUE_APP_BASE_ARTICLE}getReplyNum/${aid}`
    })
}
export function getReplyNumNone(aid){
    return request({
        url:`${process.env.VUE_APP_BASE_ARTICLE}getReplyn/${aid}`
    })
}
//获取当前版块的名称
export function getPalteName(pid){
    return request({
        url:`${process.env.VUE_APP_BASE_PLATE}getpaltename/${pid}`
    })
}
//获取当前版块最新的帖子信息
export function getNewArt(pid){
    return request({
        url:`${process.env.VUE_APP_BASE_ARTICLE}getnewart/${pid}`
    })
}
//获取用户ID
export function getloginid(){
    return request({
        url:`${process.env.VUE_APP_BASE_USER}getloginid`
    })
}
//编辑帖子
export function editart(aid,title,content){
    return request({
        url:`${process.env.VUE_APP_BASE_ARTICLE}edit`,
        method:'post',
        params:{
            aid,title,content
        }
    })
}
//获取最新的帖子
export function getAllNewArt(){
    return request({
        url:`${process.env.VUE_APP_BASE_ARTICLE_HOT}getNewArt`
    })
}
//获取热门的帖子
export function getHotArt(){
    return request({
        url:`${process.env.VUE_APP_BASE_ARTICLE_HOT}getHotArt`
    })
}
//获取当前要编辑的帖子的信息
export function getArticleById(aid){
    return request({
        url:`${process.env.VUE_APP_BASE_ARTICLE}getArticleById/${aid}`
    })
}
//获取版块其他数据
export function getPlateOtherInfo(pid){
    return request({
        url:`${process.env.VUE_APP_BASE_PLATE}getplateotherinfo/${pid}`
    })
}
//编辑版块
export function editSection(pid,content,intro,name,icon){
    return request({
        url:`${process.env.VUE_APP_BASE_PLATE}edit`,
        method:'post',
        params:{content,intro,name,icon,pid}
    })
}
//获取窗帘信息
export function getHomeCur(){
    return request({
        url:`${process.env.VUE_APP_BASE_HOME}get`,
    })
}
//获取用户的勋章信息
export function getMedal(uid){
    return request({
        url:`${process.env.VUE_APP_BASE_MEDAL}getwearmedal/${uid}`
    })
}
//获取全部徽章列表
export function getAllMedal(){
    return request({
        url:`${process.env.VUE_APP_BASE_MEDAL}getallmedal`
    })
}
//用户注册接口
export function register(fName,fUname,fPwd,fSex,file){
    let d = new FormData();
    d.append("fName",fName);
    d.append("fUname",fUname);
    d.append("fPwd",fPwd);
    d.append("fSex",fSex);
    d.append("file",file);
    return request({
        url:`${process.env.VUE_APP_BASE_REGISTER}register`,
        method:'post',
        data:d
    })
}
//获取用户的名字根据UID
export function getUserName(uid){
    return request({
        url:`${process.env.VUE_APP_BASE_USER}getname/${uid}`
    })
}