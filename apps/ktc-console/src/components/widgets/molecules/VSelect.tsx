import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/ui/components/form/select'
import React from 'react'

export interface VSelectProps {
  items: Array<
    {
      id: string
      name: string
    } & Record<string, any>
  >
  onChange: (id: string) => void
}

export default function VSelect({
  className,
  vprops,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { vprops: VSelectProps }) {
  //
  return (
    <div {...props}>
      <Select onValueChange={vprops.onChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="프로젝트 선택" />
        </SelectTrigger>
        <SelectContent>
          {vprops.items.map((item) => (
            <SelectItem key={item.id} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
