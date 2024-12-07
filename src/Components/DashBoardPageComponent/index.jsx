import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ChevronDown, BarChart2, FileText, Settings, LogOut, ChevronRight } from 'lucide-react';

// Assuming these components are defined elsewhere in your project
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Switch } from "../ui/switch";

// Mock data for projects
const projects = [
  { id: 1, name: 'Project Alpha', addedDate: '2023-05-15', totalApis: 25, incidents: 3, onCallPerson: 'John Doe' },
  { id: 2, name: 'Project Beta', addedDate: '2023-06-01', totalApis: 18, incidents: 1, onCallPerson: 'Jane Smith' },
  { id: 3, name: 'Project Gamma', addedDate: '2023-06-20', totalApis: 32, incidents: 5, onCallPerson: 'Bob Johnson' },
];

// Mock data for API calls chart
const apiCallsData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  calls: Math.floor(Math.random() * 5000) + 1000,
  responseTime: Math.random() * 100 + 50,
}));

// Mock data for incident types pie chart
const incidentTypesData = [
  { name: 'Server Error', value: 400 },
  { name: 'Timeout', value: 300 },
  { name: 'Auth Failure', value: 200 },
  { name: 'Rate Limit', value: 100 },
];

// Mock data for affected APIs
const affectedApis = [
  { endpoint: '/api/users', incidents: 15, status: 'critical', responseTime: '250ms', uptime: '98.5%' },
  { endpoint: '/api/orders', incidents: 8, status: 'warning', responseTime: '180ms', uptime: '99.1%' },
  { endpoint: '/api/products', incidents: 3, status: 'stable', responseTime: '120ms', uptime: '99.9%' },
  { endpoint: '/api/auth', incidents: 5, status: 'warning', responseTime: '200ms', uptime: '99.5%' },
];

const COLORS = ['#9333EA', '#A855F7', '#C084FC', '#D8B4FE'];
const TIME_RANGES = ['24h', '7d', '30d', '90d'];

function DashboardPageComponent() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [timeRange, setTimeRange] = useState('24h');
  const [showApiList, setShowApiList] = useState(false);
  
  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-64 bg-black/50 backdrop-blur-sm p-4 border-r border-gray-800">
        <h1 className="text-2xl font-bold mb-8 text-[#9333EA]">Radar</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10">
                    <BarChart2 className="mr-2 h-4 w-4" />
                    Projects
                    <ChevronDown className="ml-auto h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-black/90 backdrop-blur-sm border border-gray-800">
                  {projects.map((project) => (
                    <DropdownMenuItem key={project.id} onSelect={() => setSelectedProject(project)} className="text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10">
                      {project.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10">
                <FileText className="mr-2 h-4 w-4" />
                Invoices
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10">
                <Settings className="mr-2 h-4 w-4" />
                Account Settings
              </Button>
            </li>
          </ul>
        </nav>
        <Button variant="ghost" className="w-full justify-start mt-auto text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8 overflow-auto bg-black/80">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#9333EA]">{selectedProject.name} Dashboard</h2>
          <div className="flex gap-2">
            {TIME_RANGES.map((range) => (
              <Button
                key={range}
                variant="ghost"
                className={`${
                  timeRange === range ? 'bg-[#9333EA]/20 text-[#9333EA]' : 'text-white'
                } hover:bg-[#9333EA]/10 hover:text-[#9333EA]`}
                onClick={() => setTimeRange(range)}
              >
                {range}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Project overview cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { title: "Added Date", value: selectedProject.addedDate },
            { title: "Total APIs", value: selectedProject.totalApis },
            { title: "Incidents Reported", value: selectedProject.incidents },
            { title: "On-Call Person", value: selectedProject.onCallPerson },
          ].map((item, index) => (
            <Card key={index} className="bg-black/50 backdrop-blur-sm border border-gray-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{item.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* API Response Time Chart */}
        <Card className="bg-black/50 backdrop-blur-sm border border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="text-[#9333EA]">API Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={apiCallsData}>
                <defs>
                  <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9333EA" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#9333EA" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="time" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: '1px solid #444' }}
                  labelStyle={{ color: '#9333EA' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="responseTime" 
                  stroke="#9333EA" 
                  fillOpacity={1} 
                  fill="url(#colorCalls)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Most Affected APIs */}
        <Card className="bg-black/50 backdrop-blur-sm border border-gray-800 mb-8">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-[#9333EA]">Most Affected APIs</CardTitle>
            <Button 
              variant="ghost" 
              className="text-white hover:text-[#9333EA]"
              onClick={() => setShowApiList(true)}
            >
              View All
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {affectedApis.slice(0, 2).map((api, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-black/30">
                  <div>
                    <div className="font-medium text-white">{api.endpoint}</div>
                    <div className="text-sm text-gray-400">
                      {api.incidents} incidents • {api.responseTime} avg response
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm ${
                      api.status === 'critical' ? 'text-red-500' : 
                      api.status === 'warning' ? 'text-yellow-500' : 
                      'text-green-500'
                    }`}>
                      {api.uptime} uptime
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Incident Types Chart */}
        <Card className="bg-black/50 backdrop-blur-sm border border-gray-800">
          <CardHeader>
            <CardTitle className="text-[#9333EA]">Incident Types</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={incidentTypesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {incidentTypesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: '1px solid #444' }}
                  labelStyle={{ color: '#9333EA' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* API List Dialog */}
        <Dialog open={showApiList} onOpenChange={setShowApiList}>
          <DialogContent className="bg-black/90 backdrop-blur-sm border border-gray-800 text-white max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-[#9333EA]">All APIs</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {affectedApis.map((api, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-black/30">
                  <div>
                    <div className="font-medium text-white">{api.endpoint}</div>
                    <div className="text-sm text-gray-400">
                      {api.incidents} incidents • {api.responseTime} avg response
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className={`text-sm ${
                      api.status === 'critical' ? 'text-red-500' : 
                      api.status === 'warning' ? 'text-yellow-500' : 
                      'text-green-500'
                    }`}>
                      {api.uptime} uptime
                    </div>
                    <Switch />
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default DashboardPageComponent;