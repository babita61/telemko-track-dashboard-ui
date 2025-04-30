
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Fuel, MoreHorizontal, Droplets, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// This would be imported from Recharts in a real implementation
const FuelChart = () => (
  <div className="w-full h-40 rounded bg-telemko-gray-100 flex items-center justify-center">
    <div className="text-telemko-gray-400 text-sm">Fuel Consumption Graph (Weekly)</div>
  </div>
);

const FuelMonitoring: React.FC = () => {
  const refuelingEvents = [
    { id: 1, vehicle: 'TX-001', amount: '45L', cost: '$67.50', date: 'April 28, 2025' },
    { id: 2, vehicle: 'VN-003', amount: '35L', cost: '$52.50', date: 'April 26, 2025' },
    { id: 3, vehicle: 'SD-010', amount: '50L', cost: '$75.00', date: 'April 24, 2025' }
  ];

  return (
    <Card className="dashboard-card">
      <CardHeader className="dashboard-card-header">
        <CardTitle className="text-md font-medium flex items-center">
          <Fuel className="mr-2 h-5 w-5 text-primary" />
          Fuel Monitoring
        </CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Detailed Report</DropdownMenuItem>
            <DropdownMenuItem>Configure Alerts</DropdownMenuItem>
            <DropdownMenuItem>Export Data</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <FuelChart />
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">Recent Refueling Events</h3>
          <div className="space-y-2">
            {refuelingEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex items-center">
                  <div className="bg-telemko-blue-100 p-2 rounded">
                    <Droplets size={16} className="text-telemko-blue-600" />
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium">{event.vehicle}</div>
                    <div className="text-xs text-gray-500">{event.amount} • {event.cost}</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {event.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-telemko-gray-100 p-3 rounded">
            <div className="text-xs text-gray-500">Avg. Consumption</div>
            <div className="text-lg font-medium">8.7 L/100km</div>
          </div>
          <div className="bg-telemko-gray-100 p-3 rounded">
            <div className="text-xs text-gray-500">Fuel Spent (MTD)</div>
            <div className="text-lg font-medium">$1,245</div>
          </div>
          <div className="bg-telemko-gray-100 p-3 rounded">
            <div className="text-xs text-gray-500">Efficiency</div>
            <div className="text-lg font-medium text-green-600">+3.2%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FuelMonitoring;
