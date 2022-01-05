import {getSelfInfo} from '../request/apis'
export default {
    namespaced: true,
    actions:{
        uGetSelfInfo(context){
            getSelfInfo().then(
                res=>{
                    context.commit('SETUINFO',res.data);
                },
                err=>{
                    context.commit('SETUINFO',null);
                    throw Error(err);
                }
            )
        }
    },
    mutations:{
        SETUINFO(state,data){
            state.uinfo = data;
        }
    },
    state:{
        uinfo:null
    },
    getters:{
        getInfo(state){
            return state.uinfo;
        }
    }
}