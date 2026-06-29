import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard, Upload, FileText, History,
  BookOpen, ScrollText, Settings, ChevronLeft, ChevronRight, Eye
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";

const navItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/upload", icon: Upload, label: "Upload" },
  { to: "/review", icon: FileText, label: "Review" },
  { to: "/invoice-preview", icon: Eye, label: "Invoice Preview" },
  { to: "/history", icon: History, label: "History" },
  { to: "/ledger", icon: BookOpen, label: "Ledger Mapping" },
  { to: "/logs", icon: ScrollText, label: "Logs" },
];

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  useKeyboardShortcuts();

  return (
    <div className="flex h-screen w-screen bg-[#F5F7FA]">
      {/* Sidebar */}
      <div className={`flex flex-col bg-white shadow-md transition-all duration-300 ${collapsed ? "w-16" : "w-56"}`}>
        
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#4A7FB5] shrink-0">
            <span className="text-white text-xs font-bold">I2T</span>
          </div>
          {!collapsed && <span className="text-[#4A7FB5] font-bold text-sm">Invoice2Tally</span>}
        </div>

        <Separator />

        {/* Nav Items */}
        <nav className="flex flex-col gap-1 px-2 py-4 flex-1">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors
                ${isActive
                  ? "bg-[#4A7FB5] text-white"
                  : "text-gray-500 hover:bg-[#B8D4E8] hover:text-[#4A7FB5]"
                }`
              }
            >
              <Icon size={18} className="shrink-0" />
              {!collapsed && <span>{label}</span>}
            </NavLink>
          ))}
        </nav>

        <Separator />

        {/* Settings + Collapse */}
        <div className="px-2 py-4 flex flex-col gap-1">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors
              ${isActive
                ? "bg-[#4A7FB5] text-white"
                : "text-gray-500 hover:bg-[#B8D4E8] hover:text-[#4A7FB5]"
              }`
            }
          >
            <Settings size={18} className="shrink-0" />
            {!collapsed && <span>Settings</span>}
          </NavLink>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-gray-100 transition-colors"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            {!collapsed && <span>Collapse</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;