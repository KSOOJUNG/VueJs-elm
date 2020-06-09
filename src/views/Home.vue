<template>
  <div class="home">
    <!-- <Redbag></Redbag> -->
    <HelloWorld v-show="$store.state.flag"/>
    <Address v-show="!$store.state.flag"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Address from "@/components/Address.vue";
// import Redbag from "@/components/redbag.vue";


export default {
  
  name: "home",
  flag: true,
  
  components: {
    HelloWorld,
    Address,
    // Redbag
  }
};
</script>


