import { createStore } from 'vuex'
import user from './user.js'
import medal from './medal'

export default createStore({
  modules:{
    user,medal
  }
})
