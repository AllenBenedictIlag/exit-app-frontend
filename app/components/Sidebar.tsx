"use client";
import React, { useState } from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconClipboardText,
  IconHistory,
  IconLayoutDashboard,
  IconChartPie,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink as BaseSidebarLink} from "@/components/ui/sidebar";
import { BentoGridDemo } from "./Bento-grid";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
    link: {
      label: string;
      href: string;
      icon: React.ReactNode;
    };
  }

  const SidebarLink = ({ link }: SidebarLinkProps) => {
    const pathname = usePathname();
  
    return (
      <BaseSidebarLink
        link={{
          ...link,
          icon: (
            <span className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0">
              {link.icon}
            </span>
          ),
        }}
        className={cn(
          "hover:bg-neutral-100 dark:hover:bg-neutral-700",
          pathname === link.href && "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
        )}
      />
    );
  };

  const mockUser = { role: "HR_MANAGER" };

  const links = [
    { 
      label: "Dashboard", 
      href: "/dashboard", 
      icon: <IconLayoutDashboard className="h-5 w-5" /> 
    },
    { 
      label: "Exit Interviews", 
      href: "/exit-interviews", 
      icon: <IconClipboardText className="h-5 w-5" /> 
    },
    { 
      label: "History", 
      href: "/history", 
      icon: <IconHistory className="h-5 w-5" /> 
    },
    { 
      label: "Maintenance", 
      href: "/maintenance", 
      icon: <IconSettings className="h-5 w-5" /> 
    },
  ];

export function SidebarDemo() {
    
  const links = [
    { label: "Dashboard", href: "/dashboard", icon: <IconLayoutDashboard /> },
    { label: "Exit Interviews", href: "/exit-interviews", icon: <IconClipboardText /> },
    { label: "History", href: "/history", icon: <IconHistory /> },
    { label: "Maintenance", href: "/maintenance", icon: <IconSettings /> },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-full mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-dvh",  // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              {mockUser.role === "HR_MANAGER" && (
                <SidebarLink
                  link={{
                    label: "Analytics",
                    href: "/analytics",
                    icon: <IconChartPie className="h-5 w-5" />,
                  }}
                />
              )}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <Image
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
      <main className="flex-1 p-6 md:p-8 lg:p-10 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">
            HR Analytics Dashboard
          </h1>
        <BentoGridDemo />
        </div>
      </main>
      </div>
    </div>
  );
};
