"use client";

import Header from "@/src/components/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-full flex-col justify-center">
      <Header />
      <main className="flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8">
        {children}
      </main>
    </div>
  );
}
