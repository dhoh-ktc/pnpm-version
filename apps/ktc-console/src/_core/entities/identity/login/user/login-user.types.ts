import { ILogin, LOGIN_TYPE } from '../_base'


export interface ILoginUserRequest {
  accountId: string;
  loginType: LOGIN_TYPE.USER;
  loginId: string;
  password: string;
  clientId: string;
}

export interface ILoginUser extends ILogin {
  id_token?: string
  session_state?: string
  two_factor_required?: boolean
  login_id?: string
  name?: string
  password_update_at?: string
}