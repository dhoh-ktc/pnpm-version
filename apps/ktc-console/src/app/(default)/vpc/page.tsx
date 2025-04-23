'use client'

import { Input } from '@repo/ui/components/form/input'
import { Button } from '@repo/ui/components/actions/button'
import { VpcService } from '@/_core/services/network/vpcs/vpc'
import { useEffect } from 'react'

export default function Page() {
  const vpcService = new VpcService()

  useEffect(() => {
    vpcService.fetchAll('aa9a2340cb8e4a8997391416a3ef6e67')
  }, [])
  return (
    <>
      <Input placeholder="프로젝트 ID" />
      <Input placeholder="VPC 이름" />
      <Input placeholder="CIDR ex)10.10.0.0/16" />
      <Button>VPC 만들기</Button>
    </>
  )
}
