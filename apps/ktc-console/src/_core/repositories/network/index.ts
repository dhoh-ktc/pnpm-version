import { VpcAPI } from '@/_core/repositories/network/vpc'

export function network() {
  return {
    VPC: new VpcAPI(),
  }
}
