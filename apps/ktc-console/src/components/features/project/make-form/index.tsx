import VMakeForm, { VMakeFormProps } from '@/components/widgets/organisms/project/VMakeForm'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  MAKE_PROJECT_KEY,
  ZMakeProjectInput,
  ZMakeProjectSchema,
} from '@/components/features/project/make-form/schemas'
import { ProjectService } from '@/_core/services/identity/project/project'
import { IProject } from '@/_core/entities/identity/project'

interface FMakeFormProps {
  onCreated: (e: IProject) => void
}

export default function FMakeForm({ onCreated }: FMakeFormProps) {
  const projectService = new ProjectService()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ZMakeProjectInput>({
    resolver: zodResolver(ZMakeProjectSchema),
    mode: 'onSubmit',
    shouldFocusError: true,
  })

  const onSubmit: SubmitHandler<ZMakeProjectInput> = (data) => {
    projectService.create({ ...data }).then((result) => {
      alert('추가 완료!')
      onCreated(result)
    })
  }

  const props: VMakeFormProps = {
    name: register(MAKE_PROJECT_KEY.NAME),
    description: register(MAKE_PROJECT_KEY.DESCRIPTION),
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      handleSubmit(onSubmit)()
    },
  }

  return (
    <>
      <VMakeForm vprops={props} />
    </>
  )
}
