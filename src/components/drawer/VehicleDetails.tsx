
import React from 'react';

interface VehicleDetailsProps {
  data: any;
}

const VehicleDetails: React.FC<VehicleDetailsProps> = ({ data }) => {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-medium">{data?.id || 'Vehicle Details'}</h3>
        <p className="text-sm text-gray-500">{data?.location || 'Location information'}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 bg-white border rounded-md">
          <div className="text-xs text-gray-500">Driver</div>
          <div className="font-medium">{data?.driver || 'Not assigned'}</div>
        </div>
        <div className="p-3 bg-white border rounded-md">
          <div className="text-xs text-gray-500">Status</div>
          <div className="font-medium">{data?.status || 'Unknown'}</div>
        </div>
        <div className="p-3 bg-white border rounded-md">
          <div className="text-xs text-gray-500">Fuel Level</div>
          <div className="font-medium">78%</div>
        </div>
        <div className="p-3 bg-white border rounded-md">
          <div className="text-xs text-gray-500">Mileage</div>
          <div className="font-medium">12,458 km</div>
        </div>
      </div>
      
      <div className="p-4 border rounded-lg">
        <h4 className="font-medium mb-2">Recent Activity</h4>
        <ul className="space-y-2">
          <li className="text-sm p-2 bg-gray-50 rounded">Started trip at 9:45 AM</li>
          <li className="text-sm p-2 bg-gray-50 rounded">Fuel refill at 8:30 AM</li>
          <li className="text-sm p-2 bg-gray-50 rounded">Maintenance check completed yesterday</li>
        </ul>
      </div>
    </div>
  );
};

export default VehicleDetails;
