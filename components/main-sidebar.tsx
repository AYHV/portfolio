"use client"

import { useEffect, useState } from "react"
import { Home, User, Briefcase, Code, Mail, Download } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"

const sections = [
  { id: "home", name: "Home", icon: Home },
  { id: "about", name: "About Me", icon: User },
  { id: "projects", name: "Projects", icon: Briefcase },
  { id: "skills", name: "Skills", icon: Code },
  { id: "contact", name: "Contact", icon: Mail },
]

export function MainSidebar() {
  const [activeSection, setActiveSection] = useState("home")

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Track active section based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  return (
    <Sidebar variant="floating" collapsible="offcanvas">
      <SidebarHeader className="border-b">
        <div className="p-4">
          <h2 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="text-sm text-muted-foreground">Explore my work</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="p-2">
          <SidebarGroupLabel>Main Sections</SidebarGroupLabel>
          <SidebarMenu>
            {sections.map(({ id, name, icon: Icon }) => (
              <SidebarMenuItem key={id}>
                <SidebarMenuButton
                  onClick={() => scrollToSection(id)}
                  tooltip={name}
                  isActive={activeSection === id}
                  className="transition-all duration-300"
                >
                  <Icon className={`h-5 w-5 transition-colors ${activeSection === id ? "text-primary" : ""}`} />
                  <span>{name}</span>
                  {activeSection === id && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/CV.pdf" className="flex items-center gap-2 text-sm font-medium" download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <p className="text-xs text-muted-foreground mt-4 text-center">© 2025 Your Portfolio</p>
      </SidebarFooter>
    </Sidebar>
  )
}
