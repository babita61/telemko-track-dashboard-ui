
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Map,
  Fuel,
  Leaf,
  FileBarChart,
  Database,
  Clock,
  Settings,
  ChevronLeft,
  ChevronRight,
  CircleUser,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, toggleSidebar }) => {
  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard, current: true },
    { name: 'Vehicle Tracking', href: '/tracking', icon: Map, current: false },
    { name: 'Fuel Monitoring', href: '/fuel', icon: Fuel, current: false },
    { name: 'Eco Drive', href: '/eco', icon: Leaf, current: false },
    { name: 'Reports', href: '/reports', icon: FileBarChart, current: false },
    { name: 'CANbus Data', href: '/canbus', icon: Database, current: false },
    { name: 'Tachograph', href: '/tachograph', icon: Clock, current: false },
    { name: 'Settings', href: '/settings', icon: Settings, current: false },
  ];

  return (
    <div 
      className={cn(
        'bg-sidebar h-screen flex flex-col transition-all duration-300 ease-in-out border-r border-sidebar-border',
        collapsed ? 'w-[70px]' : 'w-[240px]'
      )}
    >
      {/* Logo and collapse button */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
        <div className="flex items-center">
          {!collapsed && (
            <div className="flex items-center gap-2 text-xl font-semibold text-white">
              <span className="text-sidebar-accent">Telemko</span>
              <span>Track</span>
            </div>
          )}
          {collapsed && (
            <div className="flex items-center text-xl font-semibold text-white">
              <span className="text-sidebar-accent">T</span>
              <span>T</span>
            </div>
          )}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      {/* Profile */}
      <div className={cn(
        'flex items-center gap-3 p-4 border-b border-sidebar-border',
        collapsed ? 'justify-center' : ''
      )}>
        <div className="flex-shrink-0">
          <CircleUser className="h-8 w-8 text-sidebar-foreground" />
        </div>
        {!collapsed && (
          <div className="text-xs">
            <div className="font-semibold text-sidebar-foreground">Admin User</div>
            <div className="text-sidebar-foreground/70">Fleet Manager</div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="mt-5 px-2 flex-1 overflow-y-auto">
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={cn(
                  'nav-item',
                  item.current && 'active'
                )}
              >
                <item.icon size={20} />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-sidebar-border text-xs text-sidebar-foreground/70 text-center">
        {!collapsed && <div>&copy; 2025 TelemkoTrack</div>}
      </div>
    </div>
  );
};

export default Sidebar;
