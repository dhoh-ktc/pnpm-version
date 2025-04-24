import { VpcRepository } from '@/_core/repositories/network/vpc'
import { SubnetRepository } from '@/_core/repositories/network/subnet'

export function network() {
  return {
    VPC: () => new VpcRepository(),
    SUBNET: () => new SubnetRepository(),
  }
}
