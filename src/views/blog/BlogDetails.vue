<template>
  <ProtectedPage>
    <div class="w-full min-h-screen flex flex-col bg-emerald-50 items-center">
      <div>
        <h1 class="text-6xl text-emerald-500">Blog Details</h1>
      </div>
      <div class="flex flex-col my-10 items-center justify-center gap-4">
        <p class="text-emerald-500 font-semibold text-2xl">{{ selectedBlog?.title }}</p>
        <p class="p-5 rounded-lg bg-white border border-emerald-500">
          {{ selectedBlog?.body }}
        </p>
        <div>
          <button
            class="px-4 py-2 bg-emerald-500 text-emerald-50 rounded-lg"
            @click="$router.go(-1)"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  </ProtectedPage>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { blogs } from '../../mock/blogs'
import router from '@/router'
import ProtectedPage from '@/components/ProtectedPage.vue'
const { params } = router.currentRoute.value
const selectedBlog = blogs.find((blog) => blog.id === Number(params.id))
onMounted(() => {
  console.log(blogs)
  console.log(params)
  console.log({ selectedBlog })
})
</script>
