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
import { SubnetService } from '@/_core/services/network/subnet/subnet'

export default function Page() {
  const vpcService = new VpcService()
  const projectService = new ProjectService()
  const subnetService = new SubnetService()

  const [projectId, setProjectId] = useState('')
  const [projectList, setProjectList] = useState<IProject[]>([])

  const [networkId, setNetworkId] = useState('')
  const [vpcList, setVpcList] = useState<IVpc[]>([])

  const [name, setName] = useState('')
  const [subnetpoolId, setSubnetpoolId] = useState('')
  const [cidr, setCidr] = useState('')

  const handleChange = (value: string) => {
    console.log(value)
    setProjectId(value)
    vpcService.fetchAll(value).then((item) => setVpcList(item))
  }

  const handleChangeVpc = (value: string) => setNetworkId(value)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(name, cidr, subnetpoolId, cidr)
    subnetService
      .create({ name, cidr, subnetpool_id: subnetpoolId, network_id: networkId })
      .then((result: IVpc) => setVpcList([...vpcList, result]))
      .catch((e) => {
        console.log('here')
        console.log(e)
      })
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleChangeCIDR = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCidr(e.target.value)
  }
  const handleChangeSubnetpoolId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubnetpoolId(e.target.value)
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
            <SelectItem key={item.id} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={handleChangeVpc}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="VPC 선택" />
        </SelectTrigger>
        <SelectContent>
          {vpcList.map((item) => (
            <SelectItem key={item.id} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input value={name} onChange={handleChangeName} placeholder="VPC 이름" />
      <Input value={cidr} onChange={handleChangeCIDR} placeholder="CIDR ex)10.1.1.0/24" />
      <Input
        value={subnetpoolId}
        onChange={handleChangeSubnetpoolId}
        placeholder="subnetpoolId ex)b27c83af-c08a-4c04-a695-d5e623a5364b"
      />
      <Button type="submit">VPC 만들기</Button>
    </form>
  )
}
