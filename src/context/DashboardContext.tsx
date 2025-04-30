
import React, { createContext, useState, useContext } from 'react';

export interface DrawerState {
  isOpen: boolean;
  type: 'vehicle' | 'driver' | 'notification' | 'settings' | null;
  title: string;
  data: any;
}

interface DashboardContextType {
  drawerState: DrawerState;
  openDrawer: (type: DrawerState['type'], title: string, data: any) => void;
  closeDrawer: () => void;
}

const defaultState: DashboardContextType = {
  drawerState: {
    isOpen: false,
    type: null,
    title: '',
    data: null
  },
  openDrawer: () => {},
  closeDrawer: () => {}
};

export const DashboardContext = createContext<DashboardContextType>(defaultState);

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [drawerState, setDrawerState] = useState<DrawerState>({
    isOpen: false,
    type: null,
    title: '',
    data: null
  });

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

  return (
    <DashboardContext.Provider value={{
      drawerState,
      openDrawer,
      closeDrawer
    }}>
      {children}
    </DashboardContext.Provider>
  );
};
