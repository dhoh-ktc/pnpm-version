import { CreationInformation } from './model'
import {
  invalidMockCreationInformationData2,
  mockCreationInformationData,
} from '@ktc-console/entities/common/creation-information/mock'

describe('CreationInformation', () => {
  it('유효한 데이터일 경우 정상적으로 인스턴스를 생성합니다.', () => {
    const instance = new CreationInformation(mockCreationInformationData)

    expect(instance.createdAt).toEqual(['2025', '04', '15', '화', '16', '57', '13'])
    expect(instance.createdBy).toBe('user123')
    expect(instance.updatedAt).toEqual(['2025', '04', '16', '수', '17', '30', '00'])
    expect(instance.updatedBy).toBe('admin456')
  })

  it('createdAt이 없는 경우 빈 배열로 값을 초기화 합니다.', () => {
    const instance = new CreationInformation(invalidMockCreationInformationData2)
    expect(instance.createdAt).toEqual([])
  })

  it('updateAt이 없는 경우 빈 배열로 값을 초기화 합니다.', () => {
    const instance = new CreationInformation(invalidMockCreationInformationData2)
    expect(instance.updatedAt).toEqual([])
  })

  it('updatedBy이 없는 경우 빈 문자열로 값을 초기화 합니다.', () => {
    const instance = new CreationInformation(invalidMockCreationInformationData2)
    expect(instance.updatedBy).toEqual('')
  })

  it('createdBy이 없는 경우 빈 문자열로 값을 초기화 합니다.', () => {
    const instance = new CreationInformation(invalidMockCreationInformationData2)
    expect(instance.createdBy).toEqual('')
  })
})