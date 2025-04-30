
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Leaf, MoreHorizontal, TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

const EcoDrive: React.FC = () => {
  const driverScores = [
    { id: 1, name: 'John Smith', vehicle: 'TX-001', score: 92, trend: 'up' },
    { id: 2, name: 'Sarah Johnson', vehicle: 'VN-003', score: 87, trend: 'up' },
    { id: 3, name: 'Michael Brown', vehicle: 'SD-010', score: 76, trend: 'down' },
    { id: 4, name: 'Emily Wilson', vehicle: 'TX-007', score: 89, trend: 'up' }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-telemko-green-500';
    if (score >= 80) return 'bg-telemko-green-400';
    if (score >= 70) return 'bg-telemko-yellow-500';
    return 'bg-telemko-red-500';
  };

  return (
    <Card className="dashboard-card">
      <CardHeader className="dashboard-card-header">
        <CardTitle className="text-md font-medium flex items-center">
          <Leaf className="mr-2 h-5 w-5 text-primary" />
          Eco Drive
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
            <DropdownMenuItem className="cursor-pointer">View Detailed Report</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Configure Scoring</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Export Data</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-telemko-gray-100 p-3 rounded">
              <div className="text-xs text-gray-500">Fleet Score</div>
              <div className="text-lg font-medium">86/100</div>
            </div>
            <div className="bg-telemko-gray-100 p-3 rounded">
              <div className="text-xs text-gray-500">Harsh Events</div>
              <div className="text-lg font-medium">12</div>
            </div>
            <div className="bg-telemko-gray-100 p-3 rounded">
              <div className="text-xs text-gray-500">CO2 Reduction</div>
              <div className="text-lg font-medium text-green-600">-8.5%</div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-medium mb-3">Driver Ratings</h3>
          <div className="space-y-3">
            {driverScores.map((driver) => (
              <div key={driver.id} className="p-3 bg-gray-50 rounded">
                <div className="flex justify-between mb-1">
                  <div>
                    <div className="text-sm font-medium">{driver.name}</div>
                    <div className="text-xs text-gray-500">{driver.vehicle}</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-1">{driver.score}</span>
                    {driver.trend === 'up' ? (
                      <TrendingUp size={16} className="text-telemko-green-500" />
                    ) : (
                      <TrendingDown size={16} className="text-telemko-red-500" />
                    )}
                  </div>
                </div>
                <Progress 
                  value={driver.score} 
                  className="h-2" 
                  // Fix: Use cn helper to merge custom color class with default styles
                  style={{
                    ['--progress-indicator-color' as any]: `var(--${getScoreColor(driver.score).replace('bg-', '')})`
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="p-3 border border-telemko-gray-200 rounded flex items-center">
            <div className="p-2 bg-telemko-red-100 rounded mr-3">
              <TrendingDown size={16} className="text-telemko-red-500" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Harsh Braking</div>
              <div className="text-sm font-medium">5 incidents</div>
            </div>
          </div>
          <div className="p-3 border border-telemko-gray-200 rounded flex items-center">
            <div className="p-2 bg-telemko-red-100 rounded mr-3">
              <TrendingDown size={16} className="text-telemko-red-500" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Harsh Acceleration</div>
              <div className="text-sm font-medium">7 incidents</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EcoDrive;
