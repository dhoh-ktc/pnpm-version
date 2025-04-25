import { Input } from '@repo/ui/components/form/input'
import { Button } from '@repo/ui/components/actions/button'
import { Label } from '@repo/ui/components/widgets/label'
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
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function VMakeForm({
  className,
  vprops,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { vprops: VMakeFormProps }) {
  return (
    <div className="w-[360px]">
      <form onSubmit={vprops.handleSubmit}>
        <div className="flex flex-col gap-4 items-end" {...props}>
          <div className="grid gap-2 w-full">
            <Label htmlFor="projName">프로젝트 이름</Label>
            <Input id="projName" {...vprops.name} placeholder="프로젝트 이름(중복불가)" required />
          </div>
          <div className="grid gap-2 w-full">
            <div className="flex items-center">
              <Label htmlFor="projDescription">프로젝트 설명</Label>
            </div>
            <Input id="projDescription" {...vprops.description} required />
          </div>
          <Button type="submit" className="w-44">
            생성하기
          </Button>
        </div>
      </form>
    </div>
  )
}
