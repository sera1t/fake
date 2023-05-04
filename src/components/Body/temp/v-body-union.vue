<template>
  <div class="Massege">
    <v-body-messege></v-body-messege>
  </div>
    <v-messege-bottom></v-messege-bottom>
</template>

<script>
import vBodyMessege from './v-body-messege.vue'
import vMessegeBottom from './v-messege-bottom.vue'
export default {
    name: "v-body-union",
    components: {
        vBodyMessege, vMessegeBottom
    }
}
</script>

<style scoped>

</style>