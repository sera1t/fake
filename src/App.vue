<template>
  <div id="app">
      <v-main-project></v-main-project>
  </div>
</template>

<script>
import vMainProject from './components/v-main-project.vue'

export default {
  name: 'App',
  components: {
    vMainProject
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
