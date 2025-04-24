'use client'

import { VpcService } from '@/_core/services/network/vpcs/vpc'
import { useEffect, useState } from 'react'
import { ProjectService } from '@/_core/services/identity/project/project'
import { IProject } from '@/_core/entities/identity/project'
import { IVpc } from '@/_core/entities/network/vpc/vpc'
import FMakeForm from '@/components/features/vpc/make-form'
import { columns } from '@/components/widgets/organisms/vpc/columns'
import { VTable } from '@/components/widgets/organisms/VTable'
import VSelect from '@/components/widgets/molecules/VSelect'

export default function Page() {
  const vpcService = new VpcService()
  const projectService = new ProjectService()

  const [selectedProject, setSelectedProject] = useState<IProject>()
  const [projectList, setProjectList] = useState<IProject[]>([])
  const [vpcList, setVpcList] = useState<IVpc[]>([])

  /** ********
   * Interactions
   * *********/
  const handleProjectChange = (projectId: string) => {
    setSelectedProject(projectList.filter((item) => item.id === projectId)[0])
    vpcService.getList(projectId).then((item) => setVpcList(item))
  }

  const handleCreated = (vpc: IVpc) => {
    setVpcList([...vpcList, vpc])
  }

  /** ********
   * Lifecycles
   * *********/
  useEffect(() => {
    projectService.fetchAll().then((data) => {
      setProjectList(data)
    })
  }, [])

  return (
    <>
      <h2 className="text-xl">Step1. 프로젝트 선택</h2>
      <VSelect className="mt-4" vprops={{ items: projectList, onChange: handleProjectChange }} />

      {selectedProject && (
        <>
          <h2 className="mt-8 mb-4 text-xl">Step2. {selectedProject.name} 관련 VPC 목록</h2>
          <VTable columns={columns} data={vpcList} />
          <h2 className="mt-8 mb-4 text-xl">Step3. {selectedProject.name} 관련 신규 VPC 생성</h2>
          <FMakeForm projectId={selectedProject.id} onCreated={handleCreated} />
        </>
      )}
    </>
  )
}
