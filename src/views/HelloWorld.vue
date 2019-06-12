<template>
<div class="Details d-flex justify-content-center">
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{bug.title}}</h5>
    <small>{{bug.creator}}</small>
    <p class="card-text"> {{bug.description}}</p>
    <p>Closed: {{bug.closed}}</p>
  </div>
  <div class="card-body">
      <div v-for="comment in comments" :key="comment._id" class="list-group">
          <small class="list-group-item">{{comment.creator}}</small>
          <small class="list-group-item">{{comment.content}}</small>
          <button @click="deleteComment(comment)">Delete</button>
      </div>
    
    <form v-if="!bug.closed" @submit.prevent="addComment">
        <div class="form-group">
            <label for="exampleInputEmail1"></label>
            <input v-model="newComment.creator" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name">

        </div>
        <div class="form-group">
            <label for="exampleInputPassword1"></label>
            <input v-model="newComment.content" class="form-control" id="exampleInputPassword1" placeholder="What bug is on your mind">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
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
            deleteComment(comment){
                this.$store.dispatch('deleteComment', comment)
            },
            addComment(){
                //grab data from v-models created in data
                //dispatch addcomment
                // ?? Is this right?  Goal is to get it all under one v-model
                let data = {
                            data: this.newComment,
                            id: this.id
                }
                this.$store.dispatch('postComment', data)
            }
        }
    }
</script>


<style>

</style>

