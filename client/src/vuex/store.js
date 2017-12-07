import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http =axios.create({
  baseURL:' http://localhost:3002'
})

Vue.use(Vuex)

const state={
  dataPost:[]
}
const mutations={
hasilPost(state,payload){
  console.log(payload);
  state.dataPost.push(payload)
}
}
const actions={
tampDat({commit}){
  http.get('/post')
  .then(({data})=>{
    commit('yangTamp',data)
  })
  .catch(err=>{
    console.error(err)
  })
},

postDat({commit},newD){
  http.post('/post'.newD,{
    headers:{
      token: localStorage.getItem('token')
    }
  })
  .then(({data})=>{
    commit ('hasilPost',data)
  })
}
}

const store = new Vuex.store({
  state,
  mutations,
  actions
})

export default store