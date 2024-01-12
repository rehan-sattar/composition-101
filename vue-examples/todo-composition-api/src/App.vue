<template>
  <div id="app">
    <h1>ToDo App (Composition API)</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo" />
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const newTodo = ref('')
    const tasks = ref([])

    const addTodo = () => {
      if (newTodo.value.trim() !== '') {
        tasks.value.push(newTodo.value.trim())
        newTodo.value = ''
      }
    }

    const removeTodo = (index) => {
      tasks.value.splice(index, 1)
    }

    return { newTodo, tasks, addTodo, removeTodo }
  }
}
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  margin-top: 40px;
  padding: 0px 30%;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f0f0f0;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}

button {
  background-color: #e74c3c;
  color: white;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 3px;
}

button:hover {
  background-color: #c0392b;
}
</style>
