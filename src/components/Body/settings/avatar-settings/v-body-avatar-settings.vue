<template>
  <!-- BODY AVATAR -->
    <div class="AvaBlock col-md-12 bottomfake">
        <div class="col-md-6" style="display:flex;">
            <label class="inline-block">Avatar:</label>
            <select id="ava" class="select-simple">
                <option value="0">No avatar</option>
                <option value="1">Upload an avatar</option>
                <option value="2">Link to avatar</option>
            </select>
        </div>
        <div class="col-md-6">
            <input type="text" id="myAvaLink" class="AvaBlockSsilka inputAvaControl form-control" value="" style="display: none;">
            <div class="AvaBlockFile btn btn-primary btn-file" style="display: none;">
                <i class="icon-folder-open"></i>
                <span>Browse ...</span>
                <input type="file" id="myAvaFile" class="avatarControl file form-control" value="">
            </div>
        </div>
    </div>

  <!-- BODY AVATAR BG -->
    <div class="AvaBlockBg col-md-12 bottomfake" style="display: block ruby;">
        <div class="col-md-2">
            <label>Avatar background</label>
        </div>
        <div class="col-md-10">
            <input class="avaBG" name="avaBG" id="avaBg1" type="radio" data-img="@/assets/img/ava/bg/1.png" checked=""><label for="avaBg1"><img src="@/assets/img/ava/bg/1.png"></label><input class="avaBG" name="avaBG" id="avaBg2" type="radio" data-img="@/assets/img/ava/bg/2.png"><label for="avaBg2"><img src="@/assets/img/ava/bg/2.png"></label><input class="avaBG" name="avaBG" id="avaBg3" type="radio" data-img="@/assets/img/ava/bg/3.png"><label for="avaBg3"><img src="@/assets/img/ava/bg/3.png"></label><input class="avaBG" name="avaBG" id="avaBg4" type="radio" data-img="@/assets/img/ava/bg/4.png"><label for="avaBg4"><img src="@/assets/img/ava/bg/4.png"></label><input class="avaBG" name="avaBG" id="avaBg5" type="radio" data-img="@/assets/img/ava/bg/5.png"><label for="avaBg5"><img src="@/assets/img/ava/bg/5.png"></label><input class="avaBG" name="avaBG" id="avaBg6" type="radio" data-img="@/assets/img/ava/bg/6.png"><label for="avaBg6"><img src="@/assets/img/ava/bg/6.png"></label><input class="avaBG" name="avaBG" id="avaBg7" type="radio" data-img="@/assets/img/ava/bg/7.png"><label for="avaBg7"><img src="@/assets/img/ava/bg/7.png"></label>							</div>
    </div>
    <div class="stop-line"></div>
</template>

<script>
export default {
    name: "v-body-avatar-settings"
}
</script>
<style scoped>

</style>