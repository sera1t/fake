<template>
    <v-body-avatar></v-body-avatar>
    <v-body-battery></v-body-battery>
    <v-body-name></v-body-name>
    <v-body-time></v-body-time>
    <v-body-was></v-body-was>
    <v-body-chats-spam></v-body-chats-spam>
    <v-body-geo></v-body-geo>
    <v-body-internet></v-body-internet>
    <v-body-phone-b-g></v-body-phone-b-g>
    <div class="line"></div>
    <div class="col-md-12 bottomfake">

        <div class="col-md-6">
            <button type="button" id="SaveProject" class="btn btn-primary btn-lg btn-block">
                Save Project
            </button>

            <div class="stop-line"></div>

        </div>

        <div class="col-md-6">
            <button type="button" id="CreateImage" class="btn btn-primary btn-lg btn-block">
                Create Image
            </button>
            <div class="stop-line"></div>
        </div>
    </div>
</template>

<script>
import vBodyAvatar from './avatar-settings/v-body-avatar-settings.vue'
import vBodyBattery from './battery-settings/v-body-battery-settings.vue'
import vBodyName from './nameBlock-settings/v-body-name-settings.vue'
import vBodyTime from './time-settings/v-body-time-settings.vue'
import vBodyWas from './was-settings/v-body-was-settings.vue'
import vBodyChatsSpam from './chats-spam-settings/v-body-chats-spam--settings.vue'
import vBodyGeo from './geo-settings/v-body-geo-settings.vue'
import vBodyInternet from './internet-settings/v-body-internet-settings.vue'
import vBodyPhoneBG from './phoneBG-settings/v-body-phoneBG-settings.vue'
export default {
    name: "v-body-settings",
    components: {
        vBodyAvatar, vBodyBattery, vBodyName, vBodyTime, vBodyWas, vBodyChatsSpam, vBodyGeo, vBodyInternet, vBodyPhoneBG
    }
}
</script>

<style scoped>

</style>