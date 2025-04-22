export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
  // PATCH = 'PATCH'
}

export const enum DOMAIN {
  IDENTITY,
  NETWORK,
}

export type APIRequest<R> = {
  // response: R // 응답을 지정합니다.
  domain: DOMAIN
  path: string
  params?: any
  method: HTTPMethod
}

export type APIResponse = {}
