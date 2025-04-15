// mock 데이터
import { ICreationInformationData } from './types'

export const mockCreationInformationData: ICreationInformationData = {
  createdAt: '2025-04-15T07:57:13.622Z',
  createdBy: 'user123',
  updatedAt: '2025-04-16T08:30:00.000Z',
  updatedBy: 'admin456',
}

// 잘못된 목 데이터

export const invalidMockCreationInformationData1: ICreationInformationData = {
  createdAt: 'invalid-date', // 잘못된 날짜 형식
  createdBy: '', // 빈 값
  updatedAt: '2025-04-31T25:61:61.000Z', // 존재하지 않는 날짜 및 시간
  updatedBy: null as unknown as string, // 잘못된 타입
}

// 예외 목 데이터
export const invalidMockCreationInformationData2: ICreationInformationData = {
  createdAt: undefined, // 잘못된 날짜 형식
  createdBy: undefined, // 빈 값
  updatedAt: undefined, // 존재하지 않는 날짜 및 시간
  updatedBy: undefined, // 잘못된 타입
}




