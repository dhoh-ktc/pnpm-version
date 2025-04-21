import { cn } from '@repo/ui/lib/utils'
import { Button } from '@repo/ui/components/actions/button'
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/layouts/card'
import { Input } from '@repo/ui/components/form/input'
import { Label } from '@repo/ui/components/widgets/label'

export interface VLoginFormProps {
  errorMsg: {
    loginId: string
    password: string
  }
  // TODO: {디자인시스템} 디자인시스템 적용한다면, 일일히 interface 안 만들고 이 부분에서 zod 의 RegisterOptions 타입을 그대로 사용해도 될듯.
  loginId: {
    ref: React.Ref<HTMLInputElement>
    name: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  }
  // TODO: {디자인시스템} 디자인시스템 적용한다면, 일일히 interface 안 만들고 이 부분에서 zod 의 RegisterOptions 타입을 그대로 사용해도 될듯.
  password: {
    ref: React.Ref<HTMLInputElement>
    name: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  }
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function VLoginForm({
  className,
  vprops,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { vprops: VLoginFormProps }) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Root 로그인</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={vprops.handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="loginId">이메일</Label>
                <Input id="loginId" {...vprops.loginId} placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">비밀번호</Label>
                </div>
                <Input id="password" {...vprops.password} type="password" required />
              </div>
              <Button type="submit" className="w-full">
                로그인
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              아직 계정이 없으신가요?{' '}
              <a href="/signup" className="underline underline-offset-4">
                회원가입
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
