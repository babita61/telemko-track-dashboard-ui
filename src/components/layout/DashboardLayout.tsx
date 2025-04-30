import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import RightDrawer from './RightDrawer';
import { Button } from '@/components/ui/button';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export interface DrawerState {
  isOpen: boolean;
  type: 'vehicle' | 'driver' | 'notification' | 'settings' | null;
  title: string;
  data: any;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [drawerState, setDrawerState] = useState<DrawerState>({
    isOpen: false,
    type: null,
    title: '',
    data: null
  });

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const openDrawer = (type: DrawerState['type'], title: string, data: any) => {
    setDrawerState({
      isOpen: true,
      type,
      title,
      data
    });
  };

  const closeDrawer = () => {
    setDrawerState(prev => ({
      ...prev,
      isOpen: false
    }));
  };

  // Create context to pass drawer functions to children
  const layoutContext = {
    openDrawer,
    closeDrawer,
    drawerState
  };

  return (
    <DashboardContext.Provider value={layoutContext}>
      <div className="flex h-screen bg-gray-50">
        <Sidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
            {children}
          </main>
          
          <RightDrawer 
            open={drawerState.isOpen}
            onClose={closeDrawer}
            title={drawerState.title}
          >
            {drawerState.type === 'vehicle' && (
              <VehicleDetails data={drawerState.data} />
            )}
            
            {drawerState.type === 'driver' && (
              <DriverDetails data={drawerState.data} />
            )}
            
            {drawerState.type === 'notification' && (
              <NotificationDetails data={drawerState.data} />
            )}
            
            {drawerState.type === 'settings' && (
              <QuickSettings data={drawerState.data} />
            )}
          </RightDrawer>
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

// Create a context for global access to drawer functions
export const DashboardContext = React.createContext<{
  openDrawer: (type: DrawerState['type'], title: string, data: any) => void;
  closeDrawer: () => void;
  drawerState: DrawerState;
}>({
  openDrawer: () => {},
  closeDrawer: () => {},
  drawerState: {
    isOpen: false,
    type: null,
    title: '',
    data: null
  }
});

// Helper components for different drawer content types
const VehicleDetails: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-medium">{data?.id || 'Vehicle Details'}</h3>
        <p className="text-sm text-gray-500">{data?.location || 'Location information'}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 bg-white border rounded-md">
          <div className="text-xs text-gray-500">Driver</div>
          <div className="font-medium">{data?.driver || 'Not assigned'}</div>
        </div>
        <div className="p-3 bg-white border rounded-md">
          <div className="text-xs text-gray-500">Status</div>
          <div className="font-medium">{data?.status || 'Unknown'}</div>
        </div>
        <div className="p-3 bg-white border rounded-md">
          <div className="text-xs text-gray-500">Fuel Level</div>
          <div className="font-medium">78%</div>
        </div>
        <div className="p-3 bg-white border rounded-md">
          <div className="text-xs text-gray-500">Mileage</div>
          <div className="font-medium">12,458 km</div>
        </div>
      </div>
      
      <div className="p-4 border rounded-lg">
        <h4 className="font-medium mb-2">Recent Activity</h4>
        <ul className="space-y-2">
          <li className="text-sm p-2 bg-gray-50 rounded">Started trip at 9:45 AM</li>
          <li className="text-sm p-2 bg-gray-50 rounded">Fuel refill at 8:30 AM</li>
          <li className="text-sm p-2 bg-gray-50 rounded">Maintenance check completed yesterday</li>
        </ul>
      </div>
    </div>
  );
};

const DriverDetails: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center mb-4">
        <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
          {data?.avatar || 'U'}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium">{data?.name || 'Driver Name'}</h3>
          <p className="text-sm text-gray-500">{data?.role || 'Role'}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 bg-white border rounded-md">
          <div className="text-xs text-gray-500">Assigned Vehicle</div>
          <div className="font-medium">{data?.vehicle || 'None'}</div>
        </div>
        <div className="p-3 bg-white border rounded-md">
          <div className="text-xs text-gray-500">Phone</div>
          <div className="font-medium">+977 98XXXXXXXX</div>
        </div>
      </div>
      
      <div className="p-4 border rounded-lg">
        <h4 className="font-medium mb-2">Driver Score</h4>
        <div className="flex items-center">
          <div className="text-2xl font-semibold">85</div>
          <div className="ml-2 text-xs">/ 100</div>
        </div>
        <div className="mt-2">
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="p-4 border rounded-lg">
        <h4 className="font-medium mb-2">Recent Trips</h4>
        <ul className="space-y-2">
          <li className="text-sm p-2 bg-gray-50 rounded">Kathmandu to Pokhara - Today</li>
          <li className="text-sm p-2 bg-gray-50 rounded">Pokhara to Chitwan - Yesterday</li>
          <li className="text-sm p-2 bg-gray-50 rounded">Chitwan to Kathmandu - 2 days ago</li>
        </ul>
      </div>
    </div>
  );
};

const NotificationDetails: React.FC<{ data: any }> = ({ data }) => {
  const notifications = [
    {
      id: 1,
      title: 'Vehicle Maintenance Due',
      message: 'Truck TX-001 is due for maintenance in 2 days. Please schedule service.',
      time: '10 minutes ago',
      type: 'warning'
    },
    {
      id: 2,
      title: 'Fuel Level Low',
      message: 'Van VN-003 fuel level is below 15%. Please refuel soon.',
      time: '30 minutes ago',
      type: 'warning'
    },
    {
      id: 3,
      title: 'Idle Time Alert',
      message: 'Vehicle SD-010 has been idle for more than 30 minutes.',
      time: '2 hours ago',
      type: 'info'
    },
    {
      id: 4,
      title: 'Speed Limit Exceeded',
      message: 'Driver John Smith exceeded speed limit by 15 km/h on Highway 1.',
      time: '3 hours ago',
      type: 'danger'
    },
    {
      id: 5,
      title: 'Route Deviation',
      message: 'Vehicle TX-007 has deviated from planned route by 5km.',
      time: '5 hours ago',
      type: 'warning'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">All Notifications</h3>
        <Button variant="outline" size="sm">Mark All Read</Button>
      </div>
      
      <div className="space-y-2">
        {notifications.map(notification => (
          <div key={notification.id} className="p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex items-start gap-3">
              <div className={`mt-1 h-3 w-3 rounded-full ${
                notification.type === 'warning' ? 'bg-yellow-500' : 
                notification.type === 'danger' ? 'bg-red-500' : 
                'bg-blue-500'
              }`}></div>
              <div className="flex-1">
                <h4 className="font-medium">{notification.title}</h4>
                <p className="text-sm text-gray-600">{notification.message}</p>
                <span className="text-xs text-gray-500 block mt-1">{notification.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Button className="w-full">View All Notifications</Button>
    </div>
  );
};

const QuickSettings: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="space-y-6">
      <div className="p-4 border rounded-lg">
        <h3 className="font-medium mb-3">Map Settings</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm">Show Traffic</span>
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
              <span className="absolute h-4 w-4 rounded-full bg-white translate-x-1"></span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Show Points of Interest</span>
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
              <span className="absolute h-4 w-4 rounded-full bg-white translate-x-6"></span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Auto-refresh Map</span>
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
              <span className="absolute h-4 w-4 rounded-full bg-white translate-x-6"></span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 border rounded-lg">
        <h3 className="font-medium mb-3">Alert Preferences</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm">Email Notifications</span>
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
              <span className="absolute h-4 w-4 rounded-full bg-white translate-x-6"></span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">SMS Alerts</span>
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
              <span className="absolute h-4 w-4 rounded-full bg-white translate-x-1"></span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">In-App Notifications</span>
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
              <span className="absolute h-4 w-4 rounded-full bg-white translate-x-6"></span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 border rounded-lg">
        <h3 className="font-medium mb-3">Display Settings</h3>
        <div className="space-y-3">
          <div>
            <label className="text-sm block mb-1">Date Format</label>
            <select className="w-full border rounded p-2 text-sm">
              <option>DD/MM/YYYY</option>
              <option>MM/DD/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </div>
          <div>
            <label className="text-sm block mb-1">Measurement Units</label>
            <select className="w-full border rounded p-2 text-sm">
              <option>Metric (km, liters)</option>
              <option>Imperial (miles, gallons)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
