'use client'

import { Input } from '@repo/ui/components/form/input'
import { Button } from '@repo/ui/components/actions/button'
import { ChangeEvent, useEffect, useState } from 'react'
import { ProjectService } from '@/_core/services/identity/project/project'

export default function Page() {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const projectService = new ProjectService()

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }

  const handleClick = async () => {
    alert(name + ' ' + description)
    debugger
    // const result = await projectService.create({ name, description })
    // console.log(result)
  }

  useEffect(() => {}, [])
  return (
    <div>
      <Input type="text" placeholder="프로젝트 이름" onChange={handleNameChange} value={name} />
      <Input
        type="text"
        placeholder="프로젝트 설명"
        onChange={handleDescriptionChange}
        value={description}
      />
      <Button onClick={handleClick}>프로젝트 만들기</Button>
    </div>
  )
}
