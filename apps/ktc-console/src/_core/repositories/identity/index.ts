import { ProjectRepository } from '@/_core/repositories/identity/project'

export function identity() {
  return {
    project: new ProjectRepository(),
  }
}
