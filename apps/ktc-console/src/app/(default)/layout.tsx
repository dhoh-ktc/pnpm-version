import Header from '@/components/header'
import { AppSidebar } from '@repo/ui/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@repo/ui/components/sidebar'

export default function Layout({
                                 children,
                               }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <Header />
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
