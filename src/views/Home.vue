<template>
  <div class="home">
    <img alt="Vue logo" src="">
    <div>
      <h3>Bug Creator</h3>
      <bug-creator />
    </div>
    
    <div>
      <h3>Bug List</h3>
      <bug-list />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import BugCreator from "@/components/BugCreator.vue";
import BugList from "@/components/BugList.vue";


export default {
  name: "home",
  components: {
    BugCreator, 
    BugList
  }
};
</script>
