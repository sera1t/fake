<template>
  <div class="head">
      <div class="HeadLine1 norow">
          <v-head-line1></v-head-line1>
      </div>

      <div class="HeadLine2 norow">
        <v-head-line2></v-head-line2>
      </div>
  </div>
</template>

<script>
import vHeadLine1 from './v-head1-project.vue'
import vHeadLine2 from './v-head2-project.vue'
export default {
    name: "vHeadProject",
    components: {
        vHeadLine1, vHeadLine2
    }
}
</script>

<style scoped>

</style>