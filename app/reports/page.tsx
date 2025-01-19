'use client'

import React from 'react'
import { Bell, ChevronDown, CreditCard, Search, Download, Calendar, Filter, FileText, BarChart3, PieChart, TrendingUp, ArrowUpRight } from 'lucide-react'
import { Line, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  TooltipItem,
} from 'chart.js'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Nav from '../components/navbar'

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

// Chart Data
const transactionTrendData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Success Rate',
      data: [98.2, 98.5, 98.1, 98.7, 98.9, 99.1],
      borderColor: 'rgb(34, 197, 94)',
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
      fill: true,
      tension: 0.4,
      yAxisID: 'y',
    },
    {
      label: 'Transaction Volume',
      data: [1200, 1350, 1250, 1420, 1550, 1690],
      borderColor: 'rgb(99, 102, 241)',
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      fill: true,
      tension: 0.4,
      yAxisID: 'y1',
    },
  ],
}

const revenueByMethodData = {
  labels: ['Credit Card', 'Debit Card', 'UPI', 'Net Banking', 'Wallet'],
  datasets: [
    {
      data: [45000, 32000, 28000, 18000, 12000],
      backgroundColor: [
        'rgba(99, 102, 241, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(147, 51, 234, 0.8)',
        'rgba(236, 72, 153, 0.8)',
        'rgba(248, 113, 113, 0.8)',
      ],
      borderRadius: 8,
    },
  ],
}

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: 12,
      titleFont: {
        size: 14,
        weight: 'bold' as const,
      },
      bodyFont: {
        size: 13,
      },
      callbacks: {
        label: function(context: TooltipItem<'line'>) {
          const value = context.raw as number;
          return `Revenue: $${value.toLocaleString()}`;
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.05)',
      },
      ticks: {
        padding: 10,
        color: 'rgba(0, 0, 0, 0.6)',
      },
      border: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        padding: 10,
        color: 'rgba(0, 0, 0, 0.6)',
      },
      border: {
        display: false,
      },
    },
  },
  interaction: {
    intersect: false,
    mode: 'nearest' as const,
  },
  animation: {
    duration: 1000,
  },
}

const barChartOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: 12,
      titleFont: {
        size: 14,
        weight: 'bold' as const,
      },
      bodyFont: {
        size: 13,
      },
      callbacks: {
        label: function(context: TooltipItem<'bar'>) {
          const value = context.raw as number;
          return `Volume: ${value}`;
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.05)',
      },
      ticks: {
        padding: 10,
        color: 'rgba(0, 0, 0, 0.6)',
      },
      border: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        padding: 10,
        color: 'rgba(0, 0, 0, 0.6)',
      },
      border: {
        display: false,
      },
    },
  },
  interaction: {
    intersect: false,
    mode: 'nearest' as const,
  },
  animation: {
    duration: 1000,
  },
}

export default function ReportsPage() {
  return (
    <div className="flex h-screen bg-gray-50/50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 shadow-sm">
        <div className="flex items-center h-16 px-6 border-b border-gray-200">
          <CreditCard className="h-8 w-8 text-primary mr-2" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Wibmo Pay
          </span>
        </div>
        <div className="p-6">
          <Nav />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 px-8 flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                type="search" 
                placeholder="Search reports..." 
                className="w-64 pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors" 
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button size="icon" variant="ghost" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
            </Button>
            <div className="flex items-center space-x-2 border-l pl-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <button className="flex items-center space-x-1 text-sm font-medium">
                <span>Admin User</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
        </header>

        {/* Reports Content */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Reports Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
                <p className="text-gray-500 mt-1">Comprehensive insights into your payment operations</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  Date Range
                </Button>
                <Button variant="outline" className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Export Report
                </Button>
              </div>
            </div>

            {/* Report Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Total Revenue
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">$135,000</div>
                      <div className="flex items-center text-green-600 text-sm">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        +12.5%
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Success Rate
                  </CardTitle>
                  <BarChart3 className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">99.1%</div>
                      <div className="flex items-center text-green-600 text-sm">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        +0.2%
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Average Transaction
                  </CardTitle>
                  <PieChart className="h-4 w-4 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">$85.50</div>
                      <div className="flex items-center text-green-600 text-sm">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        +5.3%
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Total Reports
                  </CardTitle>
                  <FileText className="h-4 w-4 text-indigo-500" />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">24</div>
                      <p className="text-sm text-gray-500">Generated this month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Transaction Trends */}
              <Card className="hover:shadow-xl transition-shadow lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Transaction Trends</CardTitle>
                      <CardDescription>Success rate vs Transaction volume</CardDescription>
                    </div>
                    <Select defaultValue="6months">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7days">Last 7 days</SelectItem>
                        <SelectItem value="30days">Last 30 days</SelectItem>
                        <SelectItem value="6months">Last 6 months</SelectItem>
                        <SelectItem value="1year">Last year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full p-4">
                    <Line data={transactionTrendData} options={chartOptions} />
                  </div>
                </CardContent>
              </Card>

              {/* Revenue by Payment Method */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Revenue by Payment Method</CardTitle>
                      <CardDescription>Distribution across payment types</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full p-4">
                    <Bar data={revenueByMethodData} options={barChartOptions} />
                  </div>
                </CardContent>
              </Card>

              {/* Recent Reports */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Recent Reports</CardTitle>
                      <CardDescription>Latest generated reports</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View All</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Report Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Monthly Transaction Summary</TableCell>
                        <TableCell><Badge>Financial</Badge></TableCell>
                        <TableCell>2024-03-01</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Payment Method Analysis</TableCell>
                        <TableCell><Badge variant="outline">Analytics</Badge></TableCell>
                        <TableCell>2024-02-28</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Security Audit Report</TableCell>
                        <TableCell><Badge variant="secondary">Security</Badge></TableCell>
                        <TableCell>2024-02-25</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}