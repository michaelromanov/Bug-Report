import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';


Vue.use(Vuex)

const api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/michaelromanovtest/'
})

export default new Vuex.Store({
  state: {
    bugs: [],
    bug: {}, 
    comments: []

  },
  mutations: {
    setBugs(state, data = []) {
      state.bugs = data
    }, 
    setBug(state, data) {
      state.bug = data
    }, 
    setComments(state, data=[]){
      state.comments = data
    }
  },
  actions: {
    getBugs({commit, dispatch}){
      api.get("Bugs/")
      .then(res => {
        commit("setBugs", res.data.results)
        console.log(res)
      })
      .catch(er => {
        console.error(er)
      })
    }, 
    getContentsPage({commit, dispatch}, id){
      
      router.push({
        name: 'helloworld', 
        params: {
          id:id
        }
      })
    },
    getContents({dispatch, commit}, id){
      api.get("Bugs/"+ id)
      .then(res => {
        commit("setBug", res.data.results)
        console.log('contents',res)
      })
      .catch(er => {
        console.error(er)
      })
    }, 
    getComments({dispatch, commit}, id){
      api.get("Bugs/"+id+ "/notes")
      .then(res => {
        commit("setComments", res.data.results)
      })
      .catch(er => {
        console.error(er)
      })
    },
    deleteBug({commit, dispatch}, id){
      //this will be similar to get contents, but as a delete instead of a get
    } 
  }
})
