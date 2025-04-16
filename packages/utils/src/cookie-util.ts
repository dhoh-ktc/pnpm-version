import { EnvironmentUtil } from '@repo/utils/environment-util.js'

export class CookieUtil {
  /**
   * 쿠키를 설정합니다.
   * @param name 쿠키 이름
   * @param value 쿠키 값
   * @param options 쿠키 옵션 (유효기간, 경로 등)
   */
  static setCookie(
    name: string,
    value: string,
    options: { path?: string; expires?: Date; maxAge?: number } = {},
  ): void {
    if (!EnvironmentUtil.isBrowser()) throw new Error('Not in browser environment')

    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

    if (options.path) {
      cookieString += `; path=${options.path}`
    }

    if (options.expires) {
      cookieString += `; expires=${options.expires.toUTCString()}`
    }

    if (options.maxAge) {
      cookieString += `; max-age=${options.maxAge}`
    }

    document.cookie = cookieString
  }

  /**
   * 쿠키를 조회합니다.
   * @param name 쿠키 이름
   * @returns 쿠키 값 (없을 경우 null 반환)
   */
  static getCookie(name: string): string | null {
    if (!EnvironmentUtil.isBrowser()) return null

    const cookies = document.cookie.split('; ')

    for (const cookie of cookies) {
      const [key, value] = cookie.split('=')

      if (key === encodeURIComponent(name)) {
        if (value === undefined) return null
        return decodeURIComponent(value)
      }
    }
    return null
  }

  /**
   * 쿠키를 삭제합니다.
   * @param name 쿠키 이름
   * @param path 쿠키 경로 (옵션)
   */
  static deleteCookie(name: string, path?: string): void {
    this.setCookie(name, '', { path, maxAge: -1 })
  }


}