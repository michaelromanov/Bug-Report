<template>
<div class="Details d-flex justify-content-center">
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{bug.title}}</h5>
    <small>{{bug.creator}}</small>
    <p class="card-text"> {{bug.description}}</p>
  </div>
  <div class="card-body">
      <div v-for="comment in comments" :key="comment._id" class="list-group">
          <small class="list-group-item">{{comment.creator}}</small>
          <small class="list-group-item">{{comment.content}}</small>
      </div>
      <!-- form here for adding comment, should @submit.prevent="addComment" on this form be sure to add a v-if="!bug.closed" -->
      <button @click="deleteBug(id)">Complete</button>
  </div>
</div>


</div>

</template>

<script>
import BugCreator from "@/components/BugCreator.vue";
import BugList from "@/components/BugList.vue";
import { setTimeout } from 'timers'

    export default{
        name: "HelloWorld",
        props: ["id"], 
        data(){
            return {
                newComment:{
                    bug: this.id
                }
            }
        },
        mounted(){
            this.$store.dispatch("getContents", this.id)
            this.$store.dispatch("getComments", this.id)
        }, 
        computed: {
            bug() {
                return this.$store.state.bug
            }, 
            comments(){
                return this.$store.state.comments
            }

        }, 
        methods: {
            deleteBug(id){
                this.$store.dispatch('deleteBug', id)
            }, 
            deleteComment(){
                this.$store.dispatch('deleteComment', id)
            },
            addComment(){
                //grab data from v-models created in data
                //dispatch addcomment
            }
        }
        





    
    }

//5cfff7f596be050014b6c317
</script>


<style>

</style>

