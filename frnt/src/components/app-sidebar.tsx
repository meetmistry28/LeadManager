"use client"

import * as React from "react"
import {
  AudioWaveform,
  BellMinus,
  BookCheck,
  CalendarSync,
  CirclePlay,
  Command,
  File,
  GalleryVerticalEnd,
  HandCoins,
  Handshake,
  LayoutDashboard,
  ReceiptText,
  ScrollText,
  Settings,
  SquareUser,
  Target,
  UserX,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { title } from "process"
import { url } from "inspector"
import { Progress } from "@/components/ui/progress"; // Import the Progress bar component
import { Cloud } from "lucide-react"; // Import Cloud icon

const data = {
  user: {
    name: "Admin",
    email: "admin@admin.com",
    avatar: "",
  },
  teams: [
    {
      name: "Spriers",
      logo: GalleryVerticalEnd,
      plan: "Information Technology",
    },
    {
      name: "Google",
      logo: AudioWaveform,
      plan: "IT Corporation",
    },
    {
      name: "Microsoft",
      logo: Command,
      plan: "Technology Company",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: window.location.pathname === "",
      items: [
      {  title: "Dashboard", url: "/dashboard",}
      ]
    },
    {
      title: "Lead",
      url: "#",
      icon: Target,
      isActive: window.location.pathname === "",
      items: [
        { title: "Create", url: "/lead/leadForm" },
        { title: "List", url: "/lead" },
        { title: "Graph", url: "/Lead-chart" },
        { title: "Drag & Drop", url: "/lead/leadDrop" }
      ],
    },
    {
      title: "Invoice",
      url: "#",
      icon: ReceiptText,
      isActive: window.location.pathname === "",
      items: [
        { title: "Create", url: "/invoice/invoiceForm" },
        { title: "List", url: "/invoice" },
        { title: "Graph", url: "/Invoice-chart" },
        { title: "Drag & Drop", url: "/invoice/invoiceDrop" }
      ],
    },
    {
      title: "Reminder",
      url: "#",
      icon: BellMinus,
      isActive: window.location.pathname === "",
      items: [
        { title: "List", url: "/reminder/list" },
        { title: "Email", url: "/reminder/reminderEmail" },
        { title: "Create", url: "/reminder" }
      ],
    },
    {
      title: "Deal",
      url: "#",
      icon: Handshake,
      isActive: window.location.pathname === "",
      items: [
        { title: "Create", url: "/deal" },
        { title: "List", url: "/deal/list" },
        { title: "Graph", url: "/Deal-chart" },
        { title: "Drag & Drop", url: "/deal/dealDrop" }
      ],
    },
    {
      title: "Task",
      url: "#",
      icon: BookCheck,
      isActive: window.location.pathname === "",
      items: [
        { title: "Create", url: "/task" },
        { title: "List", url: "/task/list" },
        { title: "Drag & Drop", url: "/task/taskDrop" }
      ],
    },
    {
      title: "Complaint",
      url: "#",
      icon: UserX,
      isActive: window.location.pathname === "",
      items: [
        { title: "Create", url: "/complaint" },
        { title: "List", url: "/complaint/list" },
        { title: "Email", url: "/complaint/complaintEmail" }
      ],
    },
    {
      title: "Contact",
      url: "#",
      icon: SquareUser,
      isActive: window.location.pathname === "",
      items: [
        { title: "Create", url: "/contact" },
        { title: "List", url: "/contact/list" },
        { title: "Email", url: "/contact/contactEmail" }
      ],
    },
    {
      title: "Account",
      url: "#",
      icon: HandCoins,
      isActive: window.location.pathname === "",
      items: [
        { title: "Create", url: "/Account" },
        { title: "List", url: "/account/list" }
      ],
    },
    {
      title: "Documents",
      url: "#",
      icon: ScrollText,
      isActive: window.location.pathname === "",
      items: [
        { title: "Photos", url: "/document" },
        { title: "Videos", url: "/video" },
        { title: "Others", url: "/flipflap" }
      ],
    },
    {
      title: "Schedule",
      url: "#",
      icon: CalendarSync,
      isActive: window.location.pathname === "",
      items: [
        { title: "Create", url: "/Scheduled" },
        { title: "List", url: "/scheduled/list" }
      ],
    },
    {
      title: "Calendar",
      url: "#",
      icon: CirclePlay,
      isActive: window.location.pathname === "",
      items: [
        { title: "Calendar", url: "/calendar"},
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [isClient, setIsClient] = React.useState(false)
  const [activePath, setActivePath] = React.useState("")
  const [hover, setHover] = React.useState(false);
  const storageValue = 60; // Example storage usage percentage

  React.useEffect(() => {
    setIsClient(true) 
    setActivePath(window.location.pathname)
  }, [])

  const updatedNavMain = React.useMemo(
    () =>
      data.navMain.map((item) => ({
        ...item,
        isActive: isClient && activePath === item.url, 
        items: item.items?.map((subItem) => ({
          ...subItem,
          isActive: isClient && activePath === subItem.url, 
        })),
      })),
    [isClient, activePath]
  );

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={updatedNavMain} />
      </SidebarContent>

       {/* Google Storage Section */}
       <div className="px-4 py-3 space-y-1">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Cloud className="size-4 text-gray-500" />
          
        </div>

        <div
          className="relative group"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Progress value={storageValue} className="h-1" />

          {hover && (
            <div className="absolute left-1/2 -top-6 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-xs text-white shadow-md">
              {storageValue}% Used
            </div>
          )}
        </div>
      </div>


      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>

    
  )
}