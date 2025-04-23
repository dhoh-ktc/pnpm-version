export interface ISubnetPoolData {
  id: string
  name: string
  tenant_id: string
  project_id: string
  address_scope_id: string
  max_prefixlen: string
  min_prefixlen: string
  default_prefixlen: string
  prefixes: string
  ip_version: number
  default_quota: null
  description: string
  tags: string[]
  created_at: string
  updated_at: string
  revision_number: number
  is_default: boolean
  shared: boolean
}

export interface ISubnetPool {
  id: string
  name: string
  tenant_id: string
  project_id: string
  address_scope_id: string
  max_prefixlen: number
  min_prefixlen: number
  default_prefixlen: number
  prefixes: ['10.1.0.0/16']
  ip_version: number
  default_quota: any
  description: string
  tags: string[]
  created_at: string
  updated_at: string
  revision_number: number
  is_default: boolean
  shared: boolean
}
