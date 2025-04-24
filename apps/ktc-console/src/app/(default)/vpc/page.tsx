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

  const [projectId, setProjectId] = useState('')
  const [projectList, setProjectList] = useState<IProject[]>([])
  const [vpcList, setVpcList] = useState<IVpc[]>([])

  /**
   * Interaction
   */

  const handleProjectChange = (projectId: string) => {
    setProjectId(projectId)
    vpcService.getList(projectId).then((item) => setVpcList(item))
  }

  const handleCreated = (vpc: IVpc) => {
    setVpcList([...vpcList, vpc])
  }

  /**
   * Lifecycle
   */

  useEffect(() => {
    projectService.fetchAll().then((data) => {
      setProjectList(data)
    })
  }, [])

  return (
    <>
      <VSelect vprops={{ items: projectList, onChange: handleProjectChange }} />
      <VTable columns={columns} data={vpcList} />
      <FMakeForm projectId={projectId} onCreated={handleCreated} />
    </>
  )
}
