'use client'

import { Suspense, useEffect, useState } from 'react'
import { ProjectService } from '@/_core/services/identity/project/project'
import { IProject, Project } from '@/_core/entities/identity/project'
import { VTable } from '@/components/widgets/organisms/VTable'
import { columns } from '@/components/widgets/organisms/project/columns'
import FMakeForm from '@/components/features/project/make-form'

export default function Page() {
  const [projectList, setProjectList] = useState<Project[]>([])
  const projectService = new ProjectService()

  const handleCreated = (project: IProject) => {
    setProjectList([...projectList, project])
  }

  useEffect(() => {
    projectService.fetchAll().then((result) => setProjectList(result))
  }, [])

  return (
    <Suspense>
      <FMakeForm onCreated={handleCreated} />
      <VTable columns={columns} data={projectList} />
    </Suspense>
  )
}
