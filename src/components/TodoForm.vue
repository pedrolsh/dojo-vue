<template>
  <div class="todo-form">
    <input v-model="inputTask" placeholder="Digite sua tarefa" />
    <input v-model="inputTime" placeholder="Digite o tempo da tarefa" />
    <button @click="onEmitAddTask" class="btn-add-task">Adicionar tarefa</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emits = defineEmits(['onAddTask'])

const inputTask = ref('')
const inputTime = ref('')

const clearFields = () => {
  inputTask.value = ''
  inputTime.value = ''
}

const onEmitAddTask = () => {
  const form = {
    description: inputTask.value,
    spentTime: inputTime.value
  }

  emits('onAddTask', form)

  clearFields()
}
</script>

<style>
.todo-form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
</style>
