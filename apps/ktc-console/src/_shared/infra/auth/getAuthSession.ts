import { isServer } from '@tanstack/react-query'
import { getSession } from 'next-auth/react'
import { getServerSession, Session } from 'next-auth'
import { authOptions } from '@/_shared/infra/auth/authOptions'

export async function getAuthSession(): Promise<Session | null> {
  if (isServer) {
    return await getServerSession(authOptions)
  } else {
    return getSession()
  }
}
