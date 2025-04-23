import { Input } from '@repo/ui/components/form/input'
import { Button } from '@repo/ui/components/actions/button'

export default function Page() {
  return (
    <>
      <Input placeholder="프로젝트 ID" />
      <Input placeholder="VPC 이름" />
      <Input placeholder="CIDR ex)10.10.0.0/16" />
      <Button>VPC 만들기</Button>
    </>
  )
}
