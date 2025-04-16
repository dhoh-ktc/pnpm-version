import axios, { AxiosInstance } from 'axios'
import { EnvironmentUtil } from '@repo/utils/environment-util'

export default class ApiClient {
  private isRefreshing = false
  private refreshSubscribers: Array<(token: string) => void> = []
  protected static instance: ApiClient

  protected axiosInstance: AxiosInstance = axios.create({
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  protected constructor() {
    if (EnvironmentUtil.isBrowser()) {
      this.initializeAccessToken()
      // this.setupRequestInterceptors()
      // this.setupResponseInterceptors()
    }
  }

  // API 요청을 위한 Axios 인스턴스
  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient()
    }
    return ApiClient.instance
  }

  private initializeAccessToken() {
    const storedToken = localStorage.getItem('accessToken')
    if (storedToken) {
      this.setAccessToken(storedToken)
    }
  }

  private clearTokens() {
    // localStorage.removeItem(ACCESS_TOKEN_KEY)
    localStorage.removeItem('signin-user-data')
    this.axiosInstance.defaults.headers.common['Authorization'] = undefined
    // this.setupRequestInterceptors()
  }

  public setAccessToken(accessToken: string) {
    const newAuthorization = accessToken ? `Bearer ${accessToken}` : undefined

    localStorage.setItem('accessToken', accessToken)
    this.axiosInstance.defaults.headers.common['Authorization'] =
      newAuthorization
    // this.setupRequestInterceptors()
  }
}