'use client'

import Header from '@/components/layouts/header'
import { SidebarProvider, SidebarTrigger } from '@repo/ui/components/sidebar'
import SessionSyncProvider from '@/components/providers/SessionSyncProvider'
import { SessionProvider } from 'next-auth/react'
import { AppSidebar } from '@/components/layouts/AppSideBar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SessionProvider>
      <SessionSyncProvider>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <Header />
            <SidebarTrigger />
            <div className="mt-16 px-8">{children}</div>
          </main>
        </SidebarProvider>
      </SessionSyncProvider>
    </SessionProvider>
  )
}
