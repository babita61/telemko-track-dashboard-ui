
import React from 'react';

interface DriverDetailsProps {
  data: any;
}

const DriverDetails: React.FC<DriverDetailsProps> = ({ data }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center mb-4">
        <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
          {data?.avatar || 'U'}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium">{data?.name || 'Driver Name'}</h3>
          <p className="text-sm text-gray-500">{data?.role || 'Role'}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 bg-white border rounded-md">
          <div className="text-xs text-gray-500">Assigned Vehicle</div>
          <div className="font-medium">{data?.vehicle || 'None'}</div>
        </div>
        <div className="p-3 bg-white border rounded-md">
          <div className="text-xs text-gray-500">Phone</div>
          <div className="font-medium">+977 98XXXXXXXX</div>
        </div>
      </div>
      
      <div className="p-4 border rounded-lg">
        <h4 className="font-medium mb-2">Driver Score</h4>
        <div className="flex items-center">
          <div className="text-2xl font-semibold">85</div>
          <div className="ml-2 text-xs">/ 100</div>
        </div>
        <div className="mt-2">
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="p-4 border rounded-lg">
        <h4 className="font-medium mb-2">Recent Trips</h4>
        <ul className="space-y-2">
          <li className="text-sm p-2 bg-gray-50 rounded">Kathmandu to Pokhara - Today</li>
          <li className="text-sm p-2 bg-gray-50 rounded">Pokhara to Chitwan - Yesterday</li>
          <li className="text-sm p-2 bg-gray-50 rounded">Chitwan to Kathmandu - 2 days ago</li>
        </ul>
      </div>
    </div>
  );
};

export default DriverDetails;
