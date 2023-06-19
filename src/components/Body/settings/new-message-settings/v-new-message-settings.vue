<template>
  <tr :id="'message-' + id_el" class="trControl">
    <td>
      <div class="input-control">
        <input type="button" class="deleteControl btn btn-danger" value="✖" @click="del_message()" />
        <input type="button" class="upControl btn btn-default" value="ᐱ" />
        <input type="button" class="downControl btn btn-default" value="ᐯ" />
        <input type="button" class="plusControl btn btn-success" value="➕" />
      </div>
    </td>
    <td>
      <select v-model="show" :id="'sel-' + id_el" class="selectControl select-simple" style="min-width: 80px;" @change="changeSelect($event.target.value)">
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
      </select>

    </td>
    <td id="shift-2" style="white-space:normal;">
      <div v-if="[2, 3].includes(show)">
        <div :id="'area-' + id_el" class="textInControl textarea" contenteditable="true"></div>
        <br />
      </div>
    </td>
    <td>
      <div v-if="[4, 5].includes(show)" class="input-file imageInControl" style="display: block;">
        <div class="btn btn-primary btn-file">
          <span class="hidden-xs">Browse ...</span>
          <input type="file" multiple="multiple" accept="image/*,image/jpeg" class="fileControl file form-control" value="" />
        </div>
        <input type="text" class="inputFileControl form-control" placeholder="Link to picture" />
      </div>
    </td>
    <td>
      <div v-if="[3, 5, 7, 9].includes(show)">
        <input :id="'check-' + id_el" class="checkControl checkbox-style" type="checkbox" />
        <label :for="'check-' + id_el" class="fake-label"></label>
      </div>
    </td>
    <td>
      <input v-if="show !== 1" :id="'time-' + id_el" style="display: inline-block;" class="timeControl form-control" type="time" value="16:11" />
    </td>
    <td>
      <div v-if="[1, 6, 7].includes(show)" style="display: flex;" class="inputControl">
        <input
            v-if="show === 1"
            type="number"
            min="35"
            max="100"
            step="1"
            :id="'day-' + id_el"
            class="form-control percentControl"
            value="15"
            style="min-width:60px;"
        />
        <select v-if="show === 1" :id="'month-' + id_el" class="monthControl select-simple" style="min-width: 60px;">
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
        </select>
      </div>
    </td>
  </tr>
</template>
<script>
import { EV } from '@/assets/script/event';

export default {
  name: "v-new-message-settings",
  props: ['id_el'],
  data() {
    return {
      show: 0,
      options: [
        { text: '-- A type --', value: 0 },
        { text: 'Date', value: 1 },
        { text: 'Incom text', value: 2 },
        { text: 'Outgo text', value: 3 },
        { text: 'Incom pict', value: 4 },
        { text: 'Outgo pict', value: 5 },
        { text: 'Incom audio', value: 6 },
        { text: 'Outgo audio', value: 7 },
        { text: 'Incom stick', value: 8 },
        { text: 'Outgo stick', value: 9 },
      ],
      smiles: Array.from({ length: 32 }, (_, index) => index + 1),
      months: [
        'january', 'february', 'march', 'april', 'may', 'june', 'july',
        'august', 'september', 'october', 'november', 'december'
      ]
    };
  },
  methods: {
    del_message() {
      this.$emit('remove');
    },
    changeSelect(val) {
      EV.emit('update-modelVal', [val, this.id_el]);
      // Дополнительные операции на основе выбранного типа сообщения и его id
      if (val === 2) {
        // Для типа "Incom text"
        console.log(`Выбран тип "Incom text" для элемента с id ${this.id_el}`);
      } else if (val === 3) {
        // Для типа "Outgo text"
        console.log(`Выбран тип "Outgo text" для элемента с id ${this.id_el}`);
      }
      // Другие условия для остальных типов сообщений и элементов
    }
  },
};
</script>
<style scoped>

</style>