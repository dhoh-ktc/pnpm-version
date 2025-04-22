import axios, { AxiosInstance } from 'axios'
import { EnvironmentUtil } from '@repo/utils/environment-util'
import { CookieUtil } from '@repo/utils/cookie-util'

import { APIRequest, APIResponse, HTTPMethod } from '@/_shared/infra/axios/APIClient.types'
import { DOMAIN } from './APIClient.types'
import { log } from 'next/dist/server/typescript/utils'

export default class ApiClient {
  private isRefreshing = false
  private refreshSubscribers: Array<(token: string) => void> = []

  private baseURL = {
    [DOMAIN.IDENTITY]: `${process.env.NEXT_PUBLIC_BASEURL_IDENTITY}/v1`,
    [DOMAIN.NETWORK]: `${process.env.NEXT_PUBLIC_BASEURL_IDENTITY}/v1.0`,
  }

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
      // this.setupRequestDefaultInterceptors()
      // this.setupResponseDefaultInterceptors()
    }
  }

  // API 요청을 위한 Axios 인스턴스
  public static shared(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient()
    }
    return ApiClient.instance
  }

  private initializeAccessToken() {
    const token = CookieUtil.getCookie('accessToken')
    if (token) {
      this.setAccessToken(token)
    }
  }

  private clearTokens() {
    // localStorage.removeItem(ACCESS_TOKEN_KEY)
    localStorage.removeItem('signin-user-data')
    this.axiosInstance.defaults.headers.common['Authorization'] = undefined
    // this.setupRequestInterceptors()
  }

  public setAccessToken(accessToken: string) {
    if (accessToken)
      this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

    // this.setupRequestInterceptors()
  }

  public request<T extends APIResponse>(req: APIRequest<T>): Promise<T> {
    const isRead = req.method === HTTPMethod.GET

    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request({
          baseURL: this.baseURL[req.domain],
          url: req.path,
          params: isRead && req.params,
          data: !isRead && req.params,
        })
        .then((result) => {
          console.log('🎉 API 응답 :', result)
          console.log(`=======================================`)

          resolve(result.data as T)
        })
        .catch((error) => log(error))
    })
  }
}
