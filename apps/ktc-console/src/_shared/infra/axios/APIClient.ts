import axios, { AxiosInstance } from 'axios'

import { CookieUtil } from '@repo/utils/cookie-util'
import { APIRequest, DOMAIN, HTTPMethod } from './APIClient.types'
import { EnvUtil } from '@repo/utils/env-util'

export default class APIClient {
  private isRefreshing = false
  private refreshSubscribers: Array<(token: string) => void> = []

  private baseURL = {
    [DOMAIN.IDENTITY]: `${process.env.NEXT_PUBLIC_BASEURL_IDENTITY}/v1`,
    [DOMAIN.NETWORK]: `${process.env.NEXT_PUBLIC_BASEURL_NETWORK}/v2.0`,
  }

  protected static instance: APIClient
  protected axiosInstance: AxiosInstance = axios.create({
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  protected constructor() {
    if (EnvUtil.isBrowser()) {
      this.initializeAccessToken()
      // this.setupRequestDefaultInterceptors()
      this.setupResponseInterceptors()
    }
  }

  // API 요청을 위한 Axios 인스턴스
  public static shared(): APIClient {
    if (!APIClient.instance) {
      APIClient.instance = new APIClient()
    }
    return APIClient.instance
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

  public setupResponseInterceptors() {
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        return Promise.reject(error)
      },
    )
  }

  //
  public request<T>(req: APIRequest<any>): Promise<T> {
    const isRead = req.method === HTTPMethod.GET

    const token = CookieUtil.getCookie('accessToken')

    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request({
          baseURL: this.baseURL[req.domain],
          url: req.path,
          method: req.method,
          params: isRead && req.params,
          data: !isRead && req.params,
          headers: req.headers,
        })
        .then((result) => {
          console.log('🎉 API 응답 :', result)
          console.log(`=======================================`)

          resolve(result.data as T)
        })
        .catch((error) => {
          console.log('에러', error)
          // throw new Error({ message })
        })
    })
  }
}
