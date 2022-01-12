//这个模块用于操作全部的session

export function setSession(obj){
    let currSession = getSession();
    currSession = Object.assign(currSession,obj);
    //存储Session到本浏览器
    window.sessionStorage.setItem('pixel',JSON.stringify(currSession));
}
export function getSession(){
    //将字符串类型转换为Obj
    let currSession = JSON.parse(window.sessionStorage.getItem('pixel'));
    if(currSession==null){
        currSession = {};
    }
    return currSession;
}
export function getSession2(){
    let currSession = JSON.parse(window.sessionStorage.getItem('pixel'));
    return currSession;
}
export function getToken(){
   return getSession()?.token;
}
//----存储某一个版块简介的状态-----
//获取section状态实例
export function getSection(){
    let sectionSession = JSON.parse(window.sessionStorage.getItem('section'));
    if(sectionSession!=null){
        return sectionSession;
    }
    return {};
}
//获取当前版块状态
export function getSectionStatus(pid){
    let sectionSession = getSection();
    //检测是否存储该状态
    if(Object.hasOwnProperty.call(sectionSession,pid)){
        return sectionSession[pid];
    }
    return false;
}
//设置当前版块简介的展开状态
export function setSectionStatus(pid,option){
    
    let sectionSession = getSection();
    sectionSession[pid] = option;
    window.sessionStorage.setItem('section',JSON.stringify(sectionSession));
}
//清除登录信息
export function clearSessions(){
    window.sessionStorage.removeItem('pixel');
}