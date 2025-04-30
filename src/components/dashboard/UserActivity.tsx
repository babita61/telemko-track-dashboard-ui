
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { UsersRound, MoreHorizontal, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const users = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Fleet Manager',
    status: 'active',
    lastSeen: 'Now',
    avatar: 'JS'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Driver',
    status: 'active',
    lastSeen: '5 minutes ago',
    avatar: 'SJ'
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Maintenance Staff',
    status: 'inactive',
    lastSeen: '2 hours ago',
    avatar: 'MB'
  },
  {
    id: 4,
    name: 'Emily Wilson',
    role: 'Administrator',
    status: 'active',
    lastSeen: '10 minutes ago',
    avatar: 'EW'
  },
  {
    id: 5,
    name: 'Robert Chen',
    role: 'Driver',
    status: 'inactive',
    lastSeen: '1 day ago',
    avatar: 'RC'
  }
];

const UserActivity: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');
  
  const filteredUsers = users.filter(user => {
    if (filter === 'all') return true;
    return user.status === filter;
  });

  return (
    <Card className="dashboard-card">
      <CardHeader className="dashboard-card-header">
        <CardTitle className="text-md font-medium flex items-center">
          <UsersRound className="mr-2 h-5 w-5 text-primary" />
          User Activity
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
            <DropdownMenuItem className="cursor-pointer">View All Users</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Export Data</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Send Notification</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex space-x-2">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setFilter('all')}
          >
            All Users
          </Button>
          <Button 
            variant={filter === 'active' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setFilter('active')}
            className="flex items-center"
          >
            <CheckCircle className="mr-1 h-4 w-4 text-green-500" /> Active
          </Button>
          <Button 
            variant={filter === 'inactive' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setFilter('inactive')}
            className="flex items-center"
          >
            <XCircle className="mr-1 h-4 w-4 text-gray-500" /> Inactive
          </Button>
        </div>
        
        <div className="space-y-2">
          {filteredUsers.map((user) => (
            <div key={user.id} className="p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors cursor-pointer flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
                  {user.avatar}
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium">{user.name}</div>
                  <div className="text-xs text-gray-500">{user.role}</div>
                </div>
              </div>
              <div className="flex items-center">
                {user.status === 'active' ? (
                  <Badge className="mr-2 bg-green-100 text-green-800 hover:bg-green-200">Active</Badge>
                ) : (
                  <Badge variant="outline" className="mr-2 bg-gray-100 text-gray-800 hover:bg-gray-200">Inactive</Badge>
                )}
                <div className="text-xs text-gray-500 flex items-center">
                  <Clock size={14} className="mr-1" />
                  {user.lastSeen}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserActivity;
