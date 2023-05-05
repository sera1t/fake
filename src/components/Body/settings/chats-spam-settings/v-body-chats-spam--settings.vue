<template>
    <div class="chatyBlock col-md-3 bottomfake" style="display:flex; float:inline-start">
        <label>Chats: </label>
        <input id="chat" type="number" class="InputChaty form-control" min="0" value="">
    </div>
    <div class="spamBlock col-md-3" style="float:inline-start;">
        <input id="spam" type="checkbox" class="InputSpam checkbox-style">
        <label for="spam" class="fake-label">Spam?</label>
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