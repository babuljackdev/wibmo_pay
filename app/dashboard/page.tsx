import React from 'react'
import { Bell, CreditCard, Lock, Search, Shield, User } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import Nav from '../components/navbar'
export default function PaymentGatewayDashboard() {
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
          <h1 className="text-3xl font-bold">Payment Gateway Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Input type="search" placeholder="Search..." className="w-64" />
            <Button size="icon" variant="ghost">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Payment Gateway Integration */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Gateway</CardTitle>
              <CardDescription>Wibmo API Integration Status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span>API Connection</span>
                <Badge variant="success">Connected</Badge>
              </div>
              <Progress value={100} className="mt-2" />
              <p className="text-sm text-muted-foreground mt-2">Last sync: 2 minutes ago</p>
            </CardContent>
          </Card>

          {/* Fraud Detection and Security */}
          <Card>
            <CardHeader>
              <CardTitle>Fraud Detection</CardTitle>
              <CardDescription>AI-driven risk analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Risk Level</span>
                  <Badge variant="warning">Medium</Badge>
                </div>
                <Progress value={60} className="mt-2" />
                <p className="text-sm text-muted-foreground">3 transactions flagged today</p>
              </div>
            </CardContent>
          </Card>

          {/* OTP Generation and Validation */}
          <Card>
            <CardHeader>
              <CardTitle>OTP System</CardTitle>
              <CardDescription>Secure authentication codes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>OTP Requests (24h)</span>
                  <span className="font-bold">1,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Validation Success Rate</span>
                  <span className="font-bold text-green-600">99.8%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PCI-DSS Compliance */}
          <Card>
            <CardHeader>
              <CardTitle>PCI-DSS Compliance</CardTitle>
              <CardDescription>Security standards adherence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="font-bold text-green-600">Fully Compliant</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Last audit: 30 days ago</p>
            </CardContent>
          </Card>

          {/* Real-time Payment Tracking */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Real-time Payment Tracking</CardTitle>
              <CardDescription>Live transaction monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="transactions">
                <TabsList>
                  <TabsTrigger value="transactions">Transactions</TabsTrigger>
                  <TabsTrigger value="wallet">Wallet Balance</TabsTrigger>
                </TabsList>
                <TabsContent value="transactions">
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
                        <TableCell>TX123456</TableCell>
                        <TableCell>$100.00</TableCell>
                        <TableCell><Badge variant="success">Completed</Badge></TableCell>
                        <TableCell>2 min ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>TX123457</TableCell>
                        <TableCell>$75.50</TableCell>
                        <TableCell><Badge variant="warning">Pending</Badge></TableCell>
                        <TableCell>5 min ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>TX123458</TableCell>
                        <TableCell>$200.00</TableCell>
                        <TableCell><Badge variant="destructive">Failed</Badge></TableCell>
                        <TableCell>10 min ago</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="wallet">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Current Balance</span>
                      <span className="text-2xl font-bold">$5,234.56</span>
                    </div>
                    <Button>Top Up Wallet</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}