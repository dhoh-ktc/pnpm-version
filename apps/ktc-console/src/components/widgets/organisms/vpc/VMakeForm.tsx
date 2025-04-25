import { Input } from '@repo/ui/components/form/input'
import { Button } from '@repo/ui/components/actions/button'
import React from 'react'

export interface VMakeFormProps {
  name: {
    ref: React.Ref<HTMLInputElement>
    name: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  }
  // TODO: {디자인시스템} 디자인시스템 적용한다면, 일일히 interface 안 만들고 이 부분에서 zod 의 RegisterOptions 타입을 그대로 사용해도 될듯.
  description: {
    ref: React.Ref<HTMLInputElement>
    name: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  }
  cidr: {
    ref: React.Ref<HTMLInputElement>
    name: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  }
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function VMakeForm({
  className,
  vprops,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { vprops: VMakeFormProps }) {
  return (
    <div {...props}>
      <form className="flex flex-col gap-2 items-end" onSubmit={vprops.handleSubmit}>
        <Input {...vprops.name} placeholder="VPC 이름" />
        <Input {...vprops.cidr} placeholder="CIDR ex)10.10.0.0/16" />
        <Input {...vprops.description} placeholder="vpc 설명" />
        <Button className="w-28" type="submit">
          VPC 만들기
        </Button>
      </form>
    </div>
  )
}
