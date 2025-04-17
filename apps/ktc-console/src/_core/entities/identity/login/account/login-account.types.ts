import { ILogin, LOGIN_TYPE } from '../_base'

export interface ILoginAccount {
  loginType: LOGIN_TYPE.ACCOUNT
  loginId: string
  password: string
  clientId: string
}

export interface ILoginAccount extends ILogin {
  id_token?: string
  session_state?: string
  login_id?: string
  name?: string
  password_update_at?: string
}
