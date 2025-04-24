export interface INetworkData {
  id: string
  name: string
  admin_state_up: boolean
  mtu: number
  status: string // TODO: enum 으로 값 명시 필요 'ACTIVE'
  subnets: [] // TODO: 정의 필요
  shared: boolean
  availability_zone_hints: string[] // TODO: enum 으로 값 명시 필요
  description: string
  port_security_enabled: boolean
  l2_adjacency: boolean
  tags: []
  created_at: string
  updated_at: string
  revision_number: number
  project_id: string
  'provider:network_type': string // 변환 필요
  'provider:segmentation_id': number // 변환 필요
}

export type INetwork = INetworkData
