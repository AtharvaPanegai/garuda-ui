/** @format */

import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  ChevronDown,
  BarChart2,
  FileText,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

// Assuming these components are defined elsewhere in your project
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Switch } from "../ui/switch";
import { useDashboard } from "@/hooks/useDashboard";
import DashboardSkeleTon from "./skeleton";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices/userSlice";
import { setAllProjects } from "@/redux/slices/projectSlice";

const COLORS = ["#9333EA", "#A855F7", "#C084FC", "#D8B4FE"];
// const TIME_RANGES = ["24h", "7d", "30d", "90d"];

function DashboardPageComponent() {
  // states
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});
  const [timeRange, setTimeRange] = useState("24h");
  const [showApiList, setShowApiList] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const [currentUserState, setCurrentUserState] = useState(null);

  const [error, setError] = useState("");

  // custom Hooks
  const { signOut } = useAuth();
  const { getDashBoardDataForProject, getProjects, loading } = useDashboard();

  // navigation
  const navigate = useNavigate();

  // redux
  const dispatch = useDispatch();
  let currentUser = useSelector((state) => state.user.userInfo);
  let allProjects = useSelector((state)=>state.project.allProjects);

  const _navigateToGivenPage = (pagePath) => {
    navigate(pagePath);
  };

  const fetchSingleProjectReport = async (projectId) => {
    console.log(projectId);
    try {
      let fetchedDashboardData = await getDashBoardDataForProject(projectId);
      setDashboardData(fetchedDashboardData);
      setSelectedProject(fetchedDashboardData.project);
    } catch (err) {
      console.error("Failed to fetch Projects", JSON.stringify(err));
      setError(
        err.message || `Failed to fetch Projects try again after sometime`
      );
    }
  };

  const fetchAllProjects = async () => {
    setError(null);

    try {
      let fetchedProjects = await getProjects(currentUser._id);
      setProjects(fetchedProjects);
      console.log("this is before dispatch", fetchedProjects);
      dispatch(setAllProjects({ projects: fetchedProjects }));
    } catch (err) {
      console.error("Failed to fetch Projects", JSON.stringify(err));
      setError(
        err.message || `Failed to fetch Projects try again after sometime`
      );
    }
  };

  useEffect(() => {
    if (currentUser) {
      setCurrentUserState(currentUser);
    }
  }, [currentUser]);

  useEffect(() => {
    if(!allProjects){  
      fetchAllProjects();
    }
    fetchSingleProjectReport(currentUser.projects[0] ?? projects[0]._id);
  }, []);


  const _signOutUser = async () => {
    try {
      await signOut();
      _navigateToGivenPage("/");
      sessionStorage.clear();
      dispatch(logout());
    } catch (err) {
      console.error(`Failed to Signout!... Something went wrong!`);
      setError(err.message || `Failed to Signout!... Something went wrong!`);
    }
  };

  // loading skeleton
  if (projects?.length < 1 || loading || !dashboardData) {
    return <DashboardSkeleTon />;
  }
  return (
    <div className='flex h-screen bg-black text-white'>
      {/* Sidebar */}
      <div className='w-64 bg-black/50 backdrop-blur-sm p-4 border-r border-gray-800'>
        <h1 className='text-2xl font-bold mb-8 text-[#9333EA]'>Garuda</h1>
        <nav>
          <ul className='space-y-2'>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='ghost'
                    className='w-full justify-start text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10'>
                    <BarChart2 className='mr-2 h-4 w-4' />
                    Projects
                    <ChevronDown className='ml-auto h-4 w-4' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-56 bg-black/90 backdrop-blur-sm border border-gray-800'>
                  {projects.map((project) => (
                    <DropdownMenuItem
                      key={project._id}
                      onSelect={() => fetchSingleProjectReport(project._id)}
                      className='text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10'>
                      {project.projectName}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Button
                variant='ghost'
                onClick={() => _navigateToGivenPage("/invoices")}
                className='w-full justify-start text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10'>
                <FileText className='mr-2 h-4 w-4' />
                Invoices
              </Button>
            </li>
            <li>
              <Button
                variant='ghost'
                onClick={() => _navigateToGivenPage("/projectsettings")}
                className='w-full justify-start text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10'>
                <FileText className='mr-2 h-4 w-4' />
                Project Settings
              </Button>
            </li>
            <li>
              <Button
                onClick={() => _navigateToGivenPage("/settings")}
                variant='ghost'
                className='w-full justify-start text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10'>
                <Settings className='mr-2 h-4 w-4' />
                Account Settings
              </Button>
            </li>
          </ul>
        </nav>
        <Button
          onClick={_signOutUser}
          variant='ghost'
          className='w-full justify-start mt-auto text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10'>
          <LogOut className='mr-2 h-4 w-4' />
          Logout
        </Button>
      </div>

      {/* Main content */}
      <div className='flex-1 p-8 overflow-auto bg-black/80'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-3xl font-bold text-[#9333EA]'>
            {selectedProject.projectName} Dashboard
          </h2>
          {/* <div className='flex gap-2'>
            {TIME_RANGES.map((range) => (
              <Button
                key={range}
                variant='ghost'
                className={`${
                  timeRange === range
                    ? "bg-[#9333EA]/20 text-[#9333EA]"
                    : "text-white"
                } hover:bg-[#9333EA]/10 hover:text-[#9333EA]`}
                onClick={() => setTimeRange(range)}>
                {range}
              </Button>
            ))}
          </div> */}
        </div>

        {/* Project overview cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
          {[
            { title: "Added Date", value: dashboardData?.projectAge },
            { title: "Total APIs", value: dashboardData?.totalApisCount },
            {
              title: "Incidents Reported",
              value: dashboardData?.totalIncidentsReported.length,
            },
            { title: "On-Call Person", value: dashboardData?.onCallPerson },
          ].map((item, index) => (
            <Card
              key={index}
              className='bg-black/50 backdrop-blur-sm border border-gray-800'>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium text-gray-400'>
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold text-white'>
                  {item.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* API Response Time Chart */}
        <Card className='bg-black/50 backdrop-blur-sm border border-gray-800 mb-8'>
          <CardHeader>
            <CardTitle className='text-[#9333EA]'>API Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width='100%' height={300}>
              <AreaChart data={dashboardData?.apiHitsReport}>
                <defs>
                  <linearGradient id='colorCalls' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='5%' stopColor='#9333EA' stopOpacity={0.3} />
                    <stop offset='95%' stopColor='#9333EA' stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray='3 3' stroke='#444' />
                <XAxis dataKey='date' stroke='#888' />
                <YAxis dataKey='hits' stroke='#888' />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    border: "1px solid #444",
                  }}
                  labelStyle={{ color: "#9333EA" }}
                />
                <Area
                  type='monotone'
                  dataKey='hits'
                  stroke='#9333EA'
                  fillOpacity={1}
                  fill='url(#colorCalls)'
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Most Affected APIs */}
        {/* <Card className='bg-black/50 backdrop-blur-sm border border-gray-800 mb-8'>
          <CardHeader className='flex flex-row items-center justify-between'>
            <CardTitle className='text-[#9333EA]'>Project APIs</CardTitle>
            <Button
              variant='ghost'
              className='text-white hover:text-[#9333EA]'
              onClick={() => setShowApiList(true)}>
              View All
              <ChevronRight className='ml-2 h-4 w-4' />
            </Button>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              {dashboardData?.totalApisForProject
                .slice(0, 2)
                .map((api, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-4 rounded-lg bg-black/30'>
                    <div>
                      <div className='font-medium text-white'>
                        {api.apiEndPoint}
                      </div>
                      <div className='text-sm text-gray-400'>
                        {api.incidents} incidents • {api.responseTime} avg
                        response
                      </div>
                    </div>
                    <div className='text-right'>
                      <div
                        className={`text-sm ${
                          api.status === "critical"
                            ? "text-red-500"
                            : api.status === "warning"
                            ? "text-yellow-500"
                            : "text-green-500"
                        }`}>
                        {api.uptime} uptime
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card> */}

        {/* Incident Types Chart */}
        <Card className='bg-black/50 backdrop-blur-sm border border-gray-800'>
          <CardHeader>
            <CardTitle className='text-[#9333EA]'>Incident Types</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width='100%' height={300}>
              <PieChart>
                <Pie
                  data={dashboardData?.statusSummaryArray}
                  cx='50%'
                  cy='50%'
                  labelLine={false}
                  outerRadius={80}
                  fill='#8884d8'
                  dataKey='value'
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }>
                  {dashboardData?.statusSummaryArray.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    border: "1px solid #444",
                  }}
                  labelStyle={{ color: "#9333EA" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* API List Dialog */}
        <Dialog open={showApiList} onOpenChange={setShowApiList}>
          <DialogContent className='bg-black/90 backdrop-blur-sm border border-gray-800 text-white max-w-4xl'>
            <DialogHeader>
              <DialogTitle className='text-[#9333EA]'>All APIs</DialogTitle>
            </DialogHeader>
            <div className='space-y-4'>
              {dashboardData?.totalApisForProject.map((api, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between p-4 rounded-lg bg-black/30'>
                  <div>
                    <div className='font-medium text-white'>
                      {api.apiEndPoint}
                    </div>
                    <div className='text-sm text-gray-400'>
                      {api.incidents} incidents • {api.responseTime} avg
                      response
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div
                      className={`text-sm ${
                        api.status === "critical"
                          ? "text-red-500"
                          : api.status === "warning"
                          ? "text-yellow-500"
                          : "text-green-500"
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
