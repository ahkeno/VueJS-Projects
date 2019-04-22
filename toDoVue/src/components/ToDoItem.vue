<template>
    <div>   
        <Label>{{todo.title}}</Label>
        <button class="button active" v-bind:class="{ todo: todo.done}">  
            <span v-if="!todo.done" v-on:click="markDone">Not Done</span>
            <span v-if="todo.done"> Done </span>
        </button>
    </div>
    
</template>
<style lang="css">
    .button{
        padding: 10px;
        border-radius: 5px;
        font-size: 14px;
        
    }
    .button.active{
        background-color: red;
        color: #fff;
        cursor: pointer;
    }
    .button.todo{
        background-color: green;
        color: #fff;
       
    }   

</style>
<script>

export default {
    name: 'ToDoItem',
    props: ['todo'],
    data(){
        return{

        }
    },
    methods:{
        markDone(){
            this.todo.done = true;
        }
    }
}
</script>

