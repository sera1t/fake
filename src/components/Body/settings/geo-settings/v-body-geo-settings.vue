<template>
    <div class="col-md-12 bottomfake">

        <div class="col-md-6 combination-filter">
            <label>Geolocation: </label>
            <div class="geoBlock btn-group">
                <input class="geo" name="geo" id="geo0" type="radio" data-img="@/assets/img/geo/geo0.png" checked=""><label for="geo0" class="btn btn-default"><img src="@/assets/img/geo/geo0.png"></label><input class="geo" name="geo" id="geo1" type="radio" data-img="@/assets/img/geo/geo1.png"><label for="geo1" class="btn btn-default"><img src="@/assets/img/geo/geo1.png"></label><input class="geo" name="geo" id="geo2" type="radio" data-img="@/assets/img/geo/geo2.png"><label for="geo2" class="btn btn-default"><img src="@/assets/img/geo/geo2.png"></label>								</div>
        </div>

        <div class="col-md-6 combination-filter">
            <label>Network: </label>
            <div class="setBlock btn-group">
                <input class="set" name="set" id="set0" type="radio" value="0"><label for="set0" class="btn btn-default">0</label><input class="set" name="set" id="set1" type="radio" value="1"><label for="set1" class="btn btn-default">1</label><input class="set" name="set" id="set2" type="radio" value="2"><label for="set2" class="btn btn-default">2</label><input class="set" name="set" id="set3" type="radio" value="3" checked=""><label for="set3" class="btn btn-default">3</label><input class="set" name="set" id="set4" type="radio" value="4"><label for="set4" class="btn btn-default">4</label>								</div>
        </div>

    </div>
    <div class="stop-line"></div>
</template>

<script>
export default {
    name: "v-head-settings"
}
</script>
<style scoped>

</style>