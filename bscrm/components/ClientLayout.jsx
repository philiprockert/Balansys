"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex ">
      { pathname !== "/login" && <Sidebar />  && pathname !== "/" && <Sidebar /> } 
      <main className="flex-1">{children}</main>
    </div>
  );
}
