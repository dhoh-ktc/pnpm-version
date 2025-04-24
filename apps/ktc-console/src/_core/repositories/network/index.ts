import { VpcRepository } from '@/_core/repositories/network/vpc'

export function network() {
  return {
    VPC: new VpcRepository(),
  }
}
