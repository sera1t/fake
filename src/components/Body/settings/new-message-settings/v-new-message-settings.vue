<template>
    <tr id="" class="trControl">
        <td>
            <div class="input-control">
                <input id="delete-2" type="button" class="deleteControl btn btn-danger" value="✖" @click="del_message()">
                <input id="up-2" type="button" class="upControl btn btn-default" value="ᐱ">
                <input id="down-2" type="button" class="downControl btn btn-default" value="ᐯ">
                <input id="plus-2" type="button" class="plusControl btn btn-success" value="➕"> </div>
        </td>
        <td>
            <select v-model="show"  id="sel-2" class="selectControl select-simple" style="min-width:80px;">
                <option v-for="option in options" v-bind:key="option.value" :value="option.value">
                    {{ option.text }}
                </option>
            </select>
        </td>
        <td id="shift-2" style="white-space:normal;">
            <div v-if="show === 2 || show === 3">
                <div  style="" id="area-2" class="textInControl textarea" contenteditable="true"></div>
                <br>
                <div style="" id="field-2" class="onoff"> <span style="float:right;">😂</span> <span style="display:block;clear:both;"></span> </div>
                <div style="display: none; white-space:normal;" id="smile-2" class="smile"><img data-smile="1" class="sizeSmile" src="@/assets/img/smile/smile1.png"><img data-smile="2" class="sizeSmile" src="@/assets/img/smile/smile2.png"><img data-smile="3" class="sizeSmile" src="@/assets/img/smile/smile3.png"><img data-smile="4" class="sizeSmile" src="@/assets/img/smile/smile4.png"><img data-smile="5" class="sizeSmile" src="@/assets/img/smile/smile5.png"><img data-smile="6" class="sizeSmile" src="@/assets/img/smile/smile6.png"><img data-smile="7" class="sizeSmile" src="@/assets/img/smile/smile7.png"><img data-smile="8" class="sizeSmile" src="@/assets/img/smile/smile8.png"><img data-smile="9" class="sizeSmile" src="@/assets/img/smile/smile9.png"><img data-smile="10" class="sizeSmile" src="@/assets/img/smile/smile10.png"><img data-smile="11" class="sizeSmile" src="@/assets/img/smile/smile11.png"><img data-smile="12" class="sizeSmile" src="@/assets/img/smile/smile12.png"><img data-smile="13" class="sizeSmile" src="@/assets/img/smile/smile13.png"><img data-smile="14" class="sizeSmile" src="@/assets/img/smile/smile14.png"><img data-smile="15" class="sizeSmile" src="@/assets/img/smile/smile15.png"><img data-smile="16" class="sizeSmile" src="@/assets/img/smile/smile16.png"><img data-smile="17" class="sizeSmile" src="@/assets/img/smile/smile17.png"><img data-smile="18" class="sizeSmile" src="@/assets/img/smile/smile18.png"><img data-smile="19" class="sizeSmile" src="@/assets/img/smile/smile19.png"><img data-smile="20" class="sizeSmile" src="@/assets/img/smile/smile20.png"><img data-smile="21" class="sizeSmile" src="@/assets/img/smile/smile21.png"><img data-smile="22" class="sizeSmile" src="@/assets/img/smile/smile22.png"><img data-smile="23" class="sizeSmile" src="@/assets/img/smile/smile23.png"><img data-smile="24" class="sizeSmile" src="@/assets/img/smile/smile24.png"><img data-smile="25" class="sizeSmile" src="@/assets/img/smile/smile25.png"><img data-smile="26" class="sizeSmile" src="@/assets/img/smile/smile26.png"><img data-smile="27" class="sizeSmile" src="@/assets/img/smile/smile28.png"><img data-smile="28" class="sizeSmile" src="@/assets/img/smile/smile28.png"><img data-smile="29" class="sizeSmile" src="@/assets/img/smile/smile29.png"><img data-smile="30" class="sizeSmile" src="@/assets/img/smile/smile30.png"><img data-smile="31" class="sizeSmile" src="@/assets/img/smile/smile31.png"><img data-smile="32" class="sizeSmile" src="@/assets/img/smile/smile32.png"></div>
            </div>
        </td>
        <td>
            <div v-if="show === 4 || show === 5" class="input-file imageInControl"  style="display: block;">
                <div class="btn btn-primary btn-file"> <span class="hidden-xs">Browse ...</span>
                    <input id="input-file-2" type="file" multiple="multiple" accept="image/*,image/jpeg" class="fileControl file form-control" value=""> </div>
                <input id="url-2" type="text" class="inputFileControl form-control" placeholder="Link to picture"> </div>
        </td>
        <td>
            <div v-if="show === 3 || show === 5 || show === 7 || show === 9">
                <input id="check-2" class="checkControl checkbox-style" type="checkbox">
                <label for="check-2" class="fake-label"></label>
            </div>
        </td>
        <td>
            <input v-if="show !== 1" id="time-2" style="display: inline-block;" class="timeControl form-control" type="time" value="16:11"> </td>
        <td>
            <div v-if="show === 1 || show === 6 || show === 7" style="display: flex;" class="inputControl">
                <input type="number" min="35" max="100" step="1" id="day-2" class="form-control percentControl" value="15" style="min-width:60px;">
                <select v-if="show === 1" id="month-2" class="monthControl select-simple" style="min-width: 60px;">
                    <option value="today">Today</option>
                    <option value="yesterday">Yesterday</option>
                    <option value="1">january</option>
                    <option value="2">february</option>
                    <option value="3">march</option>
                    <option value="4">april</option>
                    <option value="5">may</option>
                    <option value="6">june</option>
                    <option value="7">july</option>
                    <option value="8">august</option>
                    <option value="9">september</option>
                    <option value="10">october</option>
                    <option value="11">november</option>
                    <option value="12">december</option>
                </select>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    name: "v-new-message-settings",
    data: () => {
        return{
          show: 0,
            options: [
                {text: '-- A type --', value: 0},
                {text: 'Date', value: 1},
                {text: 'Incom text', value: 2},
                {text: 'Outgo text', value: 3},
                {text: 'Incom pict', value: 4},
                {text: 'Outgo pict', value: 5},
                {text: 'Incom audio', value: 6},
                {text: 'Outgo audio', value: 7},
                {text: 'Incom stick', value: 8},
                {text: 'Outgo stick', value: 9},
            ]
        }
    },
    methods: {
        del_message() {
            this.$emit('remove');
        }
    },
}
</script>

<style scoped>

</style>