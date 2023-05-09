<template>
    <div class="table-responsive bottommargin">
        <table class="table">
            <thead>
            <tr>
                <th style="text-align: initial;"><input id="plus-0" type="button" @click="add_message()" class="plusControl btn btn-success" value="➕"></th>
                <th>Message type</th>
                <th>Text</th>
                <th>Picture</th>
                <th><img src="@/assets/img/check2.png">&nbsp;</th>
                <th>Time</th>
                <th>Date / Sec</th>
            </tr>
            </thead>
            <tbody id="tbody" >
                <v-new-message v-for="(item, index) in items" :is="index" :key="index" :id="'row-' + index" @remove="del_message(item)"></v-new-message>
            </tbody>
        </table>
    </div>
    <div class="line"></div>
</template>

<script>
import vNewMessage from './new-message-settings/v-new-message-settings.vue'
export default {
    name: "v-head-settings",
    components: {
        vNewMessage
    },
    methods: {
        add_message() {
            this.items.push({
                id: Date.now(),
            });
        },
        del_message(el) {
            this.items = this.items.filter(p => p.id !== el.id)
        }
    },
    data: ()=> ({
        items: [],
    })
}
</script>

<style scoped>

</style>