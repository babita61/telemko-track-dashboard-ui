
import React from 'react';
import { Button } from '@/components/ui/button';

interface NotificationDetailsProps {
  data: any;
}

const NotificationDetails: React.FC<NotificationDetailsProps> = ({ data }) => {
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

export default NotificationDetails;
