import { IProjectData } from '@/_core/entities/identity/project'
import ApiClient from '@/_shared/infra/axios/ApiClient'
import { APIRequest, DOMAIN, HTTPMethod } from '@/_shared/infra/axios/APIClient.types'

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
}

//
//   async fetchItems(params?: IPaginationRequest | undefined): Promise<IPostData[]> {
//     return await ApiClient.shared.request(new PostAPI.FetchAll(params))
//   }
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
