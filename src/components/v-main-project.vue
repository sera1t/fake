<template>
    <section id="content">
        <div class="content-wrap">
            <div class="container clearfix">
                <div class="sidebar clearfix" id="left-side" style="position:relative; left:0px;">
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
                </div>
                <div class="postcontent bottommargin-sm col_last clearfix">
                    <v-head-setting></v-head-setting>
                    <v-body-settings></v-body-settings>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import vHeadProject from './Head/v-head-project.vue'
import vBodyUnion from './Body/temp/v-body-union.vue'
import vHeadSetting from './Body/settings/v-head-settings.vue'
import VBodySettings from "@/components/Body/settings/v-body-settings.vue";
export default {
    name: "vMainProject",
    components: {
        VBodySettings,
        vHeadProject, vBodyUnion, vHeadSetting
    }
}
</script>

<style scoped>

</style>