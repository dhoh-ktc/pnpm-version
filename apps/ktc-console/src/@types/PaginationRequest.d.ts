declare interface IPaginationRequest<R, T> {
  page: number
  limit: number
  filter?: R // 검색 조건이 있을 때 사용
  search?: T
}

declare interface IPage<R> {
  totalElements: number
  totalPages: number
  first: boolean
  last: boolean
  size: number
  content: R
}
