import { ILogin, LOGIN_TYPE } from '../_base'

export const enum GRANT_TYPE {
  CLIENT_CREDENTIALS = 'client_credentials',
  REFRESH_TOKEN = 'refresh_token'
}

export interface ILoginClientRequest {
  loginType: LOGIN_TYPE.CLIENT;
  clientId: string;
  clientSecret: string;
  grantType: GRANT_TYPE
}

export interface ILoginClient extends ILogin {
  session_state?: string
}