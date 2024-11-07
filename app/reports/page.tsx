import React from 'react'
import { BarChart, Bell, CreditCard, Download, FileText, PieChart,TrendingUp } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Nav from '../components/navbar'

export default function ReportsPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-md">
        <div className="flex items-center mb-8">
          <CreditCard className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-2xl font-bold">Wibmo Pay</span>
        </div>
        <Nav />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <div className="flex items-center space-x-4">
            <Input type="search" placeholder="Search reports..." className="w-64" />
            <Button size="icon" variant="ghost">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Report Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Transaction Reports
              </CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">
                Available report types
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Financial Reports
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                Available report types
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                System Reports
              </CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">
                Available report types
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Report Generator */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Generate Report</CardTitle>
            <CardDescription>Select parameters to generate your custom report</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="transaction" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="transaction">Transaction</TabsTrigger>
                <TabsTrigger value="financial">Financial</TabsTrigger>
                <TabsTrigger value="system">System</TabsTrigger>
              </TabsList>
              <TabsContent value="transaction" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="report-type" className="text-sm font-medium">Report Type</label>
                    <Select>
                      <SelectTrigger id="report-type">
                        <SelectValue placeholder="Select report type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily Transactions</SelectItem>
                        <SelectItem value="monthly">Monthly Summary</SelectItem>
                        <SelectItem value="user">User Activity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="date-range" className="text-sm font-medium">Date Range</label>
                    <Select>
                      <SelectTrigger id="date-range">
                        <SelectValue placeholder="Select date range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7d">Last 7 days</SelectItem>
                        <SelectItem value="30d">Last 30 days</SelectItem>
                        <SelectItem value="90d">Last 90 days</SelectItem>
                        <SelectItem value="custom">Custom Range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="financial" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="financial-report-type" className="text-sm font-medium">Report Type</label>
                    <Select>
                      <SelectTrigger id="financial-report-type">
                        <SelectValue placeholder="Select report type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="revenue">Revenue Report</SelectItem>
                        <SelectItem value="expenses">Expense Report</SelectItem>
                        <SelectItem value="profit-loss">Profit & Loss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="financial-period" className="text-sm font-medium">Period</label>
                    <Select>
                      <SelectTrigger id="financial-period">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                        <SelectItem value="yearly">Yearly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="system" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="system-report-type" className="text-sm font-medium">Report Type</label>
                    <Select>
                      <SelectTrigger id="system-report-type">
                        <SelectValue placeholder="Select report type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="performance">System Performance</SelectItem>
                        <SelectItem value="errors">Error Logs</SelectItem>
                        <SelectItem value="usage">Resource Usage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="system-timeframe" className="text-sm font-medium">Timeframe</label>
                    <Select>
                      <SelectTrigger id="system-timeframe">
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="24h">Last 24 hours</SelectItem>
                        <SelectItem value="7d">Last 7 days</SelectItem>
                        <SelectItem value="30d">Last 30 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Reset</Button>
            <Button>Generate Report</Button>
          </CardFooter>
        </Card>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
            <CardDescription>Your recently generated reports</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                { name: 'March 2024 Transaction Summary', type: 'Transaction', date: '2024-04-01' },
                { name: 'Q1 2024 Financial Report', type: 'Financial', date: '2024-04-05' },
                { name: 'System Performance Report - Last 7 Days', type: 'System', date: '2024-04-07' },
                { name: 'User Activity Report - March 2024', type: 'Transaction', date: '2024-04-02' },
                { name: 'Error Log Summary - Last 30 Days', type: 'System', date: '2024-04-06' },
              ].map((report, index) => (
                <li key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                  <div className="flex items-center space-x-4">
                    <FileText className="h-6 w-6 text-blue-500" />
                    <div>
                      <p className="font-medium">{report.name}</p>
                      <p className="text-sm text-gray-500">{report.type} Report • Generated on {report.date}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Reports</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}