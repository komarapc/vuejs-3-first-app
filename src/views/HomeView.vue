<template>
  <ProtectedPage>
    <div class="w-full min-h-screen flex flex-col items-center justify-center bg-emerald-50">
      <div class="flex flex-col gap-4 items-center justify-center">
        <h1 class="text-8xl text-emerald-500">{{ appTitle }}</h1>
        <RouterLink
          to="/about"
          class="bg-emerald-500 text-emerald-100 px-4 py-2 rounded hover:bg-emerald-600"
          >About</RouterLink
        >
        <RouterLink
          to="/counter"
          class="bg-emerald-500 text-emerald-100 px-4 py-2 rounded hover:bg-emerald-600"
          :message="message"
          >Counter</RouterLink
        >
        <RouterLink
          to="/blog"
          class="bg-emerald-500 text-emerald-100 px-4 py-2 rounded hover:bg-emerald-600"
          >Blog</RouterLink
        >
        <RouterLink
          v-if="!authStore.isAuthenticated"
          to="/login"
          class="bg-emerald-500 text-emerald-100 px-4 py-2 rounded hover:bg-emerald-600"
          >Login</RouterLink
        >
        <button
          v-else
          class="bg-emerald-500 text-emerald-100 px-4 py-2 rounded hover:bg-emerald-600"
          @click="authStore.logout"
        >
          Logout
        </button>
      </div>
    </div>
  </ProtectedPage>
</template>

<script lang="ts" setup>
import ProtectedPage from '@/components/ProtectedPage.vue'
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
const authStore = useAuthStore()
const appTitle = ref('Vite Vue 3 Starter')
const message = 'Message from home view'
</script>
