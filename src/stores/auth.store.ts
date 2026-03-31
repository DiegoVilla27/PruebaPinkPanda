import { create } from 'zustand'

import type { AuthUser, LoginResponse } from '@/types/auth.type'
import STORAGE from '@/utils/storage'

interface AuthStore {
  user: AuthUser | null
  isLoading: boolean
  error: string | null
  setUser: (user: AuthUser | null) => void
  setIsLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  setLoginData: (data: LoginResponse) => void
  logout: () => void
}

const useAuthStore = create<AuthStore>((set) => ({
  user: STORAGE.get<AuthUser>('USER') || null,
  isLoading: false,
  error: null,

  setUser: (user) => set({ user }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),

  setLoginData: (data: LoginResponse) => {
    const user: AuthUser = {
      id: data.id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      image: data.image,
    }
    STORAGE.set('TOKEN', data.accessToken)
    STORAGE.set('USER', user)
    set({ user })
  },

  logout: () => {
    STORAGE.clearAll()
    set({ user: null, error: null })
  },
}))

export { useAuthStore }
