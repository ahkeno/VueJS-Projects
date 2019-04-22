<template>
    <div>
        <div>
            <input type="text" v-model="todoText"> 
            <button v-on:click="addToDoItem">Create</button>
        </div>
        <h3 >Total Done Task {{taskDone}}</h3>
        <h3 >Things to Be Done {{taskNotDone}}</h3>
        <ToDoItem v-for="todo in todos" :key="todo.title" :todo.sync="todo"/>
    </div>
</template>
<script>
import ToDoItem from './ToDoItem'
export default {
    name: 'ToDoList',
    components: {
    ToDoItem,
    
  },
  props: ['todos'],
  data(){
      return{
        todoText: '',
        newToDoItem: {},
        
      }
      
  },
  computed:{
      taskDone: function(){
          let count = 0;
            for(var i = 0; i < this.todos.length; ++i){
                debugger
                if(this.todos[i].done == true)
                    count++;
            }
        return count
      },
      taskNotDone: function(){
          return this.todos.length - this.taskDone;
      }
  },
  methods:{

      addToDoItem(){
        if(this.todoText.length > 0){
            this.newToDoItem = {
            title: this.todoText,
            done: false
            }
            this.todos.push(this.newToDoItem);
            this.todoText = "";
          }
      }
    
  }
}
</script>


