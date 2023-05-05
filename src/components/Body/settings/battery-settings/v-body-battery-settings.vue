<template>
  <!-- BODY BATTERY -->
    <div class="batareyBlock col-md-12 bottomfake">
        <div class="col-md-4" style="display:flex;">
            <label>Battery charge %:</label>
            <input id="batarey" type="number" class="InputBatareyInner form-control" value="60" min="5" max="100">
        </div>
        <div class="col-md-3">
            <input id="zarydka" type="checkbox" class="InputBatareyZarydka checkbox-style">
            <label for="zarydka" class="fake-label">Charging</label>
        </div>
        <div class="col-md-3">
            <input id="ekonom" type="checkbox" class="InputBatareyEkonom checkbox-style">
            <label for="ekonom" class="fake-label">Economy</label>
        </div>
    </div>

    <div class="stop-line"></div>
</template>

<script>
export default {
    name: "v-body-battery-settings"
}
</script>

<style scoped>

</style>