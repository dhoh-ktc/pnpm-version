export interface IVpcData {
  id: string
  name: string
  cidr: string
  status: string
  description: string
  created: string
  updated: string
}

export interface IVpc extends Omit<IVpcData, 'created' | 'updated'> {
  created: string[]
  updated: string[]
}
