// mock 데이터 생성
import { ICreationInformation, ICreationInformationData } from './types'

export const mockCreationInformationData: ICreationInformationData = {
  createdAt: '2025-04-15T07:57:13.622Z',
  createdBy: 'user123',
  updatedAt: '2025-04-16T08:30:00.000Z',
  updatedBy: 'admin456',
}

export const mockCreationInformation: ICreationInformation = {
  createdAt: ['2025', '4', '15', '화', '16', '57', '13'],
  createdBy: 'user123',
  updatedAt: ['2025', '4', '16', '수', '17', '30', '0'],
  updatedBy: 'admin456',
}

// 잘못된 목 데이터 생성

export const invalidMockCreationInformationData: ICreationInformationData = {
  createdAt: 'invalid-date', // 잘못된 날짜 형식
  createdBy: '', // 빈 값
  updatedAt: '2025-04-31T25:61:61.000Z', // 존재하지 않는 날짜 및 시간
  updatedBy: null as unknown as string, // 잘못된 타입
}

export const invalidMockCreationInformation: ICreationInformation = {
  createdAt: ['invalid', 'data'], // 잘못된 배열 값
  createdBy: '', // 빈 값
  updatedAt: ['2025', '13', '32', '월', '25', '61', '61'], // 잘못된 날짜 및 시간 값
  updatedBy: null as unknown as string, // 잘못된 타입
}