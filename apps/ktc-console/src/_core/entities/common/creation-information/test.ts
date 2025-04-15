import { CreationInformation } from './model'
import { ICreationInformationData } from './types'

describe('CreationInformation', () => {
  it('유효한 데이터로 인스턴스를 생성해야 한다', () => {
    const validData: ICreationInformationData = {
      createdAt: '2025-04-15T07:57:13.622Z',
      createdBy: 'user123',
      updatedAt: '2025-04-16T08:30:00.000Z',
      updatedBy: 'admin456',
    }

    const instance = new CreationInformation(validData)

    expect(instance.createdAt).toEqual(['2025', '04', '15', '화', '16', '57', '13'])
    expect(instance.createdBy).toBe('user123')
    expect(instance.updatedAt).toEqual(['2025', '04', '16', '수', '17', '30', '00'])
    expect(instance.updatedBy).toBe('admin456')
  })

  it('잘못된 데이터로 인스턴스를 생성할 때 빈 값으로 초기화해야 한다', () => {
    const invalidData: ICreationInformationData = {
      createdAt: undefined,
      createdBy: undefined,
      updatedAt: undefined,
      updatedBy: undefined,
    }

    const instance = new CreationInformation(invalidData)

    expect(instance.createdAt).toEqual([])
    expect(instance.createdBy).toBe('')
    expect(instance.updatedAt).toEqual([])
    expect(instance.updatedBy).toBe('')
  })
})