
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { useDashboard } from '@/context/DashboardContext'; // Updated import
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Fuel, Download, BarChart, Droplets, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const FuelPage = () => {
  const { openDrawer } = useDashboard(); // Using the hook
  const { toast } = useToast();
  
  const vehicles = [
    { id: 'TX-001', driver: 'John Smith', consumption: '7.8 L/100km', lastRefuel: 'Apr 28', fuelLevel: 85 },
    { id: 'VN-003', driver: 'Sarah Johnson', consumption: '8.2 L/100km', lastRefuel: 'Apr 26', fuelLevel: 62 },
    { id: 'SD-010', driver: 'Michael Brown', consumption: '9.5 L/100km', lastRefuel: 'Apr 24', fuelLevel: 45 },
    { id: 'TX-007', driver: 'Emily Wilson', consumption: '8.0 L/100km', lastRefuel: 'Apr 23', fuelLevel: 72 },
    { id: 'VN-012', driver: 'Robert Chen', consumption: '7.5 L/100km', lastRefuel: 'Apr 22', fuelLevel: 90 },
  ];
  
  const handleExportFuelReport = () => {
    toast({
      title: "Exporting Fuel Report",
      description: "Your detailed fuel report is being exported as PDF.",
    });
  };

  const handleVehicleClick = (vehicleId: string) => {
    openDrawer('vehicle', `Vehicle Details - ${vehicleId}`, { id: vehicleId });
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Fuel Monitoring</h1>
          <p className="text-gray-500">Detailed fuel consumption and refueling analysis</p>
        </div>
        <Button 
          variant="outline" 
          onClick={handleExportFuelReport}
          className="flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-3">
              <div className="bg-blue-100 p-2 rounded">
                <Fuel className="h-5 w-5 text-blue-600" />
              </div>
              <span className="text-gray-500 text-sm">This Month</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm text-gray-500">Total Consumption</h3>
              <p className="text-2xl font-semibold">1,245 L</p>
              <p className="text-sm text-green-600">↓ 5.2% from last month</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-3">
              <div className="bg-green-100 p-2 rounded">
                <BarChart className="h-5 w-5 text-green-600" />
              </div>
              <span className="text-gray-500 text-sm">Average</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm text-gray-500">Fuel Economy</h3>
              <p className="text-2xl font-semibold">8.7 L/100km</p>
              <p className="text-sm text-green-600">↑ 3.2% improvement</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-3">
              <div className="bg-amber-100 p-2 rounded">
                <Droplets className="h-5 w-5 text-amber-600" />
              </div>
              <span className="text-gray-500 text-sm">This Month</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm text-gray-500">Refueling Events</h3>
              <p className="text-2xl font-semibold">18</p>
              <p className="text-sm text-green-600">↓ 2 fewer than last month</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-3">
              <div className="bg-purple-100 p-2 rounded">
                <Gauge className="h-5 w-5 text-purple-600" />
              </div>
              <span className="text-gray-500 text-sm">This Month</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm text-gray-500">Fuel Cost</h3>
              <p className="text-2xl font-semibold">$1,867</p>
              <p className="text-sm text-red-600">↑ 2.8% from last month</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-0">
              <CardTitle className="text-md font-medium flex items-center">
                <BarChart className="mr-2 h-5 w-5 text-primary" />
                Fuel Consumption Trends
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {/* Placeholder for fuel consumption chart */}
              <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
                <p className="text-gray-500">Fuel consumption trend chart (daily/weekly/monthly view)</p>
              </div>
              <div className="flex justify-center mt-4 gap-4">
                <Button variant="outline" size="sm" className="text-xs">Daily</Button>
                <Button variant="default" size="sm" className="text-xs">Weekly</Button>
                <Button variant="outline" size="sm" className="text-xs">Monthly</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader className="pb-0">
              <CardTitle className="text-md font-medium flex items-center">
                <Droplets className="mr-2 h-5 w-5 text-primary" />
                Fleet Fuel Status
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {vehicles.map(vehicle => (
                  <div 
                    key={vehicle.id} 
                    className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={() => handleVehicleClick(vehicle.id)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="font-medium">{vehicle.id}</p>
                        <p className="text-xs text-gray-500">{vehicle.driver}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{vehicle.consumption}</p>
                        <p className="text-xs text-gray-500">Last refuel: {vehicle.lastRefuel}</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          vehicle.fuelLevel > 70 ? 'bg-green-500' : 
                          vehicle.fuelLevel > 40 ? 'bg-yellow-500' : 'bg-red-500'
                        }`} 
                        style={{ width: `${vehicle.fuelLevel}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-gray-500">
                      <span>Fuel level: {vehicle.fuelLevel}%</span>
                      <span>
                        {vehicle.fuelLevel > 70 ? 'Good' : 
                         vehicle.fuelLevel > 40 ? 'Medium' : 'Low'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Additional Content */}
      <Card className="mb-6">
        <CardHeader className="pb-0">
          <CardTitle className="text-md font-medium flex items-center">
            <Fuel className="mr-2 h-5 w-5 text-primary" />
            Refueling History
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="p-3 font-medium">Date</th>
                  <th className="p-3 font-medium">Vehicle</th>
                  <th className="p-3 font-medium">Driver</th>
                  <th className="p-3 font-medium">Amount</th>
                  <th className="p-3 font-medium">Cost</th>
                  <th className="p-3 font-medium">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Apr 28, 2025</td>
                  <td className="p-3">TX-001</td>
                  <td className="p-3">John Smith</td>
                  <td className="p-3">45L</td>
                  <td className="p-3">$67.50</td>
                  <td className="p-3">Kathmandu Central</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Apr 26, 2025</td>
                  <td className="p-3">VN-003</td>
                  <td className="p-3">Sarah Johnson</td>
                  <td className="p-3">35L</td>
                  <td className="p-3">$52.50</td>
                  <td className="p-3">Pokhara East</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Apr 24, 2025</td>
                  <td className="p-3">SD-010</td>
                  <td className="p-3">Michael Brown</td>
                  <td className="p-3">50L</td>
                  <td className="p-3">$75.00</td>
                  <td className="p-3">Chitwan Depot</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Apr 23, 2025</td>
                  <td className="p-3">TX-007</td>
                  <td className="p-3">Emily Wilson</td>
                  <td className="p-3">40L</td>
                  <td className="p-3">$60.00</td>
                  <td className="p-3">Kathmandu South</td>
                </tr>
                <tr>
                  <td className="p-3">Apr 22, 2025</td>
                  <td className="p-3">VN-012</td>
                  <td className="p-3">Robert Chen</td>
                  <td className="p-3">38L</td>
                  <td className="p-3">$57.00</td>
                  <td className="p-3">Bhaktapur Station</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="outline" size="sm">View All History</Button>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default FuelPage;
