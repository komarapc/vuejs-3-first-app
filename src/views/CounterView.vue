<template>
  <ProtectedPage>
    <div class="w-full min-h-screen flex flex-col bg-emerald-50 items-center justify-center">
      <div class="flex flex-col items-center gap-4">
        <h1 class="text-6xl text-emerald-500">Counter</h1>
        <CounterComponent :message="'hello'" />
      </div>
      <div class="flex space-x-2">
        <button
          @click="counterStore.decrement(1)"
          class="px-4 py-2 bg-emerald-500 text-emerald-50 rounded"
        >
          -
        </button>
        <button
          @click="counterStore.increment(1)"
          class="px-4 py-2 bg-emerald-500 text-emerald-50 rounded"
        >
          +
        </button>
        <button @click="counterStore.reset" class="px-4 py-2 bg-red-500 text-red-50 rounded">
          Reset
        </button>
      </div>
      <div>
        <button @click="$router.go(-1)">Back</button>
      </div>
    </div>
  </ProtectedPage>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import CounterComponent from '../components/Counter.vue'
import ProtectedPage from '@/components/ProtectedPage.vue'
import { toRefs } from 'vue'
const counterStore = useCounterStore()
const props = defineProps({
  message: {
    type: String
  }
})

const { message } = toRefs(props)
</script>
