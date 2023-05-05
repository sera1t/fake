<template>
    <div class="timeBlock col-md-12 bottomfake">
        <div class="col-md-2">
            <label>Time on the phone: </label>
        </div>
        <div class="col-md-5" style="display:flex;">
            <input id="hour" type="number" class="InputHour form-control" value="0" min="0" max="23">
            <label>&nbsp;:&nbsp;</label>
            <input id="minut" type="number" class="InputMin form-control" value="0" min="0" max="59">
        </div>
        <div class="col-md-3">
            <input id="blue" name="blue" type="checkbox" class="CheckBlue checkbox-style">
            <label for="blue" class="fake-label">BLUE</label>
        </div>
    </div>
    <div class="stop-line"></div>
</template>

<script>
export default {
    name: "v-body-settings",
}
</script>

<style scoped>

</style>