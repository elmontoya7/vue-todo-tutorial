<template lang="html">
  <div class="todo-input-row">
    <input type="text" :placeholder="placeholder" class="todo-input" :value="value" @input="$emit('input', $event.target.value)" @keyup.enter="$emit('addtodo')" :disabled="disableInput">
    <button type="button" name="button" @click="$emit('addtodo')">Add</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['placeholder', 'value', 'editable', 'todoscount'],
  computed: {
    isEditable () {
      return this.editable
    },
    disableInput () {
      return this.todoscount >= 10
    }
  }
}
</script>

<style lang="css" scoped>
.todo-input-row {
  display: flex;
  flex-flow: row;
  width: 500px;
}

input {
  width: 300px;
  font-size: 20px;
  text-align: center;
  flex-grow: 1;
}
</style>
