<template>
  <div id="app">
    <ToDoList v-bind:todos="todos"/>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'app',
  components: {
    ToDoList
  },
  data(){
    return{
      todos: [
        {
          title: "read",
          done: false
        },
        {
          title: "write",
          done: true
        }
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
