import { create } from 'zustand'

import type { UserState } from '../types/type'

export const useUserStore = create<UserState>((set) => ({
  userName: '',
  email: '',
  password: '',
  setUserName: (userName) => set({ userName }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
}))