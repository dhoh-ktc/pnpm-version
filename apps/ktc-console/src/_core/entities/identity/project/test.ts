import { Project } from './model'
import { invalidProjectData1, validProjectData } from '@/_core/entities/identity/project'

describe('Project', () => {
  it('유효한 데이터를 사용하여 Project 인스턴스를 생성해야 합니다.', () => {

    const project = new Project(validProjectData)

    expect(project.id).toBe('project123')
    expect(project.name).toBe('프로젝트 이름')
    expect(project.ownedBy).toBe('owner123')
    expect(project.description).toBe('이것은 유효한 프로젝트 데이터입니다.')
    expect(project.createdBy).toBe('user123')
    expect(project.createdAt).toEqual(["2025", "04", "15", "화", "16", "57", "13"])
    expect(project.updatedAt).toEqual(["2025", "04", "16", "수", "17", "30", "00"])
    expect(project.updatedBy).toBe('admin456')
  })

  it('데이터가 누락된 경우 기본값으로 Project 인스턴스를 생성해야 합니다.', () => {
    // const mockData: Partial<IProjectData> = {}
    // const project = new Project(mockData as IProjectData)

    const project = new Project(invalidProjectData1)

    expect(project.id).toBe('')
    expect(project.name).toBe('')
    expect(project.ownedBy).toBe('')
    expect(project.description).toBe('')
    expect(project.createdBy).toBe('')
    expect(project.createdAt).toEqual([])
    expect(project.updatedAt).toEqual([])
    expect(project.updatedBy).toBe('')
  })
})