<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import router from '@/router'
const authStore = useAuthStore()
onMounted(() => {
  console.log('ProtectedPage mounted')
  console.log(router.currentRoute.value.path)
  if (!authStore.isAuthenticated) {
    console.log('ProtectedPage: redirecting to login')
    router.push('/login')
  }

  // redirect back if user is already logged in
  if (authStore.isAuthenticated && router.currentRoute.value.path === '/login') {
    console.log('ProtectedPage: redirecting to home')
    router.push('/')
  }
})
</script>
