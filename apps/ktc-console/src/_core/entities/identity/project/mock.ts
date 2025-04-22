import { IProjectData } from '@/_core/entities/identity/project'

// 유효한 IProjectData mock 데이터
export const validProjectData: IProjectData = {
  id: 'project123',
  name: '프로젝트 이름',
  ownedBy: 'owner123',
  description: '이것은 유효한 프로젝트 데이터입니다.',
  createdAt: '2025-04-15T07:57:13.622Z',
  createdBy: 'user123',
  updatedAt: '2025-04-16T08:30:00.000Z',
  updatedBy: 'admin456',
}

// 유효하지 않은 IProjectData mock 데이터
export const invalidProjectData1: IProjectData = {
  id: undefined,
  name: '',
  ownedBy: undefined,
  description: undefined,
  createdAt: undefined,
  createdBy: '',
  updatedAt: undefined,
  updatedBy: undefined,
}
