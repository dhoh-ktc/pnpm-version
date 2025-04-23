'use client'

import { Input } from '@repo/ui/components/form/input'
import { Button } from '@repo/ui/components/actions/button'
import { VpcService } from '@/_core/services/network/vpcs/vpc'
import { FormEvent, useEffect, useState } from 'react'
import { ProjectService } from '@/_core/services/identity/project/project'
import { IProject } from '@/_core/entities/identity/project'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/ui/components/form/select'
import { IVpc } from '@/_core/entities/networking/vpc'
import { columns } from '@/components/widgets/organisms/vpc/columns'
import { VProjectTable } from '@/components/widgets/organisms/VProjectTable'

export default function Page() {
  const vpcService = new VpcService()
  const projectService = new ProjectService()

  const [projectId, setProjectId] = useState('')
  const [projectList, setProjectList] = useState<IProject[]>([])

  const [vpcList, setVpcList] = useState<IVpc[]>([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [cidr, setCidr] = useState('')

  const handleChange = (value: string) => {
    console.log(value)
    setProjectId(value)
    vpcService.fetchAll(value).then((item) => setVpcList(item))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(projectId, name, description, cidr)
    vpcService
      .create({ projectId, name, description, cidr })
      .then((result: IVpc) => setVpcList([...vpcList, result]))
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleCIDRChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCidr(e.target.value)
  }
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }

  useEffect(() => {
    projectService.fetchAll().then((data) => {
      setProjectList(data)
    })
  }, [])
  return (
    <form onSubmit={handleSubmit}>
      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="프로젝트 선택" />
        </SelectTrigger>
        <SelectContent>
          {projectList.map((item) => (
            <SelectItem value={item.id}>{item.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <VProjectTable columns={columns} data={vpcList} />

      <Input value={name} onChange={handleNameChange} placeholder="VPC 이름" />
      <Input value={cidr} onChange={handleCIDRChange} placeholder="CIDR ex)10.10.0.0/16" />
      <Input value={description} onChange={handleDescriptionChange} placeholder="vpc 설명" />
      <Button type="submit">VPC 만들기</Button>
    </form>
  )
}
