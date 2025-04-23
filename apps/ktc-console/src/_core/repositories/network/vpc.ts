import { IProjectData } from '@/_core/entities/identity/project'
import { APIRequest, DOMAIN, HTTPMethod } from '@/_shared/infra/axios/APIClient.types'
import ApiClient from '@/_shared/infra/axios/Client'
import { IVpcData } from '@/_core/entities/networking/vpc'
import { CookieUtil } from '@repo/utils/cookie-util'

export class VpcAPI {
  domain = DOMAIN.NETWORK

  async save(params: {
    projectId: string
    name: string
    cidr: string
    description: string
  }): Promise<IVpcData> {
    const req: APIRequest<IVpcData> = {
      domain: this.domain,
      path: '/vpcs',
      method: HTTPMethod.POST,
      params,
      headers: {
        'X-Project-Id': params.projectId,
        'X-Auth-Token': CookieUtil.getCookie('accessToken'),
      },
    }
    return await ApiClient.shared().request(req)
  }

  async fetchItems(projectId: string): Promise<IVpcData[]> {
    const req: APIRequest<IProjectData> = {
      domain: this.domain,
      path: '/vpcs',
      method: HTTPMethod.GET,
      headers: {
        'X-Project-Id': projectId,
        'X-Auth-Token': CookieUtil.getCookie('accessToken'),
      },
    }
    return await ApiClient.shared().request(req)
  }
}

//
//   async saveItem(params: IPostData): Promise<IPostData> {
//     if (params.id) return await ApiClient.shared.request(new PostAPI.Update(params))
//     return await ApiClient.shared.request(new PostAPI.Create(params))
//   }
//
//   async clearItem(postId: number): Promise<void> {
//     return await ApiClient.shared.request(new PostAPI.Delete(postId))
//   }
// }
