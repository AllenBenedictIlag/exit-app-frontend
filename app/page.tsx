import Image from "next/image";
import { SidebarDemo } from "./components/Sidebar";
import { BentoGridDemo } from "./components/Bento-grid";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar (already contains its own responsive logic) */}
      <SidebarDemo />
      
      {/* Main Content Area */}
      
    </div>
  );
}