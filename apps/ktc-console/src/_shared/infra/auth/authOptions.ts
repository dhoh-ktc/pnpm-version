import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'
import type { JWT } from 'next-auth/jwt'
import type { Session, User } from 'next-auth'

export interface ExtendedUser extends User {
  // id_token: string
  login_id: string
  name: string
}

interface ExtendedJWT extends JWT {
  // id_token: string
  login_id: string
  name: string
}

declare module 'next-auth' {
  interface Session {
    // id_token: string
    login_id: string
    name: string
  }
}

const credentials = {
  loginType: { label: 'Login Type', type: 'text' },
  accountId: { label: 'Account ID', type: 'text' },
  loginId: { label: 'Login ID', type: 'text' },
  password: { label: 'Password', type: 'password' },
  clientId: { label: 'Client ID', type: 'text' },
}

// TODO: authOptions: AuthOptions 로 되어야 함
export const authOptions: any = {
  providers: [
    CredentialsProvider({
      id: 'loginCredentials',
      name: 'Credentials',
      type: 'credentials',
      credentials,
      async authorize(credentials) {
        if (!credentials) return null

        try {
          const { loginType, loginId, password, clientId, accountId } = credentials

          const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/v1/auth/tokens`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              loginType,
              loginId,
              password,
              clientId,
              ...(loginType === 'user' && { accountId }),
            }),
          })
          if (res.status === 200) {
            const user = await res.json()

            console.log('user', user)
            if (user) {
              const cookieStore = await (await import('next/headers')).cookies()
              cookieStore.set('accessToken' as never, user.access_token, {
                httpOnly: false,
                secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production', // https 적용
                sameSite: 'Lax',
                path: '/',
                maxAge: user.expires_in,
              } as never)
              cookieStore.set('refreshToken' as never, user.refresh_token, {
                httpOnly: true,
                secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production', // https 적용
                sameSite: 'Lax',
                path: '/',
                maxAge: user.refresh_expires_in,
              } as never)
              return user
            }
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            const status = error.response?.status
            const message = error.response?.data.error.message
            console.error(`>>> Axios error: [${status}] ${JSON.stringify(error.response?.data)}`)
            throw new Error(`[${status}] ${message}`)
          }
          console.error(error)
          throw new Error('알 수 없는 오류가 발생했습니다.')
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: ExtendedJWT; user?: ExtendedUser }) {
      if (user) {
        // token.id_token = user.id_token
        token.login_id = user.login_id
        token.name = user.name
      }
      return token
    },
    async session({ session, token }: { session: Session; token: ExtendedJWT }) {
      // session.id_token = token.id_token
      session.login_id = token.login_id
      session.name = token.name
      return session
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60, // 1시간
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60, // 1시간
        secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production', // https 적용
      },
    },
  },
  pages: {
    signIn: '/signin',
    signOut: '/signin',
  },
  events: {},
  secret: process.env.NEXTAUTH_SECRET,
}
