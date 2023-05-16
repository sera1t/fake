<template>
    <div class="MassegeSpam" style="display:none;">
        <div>Report Spam</div>
        <span><img style="vertical-align:inherit;" src="@/assets/img/close.jpg"></span>
    </div>

    <div class="MassegeBlocks">
        <div id="dialog" class="MassegeBlocksInner">
            <div id="arrow" class="Bottom" style="display:none;z-index:99;">
                <img src="@/assets/img/bottom.png">
            </div>
            <div style="padding:16px; display:none;" class="myPadding norow"></div>
            <div v-for="n in count" :key="n" id="iphone-block-38" class="BlockDate"><span>New Message</span></div>
            <div id="iphone-block-1" class="Block BlockIn BlockInEnd typeInControl">
                <span id="iphone-text-1" style="contenteditable: true !important; display:inline-block; overflow: auto;">12312321321321341341252
                </span> &nbsp; &nbsp; &nbsp; &nbsp;
                <span id="iphone-time-1" class="BlockInTime">18:38</span>
            </div>
        </div>
    </div>
</template>

<script>
import { EV } from '@/assets/script/event';

export default {
    name: "v-body-messege",
    created() {
        EV.on('add-message', (item) => {
            this.count = item;
            console.log(JSON.stringify(this.count))
        })
        EV.on('del-message', (el) => {
            this.count = this.count.filter(p => p.id != el.id);
        })
    },
    data: ()=> ({
        count: []
    })
}
</script>

<style scoped>

</style>