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

export default function Page() {
  const vpcService = new VpcService()
  const projectService = new ProjectService()

  const [projectId, setProjectId] = useState('')
  const [projectList, setProjectList] = useState<IProject[]>([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [cidr, setCidr] = useState('')

  const handleChange = (value: string) => {
    console.log(value)
    setProjectId(value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(projectId, name, description, cidr)
    vpcService
      .create({ projectId, name, description, cidr })
      .then((result: IVpc) => console.log(result))
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
    vpcService.fetchAll('aa9a2340cb8e4a8997391416a3ef6e67')
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
      <Input value={name} onChange={handleNameChange} placeholder="VPC 이름" />
      <Input value={cidr} onChange={handleCIDRChange} placeholder="CIDR ex)10.10.0.0/16" />
      <Input value={description} onChange={handleDescriptionChange} placeholder="vpc 설명" />
      <Button type="submit">VPC 만들기</Button>
    </form>
  )
}
