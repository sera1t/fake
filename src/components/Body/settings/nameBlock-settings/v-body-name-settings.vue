<template>
    <div class="nameBlock col-md-12 bottomfake">
        <div class="col-md-4" style="display:flex;">
            <label>Name: </label>
            <input id="name" type="text" class="InputName form-control" value="NAME">
        </div>

        <div class="col-md-5" style="display:flex;">
            <label>Surname: </label>
            <input id="surname" type="text" class="InputSurname form-control" value="SURNAME">
        </div>

        <div class="col-md-3">
            <input id="dinamik" type="checkbox" class="CheckDinamik checkbox-style">
            <label for="dinamik" class="fake-label">Soundless</label>
        </div>
    </div>
    <div class="stop-line"></div>
</template>

<script>
export default {
    name: "v-body-name-settings"
}
</script>

<style scoped>

</style>