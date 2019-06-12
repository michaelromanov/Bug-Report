<template>
  <div class="BugList d-flex justify-content-center">
    <div v-for="bug in bugs" :key="bug._id" class="card" style="width:275px">
      <div class="card-body">
        <a @click="contents(bug._id)" class="card-title">{{bug.title}}</a>
        <small v-if="bug.completed">Bug is completed</small>
        <p class="card-text">{{bug.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BugList",
  data() {
    return {}
  }, 
  mounted() {
      this.$store.dispatch("getBugs")
  },
  computed: {
      bugs(){
          return this.$store.state.bugs
      }, 
      livebugs(){

      }
  },
  methods: {
      contents(id){
          this.$store.dispatch("getContentsPage", id)
      }, 
      deletePost(data) {
          this.$store.dispatch("deleteBug", data)
      }
  }


};
</script>

<style scoped>
</style>

