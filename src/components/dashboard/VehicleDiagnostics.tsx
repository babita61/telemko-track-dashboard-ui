
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertCircle, MoreHorizontal, CheckCircle, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const VehicleDiagnostics: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const diagnosticItems = [
    { id: 1, name: 'Engine Status', status: 'ok', vehicle: 'TX-001' },
    { id: 2, name: 'Brake System', status: 'warning', vehicle: 'VN-003', message: 'Brake pads worn' },
    { id: 3, name: 'Tire Pressure', status: 'critical', vehicle: 'SD-010', message: 'Front left tire pressure low' },
    { id: 4, name: 'Oil Level', status: 'ok', vehicle: 'TX-007' },
    { id: 5, name: 'Battery', status: 'ok', vehicle: 'TX-001' },
    { id: 6, name: 'Coolant Level', status: 'warning', vehicle: 'VN-003', message: 'Coolant level low' }
  ];

  return (
    <Card className="dashboard-card">
      <CardHeader className="dashboard-card-header">
        <CardTitle className="text-md font-medium flex items-center">
          <AlertCircle className="mr-2 h-5 w-5 text-primary" />
          Vehicle Diagnostics
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
            <DropdownMenuItem>View All Diagnostics</DropdownMenuItem>
            <DropdownMenuItem>Schedule Maintenance</DropdownMenuItem>
            <DropdownMenuItem>Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="mb-3 grid grid-cols-3 gap-3 text-center">
          <div className="p-2 bg-telemko-gray-100 rounded">
            <div className="text-xs text-gray-500">Total Vehicles</div>
            <div className="text-lg font-medium">13</div>
          </div>
          <div className="p-2 bg-telemko-red-100 rounded">
            <div className="text-xs text-gray-500">Issues</div>
            <div className="text-lg font-medium text-telemko-red-600">3</div>
          </div>
          <div className="p-2 bg-telemko-green-100 rounded">
            <div className="text-xs text-gray-500">Healthy</div>
            <div className="text-lg font-medium text-telemko-green-600">10</div>
          </div>
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border rounded-md">
          <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-sm font-medium">
            <div className="flex items-center">
              <span>Vehicle Checklist</span>
              <Badge className="ml-2 bg-telemko-red-500" variant="default">3</Badge>
            </div>
            <div>
              {isOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="p-4 pt-0 space-y-2">
              {diagnosticItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-2 border-t">
                  <div className="flex items-center">
                    {item.status === 'ok' ? (
                      <CheckCircle size={16} className="text-telemko-green-500 mr-2" />
                    ) : item.status === 'warning' ? (
                      <AlertCircle size={16} className="text-telemko-yellow-500 mr-2" />
                    ) : (
                      <AlertCircle size={16} className="text-telemko-red-500 mr-2" />
                    )}
                    <div>
                      <div className="text-sm font-medium">{item.name}</div>
                      {item.message && <div className="text-xs text-telemko-red-500">{item.message}</div>}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">{item.vehicle}</div>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default VehicleDiagnostics;
