<template>
  <span class="text-2xl my-5">Total Count {{ counterStore.count }}</span>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { onMounted } from 'vue'
const counterStore = useCounterStore()

const props = defineProps({
  message: {
    type: String
  }
})
// mounted hook
onMounted(() => {
  console.log('Counter mounted')
  console.log(props.message)
})
</script>
