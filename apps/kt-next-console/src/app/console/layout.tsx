import Header from "@/src/components/header";
import { AppSidebar } from "@repo/ui/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@repo/ui/components/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <SidebarProvider className="mt-16">
        <AppSidebar className="mt-16" />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
