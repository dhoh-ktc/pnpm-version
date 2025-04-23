import { IProjectData } from '@/_core/entities/identity/project'
import { APIRequest, DOMAIN, HTTPMethod } from '@/_shared/infra/axios/APIClient.types'
import ApiClient from '@/_shared/infra/axios/Client'

export class ProjectAPI {
  domain = DOMAIN.IDENTITY

  async save(params: Pick<Required<IProjectData>, 'name' | 'description'>): Promise<IProjectData> {
    const req: APIRequest<IProjectData> = {
      domain: this.domain,
      path: '/projects',
      method: HTTPMethod.POST,
      params,
    }
    return await ApiClient.shared().request(req)
  }

  async fetchItems(): Promise<IProjectData[]> {
    const req: APIRequest<IProjectData> = {
      domain: this.domain,
      path: '/projects',
      method: HTTPMethod.GET,
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
