
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { useDashboard } from '@/context/DashboardContext'; // Updated import
import KpiCard from '@/components/dashboard/KpiCard';
import { Route, MapPin, Fuel, Leaf, Download } from 'lucide-react';
import VehicleMap from '@/components/dashboard/VehicleMap';
import VehicleFilter from '@/components/dashboard/VehicleFilter';
import AlertsPanel from '@/components/dashboard/AlertsPanel';
import FuelMonitoring from '@/components/dashboard/FuelMonitoring';
import EcoDrive from '@/components/dashboard/EcoDrive';
import VehicleDiagnostics from '@/components/dashboard/VehicleDiagnostics';
import UserActivity from '@/components/dashboard/UserActivity';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { openDrawer } = useDashboard(); // Using the hook
  const { toast } = useToast();
  
  const handleExportDashboard = () => {
    toast({
      title: "Exporting Dashboard",
      description: "Your dashboard overview is being exported as PDF.",
    });
  };
  
  const handleVehicleClick = (vehicleId: string) => {
    openDrawer('vehicle', `Vehicle Details - ${vehicleId}`, { id: vehicleId });
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-gray-500">Welcome to TelemkoTrack fleet management system</p>
        </div>
        <Button 
          variant="outline" 
          onClick={handleExportDashboard}
          className="flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          Export Dashboard
        </Button>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <KpiCard
          title="Total Distance"
          value="8,432"
          subtitle="km"
          trend={{ value: 12, isPositive: true }}
          icon={Route}
          iconColor="bg-primary"
        />
        <KpiCard
          title="Active Vehicles"
          value="8/13"
          trend={{ value: 5, isPositive: true }}
          icon={MapPin}
          iconColor="bg-telemko-green-500"
        />
        <KpiCard
          title="Fuel Economy"
          value="8.7"
          subtitle="L/100km"
          trend={{ value: 3.2, isPositive: true }}
          icon={Fuel}
          iconColor="bg-telemko-blue-600"
        />
        <KpiCard
          title="Idle Time"
          value="124"
          subtitle="hours"
          trend={{ value: 8, isPositive: false }}
          icon={Leaf}
          iconColor="bg-telemko-yellow-500"
        />
      </div>

      {/* Filters */}
      <VehicleFilter />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <VehicleMap />
        </div>
        <div>
          <AlertsPanel />
        </div>
      </div>

      {/* Secondary Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div>
          <FuelMonitoring />
        </div>
        <div>
          <EcoDrive />
        </div>
        <div>
          <VehicleDiagnostics />
        </div>
      </div>
      
      {/* User Activity Section */}
      <div className="mb-6">
        <UserActivity />
      </div>
    </DashboardLayout>
  );
};

export default Index;
