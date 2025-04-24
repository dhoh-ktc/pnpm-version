import { IProjectData } from '@/_core/entities/identity/project'
import { APIRequest, DOMAIN, HTTPMethod } from '@/_shared/infra/axios/APIClient.types'
import { IVpcData } from '@/_core/entities/networking/vpc'
import { CookieUtil } from '@repo/utils/cookie-util'
import APIClient from '@/_shared/infra/axios/APIClient'

export class SubnetRepository {
  domain = DOMAIN.NETWORK

  async save(params: {
    name: string
    network_id: string
    cidr: string
    subnetpool_id: string
    project_id: string
  }): Promise<IVpcData> {
    const { project_id, ...rest } = params

    const req: APIRequest<IVpcData> = {
      domain: this.domain,
      path: '/subnets',
      method: HTTPMethod.POST,
      params: {
        subnet: {
          ...rest,
          ip_version: 4,
          enable_dhcp: true,
        },
      },
      headers: {
        'X-Project-Id': project_id,
        'X-Auth-Token': CookieUtil.getCookie('accessToken'),
      },
    }

    return await APIClient.shared().request(req)
  }

  async fetch(projectId: string): Promise<any> {
    const params = {
      project_id: projectId,
    }
    const req: APIRequest<any> = {
      domain: this.domain,
      path: '/subnets',
      method: HTTPMethod.GET,
      params,
      headers: {
        'X-Project-Id': projectId,
        'X-Auth-Token': CookieUtil.getCookie('accessToken'),
      },
    }

    return await APIClient.shared().request(req)
  }

  async fetchList(projectId: string): Promise<IVpcData[]> {
    const req: APIRequest<IProjectData> = {
      domain: this.domain,
      path: '/vpcs',
      method: HTTPMethod.GET,
      headers: {
        'X-Project-Id': projectId,
        'X-Auth-Token': CookieUtil.getCookie('accessToken'),
      },
    }

    return await APIClient.shared().request(req)
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
