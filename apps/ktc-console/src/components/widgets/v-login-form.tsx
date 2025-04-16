import { cn } from '@repo/ui/lib/utils'
import { Button } from '@repo/ui/components/actions/button'
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/layouts/card'
import { Input } from '@repo/ui/components/inputs/input'
import { Label } from '@repo/ui/components/widgets/label'
import React from 'react'

export interface VLoginFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  handleSignUp: () => void
}

export function VLoginForm({
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
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">비밀번호</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                로그인
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              아직 계정이 없으신가요?{' '}
              <a href="#" className="underline underline-offset-4" onClick={vprops.handleSignUp}>
                회원가입
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
