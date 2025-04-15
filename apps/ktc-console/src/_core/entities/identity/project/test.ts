import { Project } from './model'
import { IProjectData } from '@ktc-console/entities/identity/project/types'

jest.mock('@ktc-console/entities/common/creation-information/model', () => {
  return {
    CreationInformation: jest.fn().mockImplementation((data) => ({
      createdBy: data.createdBy || 'defaultCreatedBy',
      createdAt: data.createdAt || 'defaultCreatedAt',
      updatedAt: data.updatedAt || 'defaultUpdatedAt',
      updatedBy: data.updatedBy || 'defaultUpdatedBy',
    })),
  }
})


describe('Project', () => {
  it('유효한 데이터를 사용하여 Project 인스턴스를 생성해야 합니다.', () => {
    const mockData: IProjectData = {
      id: 'project123',
      name: 'Test Project',
      ownedBy: 'owner123',
      description: 'Test description',
      createdBy: 'user123',
      createdAt: '2025-04-15T07:57:13.622Z',
      updatedAt: '2025-04-16T08:30:00.000Z',
      updatedBy: 'admin456',
    }

    const project = new Project(mockData)

    expect(project.id).toBe('project123')
    expect(project.name).toBe('Test Project')
    expect(project.ownedBy).toBe('owner123')
    expect(project.description).toBe('Test description')
    expect(project.createdBy).toBe('user123')
    expect(project.createdAt).toBe('2025-04-15T07:57:13.622Z')
    expect(project.updatedAt).toBe('2025-04-16T08:30:00.000Z')
    expect(project.updatedBy).toBe('admin456')
  })

  it('데이터가 누락된 경우 기본값으로 Project 인스턴스를 생성해야 합니다.', () => {
    const mockData: Partial<IProjectData> = {}

    const project = new Project(mockData as IProjectData)

    expect(project.id).toBe('')
    expect(project.name).toBe('')
    expect(project.ownedBy).toBe('')
    expect(project.description).toBe('')
    expect(project.createdBy).toBe('defaultCreatedBy')
    expect(project.createdAt).toBe('defaultCreatedAt')
    expect(project.updatedAt).toBe('defaultUpdatedAt')
    expect(project.updatedBy).toBe('defaultUpdatedBy')
  })
})