
import React from 'react';
import VehicleDetails from './VehicleDetails';
import DriverDetails from './DriverDetails';
import NotificationDetails from './NotificationDetails';
import QuickSettings from './QuickSettings';
import { DrawerState } from '@/context/DashboardContext';

interface DrawerContentProps {
  type: DrawerState['type'];
  data: any;
}

const DrawerContent: React.FC<DrawerContentProps> = ({ type, data }) => {
  switch (type) {
    case 'vehicle':
      return <VehicleDetails data={data} />;
    case 'driver':
      return <DriverDetails data={data} />;
    case 'notification':
      return <NotificationDetails data={data} />;
    case 'settings':
      return <QuickSettings data={data} />;
    default:
      return null;
  }
};

export default DrawerContent;
