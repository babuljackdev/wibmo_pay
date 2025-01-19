"use client"

import React from 'react'
import { Bell, ChevronDown, Search, ArrowUpRight, ArrowDownRight, CreditCard } from 'lucide-react'
import { Line, Bar, Pie } from 'react-chartjs-2'
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
  ScriptableContext,
  TooltipItem,
} from 'chart.js'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Nav from '../components/navbar'

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

// Chart Data
const revenueData: ChartData<'line'> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [3000, 4500, 4200, 5800, 5200, 6500],
      borderColor: 'rgb(99, 102, 241)',
      backgroundColor: (context: ScriptableContext<'line'>) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.3)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
        return gradient;
      },
      fill: true,
      tension: 0.4,
      pointBackgroundColor: 'rgb(99, 102, 241)',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
    },
  ],
}

const transactionData: ChartData<'bar'> = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Transactions',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: (context: ScriptableContext<'bar'>) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.8)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0.2)');
        return gradient;
      },
      borderRadius: 8,
      borderWidth: 0,
      maxBarThickness: 40,
    },
  ],
}

const paymentMethodData: ChartData<'pie'> = {
  labels: ['Credit Card', 'Debit Card', 'UPI', 'Net Banking', 'Wallet'],
  datasets: [
    {
      data: [35, 25, 20, 15, 5],
      backgroundColor: [
        'rgba(99, 102, 241, 0.8)',  // Indigo
        'rgba(59, 130, 246, 0.8)',  // Blue
        'rgba(147, 51, 234, 0.8)',  // Purple
        'rgba(236, 72, 153, 0.8)',  // Pink
        'rgba(248, 113, 113, 0.8)', // Red
      ],
      borderColor: '#ffffff',
      borderWidth: 2,
      hoverOffset: 15,
    },
  ],
}

const baseOptions = {
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
      bodySpacing: 8,
      usePointStyle: true,
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

const lineChartOptions: ChartOptions<'line'> = {
  ...baseOptions,
}

const barChartOptions: ChartOptions<'bar'> = {
  ...baseOptions,
}

const pieOptions: ChartOptions<'pie'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right' as const,
      labels: {
        padding: 20,
        usePointStyle: true,
        pointStyle: 'circle',
        font: {
          size: 12,
        },
      },
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
        label: function(context: TooltipItem<'pie'>) {
          const value = context.raw as number;
          return ` ${value}% of total transactions`;
        },
      },
    },
  },
  cutout: '60%',
  animation: {
    animateScale: true,
    animateRotate: true,
  },
}

export default function PaymentGatewayDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
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

      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Payment Gateway Dashboard</h1>
              <p className="text-gray-600 mt-1">Monitor and manage your payment transactions</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input className="pl-10 w-[300px]" placeholder="Search transactions..." />
              </div>
              <div className="relative">
                <Button variant="outline" className="gap-2">
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">3</span>
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/avatar.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-1 cursor-pointer">
                  <span className="text-sm font-medium">John Doe</span>
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Volume</CardTitle>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <div className="flex items-center text-emerald-600 text-sm">
                    <ArrowUpRight size={16} className="mr-1" />
                    +12.5%
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-gray-500">Compared to last month</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Success Rate</CardTitle>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">98.2%</div>
                  <div className="flex items-center text-emerald-600 text-sm">
                    <ArrowUpRight size={16} className="mr-1" />
                    +0.8%
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-gray-500">Last 24 hours</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Average Value</CardTitle>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">$1,250.00</div>
                  <div className="flex items-center text-red-600 text-sm">
                    <ArrowDownRight size={16} className="mr-1" />
                    -3.2%
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-gray-500">Per transaction</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Failed Transactions</CardTitle>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">1.8%</div>
                  <div className="flex items-center text-emerald-600 text-sm">
                    <ArrowUpRight size={16} className="mr-1" />
                    +0.3%
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-gray-500">Last 24 hours</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>Monthly revenue over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <Line data={revenueData} options={lineChartOptions} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Transaction Volume</CardTitle>
                <CardDescription>Daily transaction count for the week</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <Bar data={transactionData} options={barChartOptions} />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Distribution of payment methods used</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <Pie data={paymentMethodData} options={pieOptions} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest payment activities</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">#TRX123456</TableCell>
                      <TableCell>$1,234.56</TableCell>
                      <TableCell><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Success</span></TableCell>
                      <TableCell>2 mins ago</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#TRX123455</TableCell>
                      <TableCell>$2,345.67</TableCell>
                      <TableCell><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Success</span></TableCell>
                      <TableCell>5 mins ago</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#TRX123454</TableCell>
                      <TableCell>$3,456.78</TableCell>
                      <TableCell><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Failed</span></TableCell>
                      <TableCell>10 mins ago</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}