import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import turboPlugin from 'eslint-plugin-turbo'
import tseslint from 'typescript-eslint'
import onlyWarn from 'eslint-plugin-only-warn'
import stylisticJs from '@stylistic/eslint-plugin-js'

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import('eslint').Linter.Config[]}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
      '@stylistic/js': stylisticJs,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
      '@stylistic/js/no-multiple-empty-lines': 'error',
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ['dist/**'],
  },
]
