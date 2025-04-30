
import React from 'react';

interface QuickSettingsProps {
  data: any;
}

const QuickSettings: React.FC<QuickSettingsProps> = ({ data }) => {
  return (
    <div className="space-y-6">
      <div className="p-4 border rounded-lg">
        <h3 className="font-medium mb-3">Map Settings</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm">Show Traffic</span>
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
              <span className="absolute h-4 w-4 rounded-full bg-white translate-x-1"></span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Show Points of Interest</span>
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
              <span className="absolute h-4 w-4 rounded-full bg-white translate-x-6"></span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Auto-refresh Map</span>
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
              <span className="absolute h-4 w-4 rounded-full bg-white translate-x-6"></span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 border rounded-lg">
        <h3 className="font-medium mb-3">Alert Preferences</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm">Email Notifications</span>
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
              <span className="absolute h-4 w-4 rounded-full bg-white translate-x-6"></span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">SMS Alerts</span>
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
              <span className="absolute h-4 w-4 rounded-full bg-white translate-x-1"></span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">In-App Notifications</span>
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
              <span className="absolute h-4 w-4 rounded-full bg-white translate-x-6"></span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 border rounded-lg">
        <h3 className="font-medium mb-3">Display Settings</h3>
        <div className="space-y-3">
          <div>
            <label className="text-sm block mb-1">Date Format</label>
            <select className="w-full border rounded p-2 text-sm">
              <option>DD/MM/YYYY</option>
              <option>MM/DD/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </div>
          <div>
            <label className="text-sm block mb-1">Measurement Units</label>
            <select className="w-full border rounded p-2 text-sm">
              <option>Metric (km, liters)</option>
              <option>Imperial (miles, gallons)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickSettings;
