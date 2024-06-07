<template>
  <div class="todo-list">
    <TodoForm @onAddTask="onAddTask" />
    <TasksList :tasks="tasks" @onToggleTaskDone="onToggleTaskDone" />
  </div>
</template>

<script lang="ts" setup>
import TodoForm from './TodoForm.vue'
import TasksList from './TasksList.vue'
import { useTaskStore } from '../stores/task'

const taskStore = useTaskStore()
const { addTask, tasks, toggleTaskDone } = taskStore

type Form = {
  description: string
  spentTime: string
}

const onAddTask = (form: Form) => {
  const { description, spentTime } = form

  addTask({
    description,
    spentTime,
    done: false
  })
}

const onToggleTaskDone = (index: number) => {
  toggleTaskDone(index)
}
</script>

<style scoped>
.todo-list {
  display: grid;
  gap: 1rem;
}
</style>
