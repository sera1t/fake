<template>
  <div id="capture">
    <div class="TelegramBlock">
      <div class="Telega">
          <!-- HEAD -->
        <v-head-project></v-head-project>
          <!-- BODY -->
        <v-body-union></v-body-union>
      </div>
    </div>
  </div>
</template>

<script>
import vHeadProject from './Head/v-head-project.vue'
import vBodyUnion from './Body/v-body-union.vue'
export default {
    name: "vMainProject",
    components: {
        vHeadProject, vBodyUnion
    }
}
</script>

<style scoped>

</style>