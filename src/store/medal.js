import { getAllMedal } from "../request/apis"
export default{
    namespaced: true,
    actions:{
        async getMedal(context,uid){
            let res = await getAllMedal();
            context.commit("SAVEMEDALINFO",res.data);
        }
    },
    mutations:{
        SAVEMEDALINFO(state,data){
            state.medaldata = data;
        },
        SAVEMEDALUSER(state,{uid,data}){
            let medaluser = state.medaluser == null ? {} : state.medaluser;
            medaluser[uid] = data;
            state.medaluser = medaluser;
        }
    },
    state:{
        medaldata:null,
        medaluser:null
    },
    getters:{
        getMedal(state){
            return state.medaldata;
        },
        getMedalInfo(state){
            return state.medaluser;
        }
    }
}