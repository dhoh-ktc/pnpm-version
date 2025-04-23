import { Input } from '@repo/ui/components/form/input'
import { Button } from '@repo/ui/components/actions/button'

export default function Page() {
  return (
    <>
      <Input placeholder="VPC 이름" />
      <Input placeholder="서브넷" />
      <Button>서브넷 만들기</Button>
    </>
  )
}
