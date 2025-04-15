import { LOGIN_TYPE } from '../_base'


export interface ILoginAccountRequest {
  loginType: LOGIN_TYPE.ACCOUNT;
  loginId: string;
  password: string;
  clientId: string;
}

export interface ILoginAccount {

}