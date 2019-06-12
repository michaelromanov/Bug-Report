<template>
  <div class="home">
    <div>
      <h3>Bug Creator</h3>
      <BugCreator />
    </div>
    
    <div>
      <h3>Bug List</h3>
      <BugList />
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
