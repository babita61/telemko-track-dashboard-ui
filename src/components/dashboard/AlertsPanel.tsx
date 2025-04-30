
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertTriangle, Info, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const AlertsPanel: React.FC = () => {
  const alerts = [
    {
      id: 1,
      title: 'Fuel Theft Alert',
      description: 'Sudden drop in fuel level detected for TX-001',
      time: '10 minutes ago',
      type: 'critical',
      vehicle: 'TX-001'
    },
    {
      id: 2,
      title: 'Excessive Speeding',
      description: 'Vehicle VN-003 exceeded speed limit by 25 km/h',
      time: '30 minutes ago',
      type: 'warning',
      vehicle: 'VN-003'
    },
    {
      id: 3,
      title: 'Route Deviation',
      description: 'Vehicle SD-010 deviated from planned route by 3.5 km',
      time: '45 minutes ago',
      type: 'info',
      vehicle: 'SD-010'
    },
    {
      id: 4,
      title: 'Engine Temperature Warning',
      description: 'High engine temperature detected on TX-007',
      time: '1 hour ago',
      type: 'warning',
      vehicle: 'TX-007'
    }
  ];

  return (
    <Card className="dashboard-card">
      <CardHeader className="dashboard-card-header">
        <CardTitle className="text-md font-medium flex items-center">
          <AlertTriangle className="mr-2 h-5 w-5 text-primary" />
          Smart Alerts
        </CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Mark all as read</DropdownMenuItem>
            <DropdownMenuItem>Configure alerts</DropdownMenuItem>
            <DropdownMenuItem>Export alerts</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="critical">Critical</TabsTrigger>
            <TabsTrigger value="warning">Warning</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                <div className="mt-1">
                  {alert.type === 'critical' ? (
                    <div className="status-indicator status-warning"></div>
                  ) : alert.type === 'warning' ? (
                    <div className="status-indicator status-idle"></div>
                  ) : (
                    <div className="status-indicator status-active"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="text-sm font-medium">{alert.title}</h4>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        alert.type === 'critical' ? 'bg-red-50 text-red-600 border-red-200' : 
                        alert.type === 'warning' ? 'bg-amber-50 text-amber-600 border-amber-200' : 
                        'bg-blue-50 text-blue-600 border-blue-200'
                      }`}
                    >
                      {alert.vehicle}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{alert.description}</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-500">{alert.time}</span>
                    <Button variant="ghost" size="sm" className="h-6 p-0 text-xs text-primary hover:text-primary/80 hover:bg-transparent">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full text-sm">View All Alerts</Button>
          </TabsContent>
          <TabsContent value="critical" className="space-y-4">
            {alerts.filter(alert => alert.type === 'critical').map((alert) => (
              <div key={alert.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                <div className="mt-1">
                  <div className="status-indicator status-warning"></div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="text-sm font-medium">{alert.title}</h4>
                    <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200 text-xs">
                      {alert.vehicle}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{alert.description}</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-500">{alert.time}</span>
                    <Button variant="ghost" size="sm" className="h-6 p-0 text-xs text-primary hover:text-primary/80 hover:bg-transparent">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="warning" className="space-y-4">
            {alerts.filter(alert => alert.type === 'warning').map((alert) => (
              <div key={alert.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                <div className="mt-1">
                  <div className="status-indicator status-idle"></div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="text-sm font-medium">{alert.title}</h4>
                    <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200 text-xs">
                      {alert.vehicle}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{alert.description}</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-500">{alert.time}</span>
                    <Button variant="ghost" size="sm" className="h-6 p-0 text-xs text-primary hover:text-primary/80 hover:bg-transparent">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;
