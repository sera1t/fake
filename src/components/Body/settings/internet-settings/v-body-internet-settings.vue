<template>
    <div class="col-md-12 bottomfake">
        <div class="col-md-6 combination-filter">
            <label>the Internet: </label>
            <div class="inetBlock btn-group">
                <input class="inet" name="inet" id="inet0" type="radio" value="wifi" checked=""><label for="inet0" class="btn btn-default">wifi</label><input class="inet" name="inet" id="inet1" type="radio" value="LTE"><label for="inet1" class="btn btn-default">LTE</label><input class="inet" name="inet" id="inet2" type="radio" value="3G"><label for="inet2" class="btn btn-default">3G</label><input class="inet" name="inet" id="inet3" type="radio" value="4G"><label for="inet3" class="btn btn-default">4G</label>								</div>
        </div>

        <div class="wifiBlock col-md-4 combination-filter">
            <label>Wi-Fi: </label>
            <div class="btn-group">
                <input class="wifi" name="wifi" id="wifi0" type="radio" data-img="@/assets/img/wifi/wifi0.png"><label for="wifi0" class="btn btn-default"><img src="@/assets/img/wifi/wifi0.png"></label><input class="wifi" name="wifi" id="wifi1" type="radio" data-img="@/assets/img/wifi/wifi1.png"><label for="wifi1" class="btn btn-default"><img src="@/assets/img/wifi/wifi1.png"></label><input class="wifi" name="wifi" id="wifi2" type="radio" data-img="@/assets/img/wifi/wifi2.png" checked=""><label for="wifi2" class="btn btn-default"><img src="@/assets/img/wifi/wifi2.png"></label><input class="wifi" name="wifi" id="wifi3" type="radio" data-img="@/assets/img/wifi/wifi3.png"><label for="wifi3" class="btn btn-default"><img src="@/assets/img/wifi/wifi3.png"></label>		</div>
        </div>

    </div>
    <div class="stop-line"></div>
    <div class="center"></div>
    <div class="stop-line"></div>
</template>

<script>
export default {
    name: "v-head-settings"
}
</script>

<style scoped>

</style>