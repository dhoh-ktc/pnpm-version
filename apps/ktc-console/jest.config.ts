import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  rootDir: '../../',

  extensionsToTreatAsEsm: ['.ts', '.tsx'],
}
export default config