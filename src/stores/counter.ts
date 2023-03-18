import { computed, ref } from 'vue'

import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment(payload: number) {
      console.log({ payload })
      this.count += payload
    },
    decrement(payload: number) {
      this.count--
    },
    reset() {
      this.count = 0
    }
  }
})
