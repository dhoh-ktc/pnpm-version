export interface IVpcNetworkData {
  id: string
  name: string
  status: string
  subnets: string[]
  shared: boolean
  availability_zone_hints: string[]
  availability_zones: string[]
  ipv4_address_scope: string
  ipv6_address_scope: string
  router_external: boolean
  description: string
  port_security_enabled: boolean
  qos_policy_id: string
  l2_adjacency: boolean
  tags: string[]
  created_at: string
  updated_at: string
  revision_number: number
  provider_network_type: string
  provider_physical_network: string
  provider_segmentation_id: number
}

export interface IVpcNetwork extends Omit<IVpcNetworkData, 'created_at' | 'updated_at'> {
  created_at: string[]
  updated_at: string[]
}
