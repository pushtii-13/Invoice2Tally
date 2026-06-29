import { FileText, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import StatsCard from "@/components/dashboard/StatsCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { mockKPI, mockBarData, mockPieData, mockRecentActivity } from "@/utils/mockData";

const COLORS = ["#4A7FB5", "#B8D4E8", "#f87171"];

function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-400">Welcome back! Here's what's happening.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4">
        <StatsCard title="Total Invoices" value={mockKPI.total} icon={FileText} iconBg="bg-[#B8D4E8]" iconColor="text-[#4A7FB5]" />
        <StatsCard title="Processed" value={mockKPI.processed} icon={CheckCircle} iconBg="bg-green-100" iconColor="text-green-600" />
        <StatsCard title="Pending" value={mockKPI.pending} icon={Clock} iconBg="bg-yellow-100" iconColor="text-yellow-600" />
        <StatsCard title="Failed" value={mockKPI.failed} icon={AlertCircle} iconBg="bg-red-100" iconColor="text-red-500" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="col-span-2 border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-sm text-gray-600">Monthly Upload Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={mockBarData}>
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="invoices" fill="#4A7FB5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-sm text-gray-600">Status Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie data={mockPieData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value">
                  {mockPieData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex gap-3 mt-2">
              {mockPieData.map((entry, index) => (
                <div key={index} className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                  <span className="text-xs text-gray-500">{entry.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <RecentActivity data={mockRecentActivity} />
    </div>
  );
}

export default DashboardPage;