
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import RightDrawer from './RightDrawer';
import DrawerContent from '../drawer/DrawerContent';
import { DashboardProvider, useDashboard } from '@/context/DashboardContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayoutContent: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { drawerState, closeDrawer } = useDashboard();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
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
          <DrawerContent 
            type={drawerState.type} 
            data={drawerState.data} 
          />
        </RightDrawer>
      </div>
    </div>
  );
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <DashboardProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </DashboardProvider>
  );
};

export default DashboardLayout;
