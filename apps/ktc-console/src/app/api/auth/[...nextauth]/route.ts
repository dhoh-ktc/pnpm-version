import NextAuth from 'next-auth'
import { authOptions } from '@/_shared/infra/next-auth/authOptions'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
