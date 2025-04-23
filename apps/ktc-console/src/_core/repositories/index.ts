import { identity } from '@/_core/repositories/identity'
import { network } from '@/_core/repositories/network'

export function repository() {
  return {
    IDENTITY: identity(),
    NETWORK: network(),
  }
}
