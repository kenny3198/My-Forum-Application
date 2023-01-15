<template>
<!-- <create-account/> -->
<TheNavBar/>
  <div class="container">
      <router-view/>
  </div>
  
</template>

<script>
import TheNavBar from './components/TheNavBar.vue'
// import createAccount from "@/Pages/createAccount"

export default {
  name: 'App',
  data() {
    return {
    
    }
  },
  components: {
    TheNavBar,
    // createAccount
  }
}
</script>

     TheNavBar
<style>
@import "assets/style.css";
 </style>
