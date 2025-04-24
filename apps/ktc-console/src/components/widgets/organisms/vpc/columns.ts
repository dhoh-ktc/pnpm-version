'use client'

import { ColumnDef } from '@tanstack/react-table'
import { IVpc } from '@/_core/entities/networking/vpc'

export const columns: ColumnDef<IVpc>[] = [
  {
    accessorKey: 'name',
    header: 'VPC 명',
  },
  {
    accessorKey: 'cidr',
    header: 'cidr',
  },
  {
    accessorKey: 'description',
    header: '설명',
  },
]
