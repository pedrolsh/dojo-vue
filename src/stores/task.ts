import type { Task, Tasks } from '@/types/tasks-types'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useTaskStore = defineStore('task', () => {
  const tasks = reactive([] as Tasks)

  const addTask = (newTask: Task) => {
    tasks.push(newTask)
  }

  const toggleTaskDone = (index: number) => {
    tasks[index].done = !tasks[index].done
    console.log(tasks)
  }

  return {
    addTask,
    toggleTaskDone,
    tasks
  }
})
