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
          <div v-for="item in count" :key="item.id">
            <div v-if="select_arg_el.count === 0" :id="'iphone-block-' + item.id" class="BlockDate" :data-object="item">
              <span>New Message</span>
            </div>
            <v-incom-text :id="'incom-text-' + item.id" v-if="select_arg_el.count === 2" >
            </v-incom-text>
          </div>

        </div>
    </div>
</template>

<script>
import { EV } from '@/assets/script/event';
import vIncomText from "@/components/Body/temp/temp_messages_type/v-incom-text.vue";

export default {
    name: "v-body-messege",
    components: {
      vIncomText
    },
    created() {
        EV.on('add-message', (item) => {
            this.count = item;
            console.log(JSON.stringify(this.count))
        })
        EV.on('del-message', (el) => {
            this.count = this.count.filter(p => p.id !== el.id);

        })
        EV.on('update-modelVal', (val) => {
          console.log(val)
          this.handleMessageUpdated(val)
        })
    },
    methods: {
      handleMessageUpdated(message) {
        console.log('Новое сообщение:', message[0]);
        this.select_arg_el.count = message[0];
        console.log(this.select_arg_el.count)
      }
    },
    data: ()=> ({
        count: [],
        select_arg_el: {
          count:0
        },
    })
}
</script>

<style scoped>

</style>