import type { UserProps } from './../interface/user.interface'
import { defineStore } from 'pinia'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: {} as UserProps
  }),
  actions: {
    login(user: UserProps) {
      this.user = user
      this.isAuthenticated = true
      router.push('/')
    },
    logout() {
      this.user = {} as UserProps
      this.isAuthenticated = false
      router.push('/login')
    }
  }
})
