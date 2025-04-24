'use client'

import * as React from 'react'
import { AudioWaveform, Command, GalleryVerticalEnd, SquareTerminal } from 'lucide-react'

import { NavMain } from '@repo/ui/components/nav-main'
import { TeamSwitcher } from '@repo/ui/components/team-switcher'
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from '@repo/ui/components/sidebar'

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'KT CLOUD',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'PROJECT',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: '프로젝트',
          url: '/project',
        },
      ],
    },
    {
      title: 'NETWORK',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'VPC',
          url: '/vpc',
        },
        {
          title: '서브넷',
          url: '/subnet',
        },
      ],
    },

    // projects: [
    //   {
    //     name: 'Design Engineering',
    //     url: '#',
    //     icon: Frame,
    //   },
    //   {
    //     name: 'Sales & Marketing',
    //     url: '#',
    //     icon: PieChart,
    //   },
    //   {
    //     name: 'Travel',
    //     url: '#',
    //     icon: Map,
    //   },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/*<NavProjects projects={data.projects} />*/}
      </SidebarContent>
      {/*<SidebarFooter>*/}
      {/*  <NavUser user={data.user} />*/}
      {/*</SidebarFooter>*/}
      <SidebarRail />
    </Sidebar>
  )
}
