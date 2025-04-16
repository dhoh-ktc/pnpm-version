import { VpcNetwork } from './model'
import { mockVpcNetworkData } from './mock'
import { IVpcNetworkData } from '@/_core/entities/networking/vpc-network/types'

describe('VpcNetwork 클래스', () => {
  it('유효한 데이터로 초기화가 제대로 이루어져야 한다 (Test VPC 1)', () => {

    // @ts-ignore
    const data: IVpcNetworkData = mockVpcNetworkData[0]
    const vpcNetwork = new VpcNetwork(data)
    console.log(vpcNetwork)

    expect(vpcNetwork.id).toBe(data.id)
    expect(vpcNetwork.name).toBe(data.name)
    expect(vpcNetwork.status).toBe(data.status)
    expect(vpcNetwork.created_at).toEqual([
      '2025',
      '04',
      '16',
      '수',
      '10',
      '46',
      '01',
    ])
    expect(vpcNetwork.updated_at).toEqual([
      '2025',
      '04',
      '16',
      '수',
      '10',
      '46',
      '01',
    ])
    expect(vpcNetwork.provider_network_type).toBe(data.provider_network_type)
  })

  it('빈 서브넷과 가용 영역 힌트를 올바르게 처리해야 한다 (Test VPC 3)', () => {

    // TODO: 확실하게 타입 명시해줘도 undefined 에러가 발생함. 해결 필요
    // @ts-ignore
    const data: IVpcNetworkData = mockVpcNetworkData[2]
    const vpcNetwork = new VpcNetwork(data)

    expect(vpcNetwork.subnets).toEqual([])
    expect(vpcNetwork.availability_zone_hints).toEqual(data.availability_zone_hints)
    expect(vpcNetwork.router_external).toBe(true)
  })

  it('ipv6 주소 범위가 없는 경우를 올바르게 처리해야 한다 (Test VPC 2)', () => {
    const data = mockVpcNetworkData[1]
    // @ts-ignore
    const vpcNetwork = new VpcNetwork(data)

    expect(vpcNetwork.ipv6_address_scope).toBe('')
    expect(vpcNetwork.shared).toBe(true)
    expect(vpcNetwork.port_security_enabled).toBe(false)
  })

  it('created_at과 updated_at 날짜 배열이 올바르게 변환되어야 한다', () => {
    const data = mockVpcNetworkData[0]
    // @ts-ignore
    const vpcNetwork = new VpcNetwork(data)

    expect(vpcNetwork.created_at).toEqual(['2025',
      '04',
      '16',
      '수',
      '10',
      '46',
      '01'])
    expect(vpcNetwork.updated_at).toEqual(['2025',
      '04',
      '16',
      '수',
      '10',
      '46',
      '01'])
  })

  it('모든 속성이 완전한 VPC 데이터를 올바르게 처리해야 한다 (Test VPC 1)', () => {
    // @ts-ignore
    const data: IVpcNetworkData = mockVpcNetworkData[0]
    const vpcNetwork = new VpcNetwork(data)

    expect(vpcNetwork).toMatchObject({
      id: data.id,
      name: data.name,
      status: data.status,
      subnets: data.subnets,
      shared: data.shared,
      availability_zone_hints: data.availability_zone_hints,
      availability_zones: data.availability_zones,
      ipv4_address_scope: data.ipv4_address_scope,
      ipv6_address_scope: data.ipv6_address_scope,
      router_external: data.router_external,
      description: data.description,
      port_security_enabled: data.port_security_enabled,
      qos_policy_id: data.qos_policy_id,
      l2_adjacency: data.l2_adjacency,
      tags: data.tags,
      revision_number: data.revision_number,
      provider_network_type: data.provider_network_type,
      provider_physical_network: data.provider_physical_network,
      provider_segmentation_id: data.provider_segmentation_id,
    })
  })
})