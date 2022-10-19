<template>
<the-nav-bar/>
  <div class="container">
      <router-view/>
  </div>
  
</template>

<script>
import TheNavBar from './components/TheNavBar.vue'

export default {
  name: 'App',
  components: {
    TheNavBar
  }
}
</script>

    TheNavBar
<style>
@import "assets/style.css";
</style>
