'use client'

import { useEffect, useState } from 'react'
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
    <>
      <h2 className="mb-4 text-xl font-bold">프로젝트 생성</h2>
      <FMakeForm onCreated={handleCreated} />
      <h2 className="mt-20 mb-4 text-xl font-bold">내 프로젝트 목록</h2>
      <VTable columns={columns} data={projectList} />
    </>
  )
}
