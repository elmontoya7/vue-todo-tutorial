<template lang="html">
  <div class="todo-row">
    <i class="fas fa-trash delete-icon" @click.stop="$emit('deletetodo')"></i>
    <input class="todo" type="text" v-if="edit" :value="value" @input="$emit('input', $event.target.value)" placeholder="Empty todo" @keyup.enter="changeValue($event.target.value)" @focusout="changeValue($event.target.value)">
    <span class="todo" @dblclick="$emit('wannaedit')" v-else>{{value}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeValue (value) {
      this.$emit('valuechanged', value)
    }
  }
}
</script>

<style lang="css" scoped>
.todo-row {
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-right: 25px;
}

.todo {
  height: 40px;
  padding: 10px 15px;
  font-size: 18px;
  text-align: left;
  width: 100%;
}

input.todo:focus, input.todo:active, input.todo {
  outline-color: none;
  outline-width: 0;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
}

.delete-icon {
  position: absolute;
  top: calc(50% - 8px);
  right: 5px;
  color: gray;
  cursor: pointer;
}

.delete-icon:hover {
  color: red;
}
</style>
