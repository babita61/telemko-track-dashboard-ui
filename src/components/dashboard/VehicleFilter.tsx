
import React from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const VehicleFilter: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-card mb-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="Search vehicles by ID, driver, or location..." 
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter size={16} />
                <span>Status</span>
                <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>Moving</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Idle</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Offline</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Maintenance</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter size={16} />
                <span>Group</span>
                <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Filter by Group</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>Delivery Trucks</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Passenger Vans</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Service Vehicles</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Heavy Equipment</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter size={16} />
                <span>Region</span>
                <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Filter by Region</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>North</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>South</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>East</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>West</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="secondary" size="sm">
            Clear Filters
          </Button>
        </div>
      </div>
      
      <div className="mt-3 flex flex-wrap gap-2">
        <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">
          Status: Moving
          <Button variant="ghost" size="icon" className="h-4 w-4 ml-1 hover:bg-transparent">
            ×
          </Button>
        </Badge>
        <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">
          Group: Delivery Trucks
          <Button variant="ghost" size="icon" className="h-4 w-4 ml-1 hover:bg-transparent">
            ×
          </Button>
        </Badge>
        <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">
          Region: North
          <Button variant="ghost" size="icon" className="h-4 w-4 ml-1 hover:bg-transparent">
            ×
          </Button>
        </Badge>
      </div>
    </div>
  );
};

export default VehicleFilter;
