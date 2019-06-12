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
    postComment({commit, dispatch}, data){
      api.post('Bugs/'+data.id+"/notes", data.data)
      .then(res=>{
        dispatch('getComments', data.data.bug)
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
    },
    deleteComment({commit, dispatch}, note){
      //this will be similar to get deletebugs, but as a delete instead of a get
      //this is a dispatch not a commit
      //closed or delete?
      api.delete("Bugs/"+note.bug+"/notes/"+note._id )
      .then(res => {
        dispatch('getComments', note.bug)
      })
      .catch(err => {
        console.error(er)
      })
    },
    createBug({ commit, dispatch }, payload) {
      api.post("bugs", payload)
        .then(res => {
          dispatch('getBugs')
        })
        .catch(err => console.error(err))
    },
    deleteBug({commit, dispatch}, id){
      //this will be similar to get contents, but as a delete instead of a get
      //this is a dispatch not a commit
      //closed or delete?
      api.delete("Bugs/"+id)
      .then(res => {
        dispatch('getContents', id)
      })
      .catch(err => {
        console.error(er)
      })
    } 
  }
})
