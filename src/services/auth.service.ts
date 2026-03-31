import type { UseMutationResult, UseQueryResult } from '@tanstack/react-query'
import { useMutation, useQuery } from '@tanstack/react-query'

import apiClient from '@/lib/api-client'
import { useAuthStore } from '@/stores/auth.store'
import type {
  AuthUser,
  LoginRequest,
  LoginResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
} from '@/types/auth.type'
import STORAGE from '@/utils/storage'

const MOCK_DELAY = 1500

const mockDelay = <T>(data: T): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), MOCK_DELAY))

const authKeys = {
  all: ['auth'] as const,
  me: () => [...authKeys.all, 'me'] as const,
}

const useGetMe = (): UseQueryResult<AuthUser> => {
  return useQuery({
    queryKey: authKeys.me(),
    queryFn: async (): Promise<AuthUser> => {
      const response = await apiClient.get<AuthUser>('/auth/me')
      return response.data
    },
    enabled: !!STORAGE.get('TOKEN'),
    retry: false,
  })
}

const useLogin = (): UseMutationResult<LoginResponse, Error, LoginRequest> => {
  return useMutation({
    mutationFn: async (data: LoginRequest): Promise<LoginResponse> => {
      const response = await apiClient.post<LoginResponse>('/auth/login', {
        username: data.username,
        password: data.password,
      })
      useAuthStore.getState().setLoginData(response.data)
      return response.data
    },
  })
}

const useResetPassword = (): UseMutationResult<
  ResetPasswordResponse,
  Error,
  ResetPasswordRequest
> => {
  return useMutation({
    mutationFn: async (data: ResetPasswordRequest): Promise<ResetPasswordResponse> => {
      return mockDelay({
        message: `Se ha enviado un enlace de recuperación a ${data.email}`,
      })
    },
  })
}

const logoutSvc = (): void => {
  useAuthStore.getState().logout()
}

export { authKeys, logoutSvc, useGetMe, useLogin, useResetPassword }
