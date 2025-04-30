
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MapPin, Navigation } from 'lucide-react';

// This is a placeholder for a real map implementation
// In a real app, you would integrate with Mapbox, Google Maps, or Leaflet
const VehicleMap: React.FC = () => {
  return (
    <Card className="dashboard-card h-[500px]">
      <CardHeader className="dashboard-card-header">
        <CardTitle className="text-md font-medium flex items-center">
          <MapPin className="mr-2 h-5 w-5 text-primary" />
          Vehicle Tracking
        </CardTitle>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="status-indicator status-active"></div>
            <span>Moving (8)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="status-indicator status-idle"></div>
            <span>Idle (3)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="status-indicator status-offline"></div>
            <span>Offline (2)</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 h-[calc(100%-60px)] relative">
        {/* Map placeholder - would be replaced with actual map component */}
        <div className="h-full bg-telemko-gray-100 flex items-center justify-center relative">
          {/* Placeholder for map */}
          <div className="text-center text-gray-400">
            <Navigation className="h-16 w-16 mx-auto mb-3 text-telemko-blue-300" />
            <p className="text-lg font-medium">Interactive Map</p>
            <p className="text-sm">Real-time GPS tracking visualization</p>
          </div>
          
          {/* Sample vehicle indicators */}
          <div className="absolute top-1/4 left-1/3 flex flex-col items-center">
            <div className="bg-primary text-white p-1 rounded-full">
              <MapPin size={16} />
            </div>
            <div className="bg-white text-xs p-1 rounded shadow-md mt-1">
              TX-001
            </div>
          </div>
          
          <div className="absolute top-2/3 right-1/3 flex flex-col items-center">
            <div className="bg-telemko-yellow-500 text-white p-1 rounded-full">
              <MapPin size={16} />
            </div>
            <div className="bg-white text-xs p-1 rounded shadow-md mt-1">
              VN-003
            </div>
          </div>
          
          <div className="absolute bottom-1/4 left-1/2 flex flex-col items-center">
            <div className="bg-telemko-gray-400 text-white p-1 rounded-full">
              <MapPin size={16} />
            </div>
            <div className="bg-white text-xs p-1 rounded shadow-md mt-1">
              SD-010
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleMap;
