export class EnvironmentUtil {
  static isServer(): boolean {
    return typeof window === 'undefined'
  }

  static isBrowser(): boolean {
    return typeof window !== 'undefined'
  }
}
