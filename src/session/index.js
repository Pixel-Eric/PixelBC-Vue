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