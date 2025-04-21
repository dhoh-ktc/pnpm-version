import { create, StateCreator } from 'zustand'
import { devtools } from 'zustand/middleware'

export const enum AUTH_STATUS {
  AUTHENTICATED = 'authenticated',
  UNAUTHENTICATED = 'unauthenticated',
  LOADING = 'loading',
}

interface AuthState {
  user: any | null
  status: AUTH_STATUS
  loginId?: string
  name: string
  setAuth: ({
    user,
    name,
    loginId,
    status,
  }: {
    user: any
    name: string
    loginId: string
    status: AUTH_STATUS
  }) => void
}

const authStore: StateCreator<AuthState> = (set) => ({
  user: null,
  status: AUTH_STATUS.LOADING,
  name: '',
  setAuth: ({ user, name, loginId, status }) => set({ user, name, loginId, status }),
})

const useAuthStore = create<AuthState>()(devtools(authStore, { name: 'AuthStore' }))

export default useAuthStore
