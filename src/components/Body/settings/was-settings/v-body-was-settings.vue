<template>
    <div class="agoBlock col-md-12 bottomfake">
        <div class="col-md-6" style="display:flex;">
            <label class="inline-block">Was: </label>
            <select id="be" class="select-simple">
                <option value="0"> -- Online (blue) -- </option>
                <option value="1">was just</option>
                <option value="2">last seen recently</option>
                <option value="3">was a long time ago</option>
                <option value="4">was "M" minutes ago</option>
                <option value="5">was "H" hours ago</option>
                <option value="6">was today in "H": "M"</option>
                <option value="7">was yesterday in "H": "M"</option>
                <option value="8">was "TEXT"</option>
            </select>
        </div>
        <div class="col-md-6">
            <div class="agoHourBlock col-md-4" style="display: none;">
                <label>H: </label>
                <input id="h" type="number" class="agoHour form-control" value="5" min="0" max="23">
            </div>
            <div class="agoMinBlock col-md-4" style="display: none;">
                <label>M: </label>
                <input id="m" type="number" class="agoMin form-control" value="5" min="0" max="59">
            </div>
            <div class="agoValBlock col-md-11" style="display: none;">
                <label>Text: </label>
                <input id="under" type="text" class="agoVal form-control" value="">
            </div>
        </div>
    </div>
    <div class="stop-line"></div>
</template>

<script>
export default {
    name: "v-body-was-settings"
}
</script>

<style scoped>

</style>