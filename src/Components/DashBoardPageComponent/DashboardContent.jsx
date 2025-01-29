import React from "react"
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
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const COLORS = ["#9333EA", "#A855F7", "#C084FC", "#D8B4FE"]

function DashboardContent({ selectedProject, dashboardData }) {
  return (
    <div className="flex-1 p-8 overflow-auto bg-black/80">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-[#9333EA]">{selectedProject.projectName} Dashboard</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { title: "Added Date", value: dashboardData?.projectAge },
          { title: "Total APIs", value: dashboardData?.totalApisCount },
          { title: "Incidents Reported", value: dashboardData?.totalIncidentsReported.length },
          { title: "On-Call Person", value: dashboardData?.onCallPerson },
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

      <Card className="bg-black/50 backdrop-blur-sm border border-gray-800 mb-8">
        <CardHeader>
          <CardTitle className="text-[#9333EA]">API Response Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={dashboardData?.apiHitsReport}>
              <defs>
                <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9333EA" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#9333EA" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="date" stroke="#888" />
              <YAxis dataKey="hits" stroke="#888" />
              <Tooltip
                contentStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)", border: "1px solid #444" }}
                labelStyle={{ color: "#9333EA" }}
              />
              <Area type="monotone" dataKey="hits" stroke="#9333EA" fillOpacity={1} fill="url(#colorCalls)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-black/50 backdrop-blur-sm border border-gray-800">
        <CardHeader>
          <CardTitle className="text-[#9333EA]">Incident Types</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dashboardData?.statusSummaryArray}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {dashboardData?.statusSummaryArray.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)", border: "1px solid #444" }}
                labelStyle={{ color: "#9333EA" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

export default DashboardContent

