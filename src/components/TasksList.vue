<template>
  <div class="tasks-list" v-for="(task, index) in tasks" :key="index">
    <input type="checkbox" :value="task.done" @change="onToggleTaskDone(index)" />
    <label for="task-check">{{ task.description }} - {{ task.spentTime }}</label>
  </div>
  <p>Tempo gasto: {{ spentTime }}</p>
</template>

<script lang="ts" setup>
import type { Task, Tasks } from '@/types/tasks-types'
import { computed, reactive } from 'vue'

const emits = defineEmits(['onToggleTaskDone'])

const props = defineProps({
  tasks: Array
})

const onToggleTaskDone = (index: number) => {
  emits('onToggleTaskDone', index)
}

const tasks = reactive(props.tasks as Tasks)

const spentTime = computed(() => {
  return tasks.reduce((acc: number, task: Task) => {
    if (task.done) {
      return acc + Number(task.spentTime)
    }
    return acc
  }, 0)
})
</script>

<style scoped>
.tasks-list {
  display: flex;
  gap: 0.25rem;
}
</style>
