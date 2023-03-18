<template>
  <ProtectedPage>
    <div class="w-full min-h-screen flex flex-col bg-emerald-50 items-center">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-6xl text-emerald-500">Blog</h1>
        <span class="text-2xl font-semibold text-emerald-500">{{ authStore.user.name }}</span>
      </div>
      <div class="my-10">
        <ul class="inline-flex space-x-4">
          <li
            v-for="blog in blogs"
            :key="blog.id"
            class="flex flex-col gap-4 my-5 p-5 rounded-lg bg-white border border-emerald-500"
          >
            <p class="text-emerald-500 font-semibold text-2xl">{{ blog.title }}</p>
            <p>{{ blog.body }}</p>
            <div>
              <RouterLink :to="{ name: 'BlogDetail', params: { id: blog.id } }">
                <button class="px-4 py-2 bg-emerald-500 text-emerald-50 rounded-lg">
                  Read More
                </button>
              </RouterLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </ProtectedPage>
</template>
<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth'
import { blogs } from '../../mock/blogs'
import ProtectedPage from '@/components/ProtectedPage.vue'

const authStore = useAuthStore()
</script>
