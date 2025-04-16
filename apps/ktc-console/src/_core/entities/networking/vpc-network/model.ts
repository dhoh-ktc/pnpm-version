import { IVpcNetwork, IVpcNetworkData } from '@/_core/entities/networking/vpc-network/types'
import { DateUtil } from '@repo/utils/date-util'

export class VpcNetwork implements IVpcNetwork {

  availability_zone_hints: string[]
  availability_zones: string[]
  created_at: string[]
  description: string
  id: string
  ipv4_address_scope: string
  ipv6_address_scope: string
  l2_adjacency: boolean
  name: string
  port_security_enabled: boolean
  provider_network_type: string
  provider_physical_network: string
  provider_segmentation_id: number
  qos_policy_id: string
  revision_number: number
  router_external: boolean
  shared: boolean
  status: string
  subnets: string[]
  tags: string[]
  updated_at: string[]

  constructor(data: IVpcNetworkData) {
    this.availability_zone_hints = data.availability_zone_hints
    this.availability_zones = data.availability_zones
    this.created_at = DateUtil.getDateArray(data.created_at)
    this.id = data.id
    this.ipv4_address_scope = data.ipv4_address_scope
    this.ipv6_address_scope = data.ipv6_address_scope
    this.l2_adjacency = data.l2_adjacency
    this.name = data.name
    this.port_security_enabled = data.port_security_enabled
    this.provider_network_type = data.provider_network_type
    this.provider_physical_network = data.provider_physical_network
    this.provider_segmentation_id = data.provider_segmentation_id
    this.qos_policy_id = data.qos_policy_id
    this.revision_number = data.revision_number
    this.router_external = data.router_external
    this.shared = data.shared
    this.status = data.status
    this.subnets = data.subnets
    this.tags = data.tags
    this.updated_at = DateUtil.getDateArray(data.updated_at)
    this.description = data.description
  }


}