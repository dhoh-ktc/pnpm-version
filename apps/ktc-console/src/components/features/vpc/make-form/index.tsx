import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  MAKE_VPC_KEY,
  ZMakeVPCInput,
  ZMakeVPCSchema,
} from '@/components/features/vpc/make-form/schemas'
import VMakeForm, { VMakeFormProps } from '@/components/widgets/organisms/vpc/VMakeForm'

import { VpcService } from '@/_core/services/network/vpcs/vpc'
import { IVpc } from '@/_core/entities/network/vpc/vpc'

export interface FMakeFormProps {
  projectId: string
  onCreated: (vpc: IVpc) => void
}

export default function FMakeForm({ projectId, onCreated }: FMakeFormProps) {
  const vpcService = new VpcService()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ZMakeVPCInput>({
    resolver: zodResolver(ZMakeVPCSchema),
    mode: 'onSubmit',
    shouldFocusError: true,
  })

  const onSubmit: SubmitHandler<ZMakeVPCInput> = (data) => {
    vpcService.create({ ...data, projectId }).then((result: IVpc) => {
      alert('추가 완료!')
      onCreated(result)
    })
  }

  const props: VMakeFormProps = {
    name: register(MAKE_VPC_KEY.NAME),
    description: register(MAKE_VPC_KEY.DESCRIPTION),
    cidr: register(MAKE_VPC_KEY.CIDR),
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      handleSubmit(onSubmit)()
    },
  }

  return <VMakeForm vprops={props} />
}
