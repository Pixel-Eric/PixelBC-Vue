//废弃的
import {login} from '../request/apis'
import {setSession} from '../session'
export default {
    namespaced: true,
    actions:{
        ulogin(context,data){
            
        }
    },
    mutations:{
        SETLOGINSTATE(state,data){
            state.IsLogin = data;
        }
    },
    state:{
        IsLogin:false
    },
    getters:{
        
    }
}