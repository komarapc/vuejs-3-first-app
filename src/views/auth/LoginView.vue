<template>
  <ProtectedPage>
    <div class="w-full min-h-screen flex flex-col bg-emerald-50 items-center justify-center">
      <div>
        <h1 class="text-6xl text-emerald-500">Login</h1>
      </div>
      <div class="my-5">
        <button
          class="bg-emerald-500 text-emerald-100 px-4 py-2 rounded"
          @click="authStore.login({ id: nanoid(25), name: 'Izmi' })"
        >
          Login
        </button>
      </div>
    </div>
  </ProtectedPage>
</template>

<script setup lang="ts">
import ProtectedPage from '@/components/ProtectedPage.vue'
import { useAuthStore } from '@/stores/auth'
import { nanoid } from 'nanoid'
const authStore = useAuthStore()
</script>
