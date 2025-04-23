'use client'

import { ColumnDef } from '@tanstack/react-table'
import { IProject } from '@/_core/entities/identity/project'

export const columns: ColumnDef<IProject>[] = [
  {
    accessorKey: 'name',
    header: '프로젝트명',
  },
  {
    accessorKey: 'description',
    header: '설명',
  },
  {
    accessorKey: 'id',
    header: '프로젝트 ID',
  },
]
