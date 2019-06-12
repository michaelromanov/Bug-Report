<template>
  <div class="bug-creator">
    <form class="bugs" @submit.prevent="handleSubmit">
      <!-- make form to create bug -->
      <p>user:</p>
      <input class="form input" type="text" placeholder="enter creator name" v-model="newBug.creator">
      <input class="form input" type="text" placeholder="Enter Bug" v-model="newBug.title">
      <input class="form input" type="text" id="description" placeholder="Description" v-model="newBug.description">
      <button class="submit-button" type="submit">Reported</button>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      newBug: {
        creator: "", 
        title: "",
        description: ""
      }
    };
  },

  methods: {
    handleSubmit() {
      this.$store.dispatch("createBug", this.newBug);
    //   this.newBug.description = "";
    //   this.newBug.creator = "";
    //   this.newBug.title = "";
    }
  }
};
</script>

