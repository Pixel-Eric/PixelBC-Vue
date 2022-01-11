import { useStore } from "vuex";
import {getToken} from '../session'
//获取到状态管理

//初始化App
export function initAll(){
    const store = useStore();
    //开始判断session中是否存在Token
    initUser(store);
    initMedal(store);
}
//初始化用户信息
export function initUser(store){
    let token = getToken();
    if(token!=null){
        store.dispatch('user/uGetSelfInfo')
    }
}
//初始化勋章信息
export function initMedal(store){
    store.dispatch('medal/getMedal');
}   