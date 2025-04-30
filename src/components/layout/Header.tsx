
import React from 'react';
import { 
  Search, 
  Bell, 
  ChevronDown, 
  CircleUser,
  Settings,
  LogOut,
  HelpCircle,
  FileBarChart,
  Download
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { useDashboard } from '@/context/DashboardContext'; // Updated import
import { useToast } from '@/hooks/use-toast';

const Header: React.FC = () => {
  const { openDrawer } = useDashboard(); // Using the hook
  const { toast } = useToast();

  const notifications = [
    {
      id: 1,
      title: 'Vehicle Maintenance Due',
      description: 'Truck TX-001 is due for maintenance in 2 days',
      time: '10 minutes ago',
      unread: true,
      type: 'warning'
    },
    {
      id: 2,
      title: 'Fuel Level Low',
      description: 'Van VN-003 fuel level below 15%',
      time: '30 minutes ago',
      unread: true,
      type: 'warning'
    },
    {
      id: 3,
      title: 'Idle Time Alert',
      description: 'Vehicle SD-010 idle for more than 30 minutes',
      time: '2 hours ago',
      unread: false,
      type: 'info'
    }
  ];

  const quickActions = [
    { 
      name: 'Generate Report', 
      icon: FileBarChart,
      action: () => {
        toast({
          title: "Generating Report",
          description: "Your report is being generated. It will be available shortly.",
        });
      }
    },
    { 
      name: 'Download Data', 
      icon: Download,
      action: () => {
        toast({
          title: "Downloading Data",
          description: "Your data is being prepared for download.",
        });
      }
    },
    { 
      name: 'Settings', 
      icon: Settings,
      action: () => openDrawer('settings', 'Settings', {})
    },
    { 
      name: 'Help', 
      icon: HelpCircle,
      action: () => {
        toast({
          title: "Help Center",
          description: "Opening help documentation in a new window.",
        });
      }
    }
  ];

  const handleViewAllNotifications = () => {
    openDrawer('notification', 'All Notifications', {});
  };

  const handleMarkAllAsRead = () => {
    toast({
      title: "Notifications Updated",
      description: "All notifications have been marked as read.",
    });
  };

  return (
    <header className="h-16 px-6 flex items-center justify-between bg-white border-b">
      {/* Search Bar */}
      <div className="flex items-center w-full max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="Search vehicles, drivers, or locations..." 
            className="pl-10 bg-gray-50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Notifications */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500">
                {notifications.filter(n => n.unread).length}
              </Badge>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end">
            <div className="flex items-center justify-between px-4 py-2 border-b">
              <h3 className="font-semibold">Notifications</h3>
              <Button 
                variant="link" 
                size="sm" 
                className="text-xs text-primary"
                onClick={handleMarkAllAsRead}
              >
                Mark all as read
              </Button>
            </div>
            <div className="max-h-[300px] overflow-y-auto">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`px-4 py-3 border-b last:border-0 ${notification.unread ? 'bg-blue-50' : ''} cursor-pointer`}
                  onClick={() => openDrawer('notification', notification.title, notification)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 status-indicator ${notification.type === 'warning' ? 'status-warning' : 'status-active'}`}></div>
                    <div>
                      <h4 className="text-sm font-medium">{notification.title}</h4>
                      <p className="text-xs text-gray-600 mt-0.5">{notification.description}</p>
                      <span className="text-xs text-gray-500 mt-1 block">{notification.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-2 border-t">
              <Button 
                variant="outline" 
                className="w-full text-sm"
                onClick={handleViewAllNotifications}
              >
                View All Notifications
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {/* Quick Actions Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="hidden md:flex">
              <span>Quick Actions</span>
              <ChevronDown size={16} className="ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {quickActions.map((action) => (
              <DropdownMenuItem 
                key={action.name} 
                className="cursor-pointer"
                onClick={action.action}
              >
                <action.icon size={16} className="mr-2" />
                <span>{action.name}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 hover:bg-gray-100">
              <CircleUser size={24} />
              <ChevronDown size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <CircleUser size={16} className="mr-2" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="cursor-pointer"
              onClick={() => openDrawer('settings', 'Settings', {})}
            >
              <Settings size={16} className="mr-2" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <LogOut size={16} className="mr-2" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
