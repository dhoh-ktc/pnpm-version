export const enum LOGIN_TYPE {
  ACCOUNT = 'account',
  USER = 'user',
  CLIENT = 'client'
}

export interface ILogin {
  token_type: string
  access_token: string
  expires_in?: number
  refresh_token?: string
  refresh_expires_in?: number
}
