<template lang="html">
  <div class="main-content">
    <h1>To-do!</h1>
    <custom-input style="margin-bottom:30px;" :placeholder="placeholder" :value="value" @input="value = $event" @addtodo="addTodo" :todoscount="todos_list.length"></custom-input>
    <todo :data-id="index" v-for="(todo, index) in todos_list" v-bind="todo" @wannaedit="todo.edit = true" @valuechanged="todo.value = $event;todo.edit = false;" @deletetodo="todos_list.splice(index, 1)"></todo>
    <div class="last-created">
      {{getLastTodo}}
      <div style="font-size:15px;text-decoration:underline;cursor:pointer;" @click="saveAll" v-if="isEditing">
        Save all
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from '../components/customInput.vue'
import Todo from '../components/todo.vue'
export default {
  data () {
    return {
      placeholder: 'Create new todo...',
      value: '',
      todos_list: []
    }
  },
  methods: {
    addTodo () {
      let self = this;

      if(this.value.length) {
        this.todos_list.push({
          value: self.value,
          edit: false
        })

        this.value = ''
      }
    },
    saveAll () {
      for(let todo of this.todos_list) {
        todo.edit = false
      }
    }
  },
  components: { CustomInput, Todo },
  watch: {
    value (newval, oldval) {
      console.log(newval, oldval);
    }
  },
  computed: {
    getLastTodo () {
      if(!this.todos_list.length) return 'Add todos now!'
      let editing = this.todos_list.filter(todo => {
        return todo.edit
      })

      if(!editing.length) return 'No editing'
      else return `You're editing ${editing.length} items`
    },
    isEditing () {
      return this.todos_list.filter(todo => {
        return todo.edit
      }).length
    }
  },
  mounted () {
    console.log('mounted');
  },
  created () {
    console.log('created');
  }
}
</script>

<style lang="css" scoped>
.main-content {
  width: 100vw;
  height: 100vh;
  background-color: white;
  overflow-y: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
}

.last-created {
  width: 100%;
  padding: 30px;
  text-align: center;
  font-size: 20px;
}
</style>
