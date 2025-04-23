'use client'

import { ColumnDef } from '@tanstack/react-table'
import { IProject } from '@/_core/entities/identity/project'

export const columns: ColumnDef<IProject>[] = [
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
