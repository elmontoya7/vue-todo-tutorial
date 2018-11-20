<template lang="html">
  <div class="main-content">
    <h1>To-do!</h1>
    <input type="text" placeholder="Insert new todo..." class="todo-input">
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
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

.todo-input {

}
</style>
