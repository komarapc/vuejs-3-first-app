<template>
  <div class="w-full min-h-screen flex flex-col items-center justify-center bg-emerald-50">
    <div class="flex flex-col gap-4">
      <h1 class="text-4xl text-emerald-500 font-semibold">About Page</h1>
      <button @click="gotoPrevPage" class="bg-emerald-500 text-emerald-100 px-4 py-2 rounded">
        Go Back
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    gotoPrevPage() {
      this.$router.go(-1)
    }
  }
}
</script>
