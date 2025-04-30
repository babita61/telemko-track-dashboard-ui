
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MapPin, Navigation, Map } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const VehicleMap: React.FC = () => {
  const vehicleMarkers = [
    { 
      id: 'TX-001',
      position: { top: '25%', left: '35%' },
      status: 'active',
      driver: 'John Smith',
      speed: '65 km/h',
      location: 'Kathmandu',
      direction: 'North'
    },
    { 
      id: 'VN-003',
      position: { top: '45%', right: '30%' },
      status: 'idle',
      driver: 'Sarah Johnson',
      speed: '0 km/h',
      location: 'Pokhara',
      direction: 'Stationary'
    },
    { 
      id: 'SD-010',
      position: { bottom: '30%', left: '50%' },
      status: 'offline',
      driver: 'Michael Brown',
      speed: '0 km/h',
      location: 'Chitwan',
      direction: 'Stationary'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-primary text-white';
      case 'idle': return 'bg-telemko-yellow-500 text-white';
      case 'offline': return 'bg-telemko-gray-400 text-white';
      default: return 'bg-telemko-gray-400 text-white';
    }
  };

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
        {/* Map container */}
        <div className="h-full bg-telemko-gray-100 flex items-center justify-center relative">
          {/* Map controls */}
          <div className="absolute top-3 right-3 z-10 bg-white rounded shadow p-1">
            <div className="flex flex-col">
              <button className="p-1 hover:bg-gray-100 rounded">+</button>
              <button className="p-1 hover:bg-gray-100 rounded">−</button>
            </div>
          </div>
          
          {/* Map layers toggle */}
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="outline" className="bg-white cursor-pointer hover:bg-gray-100">
              <Map className="h-4 w-4 mr-1" />
              Map Layers
            </Badge>
          </div>
          
          {/* Map placeholder with stylized elements */}
          <div className="w-full h-full overflow-hidden">
            <div className="h-full w-full relative">
              {/* Stylized map background */}
              <div className="absolute inset-0">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#e9e9e9" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill="#f5f5f5" />
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Stylized "rivers" */}
                  <path d="M 0 200 Q 100 150, 200 200 T 400 200 T 600 200" stroke="#b3d1ff" strokeWidth="10" fill="none" />
                  <path d="M 300 0 Q 350 100, 300 200 T 300 400 T 300 600" stroke="#b3d1ff" strokeWidth="8" fill="none" />
                  
                  {/* Stylized "roads" */}
                  <path d="M 0 100 H 600" stroke="#e0e0e0" strokeWidth="3" fill="none" />
                  <path d="M 0 300 H 600" stroke="#e0e0e0" strokeWidth="3" fill="none" />
                  <path d="M 100 0 V 400" stroke="#e0e0e0" strokeWidth="3" fill="none" />
                  <path d="M 400 0 V 400" stroke="#e0e0e0" strokeWidth="3" fill="none" />
                  
                  {/* City markers */}
                  <circle cx="150" cy="150" r="8" fill="#d1d1d1" />
                  <text x="160" y="155" fontSize="12" fill="#666">Kathmandu</text>
                  
                  <circle cx="350" cy="250" r="7" fill="#d1d1d1" />
                  <text x="360" y="255" fontSize="12" fill="#666">Pokhara</text>
                  
                  <circle cx="250" cy="350" r="6" fill="#d1d1d1" />
                  <text x="260" y="355" fontSize="12" fill="#666">Chitwan</text>
                </svg>
              </div>
              
              {/* Vehicle markers */}
              <TooltipProvider>
                {vehicleMarkers.map((marker) => (
                  <Tooltip key={marker.id}>
                    <TooltipTrigger asChild>
                      <div className="absolute flex flex-col items-center cursor-pointer" style={marker.position as React.CSSProperties}>
                        <div className={`p-1 rounded-full ${getStatusColor(marker.status)}`}>
                          <MapPin size={16} />
                        </div>
                        <div className="bg-white text-xs p-1 rounded shadow-md mt-1">
                          {marker.id}
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-white p-3 rounded shadow-lg z-50">
                      <div className="space-y-1">
                        <div className="font-bold">{marker.id} - {marker.location}</div>
                        <div className="text-sm">Driver: {marker.driver}</div>
                        <div className="text-sm">Speed: {marker.speed}</div>
                        <div className="text-sm">Direction: {marker.direction}</div>
                        <div className="text-sm flex items-center">
                          Status: 
                          <span className={`ml-1 inline-block w-3 h-3 rounded-full ${marker.status === 'active' ? 'bg-green-500' : marker.status === 'idle' ? 'bg-yellow-500' : 'bg-gray-400'}`}></span>
                          <span className="ml-1">{marker.status === 'active' ? 'Moving' : marker.status === 'idle' ? 'Idle' : 'Offline'}</span>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
              
              {/* Navigation indicator */}
              <div className="absolute bottom-5 right-5 bg-white p-2 rounded shadow">
                <Navigation className="h-5 w-5 text-telemko-blue-300" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleMap;
