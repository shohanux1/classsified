"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import useRouter hook from Next.js
import React from "react";

import { AiOutlineSetting, AiOutlineForm } from "react-icons/ai";

const sidebarItems = [
  {
    activePath: "/manage-post",
    name: "Manage Post",
    id: 1,
    icon: <AiOutlineForm />,
  },
  {
    activePath: "/settings",
    name: "Settings",
    id: 2,
    icon: <AiOutlineSetting />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="max-w-64 py-4 w-full">
      <ul className="space-y-1">
        {sidebarItems.map((item) => (
          <Link
            className={cn(
              "w-full py-2 px-4 rounded-md flex items-center cursor-pointer text-slate-800",
              { "bg-gray-200": pathname === item.activePath }
            )}
            key={item.id}
            href={item.activePath}
          >
            <span className="text-xl mr-2">{item.icon}</span> {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
