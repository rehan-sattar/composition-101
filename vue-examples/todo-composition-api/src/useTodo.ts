import { ref } from 'vue'

export function useTodos() {
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
