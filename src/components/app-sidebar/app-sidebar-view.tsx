import type { AppSidebarViewProps } from "./app-sidebar.types";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LaptopMinimalIcon } from "lucide-react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";

export const AppSidebarView: React.FC<AppSidebarViewProps> = ({
  isActiveRoute,
  roleFilteredSidebarItems,
}) => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="data-[slot=sidebar-menu-button]:!p-1.5">
              <LaptopMinimalIcon className="!size-5" />
              <span className="text-base font-semibold">Hackathon</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {roleFilteredSidebarItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                className={cn(``, {
                  "bg-gray-400 hover:bg-gray-300": isActiveRoute(item.to),
                })}
              >
                <Link to={item.to}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
